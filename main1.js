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
}

// function hanteiBun(){
//     var width= 55;
//     var height= 35;
//     var h;
//     var w;
//     var map[35][55] = {};


//     for(var i =0;i<height;i++){
//         for(var j = 0;j<width;j++){
//             if(map[i][j]==0){

//             }else{

//             }
//         }
//     }

   

//     //参照するマップと参照するマスのデータが必要
//     //下の文は「そのマスが壁だったらbreak、そうでなかったら指定された操作をする（参照する場所を上下左右に動かす）」ものです。
//     //読んだマスの値[0や1など]の判定式はまた別途必要なのでよろしくお願いします。
//     switch(length>h||width>w){
//         //上下左右の順番で書く
//         case 1 :            //上を入力した時
//             if(height==0){
//                 break;
//             }else{
//                 height=height-1;
//             }    
//         case 2 :            //下を入力した時
//             if(height==35){
//                 break;
//             }else{
//                 height=height+1;
//             }
//         case 3 :            //左を入力した時
//             if(width==0){
//                 break;
//             }else{
//                 width=width-1;
//             }            
//         case 4 :            //右を入力した時
//             if(width==55){
//                 break;
//             }else{
//                 width=width+1;
//             }        
//     }
// }
        

    
    
    
    
    
    
    
    
    
    
    
