# index.html 構造ガイド

このファイルは、ポートフォリオサイトのトップページ（シングルページ構成＋別ページへのリンク）のHTMLです。

## 行ごとの概要
- **L1-L2**: DOCTYPE宣言とHTMLタグ（言語は日本語 `ja`）。
- **L4-L51**: `<head>` セクション
  - メタデータ、OGPタグ、Twitter Card、ファビコン、Google Fonts、メインCSS（`css/style.css`）の読み込み。
  - **L32-L50**: 構造化データ（JSON-LD）による著者のプロフィール定義。
- **L53-L460**: `<body>` セクション
  - **L55-L64**: スキップリンクとJavaScript無効時の `<noscript>` 警告。
  - **L66-L89**: `<header>` / ナビゲーションメニュー
    - ハンバーガーメニュー、各セクション（#about, #works, #achievements, commission.html, #contact）へのリンク（`data-en`, `data-ja` 属性持ち）、言語切り替えボタン。
  - **L91-L449**: `<main>` (メインコンテンツ)
    - **L94-L109**: `#hero` セクション（ヒーローエリア）。肩書き、名前、キャッチコピーと「音楽を聴く」ボタン。
    - **L111-L144**: `#about` セクション（プロフィール）。プロフィール画像と多言語化対応の経歴紹介文。
    - **L146-L252**: `#works` セクション（ディスコグラフィー）。
      - **L154-L249**: 各作品（exonorm, animacy ep, another, Florallax - abzu）のカード型要素（`.work-card`）。アートワーク画像、リリース年、タイトル、概要文、各種ストリーミング・動画サイトへのリンク群。
    - **L254-L308**: `#achievements` セクション（経歴）。
      - タイムライン形式（`.timeline`）で2022年から2026年までの主要な活動実績（DJ開始、EPリリース、コラボレーション、アルバムリリース）を記述。
    - **L310-L324**: `#commission-cta` セクション（ご依頼・コラボレーションへの誘導）。`commission.html` へのリンクボタン。
    - **L326-L447**: `#contact` セクション（お問い合わせ）。
      - JavaScriptによる「メールアドレスを表示する」ボタン（スパム対策）、および各種SNS（X, Instagram, YouTube, Spotify, SoundCloud, マシュマロ）へのリンク（アイコンSVG付き）。
  - **L451-L457**: `<footer>` セクション（コピーライト表記）。
  - **L459**: JavaScriptファイル（`js/main.js`）の読み込み。
- **L461-L462**: HTMLタグの終了。
