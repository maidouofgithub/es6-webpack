import { log } from "util";

//es5 常量的写法
Object.defineProperty(window,"PI2",{
    value:3.1415926,
    writable:false
})

console.log("es5 pai"+window.PI2);

//es6 常量
const PI = 3.1415926
console.log("es6 pai"+PI);

