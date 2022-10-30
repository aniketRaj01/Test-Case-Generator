const TestCases = document.getElementById('int-test-cases');
const IncludeTestCases = document.getElementById('int-include-test-cases');
const MinValElement = document.getElementById('int-min-val');
const MaxValElement = document.getElementById('int-max-val');
const outputPannel = document.getElementById('outputPannel');
let includeTest = -1, testCasesCount = -1, minValue = -1, maxValue = -1;

function getRandomNum(mn, mx){
    return Math.floor(Math.random() * (mx - mn +1)) + mn;
}

function validationInt(testCasesCount, includeTest, minValue, maxValue){
    // alert(testCasesCount)
    
    if(!testCasesCount) {
        alert("Provide test case count");
        return 1;
    }
    if(!includeTest && includeTest != 0) {
        alert("Provide test inclusion information");
        return 1;
    }
    if(!minValue && minValue != 0) {
        alert("Provide minimum value");
        return 1;
    }
    if(!maxValue && maxValue != 0) {
        alert("Provide minimum value");
        return 1;
    }
    if(maxValue<minValue){
        alert("minimum can not be greater than maximum")
    }
    return 0;
}

function copyIt(){
    navigator.clipboard.writeText(outputPannel.value);
}

function MainInt(){
    testCasesCount = parseInt(TestCases.value);
    includeTest = parseInt(IncludeTestCases.value);
    minValue = parseInt(MinValElement.value);
    maxValue = parseInt(MaxValElement.value);
    if(validationInt(testCasesCount, includeTest, minValue, maxValue)) return;
    let ans = "";
    if(includeTest) ans += testCasesCount.toString() + '\n';
    for(let i=0; i<testCasesCount; i++){
        ans += getRandomNum(minValue, maxValue).toString();
        if(i!=testCasesCount-1) ans += '\n';
    }
    outputPannel.textContent = ans;
}
