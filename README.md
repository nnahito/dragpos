# DragPos
簡単に要素を、ドラッグで動かせるようになります。  
参考サイト様のコードを参考に、prototypeを使って、クラス化してみました。

# 使い方
0. JavaScriptファイルをインクルードします。例：`<script src="dragpos.js"></script>`
1. ドラッグできるようにしたい要素を定義します。IDは必ず定義してください。例： `<div id="foo">`
2. インスタンスを生成します。例：`var dp = new Dragpos('foo');`
3. 上記までで、ID`foo`を持つ要素をドラッグで動かせるようになります。


# 参考（special thanks）
- http://www.findxfine.com/programming/javascript/995556137.html


# DragPos
You can create drag elements easy.

# usage
0. Include JavaScript file. `<script src="dragpos.js"></script>`
1. Define HTML `<div id="foo">`
1. Create instance. `var dp = new Dragpos('foo');`
2. You can drag `foo` elements.
