export class Vihacle {
    numOfWeels;
    inginSize;
    colour;
    constructor(numOfWeels, inginSize, colour) {
        this.numOfWeels = numOfWeels;
        this.inginSize = inginSize;
        this.colour = colour;
    }
    vihacleDeteils() {
        return `the vihacle has ${this.numOfWeels} ${this.inginSize} and her${this.colour} `
    }
static getLargetsInginSizeObject(objectArray){
    let LargetsInginSizeObject;
    let biggestEngine = 0
for(let i =0; i<objectArray.lenght; i++){
    if(objectArray[i].inginSize > biggestEngine){
        biggest = objectArray[i].inginSize;
        LargetsInginSizeObject=objectArray[i];
    }
 

}
    return LargetsInginSizeObject

}

}
