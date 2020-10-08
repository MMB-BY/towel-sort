
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  let flag = 0;
  try{
  matrix.length / 1;
  }catch{
    return result;
  }

  for (let i=0; i < matrix.length; i++){
    let buf = matrix[i];
    if (flag == 0){
      for (let j=0; j < buf.length; j++){
        result.push(buf[j]);
      }
      flag++;
    } else{
      for (let j=buf.length-1; j >= 0; j--){
        result.push(buf[j]);
      }
      flag--;
    }
   
  }

  return result;
  }
