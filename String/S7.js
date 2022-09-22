let s1="abdcb";
let s2="bcdaa";



const anagrams = (s1,s2) => {
    if(s1.length === s2.length)
    {

    
    s1=s1.split("").sort().join("");
    s2=s2.split("").sort().join("");
    if(s1===s2)
    {
      console.log("Strings are anagrams")

    }else{
        console.log("Strings are not anagrams") 
    }
}else{
    console.log("Strings are not anagrams") 
}
}

anagrams(s1,s2);
