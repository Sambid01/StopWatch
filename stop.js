let second = 0;
let tens = 0;


let btnstart = document.getElementById("btn-start")
let btnstop = document.getElementById("btn-stop")
let btnreset = document.getElementById("btn-reset")
let Outputsecond = document.getElementById("second")
let Outputtens = document.getElementById("tens")
let interval;


btnstart.addEventListener('click',()=>{
    clearInterval(interval);
    interval = setInterval(startTime,10);
    

})


btnstop.addEventListener('click',()=>{
    clearInterval(interval);
})


btnreset.addEventListener('click',()=>{
    clearInterval(interval);
    tens= "00";
    second = "00";
    Outputsecond.innerHTML = second;
    Outputtens.innerHTML = tens;
})

function startTime(){
    tens++;
    Outputtens.innerHTML=tens
    
    if(tens<=9){
        Outputtens.innerHTML = "0"+tens;
    }
    
    if(tens>9){
        Outputtens.innerHTML = tens;
    }
    if(tens>99){
        second++;
        Outputsecond.innerHTML = "0"+ second;
        tens = 0;
        Outputtens.innerHTML = + "0"+tens;
    }
   
    console.log(Outputtens.innerHTML)
     if(second>9){
         Outputsecond.innerHTML = second;
     }
     if(second>=59){
        tens= 0;
        second =0
        Outputsecond.innerHTML = "0"+ second;
        Outputtens.innerHTML = "0"+tens;
  
        clearInterval(interval)
    }
}
