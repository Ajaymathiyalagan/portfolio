let menu=document.querySelector("#icon")
let navbar=document.querySelector(".navbar")
 let logo=document.querySelector(".logo")
  let header=document.querySelector(".header")
  menu.onclick=()=>{
      
      navbar.style.right="-1px";
      navbar.style.top="0px";
    
}
function fun(){
    
navbar.style.right="-100%";
}



//contact link
const scriptURL = "https://script.google.com/macros/s/AKfycbxI9XM7OoWg_tObNzRKF61Ppr50G0DeT7tkDIVvqhSJltj4WVDW-I_T8VNEB1Utce8p/exec"
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Thank you, Contacting Me"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})