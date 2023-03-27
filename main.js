function sortArray(array) {
    let oddarray = [];
    let result = new Array(array.length).fill("");
    for(let i = 0; i<array.length; i++){
        if(array[i] % 2 === 0){
            result.splice(i,1,array[i]);
        }else{
            oddarray.push(array[i]);
        }
    }
    oddarray.sort((a, b) => {
        return a - b;
});
    for(let i = 0; i<oddarray.length; i++){
        for(let j = 0; j<result.length;j++){
            if(result[j] === ""){
                result.splice(j,1,oddarray[i]);
                i++
            }
        }
    }
    return result;
}
console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ]));