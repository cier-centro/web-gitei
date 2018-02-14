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
         
         //Variables de colores
         sym.setVariable("fondo", "rgba(200,200,200,0.0)");
         sym.setVariable("colorbad", "rgba(50,230,60,0.4)");
         sym.setVariable("fondobad", "rgba(231,50,60,0.4)");
         sym.setVariable("fondook", "rgba(50,230,60,0.4)");
         sym.setVariable("fondoini", "rgba(244,244,244,0)");
         
         //Cambiar por la cantidad de elementos arrastrables
         TotalDragElements = 6;
         
         //Cambiar por la cantidad de elementos droppables o de destino
         TotalDropElements = 4;
         
         // Determino las respuestas correctas para cada drop en la actividad
         var dontTouch = 0;
         var Rd1 = new Array(1,dontTouch); 
         sym.setVariable("RespDrop1", Rd1);
         var Rd2 = new Array(2,dontTouch); 
         sym.setVariable("RespDrop2", Rd2);
         var Rd3 = new Array(3,dontTouch); 
         sym.setVariable("RespDrop3", Rd3);
         var Rd4 = new Array(4,dontTouch); 
         sym.setVariable("RespDrop4", Rd4);
         var Rd5 = new Array(5,dontTouch); 
         sym.setVariable("RespDrop5", Rd5);
         var Rd6 = new Array(6,dontTouch); 
         sym.setVariable("RespDrop6", Rd6);
         var Rd7 = new Array(7,dontTouch); 
         sym.setVariable("RespDrop7", Rd7);
         var Rd8 = new Array(8,dontTouch); 
         sym.setVariable("RespDrop8", Rd8);
         var Rd9 = new Array(9,dontTouch); 
         sym.setVariable("RespDrop9", Rd9);
         var Rd10 = new Array(10,dontTouch); 
         sym.setVariable("RespDrop10", Rd10);
         var Rd11 = new Array(11,dontTouch); 
         sym.setVariable("RespDrop11", Rd11);
         var Rd12 = new Array(12,dontTouch); 
         sym.setVariable("RespDrop12", Rd12);
         var Rd13 = new Array(13,dontTouch); 
         sym.setVariable("RespDrop13", Rd13);
         var Rd14 = new Array(14,dontTouch); 
         sym.setVariable("RespDrop14", Rd14);
         var Rd15 = new Array(15,dontTouch); 
         sym.setVariable("RespDrop15", Rd15);
         var Rd16 = new Array(16,dontTouch); 
         sym.setVariable("RespDrop16", Rd16);
         var Rd17 = new Array(17,dontTouch); 
         sym.setVariable("RespDrop17", Rd17);
         var Rd18 = new Array(18,dontTouch); 
         sym.setVariable("RespDrop18", Rd18);
         var Rd19 = new Array(19,dontTouch); 
         sym.setVariable("RespDrop19", Rd19);
         var Rd20 = new Array(20,dontTouch); 
         sym.setVariable("RespDrop20", Rd20);
         var Rd21 = new Array(21,dontTouch); 
         sym.setVariable("RespDrop21", Rd21);
         var Rd22 = new Array(22,dontTouch); 
         sym.setVariable("RespDrop22", Rd22);
         var Rd23 = new Array(23,dontTouch); 
         sym.setVariable("RespDrop23", Rd23);
         var Rd24 = new Array(24,dontTouch); 
         sym.setVariable("RespDrop24", Rd24);
         var Rd25 = new Array(25,dontTouch); 
         sym.setVariable("RespDrop25", Rd25);
         var Rd26 = new Array(26,dontTouch); 
         sym.setVariable("RespDrop26", Rd26);
         var Rd27 = new Array(27,dontTouch); 
         sym.setVariable("RespDrop27", Rd27);
         var Rd28 = new Array(28,dontTouch); 
         sym.setVariable("RespDrop28", Rd28);
         var Rd29 = new Array(29,dontTouch); 
         sym.setVariable("RespDrop29", Rd29);
         var Rd30 = new Array(30,dontTouch); 
         sym.setVariable("RespDrop30", Rd30);
         
         // Funcion para verificar las respuestas de cada drop
         function verificarRespuestas(RespuestaDrop,idActiveDrag){
         	var respDrop=0;
         
         	var idResp = idActiveDrag.slice(11);	
         	var vectorResp = sym.getVariable(RespuestaDrop);	
         	var respTemp = vectorResp.indexOf(parseInt(idResp));
         	if(respTemp != -1){
         		respDrop = 1;
         	}
         	else{
         		respDrop = 0;		
         	}	
         	return respDrop;	
         }
         
         for(var i=1; i<=TotalDragElements; i++){
         	sym.setVariable("left"+i, sym.$("Drag_"+i).css("left"));
         	sym.setVariable("top"+i, sym.$("Drag_"+i).css("top"));
         }
         
         for(var i=1; i<=50; i++){
            sym.setVariable("DropVar"+i, 0); 
         }
         
         function matrixToArray(matrix) {
             var scaleVars = matrix.substr(7, matrix.length - 8).split(', ');
             return scaleVars[0];
         }
         
         function calcularDimensiones(){
         	anchoDrag = parseInt($(this).width()/2);
         	altoDrag = parseInt($(this).height()/2);
         	console.log(anchoDrag);	
         	$(this).draggable({
         		cursorAt:{top: altoDrag, left: anchoDrag}
         	});
         }
         
         //Centrar el cursos en el elemento-cambiar por la mitad del ancho y alto
         //sym.$('[id^="Stage_Drag_"]').draggable({ cursorAt: { top: 20, left: 20 } });
         
          sym.$('[id^="Stage_Drag_"]').draggable({
         	//axis: ["x","y"], 
         	appendTo: "body",
         	containment: '#Stage', 
         	opacity: 0.4,
         	iframeFix: true,
         	zIndex: 100,
         	cursor:'move',		
         	refreshPositions: true,
         	//snap:true,
         	//snapMode: "both",
         	//snapTolerance:20,
         	scroll:false,
         	//helper: "clone",
         	revert: "invalid",
         	revertDuration: 500,
         
         	helper: function() {
         		var escalaTemp = $('#Stage').css('transform');
         		var escala = matrixToArray(escalaTemp);
               var helper = $(this).clone(); 
               helper.css({
             	"transform":"scale("+escala+")",
             	"-o-transform":"scale("+escala+")",
             	"-ms-transform":"scale("+escala+")",
             	"-webkit-transform":"scale("+escala+")",
             	"-moz-transform":"scale("+escala+")",
             	"-o-transform":"scale("+escala+")",
             	"-moz-transform-origin":"left top",
         		"-webkit-transform-origin":"left top",
         		"-o-transform-origin":"left top",
         		"-ms-transform-origin":"left top",
             	});        
               return helper;
            }
         });
         
         
         
         
         	sym.$('[id^="Stage_Drop_"]').droppable({
         		drop: function( event, ui ){
         			var DropIdtemp=$(this).prop("id");	
         			var DropId = DropIdtemp.slice(11);	
         			var respDroppable=0;	 	
         			sym.setVariable("DropVar"+DropId, verificarRespuestas("RespDrop"+DropId,ui.draggable.attr('id')));
               	coordenadas("Drop_"+DropId, ui.draggable.attr('id').slice(6));	
            	}
            });	
         
             function coordenadas (Drop, simbolo) {
                varxdrop = sym.$(Drop).css("left");
                varydrop = sym.$(Drop).css("top");
                varxdropanch = sym.$(Drop).css("width");
                varydropalto = sym.$(Drop).css("height");
                varxdropcentro = parseInt(varxdrop) + parseInt(varxdropanch)/2;
                varydropcentro = parseInt(varydrop) + parseInt(varydropalto)/2;
                varxdraganch = sym.$(simbolo).css("width");
                varydragalto = sym.$(simbolo).css("height");
                varxdragcentro = parseInt(varxdraganch)/2;
                varydragcentro = parseInt(varydragalto)/2;
                sym.$(simbolo).css({top: varydropcentro-varydragcentro});
                sym.$(simbolo).css({left: varxdropcentro-varxdragcentro});
                };
         
         
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         //botones
         sym.getSymbol("bt_validar").stop("normal");
         sym.getSymbol("bt_solucion").stop("down");
         sym.getSymbol("bt_reiniciar").stop("down");
         sym.getSymbol("bt_ayuda").stop("normal");
         sym.$("hotspot_validar").show();
         sym.$("hotspot_solucion").hide();
         sym.$("hotspot_reiniciar").hide();
         sym.$("hotspot_ayuda").show();
         
         //	Copiar la siguiente función para las correcciones del material anterior
         //	Esta función permite que los elementos no se solapen
         
         // Se establece el atributo vacio para todos los elementos droppables
         sym.$('[id^="Stage_Drop_"]').attr("dragelement","vacio");
         
         		 $(".ui-droppable").on( "drop", function( event, ui ) {
         		 	// Verifico el estado del drop (ocupado o vacio)
         					var estadoDrop = $(this).attr("dragelement");
         
         					// 
         					if(estadoDrop != "vacio"){										
         						var numDrag = estadoDrop.slice(11);	
         						var posLeftDrag = sym.getVariable("left"+numDrag);
         						var posTopDrag = sym.getVariable("top"+numDrag);
         						sym.$("#"+estadoDrop).animate({top: posTopDrag, left: posLeftDrag});
         						var idDraggable = ui.draggable.attr('id');
         						$(this).attr("dragelement",idDraggable);
         					} else{
         						var idDraggable = ui.draggable.attr('id');
         						$(this).attr("dragelement",idDraggable);
         					}
         
         		 } );
         
         		 $(".ui-droppable").droppable({	
         				out: function( event, ui ){ 
         					var estadoDrop = $(this).attr("dragelement");
         					var idDraggable = ui.draggable.attr('id');
         					if(estadoDrop == idDraggable ){	
         						$(this).attr("dragelement","vacio");					
         					}
         					else{						
         					}
         				}
         		 });
         
         
         
         //BOTÓN VALIDAR
         sym.$('hotspot_validar').click(function(){
         
         var colorok = sym.getVariable("colorok");
         var fondook = sym.getVariable("fondook");
         var colorbad = sym.getVariable("colorbad");
         var fondobad = sym.getVariable("fondobad");
         
         var Total = 0;
         
         for(var k=1;k<=TotalDropElements;k++){
         	var DropVar = sym.getVariable("DropVar"+k);
         	Total = Total + DropVar;
         	if(DropVar==1){
         		sym.$("Drop_"+k).css({background: fondook})
         	}
         	else{
         		sym.$("Drop_"+k).css({background: fondobad});
         	}
         }
         
         // Deshabilito todos los drag mientras se validan los datos en la actividad
         sym.$('[id^="Stage_Drag_"]').draggable({
         	disabled:true
         });
         
         //Muestra las leyendas
         if(Total==TotalDropElements){
         	sym.$("resp_correcta").show();
         	setTimeout('$("#Stage_resp_correcta").fadeOut("slow");', 2500);
         	//audio correcto
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
         else{
         	//mensaje respuesta incorrecta
         	sym.$("resp_incorrecta").show();
         	setTimeout('$("#Stage_resp_incorrecta").fadeOut("slow");', 2500);
         	//audio incorrecto
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
         
         var colorok = sym.getVariable("colorok");
         var fondook = sym.getVariable("fondook");
         
         var leftDrag = [];
         var topDrag = [];
         
         for (var h=1; h<=TotalDragElements; h++){
         	leftDrag[h] = sym.getVariable("left"+h);
         	topDrag[h] = sym.getVariable("top"+h);
         }
         
         var devueltos= TotalDropElements+1;
         
         for(var i=1; i<=TotalDragElements; i++){
         	sym.$("Drag_"+i).animate({top: topDrag[i], left: leftDrag[i]},50);
         }
         
         for(var i=1; i<=TotalDropElements; i++){
         	var vectorResp = sym.getVariable("RespDrop"+i);
         	var firstResp = vectorResp[0];
         	sym.$("Drag_"+firstResp).css({top: topDrag[i], left: leftDrag[i]});
         	coordenadas("Drop_"+i, "Drag_"+firstResp);
         	sym.$("Drop_"+i).css({background: fondook});
         }
         
         
         function coordenadas (Drop, simbolo) {
         	varxdrop = sym.$(Drop).css("left");
         	varydrop = sym.$(Drop).css("top");
         	varxdropanch = sym.$(Drop).css("width");
         	varydropalto = sym.$(Drop).css("height");
         	varxdropcentro = parseInt(varxdrop) + parseInt(varxdropanch)/2;
         	varydropcentro = parseInt(varydrop) + parseInt(varydropalto)/2;
         	varxdraganch = sym.$(simbolo).css("width");
         	varydragalto = sym.$(simbolo).css("height");
         	varxdragcentro = parseInt(varxdraganch)/2;
         	varydragcentro = parseInt(varydragalto)/2;
         	sym.$(simbolo).animate({top: varydropcentro-varydragcentro, left: varxdropcentro-varxdragcentro},150);
         };
         
         });
         //BOTÓN REINICIAR
         sym.$('hotspot_reiniciar').click(function(){
         //botones
         	sym.getSymbol("bt_validar").stop("normal");
         	sym.getSymbol("bt_solucion").stop("down");
         	sym.getSymbol("bt_reiniciar").stop("down");
         	sym.$("hotspot_validar").show();
         	sym.$("hotspot_reiniciar").hide();
         	sym.$("hotspot_solucion").hide();  
         //Oculta las leyendas
         sym.$("resp_correcta").hide();
         sym.$("resp_incorrecta").hide();
         
         sym.$('[id^="Stage_Drop_"]').attr("dragelement","vacio");
         
         var colorini = sym.getVariable("colorini");
         var fondoini = sym.getVariable("fondoini");
         var tipoactividad = sym.getVariable("tipoactividad");
         
         for(var i=1; i<=TotalDragElements; i++){
         	var topDrag = sym.getVariable("top"+i);
         	var leftDrag = sym.getVariable("left"+i);
         	sym.$("Drag_"+i).css({top: topDrag, left: leftDrag});
         	sym.$("Drag_"+i).draggable ({
         		disabled: false
         	});
         	//sym.$("Drop_"+i).css({color: colorini ,background: fondoini});
         	sym.setVariable("DropVar"+i, 0);
         }
         
         sym.$('[id^="Stage_Drop_"]').css({background: fondoini});
         });
         
         //BOTÓN AYUDA
         sym.$('hotspot_ayuda').click(function(){
         // Definir un conmutador para ocultar o mostrar un elemento 
         if (sym.$("help").is(":visible")) {
         	sym.$("help").hide();
         	sym.getSymbol("bt_ayuda").stop("normal");
         } else {
         	sym.$("help").show();
         	sym.getSymbol("bt_ayuda").stop("down");
         }
         
         
         });
         // AYUDA
         sym.$('help').click(function(){
         sym.$("help").hide();
         sym.getSymbol("bt_ayuda").stop("normal");
         });
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1380, function(sym, e) {
         sym.play("ini");

      });
      //Edge binding end

   })("boca");
   //Edge symbol end:'boca'

   //=========================================================
   
   //Edge symbol: 'per'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         
         sym.play(0);

      });
      //Edge binding end

   })("per");
   //Edge symbol end:'per'

   //=========================================================
   
   //Edge symbol: 'ojos'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("ojos");
   //Edge symbol end:'ojos'

})(jQuery, AdobeEdge, "EDGE-1010687330");