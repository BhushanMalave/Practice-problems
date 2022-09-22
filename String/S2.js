let str = "abcbabb";

const longSubString = (str) =>
{
    let length=0;
    let n=str.length;

    for(let i=0;i<n;i++)
    {
        let visited = new Array(256);
        for(let j=i;j<n;j++)
        {
            if(visited[str.charCodeAt(j)] == true)
               break;
            
            else
            {
                length=Math.max(length,j-i+1);
                visited[str.charCodeAt(j)] = true;
            }
            
        }
    }
    return length;

}

console.log(longSubString(str));



// function longestUniqueSubsttr(str)
// {
// 	let n = str.length;
	
	
// 	var res = 0;
	
// 	for(var i = 0; i < n; i++)
// 	{
		
	
// 		var visited = new Array(256);
		
// 		for(var j = i; j < n; j++)
// 		{
			
			
// 			if (visited[str.charCodeAt(j)] == true)
// 				break;

// 		    else
// 			{
// 				res = Math.max(res, j - i + 1);
// 				visited[str.charCodeAt(j)] = true;
// 			}
// 		}
// 	}
// 	console.log( res);
// }


// var str = "abcabb";
	
// longestUniqueSubsttr(str);
	



