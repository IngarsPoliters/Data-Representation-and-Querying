//Class object
class Vehicle{
    //constructor
    constructor(make, model, year){
        //assigned local instance variables
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //display information of the vehicle
    Information(){
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}
// Class Cars object inhereting Vehicle
class Cars extends Vehicle{
    //constructor
    constructor(make, model, year, doors){
        //Invoking constructor from my Superclass(Parent Class Vehicle)
        // and assigning new local instance variable
        super(make, model, year);
        this.doors = doors;
    }
    
    Information(){
        // Invoking my parent method from inherited class 
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}
// new instance of my class Cars
// invoke my method "Information" from class Cars. Inheritance at work
let myCar = new Cars('BMW','320d','2012', '5');
myCar.Information();
