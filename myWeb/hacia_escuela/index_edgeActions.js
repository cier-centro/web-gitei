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
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         //$("#Stage_slide_1").append( "<iframe src='composiciones/03_01/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("1 / 3");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         //$("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_2" ).append( "<iframe src='composiciones/03_02/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("descripcion")).html("Bienvenida");
         $(sym.lookupSelector("textCount")).html("2 / 3");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
        $( "#Stage_slide_3" ).append( "<iframe src='composiciones/03_03/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
        
        
        //textos
        //$(sym.lookupSelector("momento")).html("Desarrollo");
        //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
        //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
        $(sym.lookupSelector("descripcion")).html("Mapa de Aprendizajes");
        $(sym.lookupSelector("textCount")).html("3 / 3");
        

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
        //$( "#Stage_slide_4" ).append( "<iframe src='composiciones/03_04/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
        
        
        //textos
        $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
        //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
        //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
        $(sym.lookupSelector("descripcion")).html("Mapa de Navegación");
        $(sym.lookupSelector("textCount")).html("1 / 9");
        

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_5" ).append( "<iframe src='composiciones/03_05/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("descripcion")).html("Guía de Navegación");
         $(sym.lookupSelector("textCount")).html("2 / 9");
         

      });
      //Edge binding end
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
      $("#Stage_slide_"+(slideCount-1)).children().remove();
      $("#Stage_slide_"+(slideCount+1)).children().remove();
      $( "#Stage_slide_6" ).append( "<iframe src='composiciones/03_06/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
      
      
      
      //textos
      $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
      //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
      //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
      $(sym.lookupSelector("descripcion")).html("Título");
      $(sym.lookupSelector("textCount")).html("3 / 9");
      

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_7" ).append( "<iframe src='composiciones/03_07/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("4 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_8" ).append( "<iframe src='composiciones/03_08/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("descripcion")).html("Ejemplos");
         $(sym.lookupSelector("textCount")).html("5 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();
         
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_9" ).append( "<iframe src='composiciones/03_09/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("descripcion")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("6 / 9");
         

      });
      //Edge binding end
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_10" ).append( "<iframe src='composiciones/03_10/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("descripcion")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("7 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_11" ).append( "<iframe src='composiciones/03_11/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("descripcion")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("8 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $( "#Stage_slide_12" ).append( "<iframe src='composiciones/03_12/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("descripcion")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("9 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         //$( "#Stage_slide_13" ).append( "<iframe src='composiciones/03_13/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("1 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_14" ).append( "<iframe src='composiciones/03_14/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("2 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_15" ).append( "<iframe src='composiciones/03_15/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("3 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_16" ).append( "<iframe src='composiciones/03_16/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("4 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_17" ).append( "<iframe src='composiciones/03_17/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("5 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
          $( "#Stage_slide_18" ).append( "<iframe src='composiciones/03_18/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("descripcion")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("6 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_19" ).append( "<iframe src='composiciones/03_19/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("descripcion")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("7 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
          $( "#Stage_slide_20" ).append( "<iframe src='composiciones/03_20/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("descripcion")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("8 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $( "#Stage_slide_21" ).append( "<iframe src='composiciones/03_21/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("descripcion")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("9 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_22" ).append( "<iframe src='composiciones/03_22/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("1 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount+1)).children().remove();
          $( "#Stage_slide_23" ).append( "<iframe src='composiciones/03_23/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("2 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
          $( "#Stage_slide_24" ).append( "<iframe src='composiciones/03_24/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("3 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_25" ).append( "<iframe src='composiciones/03_25/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("4 / 9");
         

      });
      //Edge binding end
	  
	    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_26" ).append( "<iframe src='composiciones/03_26/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("5 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_27" ).append( "<iframe src='composiciones/03_27/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("descripcion")).html("Situaciones");
         $(sym.lookupSelector("textCount")).html("6 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_28" ).append( "<iframe src='composiciones/03_28/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("descripcion")).html("Situaciones");
         $(sym.lookupSelector("textCount")).html("7 / 9");
         

      });
      //Edge binding end
      
	  
	   //Edge binding end
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_29" ).append( "<iframe src='composiciones/03_29/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("8 / 9");
         

      });
      //Edge binding end

       

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
            sym.$('.center-wrapper').css("overflow","hidden");
            slideCount = 1;
            //cambiar según el número de slides
            var numOfSlides = 36;
            
            if (slideCount <= 1){ 
            sym.setVariable("slideCount", 1);
            sym.$('bt_back').hide();
            }
            sym.getSymbol("slide_"+slideCount).play(0);
            //sym.getComposition().getStage().stop("slide_"+slideCount);
            
            sym.showSlide = function (slideDirection){
            	$("video").trigger("pause");
            	$("audio").trigger("pause");
            	slideCount = slideCount + slideDirection;
               sym.getComposition().getStage().stop("slide_"+slideCount);
               sym.getSymbol("slide_"+slideCount).play(0);
            	//Beyond 22, change to 1
            	if (slideCount < numOfSlides){ 
            		//sym.$('bt_next').show();
            	}
            	if (slideCount == numOfSlides){
            		slideCount = numOfSlides;
            		//sym.$('bt_next').hide();
            	} 
            	if (slideCount <= 1){ 
            		sym.setVariable("slideCount", 1);
            		//sym.$('bt_back').hide();
            	}else{
            		//sym.$('bt_back').show();
            	}
            	//	Silenciar el audio de la composición (funciona en servidor web, pero no funciona en chrome como archivo local)
            	$("iframe").contents().find("audio").prop("muted", true);
            	$("iframe").contents().find("audio").prop("currentTime",0);
            	//	Silenciar el video de la composición (funciona en servidor web, pero no funciona en chrome como archivo local)
            	//$("iframe").contents().find( "video" ).prop("muted", true);
            }
            //se definen las variables de los simbolos
            var btNext = sym.getSymbol("bt_next").$("hotspot_area_next");
            var btBack = sym.getSymbol("bt_back").$("hotspot_area_back");
            btBack.bind("click", function() {
            // Silenciar todas las pistas de audio de la composición. Establecer el silencio en “false” para desactivar 
            	$("audio").prop("muted", true);
            // Pausar el video de la composición, eliminar comentario si se requiere.
            	//$("video")[0].pause();
            if (slideCount > 1){ 
            	sym.getComposition().getStage().showSlide(-1);
            }
            });
            btBack.bind("mouseup", function() {
            sym.getSymbol("bt_back").stop("up");
            });
            btBack.bind("mouseout", function() {
            sym.getSymbol("bt_back").stop("normal");
            });
            
            btBack.bind("mousedown", function() {
            sym.getSymbol("bt_back").stop("down");
            });
            
            btBack.bind("mouseover", function() {
            sym.getSymbol("bt_back").stop("over");
            });
            
            btNext.bind("click", function() {
            	// Silenciar todas las pistas de audio de la composición. Establecer el silencio en “false” para desactivar 
            	$("audio").prop("muted", true);
            	// Pausar el video de la composición, eliminar comentario si se requiere.
            	//$("video")[0].pause();
            	sym.getComposition().getStage().showSlide(1);
            });
            btNext.bind("mouseup", function() {
            sym.getSymbol("bt_next").stop("up");
            });
            btNext.bind("mouseout", function() {
            sym.getSymbol("bt_next").stop("normal");
            });
            
            btNext.bind("mousedown", function() {
            sym.getSymbol("bt_next").stop("down");
            });
            
            btNext.bind("mouseover", function() {
            sym.getSymbol("bt_next").stop("over");
            });
            

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_30" ).append( "<iframe src='composiciones/03_30/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("descripcion")).html("Situaciones");
         $(sym.lookupSelector("textCount")).html("9 / 9");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $("#Stage_slide_"+(slideCount-1)).children().remove();
         $("#Stage_slide_"+(slideCount+1)).children().remove();
         $( "#Stage_slide_31" ).append( "<iframe src='composiciones/03_31/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Cierre");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("descripcion")).html("Cierre metacognitivo");
         $(sym.lookupSelector("textCount")).html("1 / 1");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_32" ).append( "<iframe src='composiciones/03_32/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("32 / **");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_33" ).append( "<iframe src='composiciones/03_33/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("33 / **");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
           //$( "#Stage_slide_34" ).append( "<iframe src='composiciones/03_34/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("34 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
           //$( "#Stage_slide_35" ).append( "<iframe src='composiciones/03_35/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("35 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
           //$( "#Stage_slide_36" ).append( "<iframe src='composiciones/03_36/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("36 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_37" ).append( "<iframe src='composiciones/03_37/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("37 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
           //$( "#Stage_slide_38" ).append( "<iframe src='composiciones/03_38/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("38 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         //$( "#Stage_slide_39" ).append( "<iframe src='composiciones/03_39/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("39 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         //$( "#Stage_slide_39" ).append( "<iframe src='composiciones/03_39/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("39 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         //$( "#Stage_slide_40" ).append( "<iframe src='composiciones/03_40/index.html' width='1366px' height='768px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("momento")).html("Desarrollo");
         //$(sym.lookupSelector("num_actividad")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("descripcion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("40 / **");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_parte1}", "click", function(sym, e) {
         slideCount = 4;
         sym.getComposition().getStage().stop("slide_4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_parte2}", "click", function(sym, e) {
         slideCount = 13;
         sym.getComposition().getStage().stop("slide_13");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_parte3}", "click", function(sym, e) {
         slideCount = 22;
         sym.getComposition().getStage().stop("slide_22");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cierre}", "click", function(sym, e) {
         slideCount = 31;
         sym.getComposition().getStage().stop("slide_31");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mapa}", "click", function(sym, e) {
         slideCount = 3;
         sym.getComposition().getStage().stop("slide_3");
         //SILENCIAR TODO
         	$("video").trigger("pause");
         	$("audio").trigger("pause");
         //$("#Stage_slide_4").children().remove();
         $("#Stage_slide_5").children().remove();
         $("#Stage_slide_6").children().remove();
         $("#Stage_slide_7").children().remove();
         $("#Stage_slide_8").children().remove();
         $("#Stage_slide_9").children().remove();
         $("#Stage_slide_10").children().remove();
         $("#Stage_slide_11").children().remove();
         $("#Stage_slide_12").children().remove();
         //$("#Stage_slide_13").children().remove();
         $("#Stage_slide_14").children().remove();
         $("#Stage_slide_15").children().remove();
         $("#Stage_slide_16").children().remove();
         $("#Stage_slide_17").children().remove();
         $("#Stage_slide_18").children().remove();
         $("#Stage_slide_19").children().remove();
         $("#Stage_slide_20").children().remove();
         $("#Stage_slide_21").children().remove();
         //$("#Stage_slide_22").children().remove();
         $("#Stage_slide_23").children().remove();
         $("#Stage_slide_24").children().remove();
         $("#Stage_slide_25").children().remove();
         $("#Stage_slide_26").children().remove();
         $("#Stage_slide_27").children().remove();
         $("#Stage_slide_28").children().remove();
         $("#Stage_slide_29").children().remove();
         $("#Stage_slide_30").children().remove();
         $("#Stage_slide_31").children().remove();
         /*$("#Stage_slide_32").children().remove();
         $("#Stage_slide_33").children().remove();
         $("#Stage_slide_34").children().remove();
         $("#Stage_slide_35").children().remove();
         $("#Stage_slide_36").children().remove();
         $("#Stage_slide_37").children().remove();
         $("#Stage_slide_38").children().remove();
         $("#Stage_slide_39").children().remove();
         $("#Stage_slide_40").children().remove();
         */

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home}", "click", function(sym, e) {
         slideCount = 1;
         sym.getComposition().getStage().stop("slide_1");
         //SILENCIAR TODO
         //$("#Stage_slide_1").children().remove();
         $("#Stage_slide_2").children().remove();
         $("#Stage_slide_3").children().remove();

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
   
   //Edge symbol: 'bt_next'
   (function(symbolName) {   
   
      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

      

   })("bt_next");
   //Edge symbol end:'bt_next'

   //=========================================================
   
   //Edge symbol: 'bt_back'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      

      

      

      

      

      

   })("bt_back");
   //Edge symbol end:'bt_back'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //CAMBIAR ESTA OPCIÓN A PLAY SI SE DESEA INICIAR LA ANIMACIÓN O SI ES IMAGEN FIJA PONERLA EN STOP 
         sym.stop();

      });
      //Edge binding end

      

      

      

      

      

      

   })("slide_2");
   //Edge symbol end:'slide_2'

   //=========================================================
   
   //Edge symbol: 'slide_2'
   (function(symbolName) {   
   
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //CAMBIAR ESTA OPCIÓN A PLAY SI SE DESEA INICIAR LA ANIMACIÓN O SI ES IMAGEN FIJA PONERLA EN STOP 
         sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("Rectangle").html("<video width='958' height='538' title='Video' preload='auto' controls ><source src='media/F1_A1.mp4' type='video/mp4'></video>");
         
         

      });
      //Edge binding end

   })("slide_4");
   //Edge symbol end:'slide_4'

   //=========================================================
   
   //Edge symbol: 'slide_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //CAMBIAR ESTA OPCIÓN A PLAY SI SE DESEA INICIAR LA ANIMACIÓN O SI ES IMAGEN FIJA PONERLA EN STOP 
         sym.stop();

      });
      //Edge binding end

   })("slide_3");
   //Edge symbol end:'slide_3'

   //=========================================================
   
   //Edge symbol: 'slide_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("slide_5");
   //Edge symbol end:'slide_5'

   //=========================================================
   
   //Edge symbol: 'slide_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         //CAMBIAR ESTA OPCIÓN A PLAY SI SE DESEA INICIAR LA ANIMACIÓN O SI ES IMAGEN FIJA PONERLA EN STOP 
         sym.play();
         
         //sym.getComposition().getStage().$("Audio1")[0].play();
         

      });
      //Edge binding end

      

      

      

      

      

      

      

   })("slide_1");
   //Edge symbol end:'slide_1'

   //=========================================================
   
   //Edge symbol: 'Hot_Spot'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Hot_Spot");
   //Edge symbol end:'Hot_Spot'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_6");
   //Edge symbol end:'slide_6'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_7");
   //Edge symbol end:'slide_7'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_8");
   //Edge symbol end:'slide_8'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_9");
   //Edge symbol end:'slide_9'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_10");
   //Edge symbol end:'slide_10'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_11");
   //Edge symbol end:'slide_11'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_12");
   //Edge symbol end:'slide_12'

   //=========================================================
   
   //Edge symbol: 'slide_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("Rectangle").html("<video width='958' height='538' title='Video' preload='auto' controls ><source src='media/F1_A2.mp4' type='video/mp4'></video>");

      });
      //Edge binding end

         })("slide_13");
   //Edge symbol end:'slide_13'

   //=========================================================
   
   //Edge symbol: 'slide_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_14");
   //Edge symbol end:'slide_14'

   //=========================================================
   
   //Edge symbol: 'slide_15'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_15");
   //Edge symbol end:'slide_15'

   //=========================================================
   
   //Edge symbol: 'slide_16'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_16");
   //Edge symbol end:'slide_16'

   //=========================================================
   
   //Edge symbol: 'slide_17'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_17");
   //Edge symbol end:'slide_17'

   //=========================================================
   
   //Edge symbol: 'slide_18'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_18");
   //Edge symbol end:'slide_18'

   //=========================================================
   
   //Edge symbol: 'slide_19'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_19");
   //Edge symbol end:'slide_19'

   //=========================================================
   
   //Edge symbol: 'slide_20'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_20");
   //Edge symbol end:'slide_20'

   //=========================================================
   
   //Edge symbol: 'slide_21'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_21");
   //Edge symbol end:'slide_21'

   //=========================================================
   
   //Edge symbol: 'slide_22'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("Rectangle").html("<video width='958' height='538' title='Video' preload='auto' controls ><source src='media/F1_A3.mp4' type='video/mp4'></video>");

      });
      //Edge binding end

         })("slide_22");
   //Edge symbol end:'slide_22'

   //=========================================================
   
   //Edge symbol: 'slide_23'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_23");
   //Edge symbol end:'slide_23'

   //=========================================================
   
   //Edge symbol: 'slide_24'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_24");
   //Edge symbol end:'slide_24'

   //=========================================================
   
   //Edge symbol: 'slide_25'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_25");
   //Edge symbol end:'slide_25'

   //=========================================================
   
   //Edge symbol: 'slide_26'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_26");
   //Edge symbol end:'slide_26'

   //=========================================================
   
   //Edge symbol: 'slide_27'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_27");
   //Edge symbol end:'slide_27'

   //=========================================================
   
   //Edge symbol: 'slide_28'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_28");
   //Edge symbol end:'slide_28'

   //=========================================================
   
   //Edge symbol: 'slide_29'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_29");
   //Edge symbol end:'slide_29'

   //=========================================================
   
   //Edge symbol: 'slide_30'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_30");
   //Edge symbol end:'slide_30'

   //=========================================================
   
   //Edge symbol: 'home'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("home");
   //Edge symbol end:'home'

   //=========================================================
   
   //Edge symbol: 'home_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

   })("mapa");
   //Edge symbol end:'mapa'

   //=========================================================
   
   //Edge symbol: 'slide_31'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_31");
   //Edge symbol end:'slide_31'

   //=========================================================
   
   //Edge symbol: 'slide_32'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_32");
   //Edge symbol end:'slide_32'

   //=========================================================
   
   //Edge symbol: 'slide_33'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_33");
   //Edge symbol end:'slide_33'

   //=========================================================
   
   //Edge symbol: 'slide_34'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_34");
   //Edge symbol end:'slide_34'

   //=========================================================
   
   //Edge symbol: 'slide_35'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_35");
   //Edge symbol end:'slide_35'

   //=========================================================
   
   //Edge symbol: 'slide_36'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_36");
   //Edge symbol end:'slide_36'

   //=========================================================
   
   //Edge symbol: 'slide_37'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_37");
   //Edge symbol end:'slide_37'

   //=========================================================
   
   //Edge symbol: 'slide_38'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_38");
   //Edge symbol end:'slide_38'

   //=========================================================
   
   //Edge symbol: 'slide_39'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_39");
   //Edge symbol end:'slide_39'

   //=========================================================
   
   //Edge symbol: 'slide_40'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_40");
   //Edge symbol end:'slide_40'

   //=========================================================
   
   //Edge symbol: 'slide_41'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_41");
   //Edge symbol end:'slide_41'

})(jQuery, AdobeEdge, "EDGE-5531445");