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


/*-----Booking detail---------

file:///H:/A_Padma_Codes/Web_Design/Tourism-site-pure/booking.html
?username=Padme&email=padmaisuru%40gmail.com&hottel=1&
date=2200-02-22&numberOfGuests=2&meals=yesMeals&balcony=yes

----*/

// function getUrlVars() {
//     var vars = {};
//     var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
//         vars[key] = value;
//     });
//     return vars;
//     console.log(vars);
//     console.log(value);
// }

// getUrlVars()

