const scroll = new LocomotiveScroll({
  el: document.querySelector(".data-scroll-container"),
  smooth: true,
  smartphone: { smooth: true },
  tablet: { smooth: true },
  lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
  multiplier: 1.2, // Effect Multiplier
  });

      
    
setTimeout(() => {  
    locoScroll.destroy();
}, 0);
setTimeout(() => {  
    locoScroll.init();
}, 50);
setTimeout(() => {  
    locoScroll.update();
}, 1000);