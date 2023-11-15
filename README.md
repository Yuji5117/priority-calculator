# Priority Calculator

## Browser settings (Without develop)

1. 任意のディレクトリで以下コマンドを実行

```
git clone https://github.com/Yuji5117/priority-calculator.git

```

または、zip 形式でリポジトリをダウンロード（git 不要）

2. Chrome で chrome://extensions/ を検索窓に貼り付けて検索

3. 画面右上の「デベロッパーモード」を ON

4. 画面左上の「パッケージ化されていない拡張機能を読み込む」を押下

5. 手順 ① で取得したリポジトリの、build ディレクトリを指定する

6. 読み込んだ拡張機能を有効にする

7. 画面右上から拡張機能一覧ポップアップを表示し、本拡張機能をピン留めする

![Screen Shot 2022-04-12 at 8 19 05](https://user-images.githubusercontent.com/50049575/162848567-7f3076a5-a2d0-461c-8578-57893b7ce936.png)


## How to use


1. タブ切り替えから、issueの種類を選択（バグ改修 or 機能改善）
2. 任意のスライダーを調整する
3. 画面上部のメモアイコンを押下し、Markdown形式でクリップボードにコピペする



## Develop Setup

```
$ git clone https://github.com/Yuji5117/priority-calculator.git
$ cd lang-tweet-extention
$ yarn
$ yarn start
```
