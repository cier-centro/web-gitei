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

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1877, function(sym, e) {
         sym.stop("home");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2869, function(sym, e) {
         sym.stop("home");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3878, function(sym, e) {
         sym.stop("home");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bt1}", "click", function(sym, e) {
         sym.play("pop1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "click", function(sym, e) {
         sym.playReverse();
         
         $("audio").each(function(){
             $(this).get(0).pause();
         });
         sym.getSymbol("bt_audio3").stop("up");
         sym.getSymbol("bt_audio2").stop("up");
         sym.getSymbol("bt_audio1").stop("up");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bt2}", "click", function(sym, e) {
         sym.play("pop2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bt3}", "click", function(sym, e) {
         sym.play("pop3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pop3}", "click", function(sym, e) {
         sym.playReverse();
         $("audio").each(function(){
             $(this).get(0).pause();
         });
         sym.getSymbol("bt_audio3").stop("up");
         $("audio").prop("currentTime",0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pop2}", "click", function(sym, e) {
         sym.playReverse();
         $("audio").each(function(){
             $(this).get(0).pause();
         });
         sym.getSymbol("bt_audio2").stop("up");
         $("audio").prop("currentTime",0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pop1}", "click", function(sym, e) {
         sym.playReverse();
         $("audio").each(function(){
             $(this).get(0).pause();
         });
         sym.getSymbol("bt_audio1").stop("up");
         $("audio").prop("currentTime",0);

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
   
   //Edge symbol: 'bt_audio'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_ht_spot}", "click", function(sym, e) {
         $("#Stage_bt_audio_ht_spot2").css("pointer-events","auto");
         var soundId = sym.getSymbolElement().attr( "title" );
         var currentAudio=sym.getComposition().getStage().$(soundId)[0].currentTime;
         var duracion= sym.getComposition().getStage().$(soundId).duration;
         if (duracion== currentAudio){
         	sym.stop("up");
         }
         
         sym.getComposition().getStage().$(soundId).on('ended', function() {
         		sym.stop("up");
         	$("#Stage_bt_audio_ht_spot2").css("pointer-events","none");
         });
         $("audio").prop("muted", true);
         if (sym.getComposition().getStage().$(soundId)[0].paused) {
         	//elimina el mute del audio
         	sym.getComposition().getStage().$(soundId)[0].muted = false;
         	sym.getComposition().getStage().$(soundId)[0].volume=0.7;
         	sym.getComposition().getStage().$(soundId)[0].play();
         	sym.stop("down");
         } else {
         //activar para pausar en vez de reiniciar
         	sym.getComposition().getStage().$(soundId)[0].pause();
         	sym.stop("up");
         	$("#Stage_bt_audio_ht_spot2").css("pointer-events","auto");
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