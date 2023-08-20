var x=0
stop=setInterval(tour,20)
function tour(){
    if(x==300){
        clearInterval(stop)
    }
    else{
        x++
        document.getElementById("Tour_conut").innerHTML=x;
    }
}
var a=0
s=setInterval(happy,1)
function happy(){
    if(a==2400){
        clearInterval(s)
    }
    else{
        a++
        document.getElementById("happy_tour").innerHTML=a
    }
    
}  
var b=0
ss=setInterval(place,20)
function place(){
    if(b==200){
        clearInterval(ss)
    }
    else{
        b++
        document.getElementById("place_visit").innerHTML=b;
    }
    
}