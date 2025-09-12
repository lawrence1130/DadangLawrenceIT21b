class erson{
    name;
    age;
    occupation;
    message;

    constructor(name, age,occupation,message){
        this.name=name;
        this.age=age;
        this.occupation=occupation;
        this.message=message;
    }

    displayInfo(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Message: " + this.message);
        console.log("------------------------")
    }

    showName(){
        console.log(this.name);
    }

    showMessage(){
        console.log(this.message);
    }
}
    const person1 = new person("Mr.D",29,"Programer","wahhhhhh");
    const person2 = new Person("Mr. C",30,"farmer","keep");

    person1.displayInfo();
    person2.displayInfo();
    