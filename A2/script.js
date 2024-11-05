//TODO make it so instead of add to cart it says in cart and greys the button out
//TODO make the list entries on the cart page look nice

function init(){
    console.log("init function ran");
    albums = ["Faces","WMWTSO","Illmatic","LateRegistration","CharlieBrownChristmas"];
    cart = JSON.parse(localStorage.getItem("cart"));
    flag = true;
    if (cart == null){ 
        flag = false;
     }
    
    for(let i = 0; i < albums.length; i++){
        if(flag){
            if(cart.indexOf(albums[i]) > -1 && flag){
                document.getElementById(albums[i]).style.visibility = 'hidden';
                document.getElementById(albums[i]+"InCart").style.visibility = 'visible';
            }else{
                document.getElementById(albums[i]).style.visibility = 'visible';
                document.getElementById(albums[i] +"InCart").style.visibility = 'hidden';
            }
        }else{
            document.getElementById(albums[i]).style.visibility = 'visible';
            document.getElementById(albums[i] +"InCart").style.visibility = 'hidden';
        }
    }
}

function initProductPage(index){
    albums = ["Faces","WMWTSO","Illmatic","LateRegistration","CharlieBrownChristmas"];
    album = albums[index];
    console.log("init function ran");
    cart = JSON.parse(localStorage.getItem("cart"));
    flag = true;
    if (cart == null){ 
        flag = false;
    }
    if(flag){
        if(cart.indexOf(album) > -1 && flag){
            document.getElementById(album).style.visibility = 'hidden';
            document.getElementById(album+"InCart").style.visibility = 'visible';
        }else{
            document.getElementById(album).style.visibility = 'visible';
            document.getElementById(album +"InCart").style.visibility = 'hidden';
        }
    }else{
        document.getElementById(album).style.visibility = 'visible';
        document.getElementById(album +"InCart").style.visibility = 'hidden';
    }
}

function addToCart(album){
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null){
        cart = [];
    }
    cart.push(album);
    console.log(JSON.stringify(cart));
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById(album).style.visibility = 'hidden';
    document.getElementById(album+"InCart").style.visibility = 'visible';
}

function removeFromCart(album){
    cart = JSON.parse(localStorage.getItem('cart'));
    const index = cart.indexOf(album);
    if (index > -1) { 
        cart.splice(index, 1);
    }
    console.log(JSON.stringify(cart));
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById(album).style.visibility = 'visible';
    document.getElementById(album +"InCart").style.visibility = 'hidden';
}

function displayCart(){
    cart = JSON.parse(localStorage.getItem('cart'))
    if(cart == null){
        console.log("The cart is empty");
        return;
    }
    const CartPageUl = document.getElementById("CartPageUl");
    CartPageUl.innerHTML = "";
    for(let i = 0; i < cart.length; i++){;
        console.log(cart[i]);
        const li = document.createElement('li');
        li.textContent = cart[i];
        li.className = "wishlistEntry";
        CartPageUl.appendChild(li);
        button = document.createElement("button");
        button.type = "button";
        button.onclick = () => removeFromCartPage(cart[i]);
        button.innerHTML = "Remove from cart";
        li.appendChild(button);
    }
}

function clearCart(){
    document.getElementById('CartPageUl').innerHTML = "";
    localStorage.removeItem("cart");
    displayCart();
}

function removeFromCartPage(album){
    console.log("removing "+album);
    cart = JSON.parse(localStorage.getItem('cart'));
    const index = cart.indexOf(album);
    if (index > -1) { 
        cart.splice(index, 1);
    }
    console.log(JSON.stringify(cart));
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}
