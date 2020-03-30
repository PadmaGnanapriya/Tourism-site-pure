/*-----Naviagation----*/
let x=1;
function  navifunction(){
    console.log("Pasffa");
    x++;
    let y=x%2;
    if(y===0){
        document.getElementById("header").style.height = "300px";
        document.getElementById("marginz").style.padding="145px";
    }
    else{
        document.getElementById("header").style.height = "110px";
        document.getElementById("marginz").style.padding="50px";
    }
    return x;
}

