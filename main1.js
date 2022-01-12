 function yourCode() {
    var res = "";
    
    // 迷路の初期化
    var w = 55;
    var h = 35;
    var maze = new Array(w * h);
    for (var y = 1; y < h - 1; y ++) {
        for (var x = 1; x < w - 1; x ++) {
            maze[x + w * y] = 1;
        }
    }
    
    // 開始位置と方向とパターン
    var startX = w - 5;        // 固定位置
    var startY = 4;            // 固定位置
    var dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    var pattern = 
        [[0, 1, 2, 3]
        ,[0, 1, 3, 2]
        ,[0, 2, 1, 3]
        ,[0, 2, 3, 1]
        ,[0, 3, 1, 2]
        ,[0, 3, 2, 1]
        ,[1, 0, 2, 3]
        ,[1, 0, 3, 2]
        ,[1, 2, 0, 3]
        ,[1, 2, 3, 0]
        ,[1, 3, 0, 2]
        ,[1, 3, 2, 0]
        ,[2, 0, 1, 3]
        ,[2, 0, 3, 1]
        ,[2, 1, 0, 3]
        ,[2, 1, 3, 0]
        ,[2, 3, 0, 1]
        ,[2, 3, 1, 0]
        ,[3, 0, 1, 2]
        ,[3, 0, 2, 1]
        ,[3, 1, 0, 2]
        ,[3, 1, 2, 0]
        ,[3, 2, 0, 1]
        ,[3, 2, 1, 0]];
    
    // 穴掘り法
    function dig(x, y) {
        // ランダムを使わずに生成
        var type = (x + 3) * (y + 5) * 7 % pattern.length;
        for (var i = 0; i < dir.length; i++) {
            var next = dir[pattern[type][i]];
            if (maze[(x + next[0] * 2) + w * (y + next[1] * 2)] == 1) {
                maze[(x + next[0] * 2) + w * (y + next[1] * 2)] = 0;
                maze[(x + next[0]    ) + w * (y + next[1]    )] = 0;
                dig(x + next[0] * 2, y + next[1] * 2);
            }
        }
    }
    dig(startX, startY);
    
    // 出力結果生成
    for (var y = 0; y < h; y ++) {
        for (var x = 0; x < w; x ++) {
            if (maze[x + w * y] == 1) {
                res += "■";
                console.log("壁");
            } else {
                res += "　";
                console.log("路");
            }
            
        }
        res += "<br>";
    }
    let code = document.getElementById("gamen");
    code.innerHTML = res;
    return res;
        
   /* for(var j=0; j<direction.length; j++){
        if(direction[j]==="top"){
            if(this.box[r-1][i]===1){
               this.box[r-1][i]=0;
               break;
            }
        }
        if(direction[j]==="right"){
            if(this.box[r-1][i]===1){
               this.box[r-1][i]=0;
               break;
    }
}
        if(direction[j]==="left"){
        if(this.box[r-1][i]===1){
        this.box[r-1][i]=0;
              break;
}
}
        if(direction[j]==="bottom"){
        if(this.box[r-1][i]===1){
        this.box[r-1][i]=0;
        break;
}
}
    }
}*/
 }