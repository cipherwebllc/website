# CipherWeb 公式サイト

公開URL: [https://cipher-web.com](https://cipher-web.com)

静的サイト構成です（ビルド不要）。

## 構成

- `index.html` — ページ本体
- `css/style.css` — スタイル
- `js/script.js` — ナビ・スムーススクロール
- `images/` — ロゴ・プロジェクト画像・OG画像・名刺PDF

## 更新手順

1. HTML / CSS / JS / 画像を編集する
2. ローカルで `index.html` をブラウザ確認する
3. 変更をコミットし、デプロイ先へ反映する

## 画像最適化の方針

- カード表示用は幅おおむね 600–720px、WebP 優先（`<picture>` でフォールバック）
- ヒーロー背景・OG も WebP / JPEG を用意（`cipherweb-bg.webp` / `og-image.jpg`）
- 目標: 主要カード画像は 1 枚あたり 100KB 未満を目安にする
