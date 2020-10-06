//class object
class BMI {
    //constructor 
    constructor(height, weight) {
        // assigned local instance variables
        this.height = height;
        this.weight = weight;
    }

    // method to calculate bmi
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi; 
    }
}
// Creating object, new instance
let MyBmi = new BMI(2, 90);
// Invoking calculateBMI class and displaying the result to the console
console.log(myBmi.calculatedBMI());