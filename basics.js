function add(n1, n2, showResult, phrase) {
    if (!showResult) {
        return n1 + n2;
    }
    else {
        console.log(phrase + n1 + n2);
    }
    return n1 + n2;
}
var num1 = 5;
var num2 = 2.8;
var printResult = false;
var phrase = "The sum is: ";
var result = add(num1, num2, printResult, phrase);
