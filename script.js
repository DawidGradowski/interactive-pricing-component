const sliderFullBackground = document.querySelector(".price-input-full");
const sliderThumb = document.querySelector("#price-input");

var sliderThumbPressed = false;

sliderThumb.addEventListener("mousedown", () => {
    sliderThumbPressed = true;
});

sliderThumb.addEventListener("mouseup", () => {
    sliderThumbPressed = false;
});

setInterval(fillPriceInput, 25);

function fillPriceInput(){
    if(sliderThumbPressed){
        sliderFullBackground.style.width = sliderThumb.value + "%";
        console.log(sliderThumb.value);
    }
}