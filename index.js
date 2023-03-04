const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');


let newIndex = 0;

// Adding opacity to first dot on first time

dots[0].style.opacity='1'

// positioning the slides

slides.forEach((slide, newIndex)=>{
  slide.style.left=`${ newIndex*100}%`
});


// move slide function

const goSlide = () =>{
  slides.forEach((slide)=>{
    slide.style.transform=`translateX(-${ newIndex*100}%)`;
  });
}

// remove dots opacity 1 from all dots

const hideDotsOpacity = () =>{
  dots.forEach((dot)=>{
    dot.style.opacity='.2';
  });
}

dots.forEach((dot,i)=>{
  dot.addEventListener("click",(e)=>{
    newIndex=i;
    hideDotsOpacity();
    e.target.style.opacity='1'
    goSlide();
  })
});

const autoPlaySlide = () =>{
  hideDotsOpacity();
  if( newIndex===slides.length-1)  newIndex= -1;
  index++;
  dots[ newIndex].style.opacity='1'
  goSlide();
}

window.onload=()=>{
  setInterval(autoPlaySlide,2000);
}



