function sum(num) {
    // your code here
     const func =  function(args){
      if(args)
        return sum(num+args) 
      return num;
    }
  
    func.valueOf = () => num; 
    return func;
}