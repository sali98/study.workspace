class HelloTypeScript{
    helloString: string;
    constructor(message: string){
        this.helloString = message;
    }

    hello(){
        return this.helloString;
    }
}

let myName: string = "Sa Li"
let myAge: number = 28
let setence: string = `Hello, my name is ${myName}. I will be ${myAge + 1} years old next year`;
let helloTypeScript = new HelloTypeScript(setence);
document.body.innerHTML = helloTypeScript.hello();
