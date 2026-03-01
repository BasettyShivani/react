class Student {
  readonly id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

const s1 = new Student(1, "Shivani", 21);
console.log(s1);