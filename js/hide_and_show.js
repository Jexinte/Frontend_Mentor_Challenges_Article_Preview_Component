const shareButton = document.querySelector('.fa-share')
const shareContainer = document.querySelector('.share')
const arrowDown = document.querySelector('.arrow_down')


shareButton.addEventListener('click',() => {
    if(shareContainer.style.visibility && arrowDown.style.visibility == "hidden") {

        shareContainer.style.visibility="visible"
        arrowDown.style.visibility="visible"
        shareButton.style.color ="#F7FCFF"
        shareButton.style.background = "#6F839B"
        
    }

    else {

        shareContainer.style.visibility="hidden"
        arrowDown.style.visibility="hidden"
        shareButton.style.color="#718095"
        shareButton.style.background ="hsl(210, 46%, 95%)"
    }
    
})