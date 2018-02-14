/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['Helvetica']='';
    fonts['cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif']='<script src=\"http://use.edgefonts.net/cabin:n4,i4,n7,i7,n5,i5,n6,i6:all.js\"></script>';

var opts = {
    'gAudioPreloadPreference': 'auto',

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
                id: 'slide_1',
                type: 'rect',
                rect: ['5px', '72px','auto','auto','auto', 'auto']
            },
            {
                id: 'F1_D19',
                type: 'image',
                rect: ['5px', '72','1304px','596px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"F1_D19.png",'0px','0px']
            },
            {
                id: 'bt_3',
                type: 'image',
                rect: ['5px', '72','1304px','596px','auto', 'auto'],
                clip: ['rect(262.666748046875px 1166.6669921875px 484px 941.33349609375px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"bt_.png",'0px','0px']
            },
            {
                id: 'bt_2',
                type: 'image',
                rect: ['5px', '72','1304px','596px','auto', 'auto'],
                clip: ['rect(262.666748046875px 764px 484px 536px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"bt_.png",'0px','0px']
            },
            {
                id: 'bt_1',
                type: 'image',
                rect: ['5px', '72','1304px','596px','auto', 'auto'],
                clip: ['rect(261.333251953125px 360px 486.66650390625px 136.00048828125px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"bt_.png",'0px','0px']
            },
            {
                id: 'instruccion',
                display: 'block',
                type: 'text',
                rect: ['104px', '205px','1142px','143px','auto', 'auto'],
                text: "En tu vida cotidiana y particularmente en determinadas tareas escolares la fluidez creativa se hace necesaria para resolver un problema, proponer una alternativa, encontrar diferentes caminos para alcanzar una meta o incluso, explorar las posibilidades de trabajo.  Podemos decir que son tres grupos de situaciones las que te demandan la fluidez creativa:<br>",
                align: "left",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 21, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'pop_1',
                display: 'none',
                type: 'image',
                rect: ['5px', '137px','1304px','596px','auto', 'auto'],
                clip: ['rect(94.666748046875px 1082.666015625px 513.33349609375px 149.33349609375px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"pop_1.png",'0px','0px']
            },
            {
                id: 'pop_2',
                display: 'none',
                type: 'image',
                rect: ['5px', '137px','1304px','596px','auto', 'auto'],
                clip: ['rect(93.333251953125px 1085.333984375px 512px 145.33349609375px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"pop_2.png",'0px','0px']
            },
            {
                id: 'pop_3',
                display: 'none',
                type: 'image',
                rect: ['5px', '137px','1304px','596px','auto', 'auto'],
                clip: ['rect(96px 1082.666015625px 512px 146.6669921875px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"pop_3.png",'0px','0px']
            },
            {
                id: 'Audio3',
                type: 'audio',
                tag: 'audio',
                rect: ['1443', '362','320px','45px','auto', 'auto'],
                source: ['media/F1_E3_D15_N_3.mp3'],
                preload: 'auto'
            },
            {
                id: 'Audio2',
                type: 'audio',
                tag: 'audio',
                rect: ['1443', '362','320px','45px','auto', 'auto'],
                source: ['media/F1_E3_D15_N_2.mp3'],
                preload: 'auto'
            },
            {
                id: 'Audio1',
                type: 'audio',
                tag: 'audio',
                rect: ['1443', '362','320px','45px','auto', 'auto'],
                source: ['media/F1_E3_D15_N_1.mp3'],
                preload: 'auto'
            },
            {
                id: 'bt_audio_3',
                display: 'none',
                type: 'rect',
                rect: ['903px', '411px','auto','auto','auto', 'auto'],
                title: 'Audio3',
                transform: [[],[],[],['1.2','1.2']]
            },
            {
                id: 'bt_audio_2',
                display: 'none',
                type: 'rect',
                rect: ['903px', '385px','auto','auto','auto', 'auto'],
                title: 'Audio2',
                transform: [[],[],[],['1.2','1.2']]
            },
            {
                id: 'bt_audio_1',
                display: 'none',
                type: 'rect',
                rect: ['903px', '363px','auto','auto','auto', 'auto'],
                title: 'Audio1',
                transform: [[],[],[],['1.2','1.2']]
            }],
            symbolInstances: [
            {
                id: 'bt_audio_1',
                symbolName: 'bt_audio',
                autoPlay: {

                }
            },
            {
                id: 'bt_audio_3',
                symbolName: 'bt_audio',
                autoPlay: {

                }
            },
            {
                id: 'bt_audio_2',
                symbolName: 'bt_audio',
                autoPlay: {

                }
            },
            {
                id: 'slide_1',
                symbolName: 'slide_1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_F1_D19}": [
                ["style", "left", '5px']
            ],
            "${_bt_audio_3}": [
                ["style", "top", '411px'],
                ["transform", "scaleY", '1.2'],
                ["transform", "scaleX", '1.2'],
                ["style", "left", '903px'],
                ["style", "display", 'none']
            ],
            "${_slide_1}": [
                ["style", "left", '5px']
            ],
            "${_bt_3}": [
                ["style", "-webkit-transform-origin", [80.75,62.75], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [80.75,62.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [80.75,62.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [80.75,62.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [80.75,62.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [80.75,62.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "clip", [262.666748046875,1166.6669921875,484,941.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '5px']
            ],
            "${_instruccion}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '400'],
                ["style", "left", '104px'],
                ["style", "width", '1142px'],
                ["style", "top", '205px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif'],
                ["style", "font-size", '21px'],
                ["style", "height", '143px']
            ],
            "${_pop_1}": [
                ["style", "top", '90px'],
                ["style", "display", 'none'],
                ["style", "left", '5px'],
                ["style", "cursor", 'pointer'],
                ["style", "clip", [94.666748046875,1082.666015625,513.33349609375,149.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bt_audio_2}": [
                ["style", "top", '385px'],
                ["transform", "scaleY", '1.2'],
                ["transform", "scaleX", '1.2'],
                ["style", "left", '903px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_bt_1}": [
                ["style", "-webkit-transform-origin", [18.58,63.2], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [18.58,63.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [18.58,63.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [18.58,63.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [18.58,63.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [18.58,63.2],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "clip", [261.333251953125,360,486.66650390625,136.00048828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '5px']
            ],
            "${_label}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_pop_3}": [
                ["style", "top", '137px'],
                ["style", "display", 'none'],
                ["style", "left", '5px'],
                ["style", "cursor", 'pointer'],
                ["style", "clip", [96,1082.666015625,512,146.6669921875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bt_2}": [
                ["style", "-webkit-transform-origin", [49.77,63.42], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [49.77,63.42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [49.77,63.42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [49.77,63.42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [49.77,63.42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [49.77,63.42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "clip", [262.666748046875,764,484,536], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '5px']
            ],
            "${_bt_audio_1}": [
                ["style", "top", '363px'],
                ["transform", "scaleY", '1.2'],
                ["transform", "scaleX", '1.2'],
                ["style", "left", '903px'],
                ["style", "display", 'none']
            ],
            "${_pop_2}": [
                ["style", "top", '107px'],
                ["style", "display", 'none'],
                ["style", "left", '5px'],
                ["style", "cursor", 'pointer'],
                ["style", "clip", [93.333251953125,1085.333984375,512,145.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1750,
            autoPlay: true,
            labels: {
                "slide_1": 0
            },
            timeline: [
                { id: "eid2496", tween: [ "style", "${_bt_2}", "clip", [262.666748046875,764,530.66650390625,536], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [262.666748046875,764,484,536]}], position: 997, duration: 245, easing: "easeInOutBack" },
                { id: "eid2492", tween: [ "style", "${_bt_1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 497, easing: "easeInOutBack" },
                { id: "eid2486", tween: [ "transform", "${_bt_1}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 497, easing: "easeInOutBack" },
                { id: "eid2498", tween: [ "style", "${_pop_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid2503", tween: [ "style", "${_pop_1}", "top", '90px', { fromValue: '90px'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid2497", tween: [ "style", "${_bt_3}", "clip", [262.666748046875,1166.6669921875,528,941.33349609375], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [262.666748046875,1166.6669921875,484,941.33349609375]}], position: 1495, duration: 255, easing: "easeInOutBack" },
                { id: "eid2509", tween: [ "style", "${_bt_audio_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid2490", tween: [ "style", "${_bt_2}", "opacity", '1', { fromValue: '0'}], position: 497, duration: 500, easing: "easeInOutBack" },
                { id: "eid2516", tween: [ "style", "${_pop_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2508", tween: [ "style", "${_bt_audio_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid2493", tween: [ "style", "${_bt_1}", "clip", [261.333251953125,360,529.3330078125,136.00048828125], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [261.333251953125,360,486.66650390625,136.00048828125]}], position: 497, duration: 253, easing: "easeInOutBack" },
                { id: "eid2480", tween: [ "transform", "${_bt_2}", "scaleX", '1', { fromValue: '0'}], position: 497, duration: 500, easing: "easeInOutBack" },
                { id: "eid2488", tween: [ "style", "${_bt_3}", "opacity", '1', { fromValue: '0'}], position: 997, duration: 497, easing: "easeInOutBack" },
                { id: "eid2484", tween: [ "transform", "${_bt_1}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 497, easing: "easeInOutBack" },
                { id: "eid2476", tween: [ "transform", "${_bt_3}", "scaleX", '1', { fromValue: '0'}], position: 997, duration: 497, easing: "easeInOutBack" },
                { id: "eid2507", tween: [ "style", "${_bt_audio_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutBack" },
                { id: "eid2517", tween: [ "style", "${_pop_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2478", tween: [ "transform", "${_bt_3}", "scaleY", '1', { fromValue: '0'}], position: 997, duration: 497, easing: "easeInOutBack" },
                { id: "eid2482", tween: [ "transform", "${_bt_2}", "scaleY", '1', { fromValue: '0'}], position: 497, duration: 500, easing: "easeInOutBack" }            ]
        }
    }
},
"slide_1": {
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
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '596px'],
                ["style", "width", '1304px']
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
"bt_audio": {
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
                    id: 'fondo_girar',
                    type: 'image',
                    rect: ['2px', '3px', '90px', '84px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fondo_girar.png', '0px', '0px']
                },
                {
                    rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    rect: ['0px', '0px', '90px', '180px', 'auto', 'auto'],
                    id: 'bt_audio',
                    type: 'image',
                    clip: ['rect(0px 90px 180px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/bt_audio.png', '0px', '-97px']
                },
                {
                    transform: [[], [], [], ['1', '0.92222']],
                    rect: ['0px', '-4px', '90px', '90px', 'auto', 'auto'],
                    cursor: ['pointer'],
                    type: 'rect',
                    id: 'ht_spot',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    clip: ['rect(0px 90px 90px 0px)'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_fondo_girar}": [
                ["style", "left", '2px'],
                ["style", "top", '3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "overflow", 'visible'],
                ["style", "width", '90px']
            ],
            "${_bt_audio}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,90,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '180px'],
                ["style", "left", '0px'],
                ["style", "background-position", [0,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '90px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "height", '90px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '90px']
            ],
            "${_ht_spot}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0.92222'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '90px'],
                ["style", "clip", [0,90,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer'],
                ["style", "width", '90px']
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
                "up": 0,
                "down": 250
            },
            timeline: [
                { id: "eid1242", tween: [ "style", "${_bt_audio}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1244", tween: [ "style", "${_bt_audio}", "left", '0px', { fromValue: '0px'}], position: 250, duration: 0 },
                { id: "eid1243", tween: [ "style", "${_bt_audio}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1245", tween: [ "style", "${_bt_audio}", "top", '1px', { fromValue: '0px'}], position: 250, duration: 0 },
                { id: "eid3", tween: [ "style", "${_bt_audio}", "background-position", [0,5], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,5]}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_bt_audio}", "background-position", [0,-97], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,5]}], position: 250, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-5531445");
