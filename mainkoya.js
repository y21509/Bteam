const ROOT =0;
const WALL =1;

let Meiro=[
    [1,1,1,1,1,1,1,1,1,1]
    [1,0,1,1,1,1,1,1,1,1]
    [1,0,1,1,1,1,1,1,1,1]
    [1,0,1,1,1,1,1,1,1,1]
    [1,0,0,0,1,1,1,1,1,1]
    [1,1,1,0,0,1,1,1,1,1]
    [1,1,1,1,0,1,1,1,1,1]
    [1,1,1,1,0,0,0,0,1,1]
    [1,1,1,1,1,1,1,0,1,1]
    [1,1,1,1,1,1,1,0,1,1]
    [1,1,1,1,1,1,1,0,1,1]
    [1,1,1,1,1,1,1,1,1,1]
];
 function print_Meiro(){
     for(let cara of Meiro){
         let arr = ' ';
         for(let cell of cara){
             if(cell == WALL){
                 arr += '■';
             } else if(cell == ROOT){
                 arr +=' ';
             }
         }
         console.log(arr);
     }
 }
print_Meiro();