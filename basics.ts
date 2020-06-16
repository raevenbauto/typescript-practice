function add(n1: number,
             n2: number,
             showResult: boolean,
             phrase: string){

    if (!showResult){
        return n1+n2;
    }
    else{
        console.log(phrase + n1+n2);
    }

    return n1 + n2;
}

const num1 = 5;
const num2 = 2.8;
const printResult = false;
const phrase = "The sum is: ";

const result = add(num1, num2, printResult, phrase);
