function curry(fn) {
  // your code here
  return function curried(...args){
    if (args.length >= fn.length) {
      return fn(...args)
    } 

    return (...missingArgs)=> curried(...args,...missingArgs)
  }
}