function flat(arr, depth = 1) {
  // your imeplementation here
  if(depth==0)
    return arr;
  
  const newArr=[];
  arr.map((ele)=>{
    if(Array.isArray(ele)){
      newArr.push(...flat(ele,depth-1))
    }
    else
      newArr.push(ele)
  })

  return newArr
}