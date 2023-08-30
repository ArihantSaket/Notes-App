let create = document.querySelector(".createBtn");
let b = document.querySelector("#deleteImg");
let c = document.querySelector(".notes-container");
let n = document.querySelector(".notebox")

function show(){
    c.innerHTML = localStorage.getItem("notes");
}

function storagee(){
    localStorage.setItem("notes", c.innerHTML);
}

create.addEventListener("click", ()=>{
    c.innerHTML += `<p contenteditable="true" class="notebox"><img src="delete.png" id="deleteImg"></p>`;
});

c.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        storagee();
    }
    else if(e.target.tagName === "P"){
        c = document.querySelectorAll(".notebox");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                storagee();
            }
        });
    }
});


// c.innerHTML += "<div class='notebox'><textarea></textarea><button>Delete</button></div>";
// <p contenteditable="true" class="notebox"><img src="delete.png" id="deleteImg"></p>