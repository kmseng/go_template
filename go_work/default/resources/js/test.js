株式会社 AndFactory 打ち合わせ
※下記項目は全て個人の動向を対象とし、流入広告媒体毎の管理とする。

◆◆◆ 最重要計測要件 ( Rensa DB )
　プライマリキー
　　・初流入時にゲストユーザーパラメータをセッションに保持

◆◆◆ 他計測要件 ( Rensa DB )
　・新規の売り上げなのか既存ユーザーの売り上げなのかを判定
　・流入から課金までの経路を広告媒体ごとに判別できる形で保存
　・入会時点の経路（ Google Yahoo それ以外のどこからなのか ）
　・流入から課金せず離脱までの経路を保存
　・入会月ベースで離脱時期、継続時期を追跡

◆◆◆ データ表示概要
　過去データから指定月数で計測できるツールを構築する。

◆◆◆ analytics eコマーストラッキング ( Google Analytics )
　タグを入れて動向を取得で簡易的で最初はいいんじゃないかとのこと。
　疑問点 ）一部無料鑑定されたカテゴリや有料鑑定カテゴリ、一部モジュールのリンククリックとかの取得が有用？

◆◆◆ 質問とか
　1. 同月に入退会、翌月の別経路流入の場合は？
　　別ユーザー扱いとする。

　2. 別コンテンツに同一ID からのアクセスがあった場合は？
　　別ユーザー扱いにする。
　　広告運用的観点で言うと複数サイトを使ってるのかとか
　　いろいろ取得できるから別扱いにしたほうが分析指標にしやすい。

　3. facebook から入会したユーザーが google 広告から再度ログインしてきた場合計測どうする？
　　入会時に入ってきた経路

◆◆◆ 必要な作業
　1. 流入経路検知処理の作成 ( LPページアクセス時 session へ Guest User ID と 流入経路 ID を保存 )
　2. DB 保存処理の作成
　3. analytics eコマース タグの挿入
　4. 取得データの表示画面構築
