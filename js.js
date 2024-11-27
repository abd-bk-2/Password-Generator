let password = document.querySelector("#password");
var Generate = document.querySelector("#generate");
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=/.,;'][`+_)(*&^%$#@!><?|}~{:";
const length = chars.length;


Generate.addEventListener('click', function() {
    let str ="";
    while(str.length < 14){
        str += chars[Math.floor(Math.random()*length)];
        console.log(str);
    }
    password.value = str;
    let alertt = document.querySelector(".box");
    let copy = document.querySelector("#copy");
    alertt.textContent = str + " Copyed!"; 
    copy.addEventListener('click',function(){
        password.select();
        document.execCommand("copy");
        alertt.style.right = "20px";
        setTimeout(() => {
            alertt.style.right = "-300px";
        },2000)
    })
})




