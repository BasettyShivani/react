function greetUser(name:string,title:string="Mr./Ms."): string {

    let type:string;
    if(title!=="")
        {
            type="Hello,"+ title +" "+ name+"!";
        }
        else{
            type="Hello, "+name+"!";
        }
   
    return type;
}
console.log(greetUser("Shivani"));
console.log(greetUser("Shivani", "Dr."));