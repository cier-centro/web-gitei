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
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         /* Cantidad de combobox para la actividad, editar su valor si la actividad lo requiere 
         Ej: TotalComboBox = 10;   Se crearan 10 combobox en la composición	
         */
         
         TotalComboBox=5;
         //TAMAÑO DE LA FUENTE
         tamano = "20px";
         colorini = "#000000";
         //Set variables de color
         largo = "250px";
         altura = "35px";
         titulo = "---";
         /* 
         	En este bloque de código se agregan las respuestas según lo indique la actividad.
         	Para agregar mas respuestas en el combobox se tiene en cuenta el formato :
         	    "<option value='4'>Respuesta adicional</option>"
         	Si se agrega al final de las otras respuestas, no lleva coma (,) al terminar
         	y se debe incrementar en uno el valor (value) de la opción o respuesta nueva.
         */
          var select_1 = ["<option value='0'>"+titulo+"</option>",
         					"<option value='1'>Si</option>",
         					"<option value='2'>No</option>"];
         					sym.setVariable("seleccionar_1", select_1);
         var select_2 = ["<option value='0'>"+titulo+"</option>",
         					"<option value='1'>Si</option>",
         					"<option value='2'>No</option>"];
         					sym.setVariable("seleccionar_2", select_2);
         var select_3 = ["<option value='0'>"+titulo+"</option>",
         					"<option value='1'>Si</option>",
         					"<option value='2'>No</option>"];
         					sym.setVariable("seleccionar_3", select_3);
         var select_4 = ["<option value='0'>"+titulo+"</option>",
         					"<option value='1'>Si</option>",
         					"<option value='2'>No</option>"];
         					sym.setVariable("seleccionar_4", select_4);
         var select_5 = ["<option value='0'>"+titulo+"</option>",
         					"<option value='1'>Si</option>",
         					"<option value='2'>No</option>"];
         					sym.setVariable("seleccionar_5", select_5);
         var select_6 = ["<option value='0'>"+titulo+"</option>",
         					"<option value='1'>Opción1</option>",
         					"<option value='2'>Opción2</option>",
         					"<option value='3'>Opción3</option>"];
         					sym.setVariable("seleccionar_6", select_6);
         var select_7 = ["<option value='0'>"+titulo+"</option>",
         					"<option value='1'>Opción1</option>",
         					"<option value='2'>Opción2</option>",
         					"<option value='3'>Opción3</option>",
         					"<option value='4'>Opción4</option>"];
         					sym.setVariable("seleccionar_7", select_7);
         var select_8 = ["<option value='0'>"+titulo+"</option>",
         					"<option value='1'>Opción1</option>",
         					"<option value='2'>Opción2</option>",
         					"<option value='3'>Opción3</option>",
         					"<option value='4'>Opción4</option>",
         					"<option value='5'>Opción5.......................</option>"];
         					sym.setVariable("seleccionar_8", select_8);
         var select_9 = ["<option value='0'>"+titulo+"</option>",
         					"<option value='1'>Opción1</option>",
         					"<option value='2'>Opción2</option>",
         					"<option value='3'>Opción3</option>",
         					"<option value='4'>Opción4</option>"];
         					sym.setVariable("seleccionar_9", select_9);
         var select_10 = ["<option value='0'>"+titulo+"</option>",
         					"<option value='1'>Opción1</option>",
         					"<option value='2'>Opción2</option>",
         					"<option value='3'>Opción3</option>",
         					"<option value='4'>Opción4</option>"];
         					sym.setVariable("seleccionar_10", select_10);	
         //RESPUESTAS CORRECTAS
         sym.setVariable("Respuesta_1", "2");
         sym.setVariable("Respuesta_2", "1");
         sym.setVariable("Respuesta_3", "2");
         sym.setVariable("Respuesta_4", "1");
         sym.setVariable("Respuesta_5", "1");
         sym.setVariable("Respuesta_6", "1");
         sym.setVariable("Respuesta_7", "1");
         sym.setVariable("Respuesta_8", "1");
         sym.setVariable("Respuesta_9", "1");
         sym.setVariable("Respuesta_10","1");
         

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
   
   //Edge symbol: 'ok'
   (function(symbolName) {   
   
   })("ok");
   //Edge symbol end:'ok'

   //=========================================================
   
   //Edge symbol: 'bad'
   (function(symbolName) {   
   
   })("bad");
   //Edge symbol end:'bad'

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

   //=========================================================
   
   //Edge symbol: 'bt_solucion'
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

   })("bt_solucion");
   //Edge symbol end:'bt_solucion'

   //=========================================================
   
   //Edge symbol: 'bt_validar'
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

   })("bt_validar");
   //Edge symbol end:'bt_validar'

   //=========================================================
   
   //Edge symbol: 'boca'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play("ini");

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

})(jQuery, AdobeEdge, "EDGE-3785112");