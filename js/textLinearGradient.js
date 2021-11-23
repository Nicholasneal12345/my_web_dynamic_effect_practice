
let button = document.querySelectorAll("div.testContainerItem > button");




for(let i = 0; i < button.length; i = i + 1){

    button[i].addEventListener("click", function(){

        button[i].closest("div.testContainerItem").classList.toggle("active");
    });
}