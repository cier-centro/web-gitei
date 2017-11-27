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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_serviciosCopy}", "click", function(sym, e) {
         window.location.href = 'inicio.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vinculacion}", "click", function(sym, e) {
         window.location.href = 'vinculacion.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_vinculacionCopy}", "click", function(sym, e) {
         window.location.href = 'vinculacion.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_servicios}", "click", function(sym, e) {
         window.location.href = 'servicios.html';

      });
      //Edge binding end

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

   //=========================================================
   
   //Edge symbol: 'Ideas'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy2}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy2}", "mouseout", function(sym, e) {
         sym.stop(0);
         

      });
      //Edge binding end

   })("Ideas");
   //Edge symbol end:'Ideas'

   //=========================================================
   
   //Edge symbol: 'vinculacion'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy3}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy3}", "mouseout", function(sym, e) {
         sym.stop(0);
         

      });
      //Edge binding end

   })("vinculacion");
   //Edge symbol end:'vinculacion'

   //=========================================================
   
   //Edge symbol: 'servicios'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RectangleCopy}", "mouseout", function(sym, e) {
         sym.stop(0);
         

      });
      //Edge binding end

   })("servicios");
   //Edge symbol end:'servicios'

   //=========================================================
   
   //Edge symbol: 'conozcanos_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_mision}", "mouseenter", function(sym, e) {
         sym.getSymbol("mision").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mision}", "mouseleave", function(sym, e) {
         sym.getSymbol("mision").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Vision}", "mouseenter", function(sym, e) {
         sym.getSymbol("Vision").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Vision}", "mouseleave", function(sym, e) {
         sym.getSymbol("Vision").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lineas}", "mouseenter", function(sym, e) {
         sym.getSymbol("lineas").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lineas}", "mouseleave", function(sym, e) {
         sym.getSymbol("lineas").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Actividades}", "mouseenter", function(sym, e) {
         sym.getSymbol("Actividades").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Actividades}", "mouseleave", function(sym, e) {
         sym.getSymbol("Actividades").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_historia}", "mouseenter", function(sym, e) {
         sym.getSymbol("historia").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_historia}", "mouseleave", function(sym, e) {
         sym.getSymbol("historia").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_equipo}", "mouseenter", function(sym, e) {
         sym.getSymbol("equipo").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_equipo}", "mouseleave", function(sym, e) {
         sym.getSymbol("equipo").stop(0);
         

      });
      //Edge binding end

   })("conozcanos_1");
   //Edge symbol end:'conozcanos_1'

   //=========================================================
   
   //Edge symbol: 'menu_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_ingresoClientes}", "click", function(sym, e) {
         //window.location.href = 'clientes.html';
         window.open("clientes.html", "_blank");

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

      Symbol.bindElementAction(compId, symbolName, "${_conozcanos}", "mouseleave", function(sym, e) {
         sym.getSymbol("conozcanos").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_conozcanos}", "mouseenter", function(sym, e) {
         sym.getSymbol("conozcanos").play();

      });
      //Edge binding end

   })("menu_1");
   //Edge symbol end:'menu_1'

   //=========================================================
   
   //Edge symbol: 'Actividades'
   (function(symbolName) {   
   
   })("Actividades");
   //Edge symbol end:'Actividades'

   //=========================================================
   
   //Edge symbol: 'lineas'
   (function(symbolName) {   
   
   })("lineas");
   //Edge symbol end:'lineas'

   //=========================================================
   
   //Edge symbol: 'historia'
   (function(symbolName) {   
   
   })("historia");
   //Edge symbol end:'historia'

   //=========================================================
   
   //Edge symbol: 'mision'
   (function(symbolName) {   
   
   })("mision");
   //Edge symbol end:'mision'

   //=========================================================
   
   //Edge symbol: 'equipo'
   (function(symbolName) {   
   
   })("equipo");
   //Edge symbol end:'equipo'

   //=========================================================
   
   //Edge symbol: 'Vision'
   (function(symbolName) {   
   
   })("Vision");
   //Edge symbol end:'Vision'

   //=========================================================
   
   //Edge symbol: 'conozcanos_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_mision}", "mouseenter", function(sym, e) {
         sym.getSymbol("mision").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mision}", "mouseleave", function(sym, e) {
         sym.getSymbol("mision").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Vision}", "mouseenter", function(sym, e) {
         sym.getSymbol("Vision").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Vision}", "mouseleave", function(sym, e) {
         sym.getSymbol("Vision").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lineas}", "mouseenter", function(sym, e) {
         sym.getSymbol("lineas").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lineas}", "mouseleave", function(sym, e) {
         sym.getSymbol("lineas").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Actividades}", "mouseenter", function(sym, e) {
         sym.getSymbol("Actividades").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Actividades}", "mouseleave", function(sym, e) {
         sym.getSymbol("Actividades").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_historia}", "mouseenter", function(sym, e) {
         sym.getSymbol("historia").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_historia}", "mouseleave", function(sym, e) {
         sym.getSymbol("historia").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_equipo}", "mouseenter", function(sym, e) {
         sym.getSymbol("equipo").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_equipo}", "mouseleave", function(sym, e) {
         sym.getSymbol("equipo").stop(0);
         

      });
      //Edge binding end

   })("conozcanos_2");
   //Edge symbol end:'conozcanos_2'

   //=========================================================
   
   //Edge symbol: 'menu_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_ingresoClientes}", "click", function(sym, e) {
         //window.location.href = 'clientes.html';
         window.open("clientes.html", "_blank");

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

      Symbol.bindElementAction(compId, symbolName, "${_conozcanos}", "mouseleave", function(sym, e) {
         sym.getSymbol("conozcanos").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_conozcanos}", "mouseenter", function(sym, e) {
         sym.getSymbol("conozcanos").play();

      });
      //Edge binding end

   })("menu_2");
   //Edge symbol end:'menu_2'

   //=========================================================
   
   //Edge symbol: 'conozcanos_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_mision}", "mouseenter", function(sym, e) {
         sym.getSymbol("mision").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mision}", "mouseleave", function(sym, e) {
         sym.getSymbol("mision").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Vision}", "mouseenter", function(sym, e) {
         sym.getSymbol("Vision").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Vision}", "mouseleave", function(sym, e) {
         sym.getSymbol("Vision").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lineas}", "mouseenter", function(sym, e) {
         sym.getSymbol("lineas").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lineas}", "mouseleave", function(sym, e) {
         sym.getSymbol("lineas").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Actividades}", "mouseenter", function(sym, e) {
         sym.getSymbol("Actividades").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Actividades}", "mouseleave", function(sym, e) {
         sym.getSymbol("Actividades").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_historia}", "mouseenter", function(sym, e) {
         sym.getSymbol("historia").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_historia}", "mouseleave", function(sym, e) {
         sym.getSymbol("historia").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_equipo}", "mouseenter", function(sym, e) {
         sym.getSymbol("equipo").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_equipo}", "mouseleave", function(sym, e) {
         sym.getSymbol("equipo").stop(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mision}", "click", function(sym, e) {
         window.location.href = 'mision.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Vision}", "click", function(sym, e) {
         window.location.href = 'vision.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lineas}", "click", function(sym, e) {
         window.location.href = 'lineas.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Actividades}", "click", function(sym, e) {
         window.location.href = 'actividades.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_historia}", "click", function(sym, e) {
         window.location.href = 'historia.html';

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_equipo}", "click", function(sym, e) {
         window.location.href = 'equipo.html';

      });
      //Edge binding end

   })("conozcanos_3");
   //Edge symbol end:'conozcanos_3'

   //=========================================================
   
   //Edge symbol: 'menu_3'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_ingresoClientes}", "click", function(sym, e) {
         //window.location.href = 'clientes.html';
         window.open("clientes.html", "_blank");

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

      Symbol.bindElementAction(compId, symbolName, "${_conozcanos}", "mouseleave", function(sym, e) {
         sym.getSymbol("conozcanos").stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_conozcanos}", "mouseenter", function(sym, e) {
         sym.getSymbol("conozcanos").play();

      });
      //Edge binding end

   })("menu_3");
   //Edge symbol end:'menu_3'

})(jQuery, AdobeEdge, "EDGE-25450965");