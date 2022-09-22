let arr = ['avbvghvvv', '   ','bvgvvv','    '];

let i =0;
let j = 0;


const remove = (arr) => {
     
    for(i=0;i<arr.length;i++){
        let count=0;
        
        let str = arr[i];
        let len = str.length -1;
        for(j=0;j<arr[i].length;j++)
        {
            if(str[j]===" "){
                count++;
            }
        }
        if(count === len + 1){
            arr.splice(i,1);
        }
    }
    return arr;
}

console.log(remove(arr));