function hello(a:number,b:number){
    if(a>b){
        if(a%2==0){
            return "even"
        }
    }
    else{
        if(b%2==0){
            return "even"
        }
        else{
            return "odd"
        }
    }
}
console.log(hello(10,5))
