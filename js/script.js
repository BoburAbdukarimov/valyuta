'use strict';
const uzb = document.querySelector("#uzb"),
        usd = document.querySelector("#usd");

    uzb.addEventListener("input", () => {
    const sorov = new XMLHttpRequest();

    sorov.open("GET", "/js/current.json");
    sorov.setRequestHeader("Content-type", "aplication/json; charset=utf-8");
    sorov.send();
    
    sorov.addEventListener("load", ()=>{
    if(sorov.readyState === 4 && sorov.status === 200){
        console.log(sorov.response);
        const date = JSON.parse(sorov.response);
        usd.value = (+uzb.value / date.current.usd).toFixed("2");
    }else{
        usd.value = "Error";
    }
    });

    //http satatus code
    //status text
    //response
    //readystate


    });