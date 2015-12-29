
if (Meteor.isClient) {

       Template.horas.helpers({

       'hora': function tempo(){

         d = new Date();
         var horasVar = d.getHours();
         var minutosVar = d.getMinutes();
         var segundosVar = d.getSeconds();
         var relogioFinal = horasVar +" : "+ minutosVar +" : "+ segundosVar;
     

         console.log(horasVar, minutosVar, segundosVar);
         //setTimeout(function(){ tempo();}, 1000);
         return document.write(relogioFinal);


    }


  });



}

if (Meteor.isServer) {


}
