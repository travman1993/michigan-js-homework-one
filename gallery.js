function loadUp() {
    const randomI = new Array();
    randomI[0] = "https://cdn.vox-cdn.com/thumbor/96QsmtOUvbD76rP6zKz7Q44iG_s=/0x0:4785x3190/1820x1213/filters:focal(1771x1071:2535x1835):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/73110644/1954096006.0.jpg";
    randomI[1] = "https://cdn.vox-cdn.com/thumbor/VNH1HgJRsT4BY7IaDckAuT0__A0=/0x0:532x382/1820x1213/filters:focal(322x120:406x204):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71852092/1447713256.0.jpg";
    randomI[2] = "https://cdn.vox-cdn.com/thumbor/lqLX3ZNRRQPC08SS8w8Pr91PixI=/0x0:5235x3648/1820x1213/filters:focal(2867x902:3703x1738):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70368930/1363681805.0.jpg";
    randomI[3] = "https://wehco.media.clients.ellingtoncms.com/imports/adg/photos/103112772_AP23323633715488_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d";
    randomI[4] = "https://cdn.vox-cdn.com/thumbor/QXY8sdh0_SlU_OJh-f2PtBr-BfE=/0x0:2400x1600/1820x1213/filters:focal(963x482:1347x866):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/72699172/usa_today_21497337.0.jpg";
    randomI[5] = "https://www.macombdaily.com/wp-content/uploads/2022/09/AP22261682811396.jpg?w=1024";

    const random = Math.floor(Math.random()*randomI.length);

    return randomI[random];
}

window.onload = function() {
    const randomUrl = loadUp();
    const img = document.createElement("img");
    img.src = randomUrl;
    document.getElementById("image").appendChild(img);
}

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

function focusUp(){
}

function blurUp(){
}