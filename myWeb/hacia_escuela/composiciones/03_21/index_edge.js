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
                id: 'F1_D19',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"F1_D19.png",'0px','0px']
            },
            {
                id: 'instruccion',
                display: 'block',
                type: 'text',
                rect: ['150px', '205px','1103px','auto','auto', 'auto'],
                text: "Al realizar las actividades de la izquierda en qué te puede ayudar la fluidez creativa. Arrastra los números a la columna de alternativas.",
                align: "left",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 21, "rgba(44,53,104,1.00)", "400", "none", "normal"]
            },
            {
                id: 'tablas2',
                type: 'image',
                rect: ['5px', '92px','1304px','596px','auto', 'auto'],
                clip: ['rect(148px 1230.666015625px 560px 670.66650390625px)'],
                fill: ["rgba(0,0,0,0)",im+"tablas.png",'0px','0px']
            },
            {
                id: 'tablas1',
                type: 'image',
                rect: ['5px', '92px','1304px','596px','auto', 'auto'],
                clip: ['rect(149.33349609375px 630.666015625px 560px 74.66650390625px)'],
                fill: ["rgba(0,0,0,0)",im+"tablas.png",'0px','0px']
            },
            {
                id: 'cont',
                type: 'image',
                rect: ['68px', '102px','1304px','596px','auto', 'auto'],
                clip: ['rect(98.66650390625px 80px 145.33349609375px 33.3330078125px)'],
                fill: ["rgba(0,0,0,0)",im+"tablas.png",'0px','0px']
            },
            {
                id: 'Drop_2',
                display: 'block',
                type: 'rect',
                rect: ['722px', '564px','38px','38px','auto', 'auto'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(244,244,244,0.00)"],
                stroke: [1,"rgba(204,204,204,1.00)","none"]
            },
            {
                id: 'Drop_1',
                display: 'block',
                type: 'rect',
                rect: ['722px', '483px','38px','38px','auto', 'auto'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(244,244,244,0.00)"],
                stroke: [1,"rgba(204,204,204,1.00)","none"]
            },
            {
                id: 'Drop_3',
                display: 'block',
                type: 'rect',
                rect: ['722px', '388px','38px','38px','auto', 'auto'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(244,244,244,0.00)"],
                stroke: [1,"rgb(204, 204, 204)","none"]
            },
            {
                id: 'Drag_3',
                display: 'none',
                type: 'image',
                rect: ['122px', '550px','40px','40px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_3.png",'0px','0px']
            },
            {
                id: 'Drag_2',
                display: 'none',
                type: 'image',
                rect: ['122px', '468px','40px','40px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_2.png",'0px','0px']
            },
            {
                id: 'Drag_1',
                display: 'none',
                type: 'image',
                rect: ['122px', '387px','40px','40px','auto', 'auto'],
                cursor: ['move'],
                fill: ["rgba(0,0,0,0)",im+"Drag_1.png",'0px','0px']
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
                id: 'bt_validar',
                symbolName: 'bt_validar',
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
                id: 'bt_solucion',
                symbolName: 'bt_solucion',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Drag_3}": [
                ["style", "top", '550px'],
                ["style", "cursor", 'move'],
                ["style", "left", '122px'],
                ["style", "display", 'none']
            ],
            "${_hotspot_reiniciar}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '284px'],
                ["style", "height", '54px'],
                ["style", "left", '1310px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '54px']
            ],
            "${_hotspot_validar}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '173px'],
                ["style", "height", '58px'],
                ["style", "left", '1309px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '54px']
            ],
            "${_Drop_1}": [
                ["color", "background-color", 'rgba(244,244,244,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '722px'],
                ["style", "width", '38px'],
                ["style", "top", '483px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '1px'],
                ["style", "opacity", '1'],
                ["style", "display", 'block'],
                ["color", "border-color", 'rgba(204,204,204,1.00)'],
                ["style", "height", '38px'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_instruccion}": [
                ["color", "color", 'rgba(44,53,104,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '150px'],
                ["style", "font-size", '21px'],
                ["style", "top", '275px'],
                ["style", "opacity", '0'],
                ["style", "display", 'block'],
                ["style", "font-family", 'cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif'],
                ["style", "width", '1065px'],
                ["transform", "scaleX", '1']
            ],
            "${_Drag_2}": [
                ["style", "top", '468px'],
                ["style", "cursor", 'move'],
                ["style", "left", '122px'],
                ["style", "display", 'none']
            ],
            "${_bt_solucion}": [
                ["style", "top", '230px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_cont}": [
                ["style", "top", '102px'],
                ["transform", "rotateZ", '360deg'],
                ["style", "-webkit-transform-origin", [4.55,20.58], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [4.55,20.58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [4.55,20.58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [4.55,20.58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [4.55,20.58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [4.55,20.58],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '68px'],
                ["style", "clip", [98.66650390625,80,145.33349609375,33.3330078125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_help}": [
                ["style", "top", '169px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "left", '812px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '497px']
            ],
            "${_F1_D19}": [
                ["style", "left", '5px'],
                ["style", "top", '72px']
            ],
            "${_bt_reiniciar}": [
                ["style", "top", '283px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_flecha_c}": [
                ["style", "top", '112px'],
                ["style", "left", '116px']
            ],
            "${_hotspot_ayuda}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '335px'],
                ["style", "height", '54px'],
                ["style", "left", '1310px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '54px']
            ],
            "${_resp_incorrecta}": [
                ["style", "top", '169px'],
                ["style", "height", '234px'],
                ["style", "display", 'none'],
                ["style", "left", '812px'],
                ["style", "width", '497px']
            ],
            "${_hotspot_solucion}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '230px'],
                ["style", "height", '54px'],
                ["style", "left", '1310px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '54px']
            ],
            "${_Drop_2}": [
                ["color", "background-color", 'rgba(244,244,244,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '722px'],
                ["style", "width", '38px'],
                ["style", "top", '564px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '1px'],
                ["style", "opacity", '1'],
                ["style", "display", 'block'],
                ["color", "border-color", 'rgba(204,204,204,1.00)'],
                ["style", "height", '38px'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_tablas1}": [
                ["style", "top", '32px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "clip", [149.33349609375,630.666015625,560,74.66650390625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '5px']
            ],
            "${_bt_ayuda}": [
                ["style", "top", '335px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_resp_correcta}": [
                ["style", "top", '169px'],
                ["style", "height", '234px'],
                ["style", "display", 'none'],
                ["style", "left", '812px'],
                ["style", "width", '497px']
            ],
            "${_Drop_3}": [
                ["color", "background-color", 'rgba(244,244,244,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "left", '722px'],
                ["style", "width", '38px'],
                ["style", "top", '388px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '1px'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'block'],
                ["color", "border-color", 'rgba(204,204,204,1.00)'],
                ["style", "height", '38px'],
                ["style", "opacity", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_tablas2}": [
                ["style", "top", '32px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "clip", [148,1230.666015625,560,670.66650390625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '5px']
            ],
            "${_bt_validar}": [
                ["style", "top", '173px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Drag_1}": [
                ["style", "top", '387px'],
                ["style", "cursor", 'move'],
                ["style", "left", '122px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1250,
            autoPlay: true,
            timeline: [
                { id: "eid776", tween: [ "transform", "${_cont}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid754", tween: [ "style", "${_resp_incorrecta}", "width", '497px', { fromValue: '497px'}], position: 0, duration: 0 },
                { id: "eid757", tween: [ "style", "${_resp_correcta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid751", tween: [ "style", "${_resp_incorrecta}", "height", '234px', { fromValue: '234px'}], position: 0, duration: 0 },
                { id: "eid746", tween: [ "style", "${_resp_correcta}", "height", '234px', { fromValue: '234px'}], position: 0, duration: 0 },
                { id: "eid758", tween: [ "style", "${_resp_incorrecta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid748", tween: [ "style", "${_resp_correcta}", "left", '812px', { fromValue: '812px'}], position: 0, duration: 0 },
                { id: "eid761", tween: [ "style", "${_tablas2}", "top", '104px', { fromValue: '32px'}], position: 750, duration: 500, easing: "swing" },
                { id: "eid767", tween: [ "transform", "${_tablas2}", "scaleY", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "swing" },
                { id: "eid753", tween: [ "style", "${_resp_incorrecta}", "left", '812px', { fromValue: '812px'}], position: 0, duration: 0 },
                { id: "eid772", tween: [ "style", "${_Drag_3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "swing" },
                { id: "eid765", tween: [ "transform", "${_tablas2}", "scaleX", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "swing" },
                { id: "eid780", tween: [ "style", "${_instruccion}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250, easing: "swing" },
                { id: "eid750", tween: [ "style", "${_resp_incorrecta}", "top", '169px', { fromValue: '169px'}], position: 0, duration: 0 },
                { id: "eid771", tween: [ "transform", "${_tablas1}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "swing" },
                { id: "eid769", tween: [ "transform", "${_tablas1}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "swing" },
                { id: "eid763", tween: [ "style", "${_tablas1}", "top", '105px', { fromValue: '32px'}], position: 500, duration: 500, easing: "swing" },
                { id: "eid745", tween: [ "style", "${_resp_correcta}", "top", '169px', { fromValue: '169px'}], position: 0, duration: 0 },
                { id: "eid773", tween: [ "style", "${_Drag_2}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "swing" },
                { id: "eid759", tween: [ "style", "${_help}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid778", tween: [ "style", "${_instruccion}", "top", '205px', { fromValue: '275px'}], position: 250, duration: 250, easing: "swing" },
                { id: "eid749", tween: [ "style", "${_resp_correcta}", "width", '497px', { fromValue: '497px'}], position: 0, duration: 0 },
                { id: "eid774", tween: [ "style", "${_Drag_1}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "swing" }            ]
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
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '20px']
            ],
            "${_bad}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
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
                    type: 'image',
                    id: 'botones',
                    rect: ['-214px', '0', '284px', '126px', 'auto', 'auto'],
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
                ["style", "clip", [0,213.05126953125,63.43017578125,143.0166015625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-143px']
            ],
            "${_botones}": [
                ["style", "top", '-4px'],
                ["style", "left", '-219px'],
                ["style", "clip", [0,284.00048828125,63.9892578125,213.966796875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859375000045], {valueTemplate:'@@0@@px @@1@@px'} ]
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
                { id: "eid1317", tween: [ "style", "${_botones}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1319", tween: [ "style", "${_botones}", "top", '-5px', { fromValue: '-4px'}], position: 250, duration: 0 },
                { id: "eid49", tween: [ "style", "${_botones}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 },
                { id: "eid1316", tween: [ "style", "${_botones}", "left", '-219px', { fromValue: '-219px'}], position: 0, duration: 0 },
                { id: "eid1318", tween: [ "style", "${_botones}", "left", '-218px', { fromValue: '-219px'}], position: 250, duration: 0 },
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
                    type: 'image',
                    id: 'botones',
                    rect: ['-146px', '-5px', '284px', '126px', 'auto', 'auto'],
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
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-147px'],
                ["style", "clip", [0,213.05126953125,63.43017578125,143.0166015625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid1308", tween: [ "style", "${_botones}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1311", tween: [ "style", "${_botones}", "top", '-5px', { fromValue: '-4px'}], position: 250, duration: 0 },
                { id: "eid49", tween: [ "style", "${_botones2}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones2}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 },
                { id: "eid1309", tween: [ "style", "${_botones}", "left", '-147px', { fromValue: '-147px'}], position: 0, duration: 0 },
                { id: "eid1310", tween: [ "style", "${_botones}", "left", '-146px', { fromValue: '-147px'}], position: 250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_botones}", "background-position", [0,-0.55859374999943], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_botones}", "background-position", [0,-65.921875499999], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 250, duration: 0 }            ]
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
                    type: 'image',
                    id: 'botones',
                    rect: ['-74px', '-5px', '284px', '126px', 'auto', 'auto'],
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
                ["style", "left", '-75px'],
                ["style", "clip", [0,140.42529296875,63.43017578125,70.39111328125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
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
                { id: "eid1313", tween: [ "style", "${_botones}", "left", '-75px', { fromValue: '-75px'}], position: 0, duration: 0 },
                { id: "eid1312", tween: [ "style", "${_botones}", "left", '-74px', { fromValue: '-75px'}], position: 250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_botones}", "background-position", [0,-0.55859374999943], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_botones}", "background-position", [0,-65.921875499999], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 250, duration: 0 },
                { id: "eid1314", tween: [ "style", "${_botones}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1315", tween: [ "style", "${_botones}", "top", '-5px', { fromValue: '-4px'}], position: 250, duration: 0 },
                { id: "eid49", tween: [ "style", "${_botones2}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones2}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 }            ]
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
                    type: 'image',
                    id: 'botones',
                    rect: ['-1px', '-2px', '284px', '126px', 'auto', 'auto'],
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
                ["style", "clip", [0,69.47509765625,63.43017578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-4px']
            ],
            "${symbolSelector}": [
                ["style", "height", '58px'],
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
                { id: "eid1320", tween: [ "style", "${_botones}", "left", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1321", tween: [ "style", "${_botones}", "left", '-3px', { fromValue: '-4px'}], position: 250, duration: 0 },
                { id: "eid49", tween: [ "style", "${_botones2}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones2}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 },
                { id: "eid1326", tween: [ "style", "${_botones}", "top", '-2px', { fromValue: '-2px'}], position: 0, duration: 0 },
                { id: "eid1323", tween: [ "style", "${_botones}", "top", '-3px', { fromValue: '-2px'}], position: 250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_botones}", "background-position", [0,-0.55859374999943], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_botones}", "background-position", [0,-65.921875499999], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 250, duration: 0 }            ]
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
