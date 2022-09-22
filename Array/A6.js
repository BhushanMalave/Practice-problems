let a1=[1,2,3,4,5];
let a2=[1,2,4];


const notPresent = (a1,a2) => {
     
    for(let i = 0;i < a1.length;i++){
         let count =0;
         for(let j = 0;j<a2.length; j++){
            if(a1[i] == a2[j]){
                count++;
            }
            
         }
         if(count === 0){
            console.log(a1[i]);
        }
    }
}

notPresent(a1,a2);