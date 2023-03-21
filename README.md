## Express server と EJS を用いた　ローカルアプリの例

Expressは、node.jsで利用できるwebサーバ。
一方、EJSは、同じくnode.jsで利用できるテンプレートエンジン。
このレポジトリでは、ExpressとEJSを用いて、ローカルマシン内の任意の（画像を含む）データを
ブラウザから参照する例を示す。

### 実現したいこと
* ローカルの任意の場所のファイルの中身を表示させる。
* Expressサーバ内で表示する内容を、EJSを用いて動的に変化させる。

### Getting Started
1. initialize 
2. start express server
3. access from browser
