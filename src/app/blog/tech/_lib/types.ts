export type TechArticleMeta = {
  title: string;
  slug: string;
  date: string;
  tags?: string[];
  summary?: string;
  thumbnail?: string;
  published?: boolean;
};

export type TechArticle = TechArticleMeta & {
  contentHtml: string;
};
