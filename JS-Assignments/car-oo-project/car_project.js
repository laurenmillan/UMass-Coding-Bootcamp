// Classes are a "blueprint" of functionality. We define a class which will act as a template for a particular type of object we want to create

                                                // ** OO Challenge **

// ** PART I **

// Create a class for vehicle. Each vehicle instance should have properties: make, model, year

// use a capital letter to indicate it is a class
class Vehicle {
    // we use keyword constructor when we want to make a new Vehicle, which expects three values: make, model, year
    // the constructor exists to accept data when a new Vehicle is created
    // the values are passed in and they are set as specific properties on the instance
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // each vehicle instance has access to method honk(), which returns the string "Beep"
    honk() {
        return "Beep";
    }
    // each vehicle instance has access to method toString(), which returns the string containing make, model, year
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

// ** PART II **

// Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a properry called numWheels which has a value of 4

// any methods we define on the super class that we extend from, we have access to on instances of Vehicle

// the extends keyword implies it has access to the methods from the above class Vehicle
class Car extends Vehicle {
    // Terminology: the super class is Vehicle, the subclass is Car
    constructor(make, model, year) {
        // super calls the constructor of the class Vehicle
        super(make, model, year); // always call super before referencing this if we're extending a class
        this.numWheels = 4;
    }
}

// ** PART III **

// Create a class for a Motorcycle. This class should inherit from Vehicle and each motorcycle instance should have a property called numWheels which has a value of 2. It should also have a revEngine method which returns “VROOM!!!”

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!";
    }
}

// ** PART IV **

// Create a class for a Garage. It should have a property called vehicles which will store an array of vehicles, and a property called capacity which is a number indicating how many vehicles will fit in the garage. When you create a garage, vehicles will always be empty; you only need to provide the capacity.

// A garage should also have an add method, which attempts to add a vehicle to the array of vehicles. However, if you try to add something which is not a vehicle, the garage should return the message “Only vehicles are allowed in here!”. Also, if the garage is at capacity, it should say “Sorry, we’re full.”

class Garage {
    constructor(capacity) {
        this.vehicles = []; // stores an array of vehicles
        this.capacity = capacity; // the two properties here are vehicles and capacity
    }
    // the method is add, which attempts to add a vehicle to the array of vehicles
    add(newVehicle) { 
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added";
    }
}

// ** Summary: use the extends keyword, you extend some other class. When you do that, and when we call super within the constructor of the child (in this example: Motorcycle), that will call the parent constructor (in this example: Vehicle). The very top portion of the code runs. 
