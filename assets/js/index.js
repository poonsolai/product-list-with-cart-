let body = document.body;
window.addEventListener("load",()=>{
    let para = document.createElement("p");
    setInterval(()=>{
        let body = document.body;
        para.innerHTML = window.innerWidth
        body.prepend(para)
    },0)
   
});

function btnchange(val){
    let aa = document.getElementById(val);
    aa.classList = "count-show"
}