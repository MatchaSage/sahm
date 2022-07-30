let card = document.querySelectorAll('.card.link');

card.forEach(element =>{
    element.addEventListener('mouseenter', function(){
        element.style.backgroundImage = "url(./images/wallpapersden.com_pixel-4-stock_320x320.jpg)"
    })

    element.addEventListener('mouseleave', function(){
        element.style.backgroundImage = "none"
    })
})
