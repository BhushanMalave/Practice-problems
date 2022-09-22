const arr = [10,20,30,40,50,60];
let min=arr[0];
let max=0;
const minMax= (arr) => {
     arr.forEach((i) =>{
        if(i < min) {min=i } ;
        if(i > max) {max=i }  ;
     })

    console.log(`Min value is ${min}`);
    console.log(`Max value is ${max}`);
}


minMax(arr);