let array=[1,10,2,5,28,19,7,9,15,22]

function bubblesort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let tmp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tmp
            }
        }
    }
    return arr;
}
//time complexity-O(n*n) for average and worst case
//space complexity- O(1)

console.log(bubblesort(array))