let input=document.querySelector(".input_box");
let ul=document.querySelector(".task-list");

input.addEventListener("keydown",function(e){
    //console.log("event object",e);

    if(e.key=="Enter"){
        console.log("user want to enter a task");

        let task=input.value;
        
        //to create any html tag
        let li=document.createElement("li");
        li.innerText=task;

        //set any attributes
        li.setAttribute("class","task");

        // to add event listener
        li.addEventListener("dblclick",function(){
            li.remove();
        });

        ul.appendChild(li);
        input.value="";
    }
});