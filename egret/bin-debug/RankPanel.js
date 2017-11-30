var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RankPanel = (function (_super) {
    __extends(RankPanel, _super);
    function RankPanel() {
        var _this = _super.call(this) || this;
        _this.list = [];
        fairygui.UIPackage.addPackage("kingkong");
        var comp = fairygui.UIPackage.createObject("kingkong", "rankPanel");
        fairygui.GRoot.inst.addChild(comp);
        _this.addChild(fairygui.GRoot.inst.displayObject);
        var list = comp.getChild("rankList").asList;
        for (var index = 0; index < list.numChildren; index++) {
            var rank = list.getChildAt(index).asButton.getChild("rank");
            var head = list.getChildAt(index).asButton.getChild("head");
            var name_1 = list.getChildAt(index).asButton.getChild("name");
            var score = list.getChildAt(index).asButton.getChild("score");
            var ranktitle = void 0;
            switch (index) {
                case 0:
                    ranktitle = new egret.Bitmap();
                    ranktitle.texture = RES.getRes("first_png");
                    break;
                case 1:
                    ranktitle = new egret.Bitmap();
                    ranktitle.texture = RES.getRes("second_png");
                    break;
                case 2:
                    ranktitle = new egret.Bitmap();
                    ranktitle.texture = RES.getRes("third_png");
                    break;
                default:
                    ranktitle = new egret.TextField();
                    ranktitle.text = (index + 1).toString();
                    ranktitle.size = 70;
                    ranktitle.y = 40;
                    ranktitle.textColor = 0x000000;
                    break;
            }
            rank.asGraph.setNativeObject(ranktitle);
            var headdis = new egret.Bitmap();
            headdis.texture = RES.getRes("bg_jpg");
            headdis.width = head.width;
            headdis.height = head.height;
            head.asGraph.setNativeObject(headdis);
            name_1.asTextField.text = (index + 1).toString();
            score.asTextField.text = (100 - index).toString();
            _this.list.push({ head: head, name: name_1, score: score });
        }
        setTimeout(function () {
            var data = [
                { head: "egret_icon_png", name: "wwww", score: "12345" },
                { head: "egret_icon_png", name: "hhhh", score: "9977" },
                { head: "egret_icon_png", name: "cccc", score: "7856" },
                { head: "egret_icon_png", name: "ccc", score: "4533" },
                { head: "egret_icon_png", name: "eee", score: "2334" },
                { head: "egret_icon_png", name: "wrrrwww", score: "1222" },
                { head: "egret_icon_png", name: "tttt", score: "888" },
                { head: "egret_icon_png", name: "yyyy", score: "777" },
                { head: "egret_icon_png", name: "uuuu", score: "666" },
                { head: "egret_icon_png", name: "iiii", score: "555" },
                { head: "egret_icon_png", name: "ooo", score: "444" },
                { head: "egret_icon_png", name: "pppp", score: "333" }
            ];
            _this.updataView(data);
        }, 5000);
        return _this;
    }
    RankPanel.prototype.updataView = function (itemdata) {
        for (var index = 0; index < this.list.length; index++) {
            if (itemdata[index] && this.list[index]) {
                var head = this.list[index].head;
                var headdis = new egret.Bitmap();
                headdis.texture = RES.getRes(itemdata[index].head);
                headdis.width = head.width;
                headdis.height = head.height;
                head.asGraph.setNativeObject(headdis);
                this.list[index].name.asTextField.text = itemdata[index].name;
                this.list[index].score.asTextField.text = itemdata[index].score;
            }
        }
    };
    return RankPanel;
}(egret.DisplayObjectContainer));
__reflect(RankPanel.prototype, "RankPanel");
//# sourceMappingURL=RankPanel.js.map