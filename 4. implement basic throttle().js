function throttle(func, wait) {
    // your code here
    let timer=null;
    let lastArgs=null;
  
    return (...args) => {
      if(!timer){
        func(...args);
        timer=setTimeout(()=>{
          if(lastArgs)
            func(...lastArgs);
  
          lastArgs = null;
          timer = null;
        },wait)
      }
      else
        lastArgs=args
    }
  }