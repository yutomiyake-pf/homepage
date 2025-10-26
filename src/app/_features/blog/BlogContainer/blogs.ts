import dayjs from "dayjs";
import { BlogArticle } from "./type";
import { v4 as uuidv4 } from "uuid";

const SUPERKER_DECK_URL = "https://speakerdeck.com/yutomiyake";

/**
 * supeker deck
 * APIがないため手動で定義
 *
 */
export const superkerDeckBlogs: BlogArticle[] = [
  {
    id: uuidv4(),
    title: "Prompt Engineering Professional",
    published_at: dayjs(new Date("2025-09-23 00:00:00")).format(
      "YYYY-MM-DD HH:mm"
    ),
    display_published_at: dayjs(new Date("2025-09-23 00:00:00")).format(
      "YYYY-MM-DD"
    ),
    url: `${SUPERKER_DECK_URL}/prompt-engineering-professional`,
  },
];
