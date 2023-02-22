const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');


let index = 0;

// Adding opacity to first dot on first time

dots[0].style.opacity='1'

// positioning the slides

slides.forEach((slide,index)=>{
  slide.style.left=`${index*100}%`
});


// move slide function

const moveSlide = () =>{
  slides.forEach((slide)=>{
    slide.style.transform=`translateX(-${index*100}%)`;
  });
}

// remove dots opacity 1 from all dots

const removeDotsOpacity = () =>{
  dots.forEach((dot)=>{
    dot.style.opacity='.2';
  });
}

dots.forEach((dot,i)=>{
  dot.addEventListener("click",(e)=>{
    index=i;
    removeDotsOpacity();
    e.target.style.opacity='1'
    moveSlide();
  })
});

const autoPlaySlide = () =>{
  removeDotsOpacity();
  if(index===slides.length-1) index= -1;
  index++;
  dots[index].style.opacity='1'
  moveSlide();
}

window.onload=()=>{
  setInterval(autoPlaySlide,4000);
}



