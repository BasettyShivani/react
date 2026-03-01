class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const s1 = new Student("Shivani", 21);
console.log(s1);