//功能：让两张图片淡入淡出
//参数：
//淡入的图片
//淡出的图片
//时长
//返回值：定时器

function fadeInOut(inImg,outImg,timeLong){

    let timeSpace = 10;
    let step = 3/(timeLong/timeSpace); 
    let opacity = 0;
    let myTimer = setInterval(()=>{
        //一、处理数据
        opacity+=step;
        if(opacity>=1){
            opacity = 1;
            window.clearInterval(myTimer);
        }

        //二、改变外观
        inImg.style.opacity = opacity;
        outImg.style.opacity = 1-opacity;
        
    },timeSpace);
}

