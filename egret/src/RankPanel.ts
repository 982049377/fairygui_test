type rankItemMessageType = { head: string, name: string, score: string }
class RankPanel extends egret.DisplayObjectContainer {
    private list: { head: fairygui.GObject, name: fairygui.GObject, score: fairygui.GObject }[] = [];
    constructor() {
        super();
        fairygui.UIPackage.addPackage("kingkong");
        let comp = fairygui.UIPackage.createObject("kingkong", "rankPanel") as fairygui.GComponent;
        fairygui.GRoot.inst.addChild(comp);
        this.addChild(fairygui.GRoot.inst.displayObject);

        let list = comp.getChild("rankList").asList;
        for (let index = 0; index < list.numChildren; index++) {
            let rank = list.getChildAt(index).asButton.getChild("rank");
            let head = list.getChildAt(index).asButton.getChild("head");
            let name = list.getChildAt(index).asButton.getChild("name");
            let score = list.getChildAt(index).asButton.getChild("score");
            let ranktitle: egret.Bitmap | egret.TextField;
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

            let headdis = new egret.Bitmap();
            headdis.texture = RES.getRes("bg_jpg");
            headdis.width = head.width;
            headdis.height = head.height;
            head.asGraph.setNativeObject(headdis);

            name.asTextField.text = (index + 1).toString();
            score.asTextField.text = (100 - index).toString();
            this.list.push({ head: head, name: name, score: score })
        }
        setTimeout(() => {
            let data = [
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
            ]
            this.updataView(data);
        }, 5000);
    }
    updataView(itemdata: rankItemMessageType[]) {
        for (let index = 0; index < this.list.length; index++) {
            if (itemdata[index] && this.list[index]) {
                let head = this.list[index].head;
                let headdis = new egret.Bitmap();
                headdis.texture = RES.getRes(itemdata[index].head);
                headdis.width = head.width;
                headdis.height = head.height;
                head.asGraph.setNativeObject(headdis);

                this.list[index].name.asTextField.text = itemdata[index].name;
                this.list[index].score.asTextField.text = itemdata[index].score;
            }
        }
    }
}