
if (Meteor.isClient) {

       Template.horas.helpers({
              
       'hora': function tempo(){
         
         d = new Date();
         var horasVar = d.getHours();
         var minutosVar = d.getMinutes();
         var segundosVar = d.getSeconds();
         var relogioFinal = horasVar +" : "+ minutosVar +" : "+ segundosVar;

         if (minutosVar < 10){minutosVar = 0 + minutosVar};
         if (segundosVar < 10){segundosVar = 0 + segundosVar};
         

         //var hex = "#" + horasVar + minutosVar + segundosVar;
         //document.body.style.background = hex;

         console.log(horasVar, minutosVar, segundosVar);
         //setTimeout(function(){ tempo();}, 1000);
         return document.write(relogioFinal);
        
        
    }


  });



}

if (Meteor.isServer) {
     
            
}
