function pipe(funcs) {
	// your code here
	return function(x) {
      return funcs.reduce((acc,fn)=>fn(acc),x);
    }
}
