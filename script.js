let str="AABBBBBBBBBBCCCCCCDDDDDEEEDFGDG";
console.log(str.length);
let MaxCount="";
let count="";
for (let i=0;i<str.length-1;i++){
    if (str[i]==str[i+1]){
        count=count.concat(str[i]);
        if (str[i+1]!=str[i+2]){
            count=count.concat(str[i+1]);
        }
        if (count.length>MaxCount.length){    
            MaxCount=count;
        }
    }       
    else {count="";}
}
console.log(MaxCount);