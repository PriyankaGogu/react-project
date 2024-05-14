class Abc {


    getData(){
       console.log("this vakue" , this)

       setTimeout(()=>{
       console.log("this vakue" , this)

       },0)


    }
}

var obj1 =  new Abc()
var obj2 =  new Abc()

obj1.getData()
obj2.getData()