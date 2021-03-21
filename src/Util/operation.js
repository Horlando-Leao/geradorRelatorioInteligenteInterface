import { myBase } from "./dataBase";

const nullBase = () =>{
    while(myBase.length){
        myBase.pop();
    }
};
const appendBase = (array) => {nullBase(); myBase.push(array); };
const getBase = () => myBase;

export {appendBase, getBase}