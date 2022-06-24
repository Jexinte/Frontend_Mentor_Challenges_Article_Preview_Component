const shareButton = document.querySelector('.fa-share')
const shareContainer = document.querySelector('.share')
const arrowDown = document.querySelector('.arrow_down')


shareButton.addEventListener('click',() => {
    if (shareContainer.classList.contains("hidden")) {
        shareContainer.classList.remove("hidden");
        shareButton.style.color = "#F7FCFF";
        shareButton.style.background = "#6F839B";
      } else {
        shareContainer.classList.add("hidden");
        shareButton.style.color = "#718095";
        shareButton.style.background = "hsl(210, 46%, 95%)";
      }
})