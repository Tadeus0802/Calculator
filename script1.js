let num1;
let num2;
const suma = document.getElementById("sumar");
const resta = document.getElementById("restar");
const multi = document.getElementById("multi");
const divi = document.getElementById("divi");

const in1 = document.getElementById("num1"); 
const in2 = document.getElementById("num2");

suma.addEventListener("click", (event)=>{
    event.preventDefault();
    num1 = in1.value;
    num2 = in2.value;

    in1.value='';
    in2.value='';
    function Suma(){
        const op = document.getElementById("res");
        const res = parseInt(num1) + parseInt(num2);
        return op.value=res;
    }
    
    Suma();
})


resta.addEventListener("click", (event)=>{
    event.preventDefault();
    num1 = in1.value;
    num2 = in2.value;

    in1.value='';
    in2.value='';
    function Resta(){
        const op = document.getElementById("res");
        const res = parseInt(num1) - parseInt(num2);
        return op.value=res;
    }
    Resta();
});

multi.addEventListener("click", (event)=>{
    event.preventDefault();
    num1 = in1.value;
    num2 = in2.value;

    in1.value='';
    in2.value='';
    function Multi(){
        const op = document.getElementById("res");
        const res = parseInt(num1) * parseInt(num2);
        return op.value=res;
    }
    Multi();
});


divi.addEventListener("click", (event)=>{
    event.preventDefault();
    num1 = in1.value;
    num2 = in2.value;

    in1.value='';
    in2.value='';
    function Divi(){
        const op = document.getElementById("res");
        const res = parseInt(num1) / parseInt(num2);
        return op.value=res;
    }
    Divi();
});

