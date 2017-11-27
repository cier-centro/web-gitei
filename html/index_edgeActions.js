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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "click", function(sym, e) {
         window.location.href = 'inicio.html';

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'hotspot'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle}", "mouseout", function(sym, e) {
         sym.stop(0);
         

      });
      //Edge binding end

   })("hotspot");
   //Edge symbol end:'hotspot'

})(jQuery, AdobeEdge, "EDGE-14967639");