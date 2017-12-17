# Sample_WPF_Milkyholmes
* Webブラウザでの確認は↓から

  HTML5 Sample
  https://kawa0x0a.github.io/Sample_WPF_Milkyholmes/

-----

# このページについて
* このページは[ミルキィホームズAdvent Calendar](https://adventar.org/calendars/2411)の12月18日分のページです。

# 自己紹介
* TwitterID [kawa0x0A](https://twitter.com/kawa0x0A)
* 仕事ではプログラマーとしてゲームプログラムやツール制作を行って生活しています。
* ミルキィホームズを初めて見たのはアニメ2期1話で、そのインパクトに引き込まれて、そのままゲームを遊んだりライブへ足を運ぶようになりました。
* ゲーム3が出ることを希望してます。

# ミルキィホームズに登場するキャラクター達
* アニメやゲームでもシリーズごとに個性豊かなキャラクターが登場しますが、皆さんはどの子が好きでしょうか。
* ちなみに自分はエラリー・姫百合ちゃんが好きです。
またミルキィホームズのみんなとワイワイしているところやオペラ先生とのタッグとか見てみたいです。

# 何故プログラム作成
* Advent Calendar といえばプログラムの記事という思い込みが強すぎて、簡単なプログラムの作成と解説ということになりました。
(ミルキィホームズあんまり関係無くなってすみません)
* せっかくなのでキャラクター達に関する何かを絡めてプログラムを作れないか考えていたところ、ふとあることに気が付きました。
* ミルキィホームズってカラフルだなぁと (アルバムのタイトルにもなっているのに何を今更)
* そんなカラフルさを活かしたくて、キャラクターごとのテーマカラーを表示するプログラムを作ってみました。

# 機能解説
* コンボボックスからキャラクターを選ぶと、キャラクターに応じたテーマカラーが表示されます。
* アニメ, ゲーム, アプリからキャラクターを選んでいますが、サブキャラクターなどは選びきれないので一部だけにしています。
* また、一部キャラクター(スリーカード)のテーマカラーを把握出来ていないため、イメージとは異なる色が表示される場合があります。

# 終わりに
* 初めての Advent Calender でしたが、良い経験と勉強になりました。
* 明日12月19日の記事は coo_tassan さんの 「シャーロック・シェリンフォードちゃん」です。
-----

# 技術情報 (おまけ)
* WPF アプリケーション
    * WPF (Windows Presentation Foundation) のフレームワークを使ったデスクトップアプリケーションです。
    * XAML でUIをガシガシ書けるのが好みで、趣味のツールを作るときによく使っています。
    * WPFの特徴の一つであるデータバインディングの使用することで、ソースコードに処理を書かずにデータの更新を各UIコントロールに反映することができます。
    * ちなみに、今回作成したプログラムの中で自分が書いたUIの処理はコンボボックスの選択項目の登録と初期値の設定だけです。(ビューとモデルの分離の勉強になりました)
* WPF for HTML5
    * デスクトップアプリケーションだけでは見る人も確認しづらいと思い、マルチプラットフォームで確認できるようにしたのがHTML5版です。
    * C#/FAML for HTML5 というライブラリを使用することで、WPFアプリケーションとほぼ同等の機能がWebブラウザで確認できるようになりました。
    * ただし、まだベータ版とのことでこのプログラムを作成している間もいくつかトラブルがありました。

# 環境構築 (おまけ)
1. VisualStudio のインストール
1. C#/XAML for HTML5 をインストール
    1. ~~[トップページ](http://www.cshtml5.com/) からメールアドレスを登録し、ダウンロードリンクをメールで受け取る (が自分の環境ではビルドに失敗したため非推奨)~~
    1. [フォーラムページ](http://forums.cshtml5.com/viewforum.php?f=6&sid=d53d703265149ad87ed2bcdd7d4d58a5) にアップロードされているベータ版をインストールして解決
1. [リポジトリページ](https://github.com/kawa0x0A/Sample_WPF_Milkyholmes)の右上にある緑色のボタン Clone or download から Download ZIP を選択し、ZIPファイルをダウンロードし解凍
1. Sample_WPF_Milkyholmes.sln をダブルクリックで開く
1. VisualStudio のメニューバーの「デバッグ」->「デバッグの開始」でプログラムを実行

# HTML5版の開発中に起こったトラブル (おまけ)
* コンボボックスの選択項目が日本語だと正常に表示されない
    * シミュレータ上では日本語でも正常に表示されるが、ブラウザ上ではパーセントエンコーディングされて表示される
    * 表示する項目名を英語, ローマ字表記にすることで回避
* 他のプロジェクトを参照しているとビルドエラーになる
    * キャラクター名の定義などの共通部分を各プロジェクトごとに配置
    * メンテナンス性が下がるがビルドを行うには仕方ないので妥協
