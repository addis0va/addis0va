let a = 0;
const imgElement = document.querySelector("img");

function buttonClick(){
    if(imgElement.src.match ("logo.png")){
        imgElement.setAttribute("src","photo.jpg");
     }else{
        imgElement.setAttribute("src","logo.png");
     }
}

const img = document.querySelector("img");
img.addEventListener('click',buttonClick);

