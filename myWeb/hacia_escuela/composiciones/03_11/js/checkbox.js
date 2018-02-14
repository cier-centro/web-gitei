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
		
      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
		   sym.$('.center-wrapper').css("overflow","hidden");
         //DEFINIR EL NÚMERO DE ELEMENTOS A SELECCIONAR COMO TRUE

         /////////////////////////////////
         //Variables de colores
         sym.setVariable("tipoactividad", "input");
         tipoactividad = sym.getVariable("tipoactividad");
		 
         //botones
         sym.getSymbol("bt_validar").stop("normal");
         sym.getSymbol("bt_solucion").stop("down");
         sym.getSymbol("bt_reiniciar").stop("down");
         sym.getSymbol("bt_ayuda").stop("normal");
         sym.$("hotspot_validar").show();
         sym.$("hotspot_solucion").hide();
         sym.$("hotspot_reiniciar").hide();
         sym.$("hotspot_ayuda").show();
 
         //CAMBIAR SEGÚN EL NÚMERO DE RESPUESTAS CORRECTAS O CHECKEADAS
        // TotalCheckBox = 2;
         //DEJAR IGUAL O CAMBIAR POR EL TOTAL DE ELEMENTOS
         CrearCheckBox = 50;
         
         // Agregar los checkbox a cada recuadro
         for (i=1; i<=CrearCheckBox ; i++ ){
         	var stringCheck = 'checkbox_'+i;
         	stringCheck = document.createElement(tipoactividad);
         	stringCheck.id="checkbox_"+i;
         	stringCheck.type="checkbox";
         	sym.$("checkbox_"+i).append(stringCheck);
         }
         //Ampliar los checks
         $('input:checkbox').hide();
         sym.$('[id^="Stage_checkbox_"]').addClass('check-on');
         sym.$('[id^="Stage_checkbox_"]').on("mousedown", function() {
         	var idCheck=$(this).children().attr("id");
         	//console.log(idCheck);
         	if($("#"+idCheck).is(':checked')) {  
                    // console.log("Está activado");
         
                     $(this).addClass("check-on");
                     $(this).removeClass("check-off");
                     $("#"+idCheck).prop('checked', false);
                 } else {  
                     //console.log("No está activado");
                     $(this).removeClass("check-on");
                     $(this).addClass("check-off");
                     $("#"+idCheck).prop('checked', true);
                 }
         });
      
         
         //BOTÓN VALIDAR
         sym.$('hotspot_validar').click(function(){
         //Definición de variables
         sym.setVariable("errores", 0);
         sym.setVariable("Total", 0);
         var Total=0;
         var errores=0;
         
         var tipoactividad = sym.getVariable("tipoactividad");
		 
		 $('div[id ^= Stage_checkbox]').css("pointer-events","none");
         
         for (i=1; i<=CrearCheckBox ; i++ ){
         	var y = (parseInt(sym.$("checkbox_"+i).css("top")) + 8)+"px";
         	var x = (parseInt(sym.$("checkbox_"+i).css("left")) - 25)+"px";
         	//console.log('x: '+x+' , y: '+y);
         	sym.$("checkbox_"+i).children(tipoactividad).each(function(){
         	if($(this).attr("id")==("checkbox_"+i)){
         		if($(this).is(":checked")==true){
         		ValorTemp = sym.getVariable("Respuesta_"+i);
         		if($(this).is(":checked")==ValorTemp){
         		Total = Total + 1;
         		console.log(Total);
         		sym.$("ok"+i).css({top: y, left: x});
         		sym.$("ok"+i).show();
         	}
         	else{
         		errores = errores + 1;
         		sym.$("bad"+i).css({top: y, left: x});
         		sym.$("bad"+i).show();
         	}
         	}
         	$(this).attr('disabled','disabled');
         	}
         	});
         }
         
         
         //Muestra las leyendas
         if(Total==TotalCheckBox && errores ==0){
         
         // Reproducir una pista de audio 
         sym.$("success")[0].play();
         sym.$("success")[0].muted = false;
         
         
         //mensaje respuesta correcta
         sym.$("resp_correcta").show();
		 setTimeout('$("#Stage_resp_correcta").fadeOut("slow");', 6000);
         //botones
         sym.getSymbol("bt_validar").stop("down");
         sym.getSymbol("bt_solucion").stop("down");
         sym.getSymbol("bt_reiniciar").stop("normal");
         sym.$("hotspot_validar").hide();
         sym.$("hotspot_solucion").hide();
         sym.$("hotspot_reiniciar").show();
         //sym.$("txt_Respuesta").html (Total + "/" + TotalElementos);
         }
         else{
         sym.$("error")[0].play();
         sym.$("error")[0].muted = false;
         //mensaje respuesta incorrecta
         sym.$("resp_incorrecta").show();
		 setTimeout('$("#Stage_resp_incorrecta").fadeOut("slow");', 6000);
         //botones
         sym.$("hotspot_validar").hide();
         sym.$("hotspot_solucion").show();
         sym.$("hotspot_reiniciar").show();
         sym.getSymbol("bt_validar").stop("down");
         sym.getSymbol("bt_solucion").stop("normal");
         sym.getSymbol("bt_reiniciar").stop("normal");
         //sym.$("txt_Respuesta").html (Total + "/" + TotalElementos);
         } 
         
         
         
         
         });
         //BOTÓN SOLUCIÓN
         sym.$('hotspot_solucion').click(function(){
         sym.getSymbol("bt_validar").stop("down");
         sym.getSymbol("bt_solucion").stop("down");
         sym.getSymbol("bt_reiniciar").stop("normal");
         sym.$("hotspot_validar").hide();
         sym.$("hotspot_solucion").hide();
         sym.$("hotspot_reiniciar").show();
         // Ocultar un elemento 
         sym.$("resp_incorrecta").hide();
         sym.$("resp_correcta").hide();
		 
		 $('div[id ^= Stage_checkbox]').css("pointer-events","none");
         
         
         var Valor_01 = sym.getVariable("Respuesta_1");
         var Valor_02 = sym.getVariable("Respuesta_2");
         var Valor_03 = sym.getVariable("Respuesta_3");
         var Valor_04 = sym.getVariable("Respuesta_4");
         var Valor_05 = sym.getVariable("Respuesta_5");
         var Valor_06 = sym.getVariable("Respuesta_6");
         var Valor_07 = sym.getVariable("Respuesta_7");
         var Valor_08 = sym.getVariable("Respuesta_8");
         var Valor_09 = sym.getVariable("Respuesta_9");
         var Valor_10 = sym.getVariable("Respuesta_10");
         var Valor_11 = sym.getVariable("Respuesta_11");
         var Valor_12 = sym.getVariable("Respuesta_12");
         var Valor_13 = sym.getVariable("Respuesta_13");
         var Valor_14 = sym.getVariable("Respuesta_14");
         var Valor_15 = sym.getVariable("Respuesta_15");
         var Valor_16 = sym.getVariable("Respuesta_16");
         var Valor_17 = sym.getVariable("Respuesta_17");
         var Valor_18 = sym.getVariable("Respuesta_18");
         var Valor_19 = sym.getVariable("Respuesta_19");
         var Valor_20 = sym.getVariable("Respuesta_20");
         var Valor_21 = sym.getVariable("Respuesta_21");
         var Valor_22 = sym.getVariable("Respuesta_22");
         var Valor_23 = sym.getVariable("Respuesta_23");
         var Valor_24 = sym.getVariable("Respuesta_24");
         var Valor_25 = sym.getVariable("Respuesta_25");
         var Valor_26 = sym.getVariable("Respuesta_26");
         var Valor_27 = sym.getVariable("Respuesta_27");
         var Valor_28 = sym.getVariable("Respuesta_28");
         var Valor_29 = sym.getVariable("Respuesta_29");
         var Valor_30 = sym.getVariable("Respuesta_30");
         var Valor_31 = sym.getVariable("Respuesta_31");
         var Valor_32 = sym.getVariable("Respuesta_32");
         var Valor_33 = sym.getVariable("Respuesta_33");
         var Valor_34 = sym.getVariable("Respuesta_34");
         var Valor_35 = sym.getVariable("Respuesta_35");
         var Valor_36 = sym.getVariable("Respuesta_36");
         var Valor_37 = sym.getVariable("Respuesta_37");
         var Valor_38 = sym.getVariable("Respuesta_38");
         var Valor_39 = sym.getVariable("Respuesta_39");
         var Valor_40 = sym.getVariable("Respuesta_40");
         var Valor_41 = sym.getVariable("Respuesta_41");
         var Valor_42 = sym.getVariable("Respuesta_42");
         var Valor_43 = sym.getVariable("Respuesta_43");
         var Valor_44 = sym.getVariable("Respuesta_44");
         var Valor_45 = sym.getVariable("Respuesta_45");
         var Valor_46 = sym.getVariable("Respuesta_46");
         var Valor_47 = sym.getVariable("Respuesta_47");
         var Valor_48 = sym.getVariable("Respuesta_48");
         var Valor_49 = sym.getVariable("Respuesta_49");
         var Valor_50 = sym.getVariable("Respuesta_50");
         var tipoactividad = sym.getVariable("tipoactividad");
         
         //Oculta las leyendas
         for (var i=1; i<=CrearCheckBox; i++) {
         	sym.$('ok'+i).hide();
         	sym.$('bad'+i).hide();
         }
         
         for (j=1; j<=CrearCheckBox; j++){
         	var ValorTemp = sym.getVariable("Respuesta_"+j);
         	console.log("checkbox_"+j);
         	console.log(ValorTemp);
         	sym.$("checkbox_"+j).children(tipoactividad).each(function(){
         		checkVar = "checkbox_"+j;
         		if($(this).attr("id")==checkVar){
         			$(this).attr("checked", ValorTemp);
         			$(this).attr("disabled", "disabled");	
         		}
         	});
         }
         sym.$('[id^="Stage_checkbox_"]').each(function() {
         	var idCheck=$(this).children().attr("id");
         	if($("#"+idCheck).is(':checked')) {  
                     $(this).addClass("check-off");
                     $(this).removeClass("check-on");
                 } else {  
                     $(this).removeClass("check-off");
                     $(this).addClass("check-on");
                 }
         });
         
         
         });
         //BOTÓN REINICIAR
         sym.$('hotspot_reiniciar').click(function(){
         
         sym.getSymbol("bt_validar").stop("normal");
         sym.getSymbol("bt_solucion").stop("down");
         sym.getSymbol("bt_reiniciar").stop("down");
         sym.$("hotspot_validar").show();
         sym.$("hotspot_reiniciar").hide();
         sym.$("hotspot_solucion").hide();
         //window.location.reload();
         sym.$("resp_incorrecta").hide();
         sym.$("resp_correcta").hide();
		 
		 $('div[id ^= Stage_checkbox]').css("pointer-events","auto");
         
         sym.setVariable("intentos", 0);
         sym.setVariable("totalintentos", 0);
         //Definición de variables
         sym.setVariable("errores", 0);
         sym.setVariable("Total", 0);
         
         //Oculta las leyendas
         for (var i=1; i<=CrearCheckBox; i++) {
         	sym.$('ok'+i).hide();
         	sym.$('bad'+i).hide();
         }
         
         $('input[type="checkbox"]').remove();
         $('input[type="checkbox"]').remove();
         
         
         // Agregar los checkbox a cada recuadro
         for (i=1; i<=CrearCheckBox ; i++ ){
         	var stringCheck = 'checkbox_'+i;
         	stringCheck = document.createElement(tipoactividad);
         	stringCheck.id="checkbox_"+i;
         	stringCheck.type="checkbox";
         	sym.$("checkbox_"+i).append(stringCheck);
         }
         
         $('input:checkbox').hide();
         sym.$('[id^="Stage_checkbox_"]').each(function() {
         	var idCheck=$(this).children().attr("id");
         	if($("#"+idCheck).is(':checked')) {  
                     $(this).addClass("check-off");
                     $(this).removeClass("check-on");
                 } else {  
                     $(this).removeClass("check-off");
                     $(this).addClass("check-on");
                 }
         });
         
         
         });
         //BOTÓN AYUDA
         sym.$('hotspot_ayuda').click(function(){
         if (sym.$("help_checkbox").is(":visible")) {
         	sym.$("help_checkbox").hide();
         	sym.getSymbol("bt_ayuda").stop("normal");
         } else {
         	sym.$("help_checkbox").show();
         	sym.getSymbol("bt_ayuda").stop("down");
         }
         
         });
		 
		 //ocultar ayuda
		   sym.$("help_checkbox").click(function(){
				 $(this).hide();
				 sym.getSymbol("bt_ayuda").stop("normal");
			});
         
         

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'
})(jQuery, AdobeEdge, "EDGE-7842101");

});