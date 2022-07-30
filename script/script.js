const keys = document.querySelector('.calc-buttons');

keys.addEventListener('click', event=>{
    const {target} = event;
    const {value} = target;
    if(!target.matches('button')){
        return;
    }else{
       calculator.parseInput(value)



        // console.log(target.value);
        // document.querySelector('input').value += target.value;
    }
})

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value){

        switch(value){
            case '=':
                this.calcAnswer(this.displayText)
                break
            case 'AC':
                this.clearAll()
                break
            case '.':
                if(this.displayText == 0){
                    this.addText('0.')
                }else{
                    this.addText(value)
                }
                break;
        default:
            this.addText(value)
                break

              
        }
        
    
    },
    addText(value){
        if(this.displayText === '0'){
            this.displayText = ''
        }else if(this.prevTotal !== null){
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        if(isNaN(+(value)) && isNaN(+(this.displayText))){
            if(isNaN(this.displayText.slice(-1))){
                return;
            }

        };
        this.displayText +=value;
        this.outputText(this.displayText)


    },
    outputText(text){
        document.querySelector('input').value = text
    },
    calcAnswer(equation){

        let result = Function("return " + equation)()
        this.outputText(result)


        //bad practice EVAL
        // let sum= eval(equation)
        // document.querySelector('input').value = sum
    },
    clearAll(){
        this.displayText="0",
        this.prevTotal=null,
        this.outputText(this.displayText)
    }
}

// document.querySelector('.eq').addEventListener('click', eq)

// function eq(){
    

// }








// let inputVal = document.querySelector('input').value

// const breakdownButton = document.querySelectorAll('.button');
// breakdownButton.forEach(function(btn) {
//   btn.addEventListener('click', function() {
//     document.querySelector('input').value += btn.value
//   });


// });

// let divBucket = []
// document.querySelector('.div').addEventListener('click', divfunc)

// function divfunc(){
//    divBucket.push(document.querySelector('input').value)
// }
// console.log(divBucket);

//  document.querySelector('.eq').addEventListener('click', sum)

// function sum(){
//     divBucket/= 
//  }
//  document.querySelector('.ac').addEventListener('click', ac)

// function ac(){
//      document.querySelector('input').value = 0
//  }