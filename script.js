let btn = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".sidebar");


btn.addEventListener("click", ()=> {
  sidebar.classList.toggle("close");
});


let arrows = document.querySelectorAll(".arrow");
for(var i = 0; i < arrows.length; i++){
  arrows[i].addEventListener("click",(e) =>{
  let arrowparent = e.target.parentElement.parentElement;
  arrowparent.classList.toggle("show");
  })
}