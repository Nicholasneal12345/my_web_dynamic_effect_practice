const dropLine = document.querySelector(".dropLine");

const slide = document.querySelector(".slide > input");

const imgUp = document.querySelector(".imgUp");

// input滑動的時候就會觸發這個事件
slide.addEventListener("input", function(){

    let distance = this.value;



    
    //根據input的值來給dropLine的left做設定
    dropLine.style.left = `${distance}%`;

    //根據input的值來給上面那張圖的width做設定
    imgUp.style.width = `${distance}%`;
});