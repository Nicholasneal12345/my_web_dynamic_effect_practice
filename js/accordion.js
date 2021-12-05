const accordion_title = document.querySelectorAll("div.accordion_title");




window.addEventListener("load", function(){
    for(let i = 0; i < accordion_title.length; i = i + 1){
        // 點擊title觸發事件
        accordion_title[i].addEventListener("click", function(){
            //增加或移除openTitle這個class
            this.classList.toggle("openTitle"); 
            // 增加或移除open這個class
            this.nextElementSibling.classList.toggle("open");
    
            // 使用js根據p標籤的高度來進行高度判斷，避免把高度寫死。
            if(this.nextElementSibling.classList.contains("open")){
                this.nextElementSibling.style.height = `${this.nextElementSibling.children[0].offsetHeight}px`;
            }else{
                this.nextElementSibling.style.height = 0;
            }
        });
    }
});