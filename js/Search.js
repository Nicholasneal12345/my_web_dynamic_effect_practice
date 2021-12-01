const searchInput = document.querySelector("input.searchInput");
const resultContainer = document.querySelector("ul.resultContainer");
let resultDB = ["臺北市", "台北市", "Taipei City", "新北市", "New Taipei City","桃園市", "Taoyuan City", "臺中市", 
                "台中市", "Taichung City", "臺南市", "台南市", "Tainan City", "高雄市", "Kaohsiung City"];





//使用input事件 
searchInput.addEventListener("input", function(){
    const searchValue = searchInput.value;
    const re = new RegExp(searchValue,`gi`);
    let result = []; //每次觸發ipnut的時候先reset清空
    
    
    
    
    // 每次觸發ipnut的時候先reset清空
    resultContainer.innerHTML = "";

    // 沒有值的時候也清空
    if(!searchValue){
        resultContainer.innerHTML = "";
    }else{
            // 透過正則表達式找尋符合的條件
        for(let i = 0; i < resultDB.length; i = i + 1){
            if(resultDB[i].match(re)){
                result.push(resultDB[i].replace(re, `<span>${searchValue}</span>`));
            }
        };

        // 將result裡面的字串放到新增的li上
        for(let i = 0; i < result.length; i = i + 1){
            resultContainer.insertAdjacentHTML("beforeend", `<li>${result[i]}</li>`);
        }
    }
});