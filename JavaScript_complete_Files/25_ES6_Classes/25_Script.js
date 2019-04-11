// Class Car
class Car {

    // Special method to construct a Car Object
    constructor(color,engineCapacity,fuel,model){
        this.color = color;
        this.engineeCapacity = engineCapacity;
        this.fuel = fuel;
        this.model = model;
    }

    specification(){
        let spec = `Color : ${this.color}
                    EngineCapacity : ${this.engineeCapacity}
                    Fuel : ${this.fuel}
                    Model : ${this.model}`;
        return spec;
    }

    accelerate(){
        console.log('Car is Accelerated to 100Km/hr');
    }

    break(){
        console.log('Car is made a break');
    }

    move(){
        console.log('Car is moving');
    }
}

// Create a Car Object
let car1 = new Car('white','1300cc','Diesel','XL56');
let car1Spec = car1.specification();
console.log(car1Spec);
car1.move();
car1.accelerate();
car1.break();

// New Object
let car2 = new Car('Black','1300CC','Petrol','XD45');
let car2Spec = car2.specification();
console.log(car2Spec);
car2.move();
car2.accelerate();
car2.break();