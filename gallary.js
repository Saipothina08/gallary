function callofimg(){
    var imagesFromGallary=document.images;
    for(i=0;i<imagesFromGallary.length;i++)
    {
        imagesFromGallary[i].src=`${i}.jpg`
    }
}
callofimg()
 function bigwindow(imgurl){
    document.getElementById("imgcontainer").style.backgroundImage=`url(${imgurl})`
 }