if(Meteor.isClient){

        Meteor.startup(function tempo(){

            
            d = new Date();
            horasVar = d.getHours();
            minutosVar = d.getMinutes();
            segundosVar = d.getSeconds();

               if(horasVar < 10){ 
                    horasVar = "0" + horasVar
                  };
               if(minutosVar < 10) { 
                    minutosVar = "0" + minutosVar
                  };
               if(segundosVar < 10) { 
                    segundosVar = "0" + segundosVar
                  };

            relogioFinal = horasVar +" : "+ minutosVar +" : "+ segundosVar;
            
            hex = "#" + horasVar + minutosVar + segundosVar;
            console.log("Cor da data atual em HEX é: " + hex);

            document.body.style.background = hex;
            
           
            setTimeout(function(){tempo();}, 1000);
            return relogioFinal;
        ;

          


      });

      
}       

if (Meteor.isServer) {
      

}
