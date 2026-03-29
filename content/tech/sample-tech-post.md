---
title: "Next.js App Routerでのブログ構築"
slug: "sample-tech-post"
date: "2026-03-28"
tags: ["Next.js", "React", "App Router"]
summary: "Next.js App Routerを使ったブログの構築方法について紹介します。"
published: true
---

## はじめに

この記事では、Next.js App Routerを使ったブログの構築方法について解説します。

## App Routerの特徴

App Routerは、Next.js 13から導入された新しいルーティングシステムです。

- **Server Components**: デフォルトでサーバーコンポーネントとして動作
- **Layouts**: ネストされたレイアウトをサポート
- **Loading UI**: ストリーミングとSuspenseによるローディング表示

## Markdownの活用

ブログ記事をMarkdownファイルで管理することで、以下のメリットがあります。

1. バージョン管理がしやすい
2. エディタを選ばない
3. プレビューが簡単

### コード例

```typescript
import fs from "node:fs";
import matter from "gray-matter";

const raw = fs.readFileSync("article.md", "utf8");
const { data, content } = matter(raw);
```

## まとめ

Next.js App Routerとmarkdownを組み合わせることで、シンプルかつ高機能なブログを構築できます。
