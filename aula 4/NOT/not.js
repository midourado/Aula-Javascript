
/**
 * Estudo do operador logico NOT
 * @author Michele Dourado
 */

 let sw1 = false // variavel de apoio a troca da imagem da chave

 function SW(){
    if(sw1 == false){
        document.getElementById('sw1').src='swon.png'
        sw1 = true

     }else{
        document.getElementById('sw1').src='swoff.png'
        sw1 = false
     }
     if(!sw1){
        document.getElementById('lamp').src='on.jpg'
       
     }else{
        document.getElementById('lamp').src='off.jpg'
        
     }

    }

 
   