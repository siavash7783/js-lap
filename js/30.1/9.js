var images;
var image = [
    "url('./images/1.jpg')",
    "url('./images/2.jpg')",
    "url('./images/3.jpg')",
    "url('./images/4.jpg')",
    "url('./images/5.jpg')",
    "url('./images/6.jpg')",
]
images = Math.floor(Math.random() * 6);
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment= "fixed"
document.body.style.backgroundPosition ="center"
document.body.style.backgroundImage = image[images];
switch(images){
    case 0 :{
        document.write("مجسد نطیر المک");
        break;
    }
    case 1 :{
        document.write("تخت جمشید");
        break;
    }
    case 2 :{
        document.write("مجموعه کاخ گلستان کاخ اینه");
        break;
    }
    case 3 :{
        document.write("کلیسا وانک");
        break;
    }
    case 4 :{
        document.write("باغ شازده");
        break;
    }
    case 5 :{
        document.write("ارامگاه حافط");
        break;
    } 
}

