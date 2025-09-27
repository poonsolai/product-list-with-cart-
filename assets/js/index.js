// remove the empty img and hide cart button show the increament decreament btn 
function btnchange(val,vals,dish,id,rate){
    let order = document.getElementById("order");
    let total = document.getElementById("total");
    let emptyimg = document.getElementById("empty-img");
    let text = document.getElementById("text");
    let btn = document.getElementById(val);
    let btns = document.getElementById(vals);
    btn.classList = "count-show";
    btns.classList = "hide";
    total.classList = "total-order";
    emptyimg.classList.add("hide");
    emptyimg.classList.remove("empty-img");
    text.classList.add("hide");
    text.classList.add("text");
    order.classList.remove("hide")
    addcart(dish,id,rate)
    calrate(rate)
    length()

}
  
// show the product name and price in cart 
function addcart(dish,id,rate){
    let itemcart = document.getElementById(id); 
    let showorder =document.getElementById("showorder")
    switch(dish){
        case 'Pistachio baklva':
            itemcart.classList = ("list-dish");
            let div1 = document.createElement("div");
            div1.innerHTML = `
            <div class="list-dish" id="a1">
                    <div><p>Pistachio baklva</p>
                        <div class="dish-detail">
                            <p class="dcount">1x</p>
                            <p class="rate">@ $4.00</p>
                            <p class="addrate" >$4.00</p>
                        </div>
                    </div>
                </div> 
               `
                showorder.prepend(div1);
            break;
        case 'Salted Caramel Brownie':
            itemcart.classList = ("list-dish");
            let div2 = document.createElement("div");
            div2.innerHTML = `
            <div class="list-dish" id="a2">
                    <div><p>Salted Caramel Brownie</p>
                        <div class="dish-detail">
                            <p class="dcount">1x</p>
                            <p class="rate">@ $11.00</p>
                            <p class="addrate" >$11.00</p>
                        </div>
                    </div>
                </div> 
               `
                showorder.prepend(div2);
            break;
        case 'Red Velvet Cake':
            itemcart.classList = ("list-dish");
            let div3 = document.createElement("div");
            div3.innerHTML = `
            <div class="list-dish" id="a3">
                    <div><p>Red Velvet Cake</p>
                        <div class="dish-detail">
                            <p class="dcount">1x</p>
                            <p class="rate">@ $14.00</p>
                            <p class="addrate" >$14.00</p>
                        </div>
                    </div>
                </div> 
                `
                showorder.prepend(div3);
            break;
        case 'Vanilla Bean Crème Brûlée':
            itemcart.classList = ("list-dish");
            let div4 = document.createElement("div");
            div4.innerHTML = `
            <div class="list-dish" id="a4">
                    <div><p>Vanilla Bean Crème Brûlée</p>
                        <div class="dish-detail">
                            <p class="dcount">1x</p>
                            <p class="rate">@ $7.00</p>
                            <p class="addrate" >$7.00</p>
                        </div>
                    </div>
                </div> 
                `
                showorder.prepend(div4);
            break;
        case 'Macaron Mix of Five':
            itemcart.classList = ("list-dish");
            let div5 = document.createElement("div");
            div5.innerHTML = `
            <div class="list-dish" id="a5">
                    <div><p>Macaron Mix of Five</p>
                        <div class="dish-detail">
                            <p class="dcount">1x</p>
                            <p class="rate">@ $8.00</p>
                            <p class="addrate" >$8.00</p>
                        </div>
                    </div>
                </div> 
                `
                showorder.prepend(div5);
            break;
        case 'Lemon Meringue Pie':
            itemcart.classList = ("list-dish");
            let div6 = document.createElement("div");
            div6.innerHTML = `
            <div class="list-dish" id="a6">
                    <div><p>Lemon Meringue Pie</p>
                        <div class="dish-detail">
                            <p class="dcount">1x</p>
                            <p class="rate">@ $10.00</p>
                            <p class="addrate" >$10.00</p>
                        </div>
                    </div>
                </div> 
               `
                showorder.prepend(div6);
            break;
        case 'Lemon Meringue Pie':
            itemcart.classList = ("list-dish");
            let div7 = document.createElement("div");
            div7.innerHTML = `
            <div class="list-dish" id="a7">
                    <div><p>Lemon Meringue Pie</p>
                        <div class="dish-detail">
                            <p class="dcount">1x</p>
                            <p class="rate">@ $9.00</p>
                            <p class="addrate" >$9.00</p>
                        </div>
                    </div>
                </div>` 
                showorder.prepend(div7);
            break;
        case 'Classic Tiramisu':
            itemcart.classList = ("list-dish");
            let div8 = document.createElement("div");
            div8.innerHTML =`
            <div class="list-dish" id="a8">
                    <div><p>Classic Tiramisu</p>
                        <div class="dish-detail">
                            <p class="dcount">1x</p>
                            <p class="rate">@ $15.00</p>
                            <p class="addrate" >$15.00</p>
                        </div>
                    </div>
                </div>
                `
            showorder.prepend(div8)
            break;
        case 'Waffle with Berries':
            itemcart.classList = ("list-dish");
            let div9 = document.createElement("div");
            div9.innerHTML = `
            <div class="list-dish " id="a9">
                    <div><p>Waffle with Berries</p>
                        <div class="dish-detail">
                            <p class="dcount">1x</p>
                            <p class="rate">@ $21.00</p>
                            <p class="addrate" >$21.00</p>
                        </div>
                    </div>
                </div> 
                `
                showorder.prepend(div9);
            break;
    }   
}
//order comfrim 
function confrimorder(){
    let orderpase = document.getElementById("orderpase");
    let box = document.getElementById("box")
    let box2 = document.getElementById("box2")
    box.style.opacity = "0.1"
    box2.style.opacity = "0.1"
    orderpase.classList = "box3"
}
// total rate in cart 
let total_rate =Number("");
function calrate(rate){
    let num = parseFloat(rate);
    total_rate +=num;
    let showrate = document.getElementById("rate")
    showrate.innerHTML = `$${total_rate.toFixed(2)}`
}

// cancle the dish item
function cleardish(clear,val,id1,id2,aa){
    let clearelement = document.getElementById(clear);
    clearelement.classList = "hide-cart";
    total_rate -= val;
    let showrate = document.getElementById("rate");
    showrate.innerHTML = `$${total_rate.toFixed(2)}`
    let btn = document.getElementById(id1);
    let btns = document.getElementById(id2);
    btn.classList = "count-hide";
    btns.classList = "btn btn-primary";
    length()
    let cart = document.getElementById(aa)
    cart.remove()
    
}


// this  function crate for order diabled for empty cart
function length(){
    let arr = document.getElementsByClassName("hide-cart");
    let arrlength = arr.length;
    if(arrlength==9){
    let orderbtn = document.getElementById("order-btn");
    orderbtn.disabled = true
    }
    else if(arrlength<9){
        let orderbtn = document.getElementById("order-btn");
        orderbtn.disabled = false
    }
}

// new order
function neworder(){
    let showorder = document.getElementById("showorder");
    let orderpase = document.getElementById("orderpase");
    let rate = document.getElementById("rate");
    orderpase.classList = ("hide");
    let box = document.getElementById("box")
    let box2 = document.getElementById("box2")
    box.style.opacity = "1"
    box2.style.opacity = "1"
    let list = document.getElementsByClassName("list-dish");
    let len = list.length
   switch(len){
    case 2 :
        list[0].className = "hide-cart"; rate.innerHTML = "$0.00";break
    case 4 :
        list[0].className = "hide-cart";list[1].className = "hide-cart"; rate.innerHTML = "$0.00";break
    case 6 :
        list[0].className = "hide-cart";list[1].className = "hide-cart";list[2].className = "hide-cart"; rate.innerHTML = "$0.00";break
    case 8 :
        list[0].className = "hide-cart";list[1].className = "hide-cart";list[2].className = "hide-cart";list[3].className = "hide-cart"; rate.innerHTML = "$0.00";break
    case 10 :
        list[0].className = "hide-cart";list[1].className = "hide-cart";list[2].className = "hide-cart";list[3].className = "hide-cart";list[4].className = "hide-cart";list[5].className = "hide-cart"; rate.innerHTML = "$0.00";break
    case 12 :
        list[0].className = "hide-cart";list[1].className = "hide-cart";list[2].className = "hide-cart";list[3].className = "hide-cart";list[4].className = "hide-cart";list[5].className = "hide-cart";list[6].className = "hide-cart"; rate.innerHTML = "$0.00";break
    
    case 14 :
        list[0].className = "hide-cart";list[1].className = "hide-cart";list[2].className = "hide-cart";list[3].className = "hide-cart";list[4].className = "hide-cart";list[5].className = "hide-cart";list[6].className = "hide-cart";list[7].className = "hide-cart"; rate.innerHTML = "$0.00";break
    case 16 :
        list[0].className = "hide-cart";list[1].className = "hide-cart";list[2].className = "hide-cart";list[3].className = "hide-cart";list[4].className = "hide-cart";list[5].className = "hide-cart";list[6].className = "hide-cart";list[7].className = "hide-cart";list[8].className = "hide-cart"; rate.innerHTML = "$0.00";break
    case 18 :
        list[0].className = "hide-cart";list[1].className = "hide-cart";list[2].className = "hide-cart";list[3].className = "hide-cart";list[4].className = "hide-cart";list[5].className = "hide-cart";list[6].className = "hide-cart";list[7].className = "hide-cart";list[8].className = "hide-cart";list[9].className = "hide-cart"; rate.innerHTML = "$0.00";break
   }
   for(let i=1;i<=9;i++){
    showorder.lastChild.remove()
   }
   
}