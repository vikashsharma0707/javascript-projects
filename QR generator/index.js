


let input= document.getElementById("inp");
let img =document.getElementById("img");


function myfun(){
    let value= input.value;

    if(value){
        img.style.border="2px solid black";
        img.style.padding="10px"
        img.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value} `
    }

    else{
        alert(" type something")
    }
}