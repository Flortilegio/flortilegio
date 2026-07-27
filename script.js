window.addEventListener("scroll",function(){

const header=document.getElementById("header");


if(window.scrollY>50){

header.style.background="rgba(0,0,0,.85)";

}

else{

header.style.background="transparent";

}


});
