let colorbtn= document.querySelectorAll(".filter_color");
let maincontainer= document.querySelector(".main_container");
for(let i=0;i<colorbtn.length;i++) {
    colorbtn[i].addEventListener("click",function(e){
        let color = colorbtn[i].classList[1];
        maincontainer.style.backgroundColor=color;
    })
}
