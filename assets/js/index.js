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
            <div class="list-dish" >
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
            <div class="list-dish" >
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
            <div class="list-dish" >
                    <div><p>Waffle with Berries</p>
                        <div class="dish-detail">
                            <p class="dcount">1x</p>
                            <p class="rate">@ $21.00</p>
                            <p class="addrate" >$21.00</p>
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
            <div class="list-dish" >
                    <div><p>Waffle with Berries</p>
                        <div class="dish-detail">
                            <p class="dcount">1x</p>
                            <p class="rate">@ $21.00</p>
                            <p class="addrate" >$21.00</p>
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
            <div class="list-dish" >
                    <div><p>Waffle with Berries</p>
                        <div class="dish-detail">
                            <p class="dcount">1x</p>
                            <p class="rate">@ $21.00</p>
                            <p class="addrate" >$21.00</p>
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
            <div class="list-dish" >
                    <div><p>Waffle with Berries</p>
                        <div class="dish-detail">
                            <p class="dcount">1x</p>
                            <p class="rate">@ $21.00</p>
                            <p class="addrate" >$21.00</p>
                        </div>
                    </div>
                </div> 
               `
                showorder.prepend(div6);
            break;
        case 'Vanilla Panna Cotta':
            itemcart.classList = ("list-dish");
            let div7 = document.createElement("div");
            div7.innerHTML = `
            <div class="list-dish" >
                    <div><p>Waffle with Berries</p>
                        <div class="dish-detail">
                            <p class="dcount">1x</p>
                            <p class="rate">@ $21.00</p>
                            <p class="addrate" >$21.00</p>
                        </div>
                    </div>
                </div>` 
                showorder.prepend(div7);
            break;
        case 'Classic Tiramisu':
            itemcart.classList = ("list-dish");
            let div8 = document.createElement("div");
            div8.innerHTML =`
            <div class="list-dish" id="f8">
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
            itemcart.id = ("list");
            let div9 = document.createElement("div");
            div9.innerHTML = `
            <div class="list-dish" >
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
function cleardish(clear,val,id1,id2){
    let clearelement = document.getElementById(clear);
    clearelement.classList = "hide";
    total_rate -= val;
    let showrate = document.getElementById("rate");
    showrate.innerHTML = `$${total_rate.toFixed(2)}`
    let btn = document.getElementById(id1);
    let btns = document.getElementById(id2);
    btn.classList = "count-hide";
    btns.classList = "btn";
}


function showemptyimgandtext(){
    let emptyimg = document.getElementById("empty-img");
    let text = document.getElementById("text")
    emptyimg.classList.remove("hide")
    emptyimg.classList.add("empty-img")
    text.classList.remove("hide")
    text.classList.add("text")
}
