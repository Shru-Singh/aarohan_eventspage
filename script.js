const man = document.querySelectorAll(".day");

for (var i = 0; i <4; i++) {
    console.log(man[i]);
    const str= man[i];

    str.addEventListener("click",() => {
        for(var i = 0; i <4; i++){
            const check=man[i];
        if(check.classList.contains("active")){
            check.classList.remove("active");
           }
        }
        str.classList.add("active");
    });
}

const register = document.querySelectorAll(".register");


for (var i = 0; i <register.length; i++) {
    console.log(register[i]);
    const str1= register[i];
    str1.addEventListener("click",() => {
        const div=document.querySelector(".modal");
        div.classList.add("modaldisplay");
        const divcard=document.querySelector(".wrapper");
        divcard.classList.add("carddisplay");
    });
}

const closes = document.querySelectorAll(".cross");


for (var i = 0; i <closes.length; i++) {
    console.log(closes[i]);
    const str2= closes[i];
    str2.addEventListener("click",() => {
        const div=document.querySelector(".modal");
        div.classList.remove("modaldisplay");
        const divcard=document.querySelector(".wrapper");
        divcard.classList.remove("carddisplay");
    });
}