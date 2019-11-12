const Calculator = require('./Calculator');

describe (' calculator has all methods defined', ()=> {
    const subject = new Calculator(5)
    test(' has a getter on register called equals', ()=>{
        expect (subject.equals().toBeDefined)
    })
    test(' has a add function', ()=>{
        expect (subject.add(2).toBeDefined)
    })
    test(' has a subtract function', ()=>{
        expect (subject.subtract(2).toBeDefined)
    })
    test(' has a multiply function', ()=>{
        expect (subject.multiply(2).toBeDefined)
    })
    test(' has a division function', ()=>{
        expect (subject.divide(2).toBeDefined)
    })
    test(' has a clear function', ()=>{
        expect (subject.clear().toBeDefined)
    })
})

describe (' calculator performs operations', ()=> {
    
    test(' returns 10 after equals', ()=>{
        const subject = new Calculator(10)
        expect (subject.equals()).toEqual(10)
    })
    test(' returns (10 + 2)', ()=>{
        const subject = new Calculator(10)
        expect (subject.add(2).equals()).toEqual(12)
    })
    test('returns (10 - 2)', ()=>{
        const subject = new Calculator(10)
        expect (subject.subtract(2).equals()).toEqual(8)
    })
    test(' returns (10 * 2)', ()=>{
        const subject = new Calculator(10)
        expect (subject.multiply(2).equals()).toEqual(20)
    })
    test('returns (10 / 2)', ()=>{
        const subject = new Calculator(10)
        expect (subject.divide(2).equals()).toEqual(5)
    })
    

})