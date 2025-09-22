// let body = document.body;
// window.addEventListener("load",()=>{
//     let para = document.createElement("p");
//     setInterval(()=>{
//         let body = document.body;
//         para.innerHTML = window.innerWidth
//         body.prepend(para)
//     },0)
   
// });

function btnchange(val,vals,dish,rate){
    let order = document.getElementById("order");
    let emptyimg = document.getElementById("empty-img");
    let text = document.getElementById("text");
    let btn = document.getElementById(val);
    let btns = document.getElementById(vals);
    btn.classList = "count-show";
    btns.classList = "hide";
    emptyimg.classList.add("hide");
    emptyimg.classList.remove("empty-img");
    text.classList.add("hide");
    text.classList.add("text");
    order.classList.remove("hide")
    addcart(dish,rate)
}

let itemcart = document.getElementById("item-cart") ;
function addcart(dish,rate){
    let parentdiv = document.createElement("div");
    let div = document.createElement("div");
    let detaialdiv = document.createElement("div");
    let closediv = document.createElement("div");
    let dishname = document.createElement("p");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    parentdiv.classList = "list-dish";
    detaialdiv.classList = "dish-detail";
    closediv.classList = "btn-close"
    p1.classList = "dcount";
    p2.classList = "rate";
    p3.classList = "addrate";
    itemcart.prepend(parentdiv);
    parentdiv.appendChild(div);
    div.appendChild(dishname).innerHTML = dish;
    div.appendChild(detaialdiv);
    parentdiv.appendChild(closediv);
    detaialdiv.appendChild(p1).innerHTML = "1x";
    detaialdiv.appendChild(p2).innerHTML = rate;
    detaialdiv.appendChild(p3).innerHTML = rate;
}

function showemptyimgandtext(){
    let emptyimg = document.getElementById("empty-img");
    let text = document.getElementById("text")
    emptyimg.classList.remove("hide")
    emptyimg.classList.add("empty-img")
    text.classList.remove("hide")
    text.classList.add("text")
}