var Dragpos = (function() {
    /**
     * コンストラクタ
     * @param       {Object}    element     ドラッグさせたいオブジェクト
     * @constructor
     */
    function Dragpos(element) {
        // 初期値で与えられた要素をプロパティとして持たせる
        this.panel = document.getElementById(element);


        // フラグを（一応）初期化しておく
        this.drag = false;

        // アクションをすべてバインド
        document.addEventListener('mousedown', this.mouseDown.bind(this), false);
        document.addEventListener('mouseup', this.mouseUp.bind(this), false);
        document.addEventListener('mousemove', this.mouseMove.bind(this), false);

    }


    // クリックされたとき
    Dragpos.prototype.mouseDown = function(e){
        // クリックのターゲットが自分かどうかを確認
        if ( e.target == this.panel ){
            // 自分自身なら、ドラッグを許可
            this.drag = true;

        } else {
            // 自分でなければ、ドラッグを不許可
            this.drag = false;
        }


    }



    // クリックが離されたとき
    Dragpos.prototype.mouseUp = function(e){
        this.drag = false;
    }



    // マウスが移動したとき
    Dragpos.prototype.mouseMove = function(e){
        if (this.drag == true){
            this.move(e);
        }
    }



    // 要素の座標を移動させる処理
    Dragpos.prototype.move = function (e) {
        var offsetX; // スクロール位置（横）
        var offsetY; // スクロール位置（縦）
        var x; // x座標
        var y; // y座標
        var rect = {}; // 四角形の(x, y, w, h)が入る

        // 四角形の(x, y, w, h) = (X座標, Y座標, 幅, 高さ)を取得
        rect.x = this.panel.offsetLeft;
        rect.y = this.panel.offsetTop;
        rect.w = this.panel.clientWidth;
        rect.h = this.panel.clientHeight;

        // 四角形の中央を求める
        offsetX = rect.w / 2;
        offsetY = rect.h / 2;

        // マウスの位置がドラッグを行いたい要素の中なら
        if (e.pageX > rect.x && e.pageX < rect.x + rect.w) {
            if (e.pageY > rect.y && e.pageY < rect.y + rect.h) {
                // 要素をマウスに付い順させて動かす
                x = e.pageX - offsetX;
                y = e.pageY - offsetY;

                // 要素のスタイルと場所を変更
                this.panel.style.position = 'absolute';
                this.panel.style.top = y + 'px';
                this.panel.style.left = x + 'px';
            }
        }

    }

    return Dragpos;
})();
