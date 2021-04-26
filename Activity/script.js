let colorBtn=document.querySelectorAll(".filter_color");
let mainContainer=document.querySelector(".main-task-area");

let addTask=document.querySelector(".fa-plus");
let body=document.body;

addTask.addEventListener("click",function(){
    createMadal();
})


function createMadal(){
    let modal=document.createElement("div");
    modal.setAttribute("class","model_container");
    modal.innerHTML=`<div class="model_container">
    <div class="input_container">
        <textarea class="modal_input" 
        placeholder="Enter Your text"></textarea>
    </div>
    <div class="modal_filter_color">
        <div class="modal_filter pink"></div>
        <div class="modal_filter blue"></div>
        <div class="modal_filter green"></div>
        <div class="modal_filter black"></div>
    </div>
</div>`;
body.appendChild(modal);
let Ccolor="black";
let filter_color=document.querySelectorAll(".modal_filter");

    for(let i=0;i<filter_color.length;i++){
        filter_color[i].addEventListener("click",function(){
            Ccolor=filter_color[i].classList[1];
            console.log(Ccolor);
        })
    }

}
