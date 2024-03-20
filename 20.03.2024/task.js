let a=20
let b=50
let c=50
 a>b&&a>c?console.log("a greater"):
 b>a && b>c?console.log("b greater"):
 a==b&&a==c&&b==c?console.log(" a b c equal"):
 a==b&&a>c?console.log("a and b equal or greater than c"):
 a==c&&a>b?console.log("a and c equal or greater than  b"):
 b==c&&b>a?console.log("b and c equal or greater than a"):
 console.log("c greater")
         
            or

           let a=20
           let b=50
           let c=55
           let result;
         if (a>b&&a>c){
            result=("a greater")
         }else if(b>a && b>c){
            result=("b greater")
         }else if (a==b&&a==c&&b==c){
            result=(" a b c equal")
         }else if(a==b&&a>c){
            result=("a and b equal or greater than c")
         }else if (a==c&&a>b){
            result=("a and c equal or greater than  b")
         }else if(b==c&&b>a){
             result=("b and c equal or greater than a")
         }else{
            result=("c greater")
         }
         console.log(result)
            
         




 

let number=-15
number>=0?console.log("positive number"):console.log("negative number")
        
                          or
      
                        let number=2
                        let numbertype;
                        if(number>=0){
                            numbertype=( "positive number")
                        }else{
                            numbertype=( "negative number")
                        }

                        console.log(numbertype)








let Isloogeed="false"
Isloogeed=="true"?console.log("welcome back!"):
console.log("Please log in.")

         or

        let Isloogeed= "false"
        let result;
      if(Isloogeed=="true" ){
        result="welcome back!"
      }else{
        result="Please log in."
      }
      console.log(result)

             





let dayofweek="sunday"
dayofweek=="saturday"||dayofweek=="sunday"?
console.log("weekend"):console.log("not weekend")

           or


        let dayofweek="sunday"
        let day ;
        if(dayofweek=="saturday"||dayofweek=="sunday"){
            day="weekend"
        }else{
            day="not weekend"
        }
        console.log(day)
