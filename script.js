const sliderFullBackground = document.querySelector(".price-input-full");
const sliderThumb = document.querySelector("#price-input");
const priceNumber = document.getElementsByClassName("price-numb")[0];


var priceMonthly = 16;
var priceYearly = 160;

// ####### RANGE INPUT #######
var sliderThumbPressed = false;

sliderThumb.addEventListener("mousedown", () => {
    sliderThumbPressed = true;
});

sliderThumb.addEventListener("mouseup", () => {
    sliderThumbPressed = false;
});

sliderThumb.addEventListener("touchstart", () => {
    sliderThumbPressed = true;
});

sliderThumb.addEventListener("keydown", () => {
    sliderThumbPressed = true;
});

sliderThumb.addEventListener("keyup", () => {
    sliderThumbPressed = true;
});

sliderThumb.addEventListener("touchend", () => {
    sliderThumbPressed = false;
});

setInterval(fillPriceInput, 25);

function fillPriceInput(){
    if(sliderThumbPressed){
        sliderFullBackground.style.width = (sliderThumb.value-1)*25 + "%";
        //var price = 0;
        var x = sliderThumb.value;
            switch(x){
            case "1":
                var price = 8;
                break;
            case "2":
                var price = 12;
                break;
            case "3":
                var price = 16;
                break;
            case "4":
                var price = 20;
                break;
            case "5":
                var price = 24;
                break;
            }
        priceNumber.textContent = "$"+price+".00";
        }
}
