# 新規ページ `portfolio.html` 追加の実装計画

既存のサイトデザインやHTML構造、多言語切替（`data-ja` / `data-en` 等）の作法に準拠しながら、スキルと実績を整理して表示する新規ページ `portfolio.html` を追加し、既存ページのナビゲーションを更新します。

---

## ユーザーレビューが必要な点

特にありませんが、以下の点について実装方針を記載しています。
- ナビゲーションの追加位置：`About` -> `Works` -> `Portfolio`（新規） -> `Achievements` -> `Commission` -> `Contact` の順序とします。
- ポートフォリオページ内の「What I Do」で「Songs / Vocal Works」を主軸として目立たせるため、PC表示時にグリッドで2列分の幅を取るスタイルを追加します。
- 実績カードの画像は生成せず、既存の `.work-card-image` に指定されている背景色（`#1c1c1c`）をプレースホルダーとして利用します。

---

## 提案される変更点

### 1. アセットとスタイル

#### [MODIFY] [style.css](file:///c:/Users/affog/e11laa.github.io/css/style.css)
- 実績カードのメタデータ（カテゴリー、担当ロール）表示用スタイルを追加します。
- スキル概要「What I Do」セクションで、主軸である「Songs / Vocal Works」を際立たせるためのスタイル（`.featured-skill`）を追加します。

### 2. 新規ページ作成

#### [NEW] [portfolio.html](file:///c:/Users/affog/e11laa.github.io/portfolio.html)
- 既存の `commission.html` や `index.html` の構造（Skip Link、noscript、ヘッダー、ナビゲーション、フッター、多言語切替用の `data-ja` / `data-en` / `data-aria-ja` / `data-aria-en`）をそのまま踏襲します。
- **画像プレースホルダー**:
  - カード画像の `<img>` タグは配置せず、`.work-card-image` クラスのみを指定して真っ黒（`#1c1c1c`）なエリアをプレースホルダーとします。
- **ページ構成**:
  1. **Hero**: タイトルは `Portfolio / Works`（日本語：`ポートフォリオ`）とし、方向性を示す説明文を配置します。
  2. **What I Do**: 5項目のスキル概要をグリッド表示します。「Songs / Vocal Works」を強調表示します。
  3. **Portfolio Sections**: 5項目それぞれに対応した実績カードセクションを作ります。カード内には `title`、`year`、`category`、`role`、`description`、`links` の構造を含め、内容はすべてプレースホルダーとします。
  4. **CTA**: `commission.html`（料金・ご依頼）への導線、および `index.html#contact`（お問い合わせ）へのリンクを配置します。

### 3. 既存ページの更新

#### [MODIFY] [index.html](file:///c:/Users/affog/e11laa.github.io/index.html)
- ヘッダー内のナビゲーションリンクに `portfolio.html` へのリンクを追加します。

#### [MODIFY] [commission.html](file:///c:/Users/affog/e11laa.github.io/commission.html)
- ヘッダー内のナビゲーションリンクに `portfolio.html` へのリンクを追加します。

---

## 検証プラン

### 手動検証
- 各ページ（`index.html`、`commission.html`、`portfolio.html`）間で正しくナビゲーション遷移ができること。
- 言語切替ボタンをクリックした際、`portfolio.html` 内の全テキスト（および ARIA ラベル、`.sr-only` 警告）が日本語と英語で正しく切り替わること。
- モバイル表示（767px以下）において、ハンバーガーメニューおよびトグル動作が正常に機能すること。
- HTMLマークアップ of `portfolio.html` の構文が崩れておらず、アクセシビリティ（適切な Heading レベル、`aria-labelledby` の整合、画像 `alt` 属性、外部リンクの `rel="noopener noreferrer"`）が確保されていること。
