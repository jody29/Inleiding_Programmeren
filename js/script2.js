/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//Variabelen
var colorButtons = document.querySelectorAll('li>img');
var main = document.querySelector('main');
var header = document.querySelector('header');
var playstationEL = document.querySelector('#playstation');
var shoppingCart = document.querySelector('#shoppingcart');
var shopButton = document.querySelector('#shop');
var closeButton = document.querySelector('#closeshopping');
var addtoCart = document.querySelector('#addtocart');
var selectColor = document.querySelector('#selectedcolor');
var fullShopping = document.querySelector('#fullshoppingcart');
var emptyShopping = document.querySelector('#emptyshopping');
var selectPlaystation = document.querySelector('#selectedplaystation');
var closefullButton = document.querySelector('#closeshopping2');
var buyButton = document.querySelector('#buynow');
var purchaseWindow = document.querySelector('#purchasecomplet');
var closePurchase = document.querySelector('#closepurchase');
var color = 'blackbox';
var priceTag = document.querySelector('#pricetag');


shoppingCart.hidden=true;
priceTag.textContent="\u20AC"+250+",-";
selectColor.textContent="black";
fullShopping.hidden=true;
colorButtons[0].classList.add('select');
purchaseWindow.hidden=true;




//Event Handlers
function openCart() {
    shoppingCart.hidden = false;
    main.style.opacity = "40%";
    header.style.opacity = "40%";
}

function closeCart() {
    shoppingCart.hidden = true;
    main.style.opacity = "100%";
    header.style.opacity = "100%";   
}

function addCart() {
    shopButton.src = 'img/winkelwagen vol.png';
    shoppingCart = document.querySelector('#fullshoppingcart');
}

function emptyCart(event) {
    
    for (var i = 0; i < colorButtons.length; i++) {
        colorButtons[i].classList.remove('select');
    }    
    
    shopButton.src = 'img/winkelwagen.png';
    shoppingCart = document.querySelector('#shoppingcart');
    fullShopping.hidden = true;
    shoppingCart.hidden = false;
    playstationEL.src = "img/playstation_clean.png";
    selectPlaystation.src = "img/playstation_clean.png";
    selectColor.textContent="black";
    priceTag.textContent="\u20AC"+250+",-";
    colorButtons[0].classList.add('select');
    purchaseWindow.hidden = true;
}

function purchaseComplete() {
    purchaseWindow.hidden = false;
    
}

function changecolor(event) {
    var keuze = event.target.id;
    
//    if( (keuze == 'blackbox') || (keuze == 'brownbox') || (keuze == 'bluebox') || (keuze == 'yellowbox') || (keuze == 'redbox') || (keuze == 'greenbox') || (keuze == 'woodlandbox') || (keuze == 'redcamobox') || (keuze == 'whitecamobox') );
    color = keuze;
    
    for (var i = 0; i < colorButtons.length; i++) {
        colorButtons[i].classList.remove('select');
    }
    
    switch(keuze) {
        case 'blackbox':
            playstationEL.src = "img/playstation_clean.png";
            priceTag.textContent="\u20AC"+250+",-";
            selectColor.textContent="black";
            selectPlaystation.src = "img/playstation_clean.png";
            colorButtons[0].classList.add('select');
            break;
        case 'brownbox':
            playstationEL.src = "img/playstationbrown.png";
            priceTag.textContent="\u20AC"+270+",-";
            selectColor.textContent="brown";
            selectPlaystation.src = "img/playstationbrown.png";
            colorButtons[1].classList.add('select');
            break;
        case 'bluebox':
            playstationEL.src = "img/playstationblue.png";
            priceTag.textContent="\u20AC"+270+",-";
            selectColor.textContent="blue";
            selectPlaystation.src = "img/playstationblue.png";
            colorButtons[2].classList.add('select');
            break;
        case 'yellowbox':
            playstationEL.src = 'img/playstationyellow.png';
            priceTag.textContent="\u20AC"+280+",-";
            selectColor.textContent="yellow";
            selectPlaystation.src = "img/playstationyellow.png";
            colorButtons[3].classList.add('select');
            break;
        case 'redbox':
            playstationEL.src = "img/playstationred.png";
            priceTag.textContent="\u20AC"+280+",-";
            selectColor.textContent="red";
            selectPlaystation.src = "img/playstationred.png";
            colorButtons[4].classList.add('select');
            break;
        case 'greenbox':
            playstationEL.src = "img/playstationgreen.png";
            priceTag.textContent="\u20AC"+280+",-";
            selectColor.textContent="green";
            selectPlaystation.src = "img/playstationgreen.png";
            colorButtons[5].classList.add('select');
            break;
        case 'woodlandbox':
            playstationEL.src = "img/playstationwoodland.png";
            priceTag.textContent="\u20AC"+300+",-";
            selectColor.textContent="woodland camo";
            selectPlaystation.src = "img/playstationwoodland.png";
            colorButtons[6].classList.add('select');
            break;
        case 'redcamobox':
            playstationEL.src = "img/playstationredcamo.png";
            priceTag.textContent="\u20AC"+300+",-";
            selectColor.textContent="red camo";
            selectPlaystation.src = "img/playstationredcamo.png";
            colorButtons[7].classList.add('select');
            break;
        case 'whitecamobox':
            playstationEL.src = "img/playstationwhitecamo.png";
            priceTag.textContent="\u20AC"+300+",-";
            selectColor.textContent="white camo";
            selectPlaystation.src = "img/playstationwhitecamo.png";
            colorButtons[8].classList.add('select');
            break;
    }
}


    

//Event Listeners    
colorButtons.forEach(element => {
    element.addEventListener('click', changecolor);
});

shopButton.addEventListener('click', openCart);
closeButton.addEventListener('click', closeCart);
addtoCart.addEventListener('click', addCart);
emptyShopping.addEventListener('click', emptyCart);
closefullButton.addEventListener('click', closeCart);
buyButton.addEventListener('click', purchaseComplete);
closePurchase.addEventListener('click', () => {
    emptyCart();
    closeCart();
});




