const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask() {
    if(inputBox.value===''){
        alert("Pleas Write Somting!");
    }
    else{
        let li =document.createElement("li");
        li.innerText=inputBox.value;
        listContainer.appendChild(li);
        const span =document.createElement("span");
        span.innerHTML= "\u00d7"
        li.appendChild(span)
    }
    inputBox.value='';
    saveData();
    emptyImage();
}

listContainer.addEventListener("click",function (e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("Checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
        emptyImage();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

listContainer.innerHTML=localStorage.getItem("data")
function emptyImage() {
    if (listContainer.childElementCount > 0) {
        document.querySelector(".empty-image").style.display = "none";
    } else {
        document.querySelector(".empty-image").style.display = "block";
    }
}
emptyImage();
