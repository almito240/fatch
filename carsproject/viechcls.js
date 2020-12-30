

class Airplan extends Vihacle {
    name;
    constructor(name, numOfWeels, inginSize, colour) {
        super(numOfWeels, inginSize, colour)
        this.name = name;
    }
    plainDeteile() {
        return `${super.vihacleDeteils()} name is ${this.name}`
    }
    get changeCharto() {
        return this.changeChar();
    }
    changeChar() {
        return this.name.toUpperCase()
    }
}

class Jeep extends Vihacle {
    name;
    constructor(name, numOfWeels, inginSize, colour) {
        super(numOfWeels, inginSize, colour)
        this.name = name;
    }
    jeepDeteile() {
        return `${super.vihacleDeteils()} name is ${this.name}`
    }

}
class Truck extends Vihacle {
    name;
    constructor(name, numOfWeels, inginSize, colour) {
        super(numOfWeels, inginSize, colour)
        this.name = name;
    }
    truckDeteile() {
        return `${super.vihacleDeteils()} name is ${this.name}`
    }
}
// function getvalue(){
// objectFromUser.name=nameId.value;
// objectFromUser.numOfWeels=numOfWeelsId.value;
// objectFromUser.inginSize=inginSizeId.value;
// objectFromUser.colour=colourId.value;
// console.log(objectFromUser);
// }
const plain1 = new Airplan("jambo774", 2, 4000, "yellow")
const jeep1 = new Jeep("mersedes", 4, 2000, "blue")
const truck1 = new Truck("isuzu", 8, 1500, "black")
const objectFromUser = new Airplan()


const vihacles = [plain1, jeep1, truck1]
console.log(Vihacle.getLargetsInginSizeObject(vihacles));





function getVihacleType() {
    let myObject;

    if (airpalanchecked.checked == true) {
        myObject = new Airplan(nameId.value, numOfWeelsId.value, inginSizeId.value, colourId.value);
    } else if (jeepchecked.checked == true) {
        myObject = new Jeep(nameId.value, numOfWeelsId.value, inginSizeId.value, colourId.value)
    } else {
        myObject = new Truck(nameId.value, numOfWeelsId.value, inginSizeId.value, colourId.value)
    }
    console.log(myObject);

}
trIndex = 0
function addNewCarToTable() {
    console.log("hello");
         const userObj =getVihacleType(selectedId.value);
         let trId=`trId${trIndex++}`;
       tableId.innerHTML+=`<tr id="${trId}"></tr>`
         for (const key in userObj){
             document.getElementById(trId)+=`<td>${userObj[key]}</td>`
         }
         document.getElementById(trId).innerHTML+=`<td>${selectedId.value}</td>`
}

function getVihacleType(param) {
    switch (param) {
        case "airplain":
            return new Airplan(nameId.value, numOfWeelsId.value, inginSizeId.value, colourId.value);
        case "jeep":
            return new Jeep(nameId.value, numOfWeelsId.value, inginSizeId.value, colourId.value);
        case "truck":
            return new Truck(nameId.value, numOfWeelsId.value, inginSizeId.value, colourId.value);
            default:
            break;
    }

}


function alertCar(param){
    setTimeout(()=>alert(param.jeepDeteile()),3000)
}
alertCar(Jeep)

