let colorbtn= document.querySelectorAll(".filter_color");
let maincontainer= document.querySelector(".main_container");
let body = document.body;


for(let i=0;i<colorbtn.length;i++) {
    colorbtn[i].addEventListener("click",function(e){
        let color = colorbtn[i].classList[1];
        maincontainer.style.backgroundColor=color;
    })
}
let plusbutton= document.querySelector(".fa-plus");
{/* <div class="modal_container">
    <div class="input_container">
    <textarea class="input_box1" placeholder="Enter your Text here"></textarea>
    </div>
    <div class="modal_filter_container">
          <div class="filter pink"></div>
          <div class="filter blue"></div>
          <div class="filter green"></div>
          <div class="filter black"></div>
    </div>
</div> */}
plusbutton.addEventListener("click",createModal)
function createModal() {
    let modal_container = document.createElement("div");
    modal_container.setAttribute("class","modal_container");
    modal_container.innerHTML =`<div class="input_container">
    <textarea class="input_box1" placeholder="Enter your Text here"></textarea>
    </div>
    <div class="modal_filter_container">
          <div class="filter pink"></div>
          <div class="filter blue"></div>
          <div class="filter green"></div>
          <div class="filter black"></div>
    </div>`
    body.appendChild(modal_container);
    handleModal(modal_container);
}
 function handleModal(modal_container){
    let Ccolor = "black";
    let fliterelement = document.querySelectorAll(".modal_filter_container .filter");
    fliterelement[3].classList.add("border");
    for(let i=0; i<fliterelement.length; i++){
        fliterelement[i].addEventListener("click",function(){
            fliterelement.forEach((filter)=>  {
             filter.classList.remove("border")

            })
            fliterelement[i].classList.add("border");
             Ccolor = fliterelement[i].classList[1];
             console.log("current color",Ccolor)
        })
    }
        let textArea = document.querySelector(".input_box1");
        textArea.addEventListener("keydown",function(e){
        if(e.key == "Enter"&& textArea.value!=""){
            let value = textArea.value;
            console.log("value ",value,"color ",Ccolor);
            //remove modal_container
            modal_container.remove();
            createTask(Ccolor, textArea.value)
        }
        })
    }
            //create taskbox
            function createTask(Ccolor, value) {
                // color area click-> among colors
                let taskContainer = document.createElement("div");
                taskContainer.setAttribute("class", "task_container");
                taskContainer.innerHTML = `<div class="task_filter ${Ccolor}"></div>
                <div class="task_desc_container">
                    <h3 class="uid">#example</h3>
                    <div class="task_desc" contenteditable="true" >${value}</div>
                </div>
            </div >`;
            maincontainer.appendChild(taskContainer);
        }     
       
        
    


 
