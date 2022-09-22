let s = "cat";
let arr=[];
arr=s.split("");
console.log(arr);
const nonRepeated =(a) => {
      
       for(let i=0;i<a.length;i++){
        let count = 0;
        for(let j=0;j<a.length;j++)
        {
            if(a[i]===a[j])
            {
                if(i!=j)
                {
                count++;
                }
            }
            

        }
        if(count<=0)
            {
                console.log(a[i]);
            }
       }
}

nonRepeated(arr);