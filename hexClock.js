if(Meteor.isClient){

        Meteor.startup(function tempo(){

            
            var d = new Date();
            var horas = d.getHours();
            var minutos = d.getMinutes();
            var segundos = d.getSeconds();

               if(horas < 10){ 
                    horas = "0" + horas
                  };
               if(minutos < 10) { 
                    minutos = "0" + minutos
                  };
               if(segundos < 10) { 
                    segundos = "0" + segundos
                  };

            relogioFinal = horas +" : "+ minutos +" : "+ segundos;
            
            hex = "#" + horas + minutos + segundos;

            // Atualiza valor da variavel "relogioFinal" a cada 1seg
            setInterval(function(){Session.set('atu', relogioFinal)}, 1000);

            // Atualiza valor de variavel "hex" a cada 1seg
            setInterval(function(){Session.set('atuHex', hex)}, 1000);

            document.body.style.background = hex;
            
            // loop da função
            setTimeout(function(){tempo();}, 1000);
           

      });

                Template.horas.helpers({
                    'atu': function(){

                          return Session.get('atu')
                          },
                    'atuHex': function(){
                          return Session.get('atuHex')
                          }

                });
}       

if (Meteor.isServer) {
        
        //nope
}
