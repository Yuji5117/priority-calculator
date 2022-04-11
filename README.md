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
