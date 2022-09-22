const ip ="192.0.277"

const validate= (ip) => {
    let arr =ip.split(".");
     let val = 0;
    arr.forEach(ele => {
        if(0<=ele && ele<=255)
        {
            val++;
        } 
       
    });
    if(val=== 3)
    {
        console.log('IP Address is valid')
    }       else{
        console.log('IP Address is not valid')
    }
}

validate(ip);