let arr = [1,-10,2,-2,3,-4,-5,];


const segregate = (arr) => {
    let a = [];
    let b= []; 
    arr.filter((i) => {
        i < 0 ? a.push(i) : b.push(i);
    });
    arr =a.concat(b)
    console.log(arr)
}

segregate(arr);