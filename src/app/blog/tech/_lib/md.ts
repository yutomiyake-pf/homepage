import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import type { TechArticle, TechArticleMeta } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "tech");

export const getAllTechSlugs = (): string[] => {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
};

export const getTechArticlesMeta = (): TechArticleMeta[] => {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  const metas: TechArticleMeta[] = files.map((file) => {
    const fullPath = path.join(CONTENT_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(raw);
    const meta: TechArticleMeta = {
      title: data.title ?? "",
      slug: data.slug ?? file.replace(/\.md$/, ""),
      date: data.date ?? "",
      tags: data.tags ?? [],
      summary: data.summary ?? "",
      thumbnail: data.thumbnail ?? undefined,
      published: data.published ?? false,
    };
    return meta;
  });
  return metas
    .filter((m) => m.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const markdownToHtml = async (markdown: string): Promise<string> => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeStringify)
    .process(markdown);
  return String(file);
};

export const getTechArticleBySlug = async (
  slug: string
): Promise<TechArticle | null> => {
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(mdPath)) return null;
  const raw = fs.readFileSync(mdPath, "utf8");
  const { data, content } = matter(raw);
  const html = await markdownToHtml(content);
  const meta: TechArticle = {
    title: data.title ?? slug,
    slug: data.slug ?? slug,
    date: data.date ?? "",
    tags: data.tags ?? [],
    summary: data.summary ?? "",
    thumbnail: data.thumbnail ?? undefined,
    published: data.published ?? false,
    contentHtml: html,
  };
  return meta.published ? meta : null;
};
