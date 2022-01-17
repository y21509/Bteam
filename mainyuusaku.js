//canvasの設定
var canvas = document.getElementById( 'canvas' );
canvas.width = 640;	//canvasの横幅（よこはば）
canvas.height = 640;	//canvasの縦幅（たてはば）

//コンテキストの取得
var ctx = canvas.getContext('2d');

//地面のImageオブジェクト
var mazeroad = new Image();
mazeroad.src = 'img/mazeroad.jpg';

//壁のImageオブジェクト
var mazewall = new Image();
mazewall.src = 'img/mazewall.png';

//プレイヤーのオブジェクト作成
var player = new Object();
player.img = new Image();
player.img.src = 'img/player.jpg'
player.x=0;
player.y=0;
player.move=0;

//キーボードのオブジェクト作成
var key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.push = '';

//迷路の作成
var res = [
    [0, 0, 1, 0, 1, 0, 0, 0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0],
	[0, 1, 0, 0, 0, 1, 1, 1 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0],
	[0, 0, 1, 1, 0, 0, 0, 1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0],
	[1, 0, 1, 0, 1, 1, 0, 0 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,0],
	[0, 0, 0, 0, 0, 1, 1, 1 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,1 ,1 ,0],
	[0, 1, 1, 1, 0, 0, 0, 0 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0],
	[0, 1, 1, 1, 0, 1, 1, 1 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,0],
	[0, 0, 0, 1, 0, 0, 0, 0 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,1 ,0],
	[1, 1, 0, 1, 1, 1, 1, 1 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,1 ,1 ,0 ,1 ,1],
	[1, 0, 0, 0, 0, 0, 1, 1 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,0],
	[1, 0, 1, 1, 1, 0, 0, 0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0],
	[1, 0, 1, 0, 1, 1, 1, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,0 ,1],
	[0, 0, 1, 0, 0, 1, 0, 0 ,1 ,0 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,0],
	[0, 1, 1, 1, 0, 1, 0, 1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,0],
	[0, 0, 0, 1, 0, 1, 0, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0],
	[1, 1, 0, 1, 0, 1, 0, 1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,1 ,0],
	[0, 0, 0, 1, 0, 1, 1, 1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,1 ,0],
	[0, 1, 1, 1, 0, 1, 0, 0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,1 ,0 ,1 ,1],
	[0, 1, 0, 0, 0, 1, 0, 1 ,1 ,1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0],
	[0, 0, 0, 1, 0, 0, 0, 1 ,1 ,1 ,1 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ,1 ,0]
]

function main(){
    ctx.fillStyle = "rgb(0,0,0)";

    ctx.fillRect(0,0,640,640);

    for(var y=0; y<res.length; y++){
        for(var x=0; x<res[y].length; x++){
            if(res[y][x]===0)ctx.drawImage(mazeroad,0,0,32,32,32*x,32*y,32,32);
            if(res[y][x]===1)ctx.drawImage(mazewall,0,0,32,32,32*x,32*y,32,32);
        }
    }

    //画像表示
    ctx.drawImage( player.img,player.x,player.y);

    addEventListener("keydown",keydownfunc,false);
    addEventListener("keyup",keyupfunc,false);

    if(player.move === 0){            
        if ( key.left === true ) {
            var x = player.x/32;
            var y = player.y/32;
            x--;
            if( res[y][x] === 0 ){
                player.move = 32;
                key.push = 'left';
            }
		}
		if ( key.up === true ) {
			var x = player.x/32;
            var y = player.y/32;
            if( y !== 0 ){
                y--;
            if( res[y][x] === 0 ){
                player.move = 32;
                key.push = 'up';
            }
            }
		}
		if ( key.right === true ) {
			var x = player.x/32;
            var y = player.y/32;
            x++;
            if( res[y][x] === 0 ){ 
                player.move = 32;
                key.push = 'right';
            }
		}
		if ( key.down === true ) {
			var x = player.x/32;
            var y = player.y/32;
            if( y !== 19){
                y++;
            if( res[y][x] === 0 ){
                player.move = 32;
                key.push = 'down';
            }
            }
        }
	}
    //押しっぱにした時の処理
    if(player.move > 0){
        player.move -= 4;
        if(key.push === 'left')player.x -= 4;
        if(key.push === 'up')player.y -= 4;
        if(key.push === 'right')player.x += 4;
        if(key.push === 'down')player.y += 4;
    }

    requestAnimationFrame( main );
}


addEventListener('load',main(),false);

//キーボードが押されたときに呼ばれる関数
function keydownfunc( event ){
    var key_num = event.keyCode;
    if( key_num == 37 )key.left = true;
    if( key_num == 38 )key.up = true;
    if( key_num == 39 )key.right = true;
    if( key_num == 40 )key.down = true;
    event.preventDefault();
}

//押されたキーボードが戻るときに呼ばれる関数
function keyupfunc( event ){
    var key_num = event.keyCode;
    if( key_num == 37 )key.left = false;
    if( key_num == 38 )key.up = false;
    if( key_num == 39 )key.right = false;
    if( key_num == 40 )key.down = false;
}
