/**
 * Calculo do IMC
 * @AUTHOR mICHELE dOURADO
 */

 let peso, altura, imc

 function Calcular(){
     peso = Number (frmImc.txtPeso.value.replace(".","."));
     altura = Number (frmImc.txtAltura.value.replace(".","."));
     imc = peso/(altura*altura)
     frmImc.txtImc.value = imc.toFixed(2)
 }