// 
function greet(who:string){
    console.log('Hello', who)
}

//interface defines a contract specifying the shape of an object
//do not include implementation details
// serves as type-checking tool during development
//specifies names, types and optionality of names and methods the object must have
interface User{
    name:string,
    id:number
}

interface State {
    name:string;
    capital:string;
}

const states: State[] = [
    {name:'Alabama', capital:'Montgomery'},
    {name:'Alaska', capital:'Juneau'},
    {name:'Arizona', capital:'Phoenix'},
    {name:'Colorado', capital:'Denver'},
    {name:'Kansas', capital:'Topeka'},
    {name:'Maryland', capital:'Annapolis'},

];

for(const state of states){
    console.log(state.capital);
}