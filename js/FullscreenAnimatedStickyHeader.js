    const header = document.querySelector("div.header");

    const dropDown = document.querySelector("div.dropDown");

    const homeFullImage = document.querySelector("div.header > img.homeFullImage");




    window.addEventListener("scroll", function(){
        
        header.classList.add("sticky", window.scrollY > 0);

        homeFullImage.setAttribute("src", "../image/FullscreenAnimatedStickyHeader/universe-gae6585167_640.jpg");

        window.scrollTo(0, 0); //鎖住畫面，讓他做到一次性滑動
    });

    dropDown.addEventListener("click", function(){
        
        header.classList.toggle("sticky");
    })