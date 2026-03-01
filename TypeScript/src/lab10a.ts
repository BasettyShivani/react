interface User {
  readonly id: number;
  name: string;
  age?: number;
}
const user: User = {
  id: 1,
  name: "Hari"
};
console.log("ID:", user.id);
console.log("Name:", user.name);
console.log("Age:", user.age);
user.id = 2;