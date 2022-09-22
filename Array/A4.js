const arr=[1,1,2,3,2,3,2,2,4,1,5,2,1,1]
let no;
let mf=0;
let mp = new Map();
let k ;

const maxFre = (arr) => {
    for(let i =0;i<arr.length;i++)
    { 
        mp.set(arr[i],mp.get(arr[i]) === undefined ? 1 : mp.get(arr[i])+1)
   
    }
    console.log(mp);
    
    mp.forEach((i) => { 
        if(mf < i)
            mf=i
    });
    console.log(mf);

   
    key = mp.keys();
    console.log(key);
    
    for(let k of key)
    {
       if(mf === mp.get(k))
       {
        console.log(k);
       }
    }    
}

console.log(maxFre(arr));