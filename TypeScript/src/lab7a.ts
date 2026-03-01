function greetUser(name: string, title: string): string {
  if (title) {
    return "Hello"+" "+title;
  } else {
    return "Hello"+" "+name;
  }
}
console.log(greetUser("maya"))
console.log(greetUser("maya", "Dr."))