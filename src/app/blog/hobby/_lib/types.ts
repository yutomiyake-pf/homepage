export type HobbyArticleMeta = {
  title: string;
  slug: string;
  date: string;
  tags?: string[];
  summary?: string;
  thumbnail?: string;
  published?: boolean;
};

export type HobbyArticle = HobbyArticleMeta & {
  contentHtml: string;
};


