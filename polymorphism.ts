{
    class Person{
        getSleep(){
            console.log(`I am sleeping for 8 hours per day`);
        }
    }

    class Student extends Person{
        getSleep(){
            console.log(`I am sleeping for 7 hours per day`);
        }
    }

    class Developer extends Person{
        getSleep(){
            console.log(`I am sleeping for 6 hours per day`);
        }
    }

    const getSleepingHour = (param: Person) => {
        param.getSleep();
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepingHour(person1);
    getSleepingHour(person2);
    getSleepingHour(person3);

    class Shape{
        getArea(): number {
            return 0;
        }
    }

    class Circle extends Shape{
        radius: number;
        constructor(radius: number){
            super();
            this.radius = radius;
        }

        getArea(): number {
            return Math.PI*this.radius*this.radius;
        }
    }

}