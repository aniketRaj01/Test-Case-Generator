const ArrayTestCases = document.getElementById('array-test-cases');
const ArrayIncludeTestCases = document.getElementById('array-include-test-cases');
const ArrayNumElements = document.getElementById('array-num-elements');
const ArrayIncludeNumElements = document.getElementById('array-include-num-elements');
const ArrayIsPermutation = document.getElementById('array-is-permutation')
const ArrayMinValElement = document.getElementById('array-min-val');
const ArrayMaxValElement = document.getElementById('array-max-val');
const ArrayOutputPannel = document.getElementById('outputPannel');
let arrayIncludeTest = -1, arrayTestCasesCount = -1, arrayNumElements = -1, arrayIncludeNumElements = -1, arrayIsPermutation = -1, arrayMinValue = -1, arrayMaxValue = -1;

function getRandomNum(arrayMinValue, arrayMaxValue){
    return Math.floor(Math.random() * (arrayMaxValue - arrayMinValue +1)) + arrayMinValue;
}

function validationArray(arrayTestCasesCount, arrayIncludeTest, arrayNumElements, arrayIncludeNumElements, arrayIsPermutation, arrayMinValue, arrayMaxValue){
    if(!arrayTestCasesCount) {
        alert("Provide test case count");
        return 1;
    }
    if(!arrayIncludeTest && arrayIncludeTest != 0) {
        alert("Provide test inclusion information");
        return 1;
    }
    if(!arrayNumElements){
        alert("provide the number of elements in the array");
        return 1;
    }
    if(!arrayIncludeNumElements && arrayIncludeNumElements != 0){
        alert("Provide if to include number of elements or not");
        return 1;
    }
    if(!arrayIsPermutation && arrayIsPermutation != 0){
        alert("provide if the array is permutation of not");
        return 1;
    }
    if(!arrayMinValue && arrayMinValue != 0) {
        alert("Provide minimum value");
        return 1;
    }
    if(!arrayMaxValue && arrayMaxValue != 0) {
        alert("Provide minimum value");
        return 1;
    }
    if(arrayMaxValue<arrayMinValue){
        alert("minimum can not be greater than maximum")
    }
    return 0;
}

function copyIt(){
    navigator.clipboard.writeText(ArrayOutputPannel.value);
}
// function getRandomArray(maxValue, minValue){

// }
function MainArray(){
    arrayTestCasesCount = parseInt(ArrayTestCases.value);
    arrayIncludeTest = parseInt(ArrayIncludeTestCases.value);
    arrayNumElements = parseInt(ArrayNumElements.value);
    arrayIncludeNumElements = parseInt(ArrayIncludeNumElements.value);
    arrayIsPermutation = parseInt(ArrayIsPermutation.value);
    arrayMinValue = parseInt(ArrayMinValElement.value);
    arrayMaxValue = parseInt(ArrayMaxValElement.value);

    let ans = "";

    if(arrayIncludeTest) ans += arrayTestCasesCount.toString() + '\n';

    if(arrayIsPermutation){
        if(validationArray(arrayTestCasesCount, arrayIncludeTest, arrayNumElements, arrayIncludeNumElements, arrayIsPermutation, 0, 0)) return;

        ArrayMinValElement.value = "1";
        ArrayMaxValElement.value = ArrayNumElements.value;
        for(let i = 0; i<arrayTestCasesCount; i++){
            let arr = [];
            if(arrayIncludeNumElements) ans += arrayNumElements.toString() + '\n';
            for(let j = 1; j <= arrayNumElements; j++) arr.push(j);
            for(let j = 1; j <= arrayNumElements; j++){
                let x = getRandomNum(0, arrayNumElements-j);
                ans += arr[x].toString();
                arr.splice(x, 1);
                ans += ' ';
            }
            if(i != arrayTestCasesCount - 1) ans += '\n';
        }
        ArrayOutputPannel.textContent = ans;
        return;
    }
    if(validationArray(arrayTestCasesCount, arrayIncludeTest, arrayNumElements, arrayIncludeNumElements, arrayIsPermutation, arrayMinValue, arrayMaxValue)) return;

    for(let i=0; i<arrayTestCasesCount; i++){
        if(arrayIncludeNumElements) ans += arrayNumElements.toString() + '\n';
        for(let j = 0; j<arrayNumElements; j++){
            ans += getRandomNum(arrayMinValue, arrayMaxValue).toString() + ' ';
        }
        if(i != arrayTestCasesCount - 1) ans += '\n';
    }
    ArrayOutputPannel.textContent = ans;
}
