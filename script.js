let clock=document.getElementById("clock_show");
setInterval(function(){
    let date=new Date();
   clock.innerHTML=date.toLocaleTimeString();
},1000)