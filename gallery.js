function upDate(previewPic){
    const show = document.getElementById("image");
    show.style.backgroundImage = "url('" + previewPic.src + "')";
    show.innerHTML = previewPic.alt;
}
   
function unDo(){
    const none = document.getElementById("image");
    none.style.backgroundImage = "url('')";
    none.innerHTML = "Hover over an image below to display here.";
}