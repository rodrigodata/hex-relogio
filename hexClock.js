if(Meteor.isClient){

        Meteor.startup(function tempo(){

            // Data atual
            var d = new Date();
            // Retorna o valor "horas"
            var horas = d.getHours();
            // Retorna o valor "minutos"
            var minutos = d.getMinutes();
            // Retorna o valor "segundos"
            var segundos = d.getSeconds();


               // Quando o valor da variavel horas for menor que 10, adicionar um zero a frente.
               // ou seja, deixar com dois digitos para formar corretamente a cor.
               if(horas < 10){ 
                    horas = "0" + horas
                  };
               // Quando o valor da variavel minutos for menor que 10, adicionar um zero a frente.
               if(minutos < 10) { 
                    minutos = "0" + minutos
                  };

               // Quando o valor da variavel segundos for menor que 10, adicionar um zero a frente.   
               if(segundos < 10) { 
                    segundos = "0" + segundos
                  };

            // Formatação da hora para DOM.
            relogioFinal = horas +" : "+ minutos +" : "+ segundos;
            
            // Formatação do código HEX tanto para o DOM quanto para alterar as cores.
            hex = "#" + horas + minutos + segundos;

            // Atualiza valor da variavel "relogioFinal" a cada 1 segundo
            setInterval(function(){Session.set('atu', relogioFinal)}, 1000);

            // Atualiza valor de variavel "hex" a cada 1 segundo
            setInterval(function(){Session.set('atuHex', hex)}, 1000);

            // Atualiza a cor no body da página. De acordo com o valor da variavel "hex".
            document.body.style.background = hex;
            
            // loop da função tempo() a cada 1 segundo.
            setTimeout(function(){tempo();}, 1000);
           

      });

                Template.horas.helpers({
                    'atu': function(){
                          // Retorna o valor atual da variavel relogioFinal para o DOM.
                          return Session.get('atu')
                          },
                    'atuHex': function(){
                          // Retorna o valor atual da variavel atuHex para o DOM.
                          return Session.get('atuHex')
                          }

                });
}       

if (Meteor.isServer) {
        
        //nope
}
