# Codemap
* 技術書・学習サイトのレビューサービス
* 学習ロードマップ共有サービス


# 解決する課題
* 技術書を買ったときの「思っていたものと違った」というギャップを減らす
* Amazon等のレビューサービスではどんな技術書か分かりにくい
* 対象読者・入門者向けか上級者向けか・ビジネス寄りかアカデミック寄りかなどを分かりやすくする　


# 機能
### 未認証ユーザ機能
* サインアップ
    * ユーザ名
    * ID
    * パスワード
    * ユーザタグ
    * ジャンルごとのレベル
* サインイン
* レビューの閲覧
    * 投稿日時順
    * 評価順
    * 注目度順
* レビューの検索・絞り込み
    * 書籍名
    * ユーザ名
    * タグ
    * ユーザタグ
    * 評価
    * 投稿日時
    * ジャンル・言語
* ロードマップの閲覧
    * 評価順
* ロードマップの検索・絞り込み
    * 書籍名
    * ユーザ名
    * ユーザタグ
    * 評価
    * ジャンル・言語

### 認証済ユーザのみの機能
* サインアウト
* レビューの投稿
    * 書籍名
    * ユーザ名
    * タグ
    * 評価
    * 投稿日時
    * ジャンル・言語
* レビューの閲覧
    * 【発展】閲覧履歴や購買履歴に基づくおすすめ順
* ロードマップの閲覧
    * 【発展】閲覧履歴・購買履歴・他ジャンルのロードマップに基づくおすすめ順
* ロードマップの投稿
    * 自分の投稿を選択して並べる
    * 備考


# 使用技術
* React.js
* Next.js
* Redux
* Firebase
* Tailwind CSS
* Atomic Design

# 工夫
レビュー関連の機能とロードマップ関連の機能は共通する部分が多かったので，コンポーネントの再利用により得られる恩恵が大きいと考え，Atomic Designを採用．

# 実行手順
### セットアップ
1. `git clone https://github.com/Jun-T-git/codemap.git`
1. `yarn`
### ローカルで実行   
1. `yarn dev`
