/**
 * Estudo do operador logico AND
 * @author Michele Dourado
 */

 let receive 
 let sw1 = false
 let sw2 = false

 

 function Sw(receive){
     if(receive == 1 && sw1 == false){
         // a estrutura verifica o status das chaves se objeto sw1 for clicado e a condição inicial da chave desligada false liga a chave (troca a imagem status  da var sw1 para true)

         document.getElementById('sw1').src ='swon.png'
         
         sw1 = true
     } else if(receive == 1 && sw1 == true){
        document.getElementById('sw1').src ='swoff.png'
       
        sw1 =false
     }else if(receive == 2 && sw2 == false){
        document.getElementById('sw2').src ='swon.png'
       
        sw2 =true
     } else if(receive == 2 && sw2 == true){
        document.getElementById('sw2').src ='swoff.png'
    
        sw2 =false

        //and aqui coloco and final
     } if(sw1 == true && sw2 == true){
        document.getElementById('lamp').src='on.jpg'
     }else {
        document.getElementById('lamp').src='off.jpg'
     }
     
 } 