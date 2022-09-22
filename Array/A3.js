const arr=[1,2,3,4,5,6,7,8,9];

let ele=1;
let a = arr.indexOf(ele);


const remove = (arr,ele) => {
    
    if(arr.includes(ele))
    {
         arr.splice(a,1);
         return arr;
    }else{
        return ('Element not present in array');
        
    }
}

console.log(remove(arr,ele));