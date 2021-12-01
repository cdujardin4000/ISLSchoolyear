$(function(){

    const TARGETSLIDER = $('.sliderTarget');
    $('.sliderTarget').css({'margin-top': '10rem'});
    
    let slider = document.createElement('div');
    slider.className = "slider";
    $('.slider').css({'position': 'relative','margin-top': '10rem'});

    let slide1 = document.createElement('div');
    slide1.className = "slide slide1";
    
    let caption = document.createElement('div');
    caption.className = "caption";
    slide1.append(caption);
    slider.append(slide1);

    let slide2 = document.createElement('div');
    slide2.className = "slide slide2";

    //let caption2 = document.createElement('div');
    //caption2.className = "caption";
    //slide2.append(caption2);
    slider.append(slide2);

    let slide3 = document.createElement('div');
    slide3.className = "slide slide3";

    //let caption3 = document.createElement('div');
    //caption3.className = "caption";
    //slide3.append(caption3);
    slider.append(slide3);

    let slide4 = document.createElement('div');
    slide4.className = "slide slide4";

    //let caption3 = document.createElement('div');
    //caption3.className = "caption";
    //slide3.append(caption3);
    slider.append(slide4);

    console.log(slider);
    TARGETSLIDER.append(slider);
    $('.slider, .sliderTarget, .slide.slide1').css({'background': `url("./img/front_board-1.jpg")`, 'background-size' : 'cover', 'background-position': 'center'});
    $('.slider, .sliderTarget, .slide.slide2').css({'background': 'url("./img/front_isl-1.jpg")', 'background-size' : 'cover', 'background-position': 'center'});
    $('.slider, .sliderTarget, .slide.slide3').css({'background': 'url("./img/thumb_london.jpg")', 'background-size' : 'cover', 'background-position': 'center'});
    $('.slider, .sliderTarget, .slide.slide4').css({'background': 'url("./img/epfc.jpg")', 'background-size' : 'cover', 'background-position': 'center'});
});