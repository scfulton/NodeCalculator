class Calculator {
    constructor(digit){
        this.answer = 0;
        this.register = [];
        this.register.push(digit)
        // console.log("pushed " + digit + " onto register")
        // console.log('this.register '+  this.register)
    }
    
    add(number){
        this.register.push('+');
        this.register.push(number);
        return this;
    }

    subtract(number){
        this.register.push('-');
        this.register.push(number);
        return this;
    }

    multiply(number){
        this.register.push('*');
        this.register.push(number)
        return this;
    }
    divide(number){
        this.register.push('/');
        this.register.push(number);
        return this;
    }
    

    equals(){
        let joined = [];
        joined = this.register.join('');
        let evaluation = eval(joined);
        this.answer = evaluation;
        // console.log('Answer = ' , this.answer);

        return this.answer;
    }

    clear(){
        this.register = [];
        this.answer = 0;
        return this;
    }
}

module.exports = Calculator;

const newCalc = new Calculator(5).equals();
console.log('new calc = ', newCalc)