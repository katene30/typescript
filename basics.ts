const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

const printResult = true
const resultPhrase = "Result is: "


function add(num1: number,num2: number, showResult: boolean, resultPhrase: string){
    const result = num1 + num2
    if(showResult){
        console.log(resultPhrase + result)
    }else{

        return result
    }
}



button.addEventListener("click", () => {
    add(+input1.value, +input2.value,printResult, resultPhrase)
})
