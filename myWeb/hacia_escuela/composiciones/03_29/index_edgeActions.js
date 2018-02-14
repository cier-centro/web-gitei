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

      

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_reiniciar}", "click", function(sym, e) {
         // Ocultar un elemento 
         sym.getSymbol("slide_1").$("a").hide();
         sym.getSymbol("slide_1").$("b").hide();
         sym.getSymbol("slide_1").$("c").hide();
         
         sym.$("respuesta_a").hide();
         sym.$("respuesta_b").hide();
         sym.$("respuesta_c").hide();
         
         sym.getSymbol("slide_1").$("hsA").show();
         sym.getSymbol("slide_1").$("hsB").show();
         sym.getSymbol("slide_1").$("hsC").show();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_respuesta_c}", "click", function(sym, e) {
         sym.getSymbol("slide_1").$("hsA").show();
         sym.getSymbol("slide_1").$("hsB").show();
         sym.getSymbol("slide_1").$("hsC").show();
         
         sym.$("respuesta_a").hide();
         sym.$("respuesta_b").hide();
         sym.$("respuesta_c").hide();
         
         sym.getSymbol("slide_1").$("a").hide();
         sym.getSymbol("slide_1").$("b").hide();
         sym.getSymbol("slide_1").$("c").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_respuesta_b}", "click", function(sym, e) {
         sym.getSymbol("slide_1").$("hsA").show();
         sym.getSymbol("slide_1").$("hsB").show();
         sym.getSymbol("slide_1").$("hsC").show();
         
         sym.$("respuesta_a").hide();
         sym.$("respuesta_b").hide();
         sym.$("respuesta_c").hide();
         
         sym.getSymbol("slide_1").$("a").hide();
         sym.getSymbol("slide_1").$("b").hide();
         sym.getSymbol("slide_1").$("c").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_respuesta_a}", "click", function(sym, e) {
         sym.getSymbol("slide_1").$("hsA").show();
         sym.getSymbol("slide_1").$("hsB").show();
         sym.getSymbol("slide_1").$("hsC").show();
         
         sym.$("respuesta_a").hide();
         sym.$("respuesta_b").hide();
         sym.$("respuesta_c").hide();
         
         sym.getSymbol("slide_1").$("a").hide();
         sym.getSymbol("slide_1").$("b").hide();
         sym.getSymbol("slide_1").$("c").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_help_seleccionar}", "click", function(sym, e) {
         sym.$("help_seleccionar").hide();
         sym.getSymbol("bt_ayuda").stop("normal");
         

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
   
      

      Symbol.bindElementAction(compId, symbolName, "${_hsC}", "click", function(sym, e) {
         sym.$("c").show();
         sym.getComposition().getStage().$("respuesta_a").show();
         
         
         sym.$("b").hide();
         sym.getComposition().getStage().$("respuesta_b").hide();
         
         sym.$("a").hide();
         sym.getComposition().getStage().$("respuesta_c").hide();
         
         sym.$("hsA").hide();
         sym.$("hsB").hide();
         
         
         sym.getComposition().getStage().$("success")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hsB}", "click", function(sym, e) {
         sym.$("b").show();
         sym.getComposition().getStage().$("respuesta_b").show();
         
         sym.$("a").hide();
         sym.getComposition().getStage().$("respuesta_a").hide();
         
         sym.$("c").hide();
         sym.getComposition().getStage().$("respuesta_c").hide();
         
         sym.$("hsA").hide();
         sym.$("hsC").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hsA}", "click", function(sym, e) {
         sym.$("a").show();
         sym.getComposition().getStage().$("respuesta_c").show();
         
         sym.$("b").hide();
         sym.getComposition().getStage().$("respuesta_b").hide();
         
         sym.$("c").hide();
         sym.getComposition().getStage().$("respuesta_a").hide();
         
         sym.$("hsC").hide();
         sym.$("hsB").hide();
         
         
         // Reproducir una pista de audio 
         sym.getComposition().getStage().$("error")[0].play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("slide_1");
   //Edge symbol end:'slide_1'

   //=========================================================
   
   //Edge symbol: 'bt_ayuda'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_ayudaCopy}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("bt_ayuda").play("down");
         sym.getComposition().getStage().$("help_seleccionar").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot_ayudaCopy2}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("bt_ayuda").play("normal");
         sym.getComposition().getStage().$("help_seleccionar").hide();
         

      });
      //Edge binding end

   })("bt_ayuda");
   //Edge symbol end:'bt_ayuda'

   //=========================================================
   
   //Edge symbol: 'bt_reiniciar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("bt_reiniciar");
   //Edge symbol end:'bt_reiniciar'

})(jQuery, AdobeEdge, "EDGE-5531445");