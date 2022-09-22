let str ="abcaababc";

const longestLength = (s) => {

    let n = str.length;
    let len = 0;

    if(n<2){
        return 0;
    }

    let i =(n+1)/2;

    while(i<n){
        if(s[i]==s[len]){
            i++;
            len++;
        }
        else
        {
            i=i-len+1;
            len=0;
        }
    }
    return len;
}


console.log(longestLength(str));