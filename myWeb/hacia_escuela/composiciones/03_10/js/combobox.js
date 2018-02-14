//
var comp;
AdobeEdge.bootstrapCallback(function(compId) {
comp = AdobeEdge.getComposition(compId).getStage();

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
   

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         $("<link/>", {"rel": "stylesheet", "type": "text/css", "href": "css/jquery-ui.css" }).appendTo("head");
         sym.$('.center-wrapper').css("overflow","hidden");
		 
		 //botones
         sym.getSymbol("bt_validar").stop("normal");
         sym.getSymbol("bt_solucion").stop("down");
         sym.getSymbol("bt_reiniciar").stop("down");
         sym.getSymbol("bt_ayuda").stop("normal");
         sym.$("hotspot_validar").show();
         sym.$("hotspot_solucion").hide();
         sym.$("hotspot_reiniciar").hide();
         sym.$("hotspot_ayuda").show();
		 
         /* Cantidad de combobox para la actividad, editar su valor si la actividad lo requiere 
         	Ej: TotalComboBox = 10;   Se crearan 10 combobox en la composición	
         */
        /* TotalComboBox = 10;
		 sym.setVariable("Respuesta_1", "1");
         sym.setVariable("Respuesta_2", "1");
         sym.setVariable("Respuesta_3", "1");
         sym.setVariable("Respuesta_4", "1");
         sym.setVariable("Respuesta_5", "1");
         sym.setVariable("Respuesta_6", "1");
         sym.setVariable("Respuesta_7", "1");
         sym.setVariable("Respuesta_8", "1");
         sym.setVariable("Respuesta_9", "1");
         sym.setVariable("Respuesta_10","1");
         

         
         //Variables de colores
         sym.setVariable("bordes", "2px solid #3A7B7F");
         sym.setVariable("fondo", "rgba(201,232,241,1)");
         sym.setVariable("colorini", "#000000");
         sym.setVariable("colorok", "#000000");
         sym.setVariable("fondook", "#CDFF77");
         sym.setVariable("fondook", "rgba(201,232,241,1)");
         sym.setVariable("colorbad", "#000000");
         sym.setVariable("fondobad", "#FF6D43");
         sym.setVariable("fondobad", "rgba(201,232,241,1)");
         //TAMAÑO DE LA FUENTE
         sym.setVariable("fontsize", "22px");
         var tamano = sym.getVariable("fontsize");
         var colorini = sym.getVariable("colorini");
         //Set variables de color
         largo = "250px";
         altura = "35px";
         bordes = sym.getVariable("bordes");
         fondo = sym.getVariable("fondo");
         titulo = "---";
 */
         
         /* 
         	-- En este bloque de código se agregan las respuestas según lo indique la actividad.
         	Para agregar mas respuestas en el combobox se tiene en cuenta el formato :
         	    "<option value='4'>Respuesta adicional</option>"
         	Si se agrega al final de las otras respuestas, no lleva coma (,) al terminar
         	y se debe incrementar en uno el valor (value) de la opción o respuesta nueva.
         */
        /* var select_1 = ["<option value='0'>"+titulo+"</option>",
         					"<option value='1'>Opción1</option>",
         					"<option value='2'>Opción2</option>",
         					"<option value='3'>Opción3</option>"];
         					sym.setVariable("seleccionar_1", select_1);
         var select_2 = ["<option value='0'>"+titulo+"</option>",
         					"<option value='1'>Opción1</option>",
         					"<option value='2'>Opción2</option>",
         					"<option value='3'>Opción3</option>",
         					"<option value='4'>Opción4</option>"];
         					sym.setVariable("seleccionar_2", select_2);
         var select_3 = ["<option value='0'>"+titulo+"</option>",
         					"<option value='1'>Opción1</option>",
         					"<option value='2'>Opción2</option>",
         					"<option value='3'>Opción3</option>",
         					"<option value='4'>Opción4</option>",
         					"<option value='5'>Opción5.......................</option>"];
         					sym.setVariable("seleccionar_3", select_3);
         var select_4 = ["<option value='0'>"+titulo+"</option>",
         					"<option value='1'>Opción1</option>",
         					"<option value='2'>Opción2</option>",
         					"<option value='3'>Opción3</option>",
         					"<option value='4'>Opción4</option>"];
         					sym.setVariable("seleccionar_4", select_4);
         var select_5 = ["<option value='0'>"+titulo+"</option>",
         					"<option value='1'>Opción1</option>",
         					"<option value='2'>Opción2</option>",
         					"<option value='3'>Opción3</option>",
         					"<option value='4'>Opción4</option>"];
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
							*/				
 
         for (i=1; i<=TotalComboBox; i++){
         	var elementoSelect = document.createElement('select');
         	elementoSelect.id="seleccion_"+i;
         	//$("select").addClass("seleccionar"); 
         	cbox = sym.getVariable ("seleccionar_"+i);
         	for (j=0;j<cbox.length;j++){
         		$(cbox[j]).appendTo(elementoSelect);
         	}	
         	sym.$("combobox_"+i).append(elementoSelect);	
         	var anchoCombo = sym.$("combobox_"+i).css("width");	
         	$("select").selectmenu();
         	$("#seleccion_"+i+"-button").css("width",anchoCombo);
         	$("#seleccion_"+i+"-button").css("height",altura);
         	$("#seleccion_"+i+"-button").css("padding-top","4px");	 
         	$("#seleccion_"+i+"-button").css("font-size",tamano);
         	$("#seleccion_"+i+"-button").css("color",colorini);
         	//sym.$("combobox_"+i).css("title","prueba");
         	//$("#seleccion_"+i).css("background","#FF0000"); 	
         	//$("#seleccion_"+i).selectmenu();	
         }
		 
		 
		 //CAMBIAR TAMAÑO DE TEXTO DE OPCIONES
		$(".ui-widget-content").css("font-size","26px");
         
         
         $("#seleccion_1-button").click(function() {
         	//$("select").selectmenu();
         	//console.log(this.val);
         });
         
        
         
         
         //BOTÓN VALIDAR
         sym.$('hotspot_validar').click(function(){
         // Inicializar la variable de control de las respuestas incorrectas
         var bad = '0';
         
         //Definición de variables
         for(var i=1;i<=TotalComboBox;i++){
         	var y = (parseInt(sym.$("combobox_"+i).css("top")) +0)+"px";
         	var x = (parseInt(sym.$("combobox_"+i).css("left")) -25)+"px";
         	sym.$("combobox_"+i).children("select").each(function(){
         	if($(this).attr("id")=="seleccion_"+i){
         	var VarResp = sym.getVariable("Respuesta_"+i);
         		if($(this).val()==VarResp){		
         			sym.$("ok"+i).css({top: y, left: x});
         			sym.$("ok"+i).show();
         		}
         		else{
         			bad = '1';
         			sym.$("bad"+i).css({top: y, left: x});
         			sym.$("bad"+i).show();
         		}
         	}
         	});
         	$("#seleccion_"+i+"-button").attr('aria-disabled', true).addClass('ui-state-disabled');
         }
         
         //Muestra las leyendas
         if(bad=='1'){
         	//mensaje respuesta incorrecta
            sym.$("resp_incorrecta").show();
         	setTimeout('$("#Stage_resp_incorrecta").fadeOut("slow");', 6000);
         	sym.$("error")[0].play();
         	sym.$("error")[0].muted = false;
         	//botones
         	sym.$("hotspot_validar").hide();
         	sym.$("hotspot_solucion").show();
         	sym.$("hotspot_reiniciar").show();
         	sym.getSymbol("bt_validar").stop("down");
         	sym.getSymbol("bt_solucion").stop("normal");
         	sym.getSymbol("bt_reiniciar").stop("normal");
         }
         else{
         	//mensaje respuesta correcta
         	sym.$("resp_correcta").show();
         	setTimeout('$("#Stage_resp_correcta").fadeOut("slow");', 6000);
         	sym.$("success")[0].play();
         	sym.$("success")[0].muted = false;
         	//botones
         	sym.getSymbol("bt_validar").stop("down");
         	sym.getSymbol("bt_solucion").stop("down");
         	sym.getSymbol("bt_reiniciar").stop("normal");
         	sym.$("hotspot_validar").hide();
         	sym.$("hotspot_solucion").hide();
         	sym.$("hotspot_reiniciar").show();
         }
         
         
         });
         //BOTÓN SOLUCIÓN
         sym.$('hotspot_solucion').click(function(){
         //botones
         sym.getSymbol("bt_validar").stop("down");
         sym.getSymbol("bt_solucion").stop("down");
         sym.getSymbol("bt_reiniciar").stop("normal");
         sym.$("hotspot_validar").hide();
         sym.$("hotspot_solucion").hide();
         sym.$("hotspot_reiniciar").show();
         
         //Oculta las leyendas
         sym.$("resp_correcta").hide();
         sym.$("resp_incorrecta").hide();
         
         //Muestra las respuestas correctas
         for (i=1; i<=TotalComboBox; i++){
         	sym.$("combobox_"+i).children("select").each(function(){
         	if($(this).attr("id")=="seleccion_"+i){
         	var Rta = sym.getVariable("Respuesta_"+i);
         	$(this).val(Rta);
         	}});
         	sym.$('ok'+i).hide();
         	sym.$('bad'+i).hide();
         }
         
         $("select").selectmenu("refresh");
         for(var i=1; i<=TotalComboBox; i++) {
         	var anchoCombo = sym.$("combobox_"+i).css("width");	
         	$("#seleccion_"+i+"-button").css("width",anchoCombo);
         }
         
         for (i=1; i<=TotalComboBox; i++){
         	//$("#seleccion_"+i+"-button").removeAttr('aria-disabled', false);
         	$("#seleccion_"+i+"-button").attr('aria-disabled', true).addClass('ui-state-disabled');
         }
         
         
         
         });
         //BOTÓN REINICIAR
         sym.$('hotspot_reiniciar').click(function(){
         
         //Oculta las leyendas
         sym.$("resp_correcta").hide();
         sym.$("resp_incorrecta").hide();
         sym.$("comprobarRespuesta").hide();
         sym.$("Punteo").hide();
         
         
         for(var i=1; i<=TotalComboBox; i++) {
         	sym.$('ok' + i).hide();
         	sym.$('bad' + i).hide();
         	$("#seleccion_"+i+"-button").attr('aria-disabled', false).removeClass('ui-state-disabled');
         	sym.$("combobox_"+i).children("select").each(function(){
         	if($(this).attr("id")=="seleccion_"+i){
         	$(this).val(0);
         	}});
         }
         
         $("select").selectmenu("refresh");
         for(var i=1; i<=TotalComboBox; i++) {
         	var anchoCombo = sym.$("combobox_"+i).css("width");	
         	$("#seleccion_"+i+"-button").css("width",anchoCombo);
         }
         
         //$('.ui-selectmenu-button').css("width",largo);
         //$('.ui-selectmenu-button').css("height",altura);
         
         //botones
         sym.getSymbol("bt_validar").stop("normal");
         sym.getSymbol("bt_solucion").stop("down");
         sym.getSymbol("bt_reiniciar").stop("down");
         sym.$("hotspot_validar").show();
         sym.$("hotspot_reiniciar").hide();
         sym.$("hotspot_solucion").hide();
         
         
         });
         //BOTÓN AYUDA
         sym.$('hotspot_ayuda').click(function(){
         // introducir aquí código para clic de ratón
         if (sym.$("help_combobox").is(":visible")) {
         	sym.$("help_combobox").hide();
         	sym.getSymbol("bt_ayuda").stop("normal");
         } else {
         	sym.$("help_combobox").show();
         	sym.getSymbol("bt_ayuda").stop("down");
         }
         
         });
         
         //ocultar ayuda
         	sym.$("help_combobox").click(function(){
         	$(this).hide();
         	sym.getSymbol("bt_ayuda").stop("normal");
         	});

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
   
   //Edge symbol: 'bt_validar_1'
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

   })("bt_validar_1");
   //Edge symbol end:'bt_validar_1'

   //=========================================================
   
   //Edge symbol: 'bt_solucion_1'
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

   })("bt_solucion_1");
   //Edge symbol end:'bt_solucion_1'

   //=========================================================
   
   //Edge symbol: 'bt_reiniciar_1'
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

   })("bt_reiniciar_1");
   //Edge symbol end:'bt_reiniciar_1'

   //=========================================================
   
   //Edge symbol: 'bt_ayuda_1'
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

   })("bt_ayuda_1");
   //Edge symbol end:'bt_ayuda_1'

})(jQuery, AdobeEdge, "EDGE-3785112");

});