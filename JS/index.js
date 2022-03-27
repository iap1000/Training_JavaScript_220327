function clicou(element){
    document.getElementById(element).innerHTML = "TEXTO ALTERADO COM SUCESSO!!! Console.log escrito.";
    console.log("O texto foi alterado.")
}

function DW(){
    window.alert("Vai apagar o HTML !");
    document.write(4+4);
}

class cars {
    constructor(brand,color,power){
        this.brand = brand;
        this.color = color;
        this.power = power;
    }
    printItem(){
        return  this.brand+" "+this.color+" "+this.power;
    }
}
let vetcars = new Array();
vetcars[0] = new cars("fiat","blue",1000);
vetcars[1] = new cars("renaut","red",2000);
console.log(vetcars[0].printItem());
console.log(vetcars[1].printItem());

function imp(){

    const mouse = ["Azul", "optico", "wireless"];

    function printmouse(){
        return mouse[0]+" "+mouse[1]+" "+mouse[2];
    }
    document.getElementById("informatica").innerHTML = printmouse();

    
    document.getElementById("cars0").innerHTML = vetcars[0].printItem();
    document.getElementById("cars1").innerHTML = vetcars[1].printItem();

    
}



