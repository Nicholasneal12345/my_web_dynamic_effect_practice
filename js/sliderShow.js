
const sliderInnerContainer = document.querySelector("div.sliderInnerContainer");

const preBtn = document.getElementById("preBtn");

const nextBtn = document.getElementById("nextBtn");

let count = 1;

let sliderImg = document.querySelectorAll("div.sliderInnerContainer > img");

sliderInnerContainer.style.transform = `translateX(${-sliderImg[0].clientWidth * count}px)`;

// 點擊上一張按鈕
preBtn.addEventListener("click", function(){

    // 為了防止點擊太快導致動畫還沒執行完、transitionend事件還沒被觸發之前就繼續執行preBtn的click事件處理器的bug，因此在這邊加上一個判斷式來解決這個bug
    if(count === 0){

        return;
    }

    count = count - 1;
    
    sliderInnerContainer.style.transform = `translateX(${-sliderImg[0].clientWidth * count}px)`;

    sliderInnerContainer.style.transition = `transform 0.4s`;
});

// 點擊下一張按鈕
nextBtn.addEventListener("click", function(){

    // 為了防止點擊太快導致動畫還沒執行完、transitionend事件還沒被觸發之前就繼續執行preBtn的click事件處理器的bug，因此在這邊加上一個判斷式來解決這個bug
    if(count === sliderImg.length - 1){

        return;
    }

    count = count + 1;
    
    sliderInnerContainer.style.transform = `translateX(${-sliderImg[0].clientWidth * count}px)`;

    sliderInnerContainer.style.transition = `transform 0.4s`;
});

// sliderInnerContainer每次移動動畫結束後會觸發的事件處理function
sliderInnerContainer.addEventListener("transitionend", function(){

    // 判斷位置是否在第一張圖片(lastClone)上，如果是的話就停止動畫運作並且跳到跟lastClone一樣的圖片上(firstClone的前一張)
    if(count === 0){

        count = 5;

        sliderInnerContainer.style.transition = `none`;

        sliderInnerContainer.style.transform = `translateX(${-sliderImg[0].clientWidth * count}px)`;
    }

    // 判斷位置是否在最後一張圖片(firstClone)上，如果是的話就停止動畫運作並且跳到跟firstClone一樣的圖片上(lastClone的下一張)
    if(count === sliderImg.length - 1){

        count = 1;

        sliderInnerContainer.style.transition = `none`;

        sliderInnerContainer.style.transform = `translateX(${-sliderImg[0].clientWidth * count}px)`;
    }
});

// sliderInnerContainer自動運行
setInterval(function(){

    count = count + 1;
    
    sliderInnerContainer.style.transform = `translateX(${-sliderImg[0].clientWidth * count}px)`;

    sliderInnerContainer.style.transition = `transform 0.4s`;
}, 5000);
