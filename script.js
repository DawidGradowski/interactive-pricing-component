const sliderFullBackground = document.querySelector(".price-input-full");
const sliderThumb = document.querySelector("#price-input");
const priceNumber = document.getElementsByClassName("price-numb")[0];
const priceTime = document.getElementsByClassName("price-time")[0];

const choosePrice = document.getElementById("toggle-checkbox");

var priceYearly = false;

sliderThumb.addEventListener("input", () => {
    sliderFullBackground.style.width = (sliderThumb.value-1)*25 + "%";
    changePrice();
});

function changePrice(){
        var price = 0;
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
        if(choosePrice.checked){
            price *=10;
        }
        priceNumber.textContent = "$"+price+".00";       
}

choosePrice.addEventListener("click", ()=>{
    changePrice();
    if(choosePrice.checked){
        priceTime.textContent = "year";
    }
    else{
        priceTime.textContent = "month";
    }
});