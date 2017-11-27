/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'aulas'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy4}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy4}", "mouseout", function(sym, e) {
         sym.stop(0);
         

      });
      //Edge binding end

   })("aulas");
   //Edge symbol end:'aulas'

   //=========================================================
   
   //Edge symbol: 'nuestrasp'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy}", "mouseout", function(sym, e) {
         sym.stop(0);
         

      });
      //Edge binding end

   })("nuestrasp");
   //Edge symbol end:'nuestrasp'

   //=========================================================
   
   //Edge symbol: 'menu'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_conozcanos}", "mouseover", function(sym, e) {
         sym.getSymbol("conozcanos").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_conozcanos}", "mouseout", function(sym, e) {
         sym.getSymbol("conozcanos").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ingresoClientes}", "click", function(sym, e) {
         window.location.href = 'clientes.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_nuestrasp}", "click", function(sym, e) {
         window.location.href = 'publicaciones.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_contacto}", "click", function(sym, e) {
         window.location.href = 'contacto.html';

      });
      //Edge binding end

   })("menu");
   //Edge symbol end:'menu'

   //=========================================================
   
   //Edge symbol: 'contacto'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy3}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy3}", "mouseout", function(sym, e) {
         sym.stop(0);
         

      });
      //Edge binding end

   })("contacto");
   //Edge symbol end:'contacto'

   //=========================================================
   
   //Edge symbol: 'ingresoClientes'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "mouseover", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "mouseout", function(sym, e) {
         sym.stop(0);
         

      });
      //Edge binding end

   })("ingresoClientes");
   //Edge symbol end:'ingresoClientes'

   //=========================================================
   
   //Edge symbol: 'conozcanos'
   (function(symbolName) {   
   
   })("conozcanos");
   //Edge symbol end:'conozcanos'

})(jQuery, AdobeEdge, "EDGE-25918742");