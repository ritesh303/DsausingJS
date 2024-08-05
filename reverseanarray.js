let data=[1,2,3,4]

function reverse(data,start,end){
    console.log(data)
    if(start<=end){
        let temp=data[start]
        data[start]=data[end]
        data[end]=temp
        reverse(data,start+1,end-1)
    }
    return reverse
}

console.log(reverse(data,0,data.length-1))