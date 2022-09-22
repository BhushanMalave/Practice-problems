let string = ["This","is","an","the","an","apple"];
let index ;
let min ;
const removeLowestlen = (str) =>
{    
    const mp = new Map();
    min=str[0].length;
    for(let i=0;i<str.length;i++){
        mp.set(str[i],str[i].length);
        
    }
    //console.log(mp);

    for(i=0;i<str.length;i++){
        if(mp.get(str[i])<min)
        {
            min=mp.get(str[i]);
        }
    }
    //console.log(min);

    for(i=0;i<str.length;i++){
        if(str[i].length === min){
            str.splice(i,1);
            i--;
            //console.log(str[i]);   
        }
    }
      
    console.log(str);
    
}

removeLowestlen(string);