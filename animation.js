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

window.onload = function what(){
    var PRINTINGDATA='';
    var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        if(vars.balcony==='yes#marginz'){
            vars.balcony='Yes';
        } else if(vars.balcony==='no#marginz'){
            vars.balcony='No';
        }
        var TITLEDATA= '<table style="width:100%"> <tr><th>username</th> <th>email</th> <th>hottel G.</th><th>date</th> <th>No of Guests</th><th>Balcony</th>  </tr>'   
        var URLDATA =`<tr> <td>${vars.username}</td> <td>${vars.email}</td> <td>${vars.hottel}</td> <td>${vars.date}</td> <td>${vars.numberOfGuests}</td> <td>${vars.balcony}</td> </tr></table>`
        var PRINTDATA=TITLEDATA+URLDATA;
        document.getElementById("user-data").innerHTML = PRINTDATA  
        return PRINTINGDATA;
    };

