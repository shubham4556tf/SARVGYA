const scroll = new LocomotiveScroll({
  el: document.querySelector(".data-scroll-container "),
  smooth: true,
  smartphone: { smooth: true },
  tablet: { smooth: true },
  lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
  multiplier: 1.2, // Effect Multiplier
  });
  const scroll2 = new LocomotiveScroll({
    el: document.querySelector(".data-scroll-container_mobile "),
    smooth: false,
    tablet: { smooth: true },
    lerp: 1, // Linear Interpolation, 0 > 1 // Try 0.01
    // Effect Multiplier
    });

      
    
setTimeout(() => {  
  data-scroll-container.destroy();
}, 0);
setTimeout(() => {  
  data-scroll-container.init();
}, 50);
setTimeout(() => {  
  data-scroll-container.update();
}, 1000);