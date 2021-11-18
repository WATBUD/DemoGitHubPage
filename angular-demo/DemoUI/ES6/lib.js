export const aString = 'test';

export function aFunction(){
  console.log('function test')
}

export const aObject = {a: 1}

export class aClass {
  constructor(name, age){
    this.name = name
    this.age = age
  }
}
//export var aClass =this;
var myModule = {};
myModule.myFunction = function (a,b) {
    return a + b;
};
//exports = myModule;