
let arr =[2,5,9,7,1,8,2,4,3,1,9,7,1,2];

const secondNonRepeating = (arr) => { 
let b =[];
let n = arr.length;
for(let i=0;i<n;i++){
    let count=0;
    for(let j=0;j<n;j++){
        if(i!=j){
        if(arr[i]==arr[j])
         count++;
         
    }}
    if(count==0){
    b.push(arr[i]);
    }
}
console.log(b[1]);
}

secondNonRepeating(arr);