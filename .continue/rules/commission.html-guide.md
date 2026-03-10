# commission.html 構造ガイド

このファイルは、リミックスや作編曲、DJ出演などの依頼（Commission）に関する詳細情報や料金表を掲載したHTMLページです。

## 行ごとの概要
- **L1-L2**: DOCTYPE宣言とHTMLタグ（言語は日本語 `ja`）。
- **L4-L29**: `<head>` セクション
  - メタデータ、SEOタグ、OGPタグ（Open Graph / Twitter Card）、ファビコン、Google Fonts、メインCSS（`css/style.css`）の読み込み。
- **L31-L221**: `<body>` セクション
  - **L33-L34**: アクセシビリティのためのスキップリンク。
  - **L36-L42**: JavaScriptが無効な環境向けのフォールバックメッセージ（`<noscript>`）。
  - **L44-L67**: `<header>` / ナビゲーションメニュー
    - モバイル用のハンバーガーボタン、ページ内リンクと `commission.html` へのリンク（多言語対応のための `data-en`, `data-ja` 属性付き）。
    - 英語・日本語切り替えボタン（`.lang-toggle`）。
  - **L69-L210**: `<main>` (メインコンテンツ)
    - **L72-L208**: `#commission` セクション
      - ページタイトルと導入文。
      - **L84-L138**: 料金表（`<table>` クラス `.commission-table`）。各種依頼（リミックス、作編曲、DJ、執筆、動画編集など）の目安料金を記載。
      - **L140-L200**: 各依頼種別の詳細説明（`<dl>` クラス `.commission-details`）。
      - **L202-L205**: お問い合わせセクション（`index.html#contact`）へのコールトゥアクションボタン。
  - **L212-L218**: `<footer>` セクション (コピーライト表記)。
  - **L220**: JavaScriptファイル（`js/main.js`）の読み込み。
- **L222-L223**: HTMLタグの終了。
