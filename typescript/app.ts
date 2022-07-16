//core type 
    //number type  1, 5.3 , -10
    // String type  "hi", 'hi', `hi`
    //boolean true, false. 
    //do not have app js window open with app ts cause duplicate error
    //https://github.com/microsoft/TypeScript/issues/24925
    export{}

function add(n1: number, n2:number){
    
    return n1 + n2;
};

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);

console.log(result);

