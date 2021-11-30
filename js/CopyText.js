const input = document.querySelector("input[type = 'text']");
const copy = document.querySelector("button[value = 'Copy']");

function copyTheText(){
    input.select(); //反白input框裡的文字內容，select方法只能使用在input元素節點跟textarea元素節點上
    navigator.clipboard.writeText(`${input.value}`); //將指定的字串寫入系統剪貼簿
    input.value?window.alert(`已經複製${input.value}了`):window.alert("未輸入文字");
};




copy.addEventListener("click", function(){
    copyTheText();
});