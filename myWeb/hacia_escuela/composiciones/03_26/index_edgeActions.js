/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$('.center-wrapper').css("overflow","hidden");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_escalon1}", "click", function(sym, e) {
         sym.$("pop1").fadeIn();
         sym.$("bt_audio1").fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_escalon2}", "click", function(sym, e) {
         sym.$("pop2").fadeIn();
         sym.$("bt_audio2").fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_escalon3}", "click", function(sym, e) {
         sym.$("pop3").fadeIn();
         sym.$("bt_audio3").fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_escalon4}", "click", function(sym, e) {
         sym.$("pop4").fadeIn();
         sym.$("bt_audio4").fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_escalon5}", "click", function(sym, e) {
         sym.$("pop5").fadeIn();
         sym.$("bt_audio5").fadeIn();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pop5}", "click", function(sym, e) {
         sym.$("pop5").fadeOut();
         sym.$("bt_audio5").fadeOut();
         sym.getSymbol("bt_audio5").stop("up");
         
         $("audio").each(function(){
             $(this).get(0).pause();
         });
         sym.getSymbol("per").getSymbol("boca").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pop4}", "click", function(sym, e) {
         sym.$("pop4").fadeOut();
         sym.$("bt_audio4").fadeOut();
         sym.getSymbol("bt_audio4").stop("up");
         
         $("audio").each(function(){
             $(this).get(0).pause();
         });
         $("audio").prop("currentTime",0);
         sym.getSymbol("per").getSymbol("boca").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pop3}", "click", function(sym, e) {
         sym.$("pop3").fadeOut();
         sym.$("bt_audio3").fadeOut();
         sym.getSymbol("bt_audio3").stop("up");
         
         $("audio").each(function(){
             $(this).get(0).pause();
         });
         $("audio").prop("currentTime",0);
         sym.getSymbol("per").getSymbol("boca").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pop2}", "click", function(sym, e) {
         sym.$("pop2").fadeOut();
         sym.$("bt_audio2").fadeOut();
         sym.getSymbol("bt_audio2").stop("up");
         
         $("audio").each(function(){
             $(this).get(0).pause();
         });
         $("audio").prop("currentTime",0);
         sym.getSymbol("per").getSymbol("boca").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pop1}", "click", function(sym, e) {
         sym.$("pop1").fadeOut();
         sym.$("bt_audio1").fadeOut();
         
         sym.getSymbol("bt_audio1").stop("up");
         
         $("audio").each(function(){
             $(this).get(0).pause();
         });
         $("audio").prop("currentTime",0);
         sym.getSymbol("per").getSymbol("boca").stop(0);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Precargador'
   (function(symbolName) {   
   
   })("Precargador");
   //Edge symbol end:'Precargador'

   //=========================================================
   
   //Edge symbol: 'slide1'
   (function(symbolName) {   
   
      

   })("slide_1");
   //Edge symbol end:'slide_1'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'boca'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play("ini");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("boca");
   //Edge symbol end:'boca'

   //=========================================================
   
   //Edge symbol: 'ojos'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("ojos");
   //Edge symbol end:'ojos'

   //=========================================================
   
   //Edge symbol: 'per'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("per");
   //Edge symbol end:'per'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'bt_audio'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_ht_spot}", "click", function(sym, e) {
         		sym.getComposition().getStage().getSymbol("per").getSymbol("boca").play("ini");
         var soundId = sym.getSymbolElement().attr( "title" );
         var currentAudio=sym.getComposition().getStage().$(soundId)[0].currentTime;
         var duracion= sym.getComposition().getStage().$(soundId).duration;
         if (duracion== currentAudio){
         	sym.stop("up");
         	sym.getComposition().getStage().getSymbol("per").getSymbol("boca").stop(0);
         }
         
         sym.getComposition().getStage().$(soundId).on('ended', function() {
         		sym.stop("up");
         		sym.getComposition().getStage().getSymbol("per").getSymbol("boca").stop(0);
         });
         $("audio").prop("muted", true);
         if (sym.getComposition().getStage().$(soundId)[0].paused) {
         	//elimina el mute del audio
         	sym.getComposition().getStage().$(soundId)[0].muted = false;
         	sym.getComposition().getStage().$(soundId)[0].volume=0.7;
         	sym.getComposition().getStage().$(soundId)[0].play();
         	sym.stop("down");
         		sym.getComposition().getStage().getSymbol("per").getSymbol("boca").play("ini");
         } else {
         //activar para pausar en vez de reiniciar
         	sym.getComposition().getStage().$(soundId)[0].pause();
         	sym.stop("up");
         		sym.getComposition().getStage().getSymbol("per").getSymbol("boca").stop(0);
         }
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("bt_audio");
   //Edge symbol end:'bt_audio'

})(jQuery, AdobeEdge, "EDGE-5531445");