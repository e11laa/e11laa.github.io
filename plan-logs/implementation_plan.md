# ご依頼・コラボレーションとお問い合わせの改行幅修正の実装計画

「ご依頼・コラボレーション」（`index.html` および `commission.html`）および「お問い合わせ」（`index.html`）セクションに配置されている紹介文（`.contact-intro`）について、ウィンドウ幅が広い場合でも早い段階で自動改行されてしまう問題を修正します。

## ユーザーレビューが必要な点

> [!NOTE]
> 既存の `style.css` で `.contact-intro` に設定されている `max-width: 520px;` を `max-width: none;` に変更（または削除）し、以前ポートフォリオ導入文（`.portfolio-intro`）に施した修正と同様に、ウィンドウ幅に合わせてテキスト幅が広がるようにします。

## 提案される変更点

### スタイルシートの修正

#### [MODIFY] [style.css](file:///c:/Users/affog/e11laa.github.io/css/style.css)
- `.contact-intro` クラスに設定されている `max-width: 520px;` を `max-width: none;` に変更し、テキスト幅の制限を解除します。

```diff
 .contact-intro {
   font-size: 1.05rem;
   color: var(--text-muted);
-  max-width: 520px;
+  max-width: none;
   margin-bottom: 2.5rem;
   line-height: 1.8;
 }
```

---

## 検証プラン

### 手動検証
- ブラウザで `index.html` と `commission.html` を開き、以下のテキストの折り返し（改行）幅を確認します。
  - `index.html` の「ご依頼・コラボレーション」の紹介文
  - `index.html` の「お問い合わせ」の紹介文
  - `commission.html` の「ご依頼・コラボレーション」の紹介文
- ウィンドウ幅を広げた際に、520pxで固定されて折り返されるのではなく、コンテナの最大幅（`1100px`）まで自然にテキストが広がることを確認します。
