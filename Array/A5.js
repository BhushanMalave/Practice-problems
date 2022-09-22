let arr = [1,2,3,1,2,4,5,4,2,5,7];

let minFre = 0 ;


const onlyOnce = (arr) => {
    let mp = new Map();

    for(let i=0;i<arr.length;i++)
    {
        mp.set(arr[i],mp.get(arr[i])=== undefined ? 1 : mp.get(arr[i])+1)
    }
     console.log(mp)
     minFre= mp.get(arr[0]);

    mp.forEach((i) => {
        if(i < minFre) {
              minFre=i;
        }
    })
    console.log(minFre);

    let key = mp.keys();
    console.log(key)

    for(let k of key)
    {
        if(minFre == mp.get(k))
        {
        console.log(k);
        }
    }

}

onlyOnce(arr);