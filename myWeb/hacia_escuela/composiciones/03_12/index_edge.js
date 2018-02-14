/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif']='<script src=\"http://use.edgefonts.net/cabin:n4,i4,n7,i7,n5,i5,n6,i6:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'false',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'F1_D16',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"F1_D16.png",'0px','0px']
            },
            {
                id: 'per',
                type: 'rect',
                rect: ['800px', '-6px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['-0.69839','0.7']]
            },
            {
                id: 'cont',
                type: 'image',
                rect: ['69px', '175px','1304px','596px','auto', 'auto'],
                clip: ['rect(26.666748046875px 82.6669921875px 73.333251953125px 33.3330078125px)'],
                fill: ["rgba(0,0,0,0)",im+"cont.png",'0px','0px']
            },
            {
                id: 'flecha',
                type: 'image',
                rect: ['-25px', '163px','1304px','596px','auto', 'auto'],
                clip: ['rect(210.666748046875px 684px 284px 633.3330078125px)'],
                fill: ["rgba(0,0,0,0)",im+"cont.png",'0px','0px']
            },
            {
                id: 'txt',
                type: 'image',
                rect: ['15px', '163px','1304px','596px','auto', 'auto'],
                clip: ['rect(192.000244140625px 916px 300px 709.33349609375px)'],
                fill: ["rgba(0,0,0,0)",im+"cont.png",'0px','0px']
            },
            {
                id: 'cuadro',
                type: 'image',
                rect: ['65px', '163px','1304px','596px','auto', 'auto'],
                clip: ['rect(93.33349609375px 585.3330078125px 401.33349609375px 40px)'],
                fill: ["rgba(0,0,0,0)",im+"cont.png",'0px','0px']
            },
            {
                id: 'error',
                type: 'audio',
                tag: 'audio',
                rect: ['616', '308','320px','45px','auto', 'auto'],
                source: ['media/error.mp3','media/error.ogg'],
                preload: 'false'
            },
            {
                id: 'success',
                type: 'audio',
                tag: 'audio',
                rect: ['616', '308','320px','45px','auto', 'auto'],
                source: ['media/success.mp3','media/success.ogg'],
                preload: 'false'
            },
            {
                id: 'instruccion',
                display: 'block',
                type: 'text',
                rect: ['148px', '205px','884px','60px','auto', 'auto'],
                text: "Como ya sabes, la fluidez creativa es una habilidad que se puede entrenar. Identifica la forma de hacerlo y arrastra en orden las acciones importantes en este proceso.<br>",
                align: "left",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 21, "rgba(44,53,104,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Drop_4',
                display: 'block',
                type: 'rect',
                rect: ['217px', '501px','398px','43px','auto', 'auto'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(244,244,244,0.00)"],
                stroke: [1,"rgba(204,204,204,1.00)","none"]
            },
            {
                id: 'Drop_3',
                display: 'block',
                type: 'rect',
                rect: ['217px', '446px','398px','43px','auto', 'auto'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(244,244,244,0.00)"],
                stroke: [1,"rgba(204,204,204,1.00)","none"]
            },
            {
                id: 'Drop_2',
                display: 'block',
                type: 'rect',
                rect: ['217px', '389px','398px','43px','auto', 'auto'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(244,244,244,0.00)"],
                stroke: [1,"rgba(204,204,204,1.00)","none"]
            },
            {
                id: 'Drop_1',
                display: 'block',
                type: 'rect',
                rect: ['217px', '333px','398px','43px','auto', 'auto'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(244,244,244,0.00)"],
                stroke: [1,"rgb(204, 204, 204)","none"]
            },
            {
                id: 'Drag_1',
                display: 'none',
                type: 'image',
                rect: ['52px', '566px','400px','45px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_1.png",'0px','0px']
            },
            {
                id: 'Drag_2',
                display: 'none',
                type: 'image',
                rect: ['874px', '614px','400px','45px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_2.png",'0px','0px']
            },
            {
                id: 'Drag_3',
                display: 'none',
                type: 'image',
                rect: ['463px', '566px','400px','45px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_3.png",'0px','0px']
            },
            {
                id: 'Drag_4',
                display: 'none',
                type: 'image',
                rect: ['52px', '614px','400px','45px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_4.png",'0px','0px']
            },
            {
                id: 'Drag_5',
                display: 'none',
                type: 'image',
                rect: ['463px', '614px','400px','45px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_5.png",'0px','0px']
            },
            {
                id: 'Drag_6',
                display: 'none',
                type: 'image',
                rect: ['874px', '565px','400px','45px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_6.png",'0px','0px']
            },
            {
                id: 'resp_incorrecta',
                display: 'none',
                type: 'image',
                rect: ['293px', '257px','434px','148px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"msg_incorrecto.png",'0px','0px']
            },
            {
                id: 'resp_correcta',
                display: 'none',
                type: 'image',
                rect: ['292px', '257px','434px','148px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"msg_correcto.png",'0px','0px']
            },
            {
                id: 'help',
                display: 'none',
                type: 'image',
                rect: ['812px', '169px','497px','234px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"help_drag.png",'0px','0px']
            },
            {
                id: 'bt_validar',
                type: 'rect',
                rect: ['1309px', '173px','auto','auto','auto', 'auto']
            },
            {
                id: 'bt_solucion',
                type: 'rect',
                rect: ['1309px', '230px','auto','auto','auto', 'auto']
            },
            {
                id: 'bt_reiniciar',
                type: 'rect',
                rect: ['1309px', '283px','auto','auto','auto', 'auto']
            },
            {
                id: 'bt_ayuda',
                type: 'rect',
                rect: ['1309px', '335px','auto','auto','auto', 'auto']
            },
            {
                id: 'hotspot_ayuda',
                type: 'rect',
                rect: ['1310px', '335px','54px','54px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_reiniciar',
                type: 'rect',
                rect: ['1310px', '284px','54px','54px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_solucion',
                type: 'rect',
                rect: ['1310px', '230px','54px','54px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'hotspot_validar',
                type: 'rect',
                rect: ['1309px', '173px','54px','58px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [
            {
                id: 'bt_reiniciar',
                symbolName: 'bt_reiniciar',
                autoPlay: {

                }
            },
            {
                id: 'per',
                symbolName: 'per',
                autoPlay: {

                }
            },
            {
                id: 'bt_ayuda',
                symbolName: 'bt_ayuda',
                autoPlay: {

                }
            },
            {
                id: 'bt_validar',
                symbolName: 'bt_validar',
                autoPlay: {

                }
            },
            {
                id: 'bt_solucion',
                symbolName: 'bt_solucion',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_cuadro}": [
                ["style", "top", '163px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "left", '65px'],
                ["style", "clip", [93.33349609375,585.3330078125,401.33349609375,40], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [23.8,40.55], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [23.8,40.55],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [23.8,40.55],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [23.8,40.55],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [23.8,40.55],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [23.8,40.55],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_hotspot_reiniciar}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '284px'],
                ["style", "height", '54px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '1310px'],
                ["style", "width", '54px']
            ],
            "${_Drop_2}": [
                ["color", "background-color", 'rgba(244,244,244,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '217px'],
                ["style", "width", '398px'],
                ["style", "top", '389px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'block'],
                ["style", "height", '43px'],
                ["color", "border-color", 'rgba(204,204,204,1.00)'],
                ["style", "opacity", '1'],
                ["style", "border-width", '1px']
            ],
            "${_Drop_3}": [
                ["color", "background-color", 'rgba(244,244,244,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '217px'],
                ["style", "width", '398px'],
                ["style", "top", '446px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'block'],
                ["style", "height", '43px'],
                ["color", "border-color", 'rgba(204,204,204,1.00)'],
                ["style", "opacity", '1'],
                ["style", "border-width", '1px']
            ],
            "${_resp_correcta}": [
                ["style", "top", '169px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "left", '812px'],
                ["style", "width", '497px']
            ],
            "${_per}": [
                ["style", "top", '-6px'],
                ["transform", "scaleY", '0.7'],
                ["transform", "scaleX", '-0.69839'],
                ["style", "left", '800px'],
                ["style", "clip", [0,492,728.1900024414063,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_txt}": [
                ["style", "top", '163px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "left", '15px'],
                ["style", "clip", [192.000244140625,916,300,709.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [54.52,41.44], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [54.52,41.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [54.52,41.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [54.52,41.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [54.52,41.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [54.52,41.44],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Drag_1}": [
                ["style", "top", '566px'],
                ["style", "cursor", 'move'],
                ["style", "display", 'none']
            ],
            "${_hotspot_validar}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '173px'],
                ["style", "height", '58px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '1309px'],
                ["style", "width", '54px']
            ],
            "${_Drop_4}": [
                ["color", "background-color", 'rgba(244,244,244,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '217px'],
                ["style", "width", '398px'],
                ["style", "top", '501px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "display", 'block'],
                ["style", "height", '43px'],
                ["color", "border-color", 'rgba(204,204,204,1.00)'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '1px']
            ],
            "${_bt_solucion}": [
                ["style", "top", '230px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_cont}": [
                ["style", "top", '175px'],
                ["transform", "rotateZ", '360deg'],
                ["style", "clip", [26.666748046875,82.6669921875,73.333251953125,33.3330078125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '69px'],
                ["style", "-webkit-transform-origin", [4.47,9], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [4.47,9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [4.47,9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [4.47,9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [4.47,9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [4.47,9],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_help}": [
                ["style", "top", '169px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '812px'],
                ["style", "width", '497px']
            ],
            "${_hotspot_solucion}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '230px'],
                ["style", "height", '54px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '1310px'],
                ["style", "width", '54px']
            ],
            "${_bt_reiniciar}": [
                ["style", "top", '283px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_flecha}": [
                ["style", "-webkit-transform-origin", [48.85,41.44], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [48.85,41.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [48.85,41.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [48.85,41.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [48.85,41.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [48.85,41.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-125px'],
                ["style", "opacity", '0'],
                ["style", "clip", [210.666748046875,684,284,633.3330078125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '163px']
            ],
            "${_flecha_c}": [
                ["style", "top", '112px'],
                ["style", "left", '116px']
            ],
            "${_hotspot_ayuda}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '335px'],
                ["style", "height", '54px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '1310px'],
                ["style", "width", '54px']
            ],
            "${_bt_ayuda}": [
                ["style", "top", '335px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_F1_D16}": [
                ["style", "left", '5px'],
                ["style", "top", '72px']
            ],
            "${_Drag_6}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'move'],
                ["style", "left", '874px'],
                ["style", "top", '565px']
            ],
            "${_instruccion}": [
                ["color", "color", 'rgba(44,53,104,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '148px'],
                ["style", "font-size", '21px'],
                ["style", "top", '285px'],
                ["style", "width", '884px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif'],
                ["style", "height", '60px'],
                ["style", "opacity", '0']
            ],
            "${_Drop_1}": [
                ["color", "background-color", 'rgba(244,244,244,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '217px'],
                ["style", "width", '398px'],
                ["style", "top", '333px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "display", 'block'],
                ["style", "height", '43px'],
                ["color", "border-color", 'rgba(204,204,204,1.00)'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '1px']
            ],
            "${_Drag_3}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'move'],
                ["style", "left", '463px'],
                ["style", "top", '566px']
            ],
            "${_Drag_4}": [
                ["style", "top", '614px'],
                ["style", "cursor", 'move'],
                ["style", "display", 'none']
            ],
            "${_Drag_2}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'move'],
                ["style", "left", '874px'],
                ["style", "top", '614px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_resp_incorrecta}": [
                ["style", "top", '169px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "left", '812px'],
                ["style", "width", '497px']
            ],
            "${_bt_validar}": [
                ["style", "top", '173px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Drag_5}": [
                ["style", "display", 'none'],
                ["style", "cursor", 'move'],
                ["style", "left", '463px'],
                ["style", "top", '614px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid760", tween: [ "transform", "${_cont}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid750", tween: [ "style", "${_resp_incorrecta}", "top", '169px', { fromValue: '169px'}], position: 0, duration: 0 },
                { id: "eid757", tween: [ "style", "${_resp_correcta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid776", tween: [ "style", "${_Drag_4}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "swing" },
                { id: "eid759", tween: [ "style", "${_help}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid772", tween: [ "transform", "${_txt}", "scaleX", '1', { fromValue: '0'}], position: 870, duration: 380, easing: "swing" },
                { id: "eid746", tween: [ "style", "${_resp_correcta}", "height", '234px', { fromValue: '234px'}], position: 0, duration: 0 },
                { id: "eid758", tween: [ "style", "${_resp_incorrecta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid774", tween: [ "transform", "${_txt}", "scaleY", '1', { fromValue: '0'}], position: 870, duration: 380, easing: "swing" },
                { id: "eid748", tween: [ "style", "${_resp_correcta}", "left", '812px', { fromValue: '812px'}], position: 0, duration: 0 },
                { id: "eid777", tween: [ "style", "${_Drag_5}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "swing" },
                { id: "eid745", tween: [ "style", "${_resp_correcta}", "top", '169px', { fromValue: '169px'}], position: 0, duration: 0 },
                { id: "eid753", tween: [ "style", "${_resp_incorrecta}", "left", '812px', { fromValue: '812px'}], position: 0, duration: 0 },
                { id: "eid861", tween: [ "style", "${_per}", "clip", [0,492,728.1900024414063,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,492,728.1900024414063,0]}], position: 1250, duration: 0 },
                { id: "eid778", tween: [ "style", "${_Drag_3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "swing" },
                { id: "eid764", tween: [ "transform", "${_cuadro}", "scaleX", '1', { fromValue: '0'}], position: 255, duration: 495, easing: "swing" },
                { id: "eid768", tween: [ "style", "${_flecha}", "left", '25px', { fromValue: '-125px'}], position: 625, duration: 375, easing: "swing" },
                { id: "eid749", tween: [ "style", "${_resp_correcta}", "width", '497px', { fromValue: '497px'}], position: 0, duration: 0 },
                { id: "eid766", tween: [ "transform", "${_cuadro}", "scaleY", '1', { fromValue: '0'}], position: 255, duration: 495, easing: "swing" },
                { id: "eid751", tween: [ "style", "${_resp_incorrecta}", "height", '234px', { fromValue: '234px'}], position: 0, duration: 0 },
                { id: "eid762", tween: [ "style", "${_instruccion}", "opacity", '1', { fromValue: '0'}], position: 255, duration: 250 },
                { id: "eid754", tween: [ "style", "${_resp_incorrecta}", "width", '497px', { fromValue: '497px'}], position: 0, duration: 0 },
                { id: "eid780", tween: [ "style", "${_Drag_2}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "swing" },
                { id: "eid779", tween: [ "style", "${_Drag_6}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "swing" },
                { id: "eid761", tween: [ "style", "${_instruccion}", "top", '205px', { fromValue: '285px'}], position: 255, duration: 250 },
                { id: "eid770", tween: [ "style", "${_flecha}", "opacity", '1', { fromValue: '0'}], position: 625, duration: 375, easing: "swing" },
                { id: "eid775", tween: [ "style", "${_Drag_1}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "swing" }            ]
        }
    }
},
"ok": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'ok',
                    type: 'image',
                    rect: ['0px', '0px', '20px', '20px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ok.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ok}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"bad": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'bad',
                    type: 'image',
                    rect: ['0px', '0px', '20px', '20px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bad.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bad}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"bt_ayuda": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['-214px', '0', '284px', '126px', 'auto', 'auto'],
                    id: 'botones',
                    type: 'image',
                    clip: ['rect(0px 284.00048828125px 63.9892578125px 213.966796875px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones3}": [
                ["style", "top", '0px'],
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-143px'],
                ["style", "clip", [0,213.05126953125,63.43017578125,143.0166015625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_botones}": [
                ["style", "top", '-4px'],
                ["style", "clip", [0,284.00048828125,63.9892578125,213.966796875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859375000045], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-219px']
            ],
            "${symbolSelector}": [
                ["style", "height", '54px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '54px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1316", tween: [ "style", "${_botones}", "left", '-219px', { fromValue: '-219px'}], position: 0, duration: 0 },
                { id: "eid1318", tween: [ "style", "${_botones}", "left", '-218px', { fromValue: '-219px'}], position: 250, duration: 0 },
                { id: "eid49", tween: [ "style", "${_botones}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 },
                { id: "eid1317", tween: [ "style", "${_botones}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1319", tween: [ "style", "${_botones}", "top", '-5px', { fromValue: '-4px'}], position: 250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_botones3}", "background-position", [0,-0.55859374999943], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_botones3}", "background-position", [0,-65.921875499999], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 250, duration: 0 }            ]
        }
    }
},
"bt_reiniciar": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['-146px', '-5px', '284px', '126px', 'auto', 'auto'],
                    id: 'botones',
                    type: 'image',
                    clip: ['rect(0px 213.05126953125px 63.43017578125px 143.0166015625px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones2}": [
                ["style", "clip", [0,68.35791015625,63.9892578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859375000045], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_botones}": [
                ["style", "top", '-4px'],
                ["style", "left", '-147px'],
                ["style", "clip", [0,213.05126953125,63.43017578125,143.0166015625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '54px'],
                ["style", "width", '54px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid49", tween: [ "style", "${_botones2}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones2}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_botones}", "background-position", [0,-0.55859374999943], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_botones}", "background-position", [0,-65.921875499999], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 250, duration: 0 },
                { id: "eid1309", tween: [ "style", "${_botones}", "left", '-147px', { fromValue: '-147px'}], position: 0, duration: 0 },
                { id: "eid1310", tween: [ "style", "${_botones}", "left", '-146px', { fromValue: '-147px'}], position: 250, duration: 0 },
                { id: "eid1308", tween: [ "style", "${_botones}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1311", tween: [ "style", "${_botones}", "top", '-5px', { fromValue: '-4px'}], position: 250, duration: 0 }            ]
        }
    }
},
"bt_solucion": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['-74px', '-5px', '284px', '126px', 'auto', 'auto'],
                    id: 'botones',
                    type: 'image',
                    clip: ['rect(0px 140.42529296875px 63.43017578125px 70.39111328125px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones2}": [
                ["style", "clip", [0,68.35791015625,63.9892578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859375000045], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_botones}": [
                ["style", "top", '-4px'],
                ["style", "clip", [0,140.42529296875,63.43017578125,70.39111328125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-75px']
            ],
            "${symbolSelector}": [
                ["style", "height", '54px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '54px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid51", tween: [ "style", "${_botones}", "background-position", [0,-0.55859374999943], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_botones}", "background-position", [0,-65.921875499999], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 250, duration: 0 },
                { id: "eid49", tween: [ "style", "${_botones2}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones2}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 },
                { id: "eid1314", tween: [ "style", "${_botones}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1315", tween: [ "style", "${_botones}", "top", '-5px', { fromValue: '-4px'}], position: 250, duration: 0 },
                { id: "eid1313", tween: [ "style", "${_botones}", "left", '-75px', { fromValue: '-75px'}], position: 0, duration: 0 },
                { id: "eid1312", tween: [ "style", "${_botones}", "left", '-74px', { fromValue: '-75px'}], position: 250, duration: 0 }            ]
        }
    }
},
"bt_validar": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['-1px', '-2px', '284px', '126px', 'auto', 'auto'],
                    id: 'botones',
                    type: 'image',
                    clip: ['rect(0px 69.47509765625px 63.43017578125px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/botones.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botones2}": [
                ["style", "clip", [0,68.35791015625,63.9892578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859375000045], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_botones}": [
                ["style", "top", '-2px'],
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-4px'],
                ["style", "clip", [0,69.47509765625,63.43017578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '58px'],
                ["style", "width", '54px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            labels: {
                "normal": 0,
                "down": 250
            },
            timeline: [
                { id: "eid49", tween: [ "style", "${_botones2}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones2}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_botones}", "background-position", [0,-0.55859374999943], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_botones}", "background-position", [0,-65.921875499999], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 250, duration: 0 },
                { id: "eid1326", tween: [ "style", "${_botones}", "top", '-2px', { fromValue: '-2px'}], position: 0, duration: 0 },
                { id: "eid1323", tween: [ "style", "${_botones}", "top", '-3px', { fromValue: '-2px'}], position: 250, duration: 0 },
                { id: "eid1320", tween: [ "style", "${_botones}", "left", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1321", tween: [ "style", "${_botones}", "left", '-3px', { fromValue: '-4px'}], position: 250, duration: 0 }            ]
        }
    }
},
"boca": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '90px', '67px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    type: 'image',
                    id: 'bocCopy',
                    rect: ['-835px', '-144px', '1117px', '1000px', 'auto', 'auto'],
                    clip: ['rect(126px 937px 218px 550px)'],
                    fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bocCopy}": [
                ["style", "top", '-144px'],
                ["style", "left", '-835px'],
                ["style", "clip", [126,937,218,550], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "height", '67px'],
                ["style", "left", '0px'],
                ["style", "width", '90px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '90px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1380,
            autoPlay: false,
            labels: {
                "mute": 0,
                "ini": 250
            },
            timeline: [
                { id: "eid1317", tween: [ "style", "${_bocCopy}", "left", '-835px', { fromValue: '-835px'}], position: 250, duration: 0 },
                { id: "eid1318", tween: [ "style", "${_bocCopy}", "left", '-734px', { fromValue: '-835px'}], position: 376, duration: 0 },
                { id: "eid1307", tween: [ "style", "${_bocCopy}", "left", '-644px', { fromValue: '-735px'}], position: 500, duration: 0 },
                { id: "eid1319", tween: [ "style", "${_bocCopy}", "left", '-555px', { fromValue: '-644px'}], position: 626, duration: 0 },
                { id: "eid1309", tween: [ "style", "${_bocCopy}", "left", '-644px', { fromValue: '-555px'}], position: 751, duration: 0 },
                { id: "eid1310", tween: [ "style", "${_bocCopy}", "left", '-734px', { fromValue: '-644px'}], position: 877, duration: 0 },
                { id: "eid1320", tween: [ "style", "${_bocCopy}", "left", '-644px', { fromValue: '-734px'}], position: 1003, duration: 0 },
                { id: "eid1321", tween: [ "style", "${_bocCopy}", "left", '-734px', { fromValue: '-644px'}], position: 1129, duration: 0 },
                { id: "eid1314", tween: [ "style", "${_bocCopy}", "left", '-555px', { fromValue: '-734px'}], position: 1254, duration: 0 },
                { id: "eid1313", tween: [ "style", "${_bocCopy}", "left", '-835px', { fromValue: '-555px'}], position: 1380, duration: 0 }            ]
        }
    }
},
"per": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'piernas',
                    rect: ['-10px', '98px', '1117px', '1000px', 'auto', 'auto'],
                    clip: ['rect(426px 359px 972px 24px)'],
                    fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                },
                {
                    type: 'image',
                    id: 'pelo',
                    rect: ['-822px', '-597px', '1117px', '1000px', 'auto', 'auto'],
                    clip: ['rect(546px 1089px 918px 874px)'],
                    fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'DER',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['155px', '190px', '306px', '204px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        type: 'rect',
                        id: 'MANO2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['72px', '-18px', '234px', '224px', 'auto', 'auto'],
                        fill: ['rgba(192,192,192,0)'],
                        c: [
                        {
                            type: 'image',
                            id: 'antbra_2',
                            rect: ['-723px', '-220px', '1117px', '1000px', 'auto', 'auto'],
                            clip: ['rect(282px 855px 436px 728px)'],
                            fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'mano_2',
                            rect: ['-771px', '-220px', '1117px', '1000px', 'auto', 'auto'],
                            clip: ['rect(232px 1003px 326px 864px)'],
                            fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                        }]
                    },
                    {
                        type: 'image',
                        id: 'bra_2',
                        rect: ['-601px', '-238px', '1117px', '1000px', 'auto', 'auto'],
                        clip: ['rect(244px 725px 422px 598px)'],
                        fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                    }]
                },
                {
                    type: 'image',
                    id: 'tronco',
                    rect: ['-10px', '138px', '1117px', '1000px', 'auto', 'auto'],
                    clip: ['rect(72px 299px 424px 54px)'],
                    fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'IZQ',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['15px', '212px', '118px', '430px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        type: 'rect',
                        id: 'MANO',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['-10px', '152px', '110px', '278px', 'auto', 'auto'],
                        fill: ['rgba(192,192,192,0)'],
                        c: [
                        {
                            type: 'image',
                            id: 'antbra_1',
                            rect: ['-397px', '-447px', '1117px', '1000px', 'auto', 'auto'],
                            clip: ['rect(452px 485px 636px 416px)'],
                            fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'mano_1',
                            rect: ['-397px', '-487px', '1117px', '1000px', 'auto', 'auto'],
                            clip: ['rect(640px 473px 764px 404px)'],
                            fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                        }]
                    },
                    {
                        type: 'image',
                        id: 'bra_1',
                        rect: ['-407px', '-245px', '1117px', '1000px', 'auto', 'auto'],
                        clip: ['rect(242px 525px 456px 404px)'],
                        fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                    }]
                },
                {
                    type: 'group',
                    id: 'CABEZA',
                    clip: ['rect(514px 833px 1000px 546px)'],
                    rect: ['-546px', '-499px', '1117', '1000', 'auto', 'auto'],
                    c: [
                    {
                        type: 'image',
                        id: 'cabeza',
                        rect: ['0px', '0px', '1117px', '1000px', 'auto', 'auto'],
                        clip: ['rect(528px 809px 912px 586px)'],
                        fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                    },
                    {
                        id: 'boca',
                        type: 'rect',
                        rect: ['676px', '704px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'ojos',
                        type: 'rect',
                        rect: ['649px', '637px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'boca',
                symbolName: 'boca',
                autoPlay: {

               }
            },
            {
                id: 'ojos',
                symbolName: 'ojos',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_IZQ}": [
                ["style", "top", '340px'],
                ["style", "-webkit-transform-origin", [62.71,8.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [62.71,8.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [62.71,8.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [62.71,8.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [62.71,8.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [62.71,8.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '15px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_CABEZA}": [
                ["style", "-webkit-transform-origin", [61.68,76.97], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-499px'],
                ["style", "clip", [514,833,1000,546], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-546px']
            ],
            "${_cabeza}": [
                ["style", "-webkit-transform-origin", [61.68,76.97], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [61.68,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "clip", [528,809,912,586], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_bra_1}": [
                ["style", "-webkit-transform-origin", [42.94,28.03], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.94,28.03],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.94,28.03],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.94,28.03],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.94,28.03],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.94,28.03],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [242,525,456,404], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-407px'],
                ["style", "top", '-245px']
            ],
            "${_piernas}": [
                ["style", "-webkit-transform-origin", [18.98,47], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [18.98,47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [18.98,47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [18.98,47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [18.98,47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [18.98,47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '98px'],
                ["style", "clip", [426,359,972,24], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-10px']
            ],
            "${_bra_2}": [
                ["style", "top", '-238px'],
                ["style", "left", '-601px'],
                ["style", "clip", [244,725,422,598], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [57.39,27.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [57.39,27.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [57.39,27.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [57.39,27.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [57.39,27.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [57.39,27.4],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_DER}": [
                ["style", "top", '318px'],
                ["style", "-webkit-transform-origin", [13.09,17.65], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [13.09,17.65],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [13.09,17.65],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [13.09,17.65],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [13.09,17.65],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [13.09,17.65],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '155px'],
                ["transform", "rotateZ", '10deg']
            ],
            "${_pelo}": [
                ["style", "-webkit-transform-origin", [86.75,76.97], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [86.75,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [86.75,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [86.75,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [86.75,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [86.75,76.97],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "clip", [546,1089,918,874], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-826px'],
                ["style", "top", '-499px']
            ],
            "${_tronco}": [
                ["style", "-webkit-transform-origin", [17.73,42], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [17.73,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [17.73,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [17.73,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [17.73,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [17.73,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '138px'],
                ["style", "clip", [72,299,424,54], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-10px']
            ],
            "${_antbra_1}": [
                ["style", "-webkit-transform-origin", [40.79,47.17], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.79,47.17],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.79,47.17],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.79,47.17],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.79,47.17],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [40.79,47.17],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [452,485,636,416], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-397px'],
                ["style", "top", '-447px']
            ],
            "${_MANO2}": [
                ["style", "-webkit-transform-origin", [16.24,81.25], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.24,81.25],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.24,81.25],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.24,81.25],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.24,81.25],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.24,81.25],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '17deg']
            ],
            "${_boca}": [
                ["style", "top", '704px'],
                ["style", "-webkit-transform-origin", [14.44,98.01], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [14.44,98.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [14.44,98.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [14.44,98.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [14.44,98.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [14.44,98.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '676px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_MANO}": [
                ["style", "-webkit-transform-origin", [53.29,8.88], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [53.29,8.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [53.29,8.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [53.29,8.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [53.29,8.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [53.29,8.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg']
            ],
            "${_antbra_2}": [
                ["style", "-webkit-transform-origin", [68.13,40.2], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [68.13,40.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [68.13,40.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [68.13,40.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [68.13,40.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [68.13,40.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [282,855,436,728], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-723px'],
                ["style", "top", '-220px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1092px'],
                ["style", "width", '492px']
            ],
            "${_mano_2}": [
                ["style", "-webkit-transform-origin", [78.87,30.2], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [78.87,30.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [78.87,30.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [78.87,30.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [78.87,30.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [78.87,30.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-10deg'],
                ["style", "clip", [232,1003,326,864], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-771px'],
                ["style", "top", '-220px']
            ],
            "${_mano_1}": [
                ["style", "-webkit-transform-origin", [40.08,65.57], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.08,65.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.08,65.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.08,65.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.08,65.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [40.08,65.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [640,473,764,404], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-397px'],
                ["style", "top", '-487px']
            ],
            "${_ojos}": [
                ["style", "top", '637px'],
                ["style", "-webkit-transform-origin", [26.49,198.01], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [26.49,198.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [26.49,198.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [26.49,198.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [26.49,198.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [26.49,198.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '649px'],
                ["transform", "rotateZ", '0deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid1913", tween: [ "style", "${_IZQ}", "left", '15px', { fromValue: '15px'}], position: 15000, duration: 0 },
                { id: "eid1845", tween: [ "transform", "${_MANO}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 6750, duration: 2250 },
                { id: "eid1846", tween: [ "transform", "${_MANO}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 9000, duration: 2250 },
                { id: "eid1911", tween: [ "style", "${_pelo}", "top", '-499px', { fromValue: '-499px'}], position: 15000, duration: 0 },
                { id: "eid1907", tween: [ "style", "${_DER}", "top", '318px', { fromValue: '318px'}], position: 15000, duration: 0 },
                { id: "eid1950", tween: [ "transform", "${_pelo}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 1000, duration: 3714 },
                { id: "eid1951", tween: [ "transform", "${_pelo}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 4714, duration: 5571 },
                { id: "eid1952", tween: [ "transform", "${_pelo}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 10286, duration: 3714 },
                { id: "eid1830", tween: [ "transform", "${_ojos}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 1000, duration: 3714 },
                { id: "eid1831", tween: [ "transform", "${_ojos}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 4714, duration: 5571 },
                { id: "eid1832", tween: [ "transform", "${_ojos}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 10286, duration: 3714 },
                { id: "eid1834", tween: [ "transform", "${_boca}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 1000, duration: 3714 },
                { id: "eid1835", tween: [ "transform", "${_boca}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 4714, duration: 5571 },
                { id: "eid1836", tween: [ "transform", "${_boca}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 10286, duration: 3714 },
                { id: "eid1853", tween: [ "transform", "${_mano_2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 0, duration: 750 },
                { id: "eid1854", tween: [ "transform", "${_mano_2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 7750, duration: 750 },
                { id: "eid1909", tween: [ "style", "${_IZQ}", "top", '340px', { fromValue: '340px'}], position: 15000, duration: 0 },
                { id: "eid1837", tween: [ "style", "${_cabeza}", "-webkit-transform-origin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid882", tween: [ "style", "${_cabeza}", "-moz-transform-origin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid883", tween: [ "style", "${_cabeza}", "-ms-transform-origin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid884", tween: [ "style", "${_cabeza}", "msTransformOrigin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid885", tween: [ "style", "${_cabeza}", "-o-transform-origin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid886", tween: [ "style", "${_cabeza}", "transform-origin", [61.68,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [61.68,76.97]}], position: 1000, duration: 0 },
                { id: "eid1949", tween: [ "style", "${_pelo}", "-webkit-transform-origin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid887", tween: [ "style", "${_pelo}", "-moz-transform-origin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid888", tween: [ "style", "${_pelo}", "-ms-transform-origin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid889", tween: [ "style", "${_pelo}", "msTransformOrigin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid890", tween: [ "style", "${_pelo}", "-o-transform-origin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid891", tween: [ "style", "${_pelo}", "transform-origin", [86.75,76.97], { valueTemplate: '@@0@@% @@1@@%', fromValue: [86.75,76.97]}], position: 1000, duration: 0 },
                { id: "eid1843", tween: [ "transform", "${_IZQ}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 4750, duration: 2750 },
                { id: "eid1844", tween: [ "transform", "${_IZQ}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 10500, duration: 2750 },
                { id: "eid1833", tween: [ "style", "${_boca}", "-webkit-transform-origin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid892", tween: [ "style", "${_boca}", "-moz-transform-origin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid893", tween: [ "style", "${_boca}", "-ms-transform-origin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid894", tween: [ "style", "${_boca}", "msTransformOrigin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid895", tween: [ "style", "${_boca}", "-o-transform-origin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid896", tween: [ "style", "${_boca}", "transform-origin", [14.44,98.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [14.44,98.01]}], position: 1000, duration: 0 },
                { id: "eid1838", tween: [ "transform", "${_cabeza}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 1000, duration: 3714 },
                { id: "eid1839", tween: [ "transform", "${_cabeza}", "rotateZ", '2deg', { fromValue: '-3deg'}], position: 4714, duration: 5571 },
                { id: "eid1840", tween: [ "transform", "${_cabeza}", "rotateZ", '0deg', { fromValue: '2deg'}], position: 10286, duration: 3714 },
                { id: "eid1829", tween: [ "style", "${_ojos}", "-webkit-transform-origin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid897", tween: [ "style", "${_ojos}", "-moz-transform-origin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid898", tween: [ "style", "${_ojos}", "-ms-transform-origin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid899", tween: [ "style", "${_ojos}", "msTransformOrigin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid900", tween: [ "style", "${_ojos}", "-o-transform-origin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid901", tween: [ "style", "${_ojos}", "transform-origin", [26.49,198.01], { valueTemplate: '@@0@@% @@1@@%', fromValue: [26.49,198.01]}], position: 1000, duration: 0 },
                { id: "eid1912", tween: [ "style", "${_DER}", "left", '155px', { fromValue: '155px'}], position: 15000, duration: 0 },
                { id: "eid1849", tween: [ "transform", "${_DER}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 1500, duration: 2750 },
                { id: "eid1850", tween: [ "transform", "${_DER}", "rotateZ", '10deg', { fromValue: '0deg'}], position: 4250, duration: 2750 },
                { id: "eid1851", tween: [ "transform", "${_MANO2}", "rotateZ", '0deg', { fromValue: '17deg'}], position: 750, duration: 2250 },
                { id: "eid1852", tween: [ "transform", "${_MANO2}", "rotateZ", '17deg', { fromValue: '0deg'}], position: 5500, duration: 2250 }            ]
        }
    }
},
"ojos": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'ojo',
                    rect: ['-759px', '-40px', '1117px', '1000px', 'auto', 'auto'],
                    clip: ['rect(40px 917px 122px 558px)'],
                    fill: ['rgba(0,0,0,0)', 'images/amarilla.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ojo}": [
                ["style", "top", '-40px'],
                ["style", "left", '-759px'],
                ["style", "clip", [40,917,122,558], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '151px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14000,
            autoPlay: true,
            timeline: [
                { id: "eid1299", tween: [ "style", "${_ojo}", "top", '-40px', { fromValue: '-40px'}], position: 0, duration: 0 },
                { id: "eid1325", tween: [ "style", "${_ojo}", "top", '-40px', { fromValue: '-40px'}], position: 3000, duration: 0 },
                { id: "eid1329", tween: [ "style", "${_ojo}", "top", '-40px', { fromValue: '-40px'}], position: 8000, duration: 0 },
                { id: "eid1298", tween: [ "style", "${_ojo}", "left", '-759px', { fromValue: '-759px'}], position: 0, duration: 0 },
                { id: "eid1302", tween: [ "style", "${_ojo}", "left", '-564px', { fromValue: '-759px'}], position: 250, duration: 0 },
                { id: "eid1303", tween: [ "style", "${_ojo}", "left", '-759px', { fromValue: '-564px'}], position: 500, duration: 0 },
                { id: "eid1322", tween: [ "style", "${_ojo}", "left", '-759px', { fromValue: '-759px'}], position: 3000, duration: 0 },
                { id: "eid1323", tween: [ "style", "${_ojo}", "left", '-564px', { fromValue: '-759px'}], position: 3250, duration: 0 },
                { id: "eid1324", tween: [ "style", "${_ojo}", "left", '-759px', { fromValue: '-564px'}], position: 3500, duration: 0 },
                { id: "eid1326", tween: [ "style", "${_ojo}", "left", '-759px', { fromValue: '-759px'}], position: 8000, duration: 0 },
                { id: "eid1327", tween: [ "style", "${_ojo}", "left", '-564px', { fromValue: '-759px'}], position: 8250, duration: 0 },
                { id: "eid1328", tween: [ "style", "${_ojo}", "left", '-759px', { fromValue: '-564px'}], position: 8500, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1010687330");
