interface Student { 
name: string; 
marks: number; 
} 
const students: Student[] = [ 
  { 
name: "Hari", marks: 90 }, 
  {  name: "Ravi", marks: 85 },{
    name: "Shivani", marks:79
  }
]
students.forEach((stu) => {
  console.log("Name:", stu.name, ", Marks:", stu.marks);
});
