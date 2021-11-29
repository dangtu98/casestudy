let count = 0;
function carousel() {
    let arr = document.getElementsByClassName("mySlides");
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = "none";
    }
    count++
    if (count > arr.length) {
        count = 1
    }
    arr[count - 1].style.display = "block";
    setTimeout(carousel, 2000);
}
carousel()