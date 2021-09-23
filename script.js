function ispallindorme(str){
  let j=str.length-1;
  for(let i=0;i<j/2;i++){
    let y=str[i];
    let z=str[j-i];
    if(y!=z){
      return false
    }
  }
  return true;
}
let output=ispallindorme("nirajan")// write your input 

if(output==true){
  console.log("Given string is pallindrome")
}else if(output==false){
  console.log("not a  pallindrome")
}