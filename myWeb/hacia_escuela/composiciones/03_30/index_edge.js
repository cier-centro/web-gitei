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
                id: 'error',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['1447', '722','320px','45px','auto', 'auto'],
                source: ['media/error.mp3'],
                preload: 'auto'
            },
            {
                id: 'success',
                type: 'audio',
                tag: 'audio',
                rect: ['1468', '456','320px','45px','auto', 'auto'],
                source: ['media/success.mp3'],
                preload: 'auto'
            },
            {
                id: 'slide_1',
                type: 'rect',
                rect: ['5px', '72px','auto','auto','auto', 'auto']
            },
            {
                id: 'instruccion',
                display: 'block',
                type: 'text',
                rect: ['104px', '205px','1111px','47px','auto', 'auto'],
                text: "Analiza la siguiente situación y escoge en la lista la mejor solución que el personaje podría usar:",
                align: "left",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 21, "rgba(44,53,104,1.00)", "400", "none", "normal"]
            },
            {
                id: 'respuesta_a',
                display: 'none',
                type: 'image',
                rect: ['auto', '169px','497px','234px','57px', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"R01.png",'0px','0px']
            },
            {
                id: 'respuesta_b',
                display: 'none',
                type: 'image',
                rect: ['auto', '169px','497px','234px','57px', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"R02.png",'0px','0px']
            },
            {
                id: 'respuesta_c',
                display: 'none',
                type: 'image',
                rect: ['auto', '169px','497px','234px','57px', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"R03.png",'0px','0px']
            },
            {
                id: 'help_seleccionar',
                display: 'none',
                type: 'image',
                rect: ['492px', '258px','816px','164px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"help_seleccionar.png",'0px','0px']
            },
            {
                id: 'bt_reiniciar',
                type: 'rect',
                rect: ['1309px', '173px','auto','auto','auto', 'auto']
            },
            {
                id: 'bt_ayuda',
                type: 'rect',
                rect: ['1309px', '225px','auto','auto','auto', 'auto']
            },
            {
                id: 'hotspot_reiniciar',
                type: 'rect',
                rect: ['1310px', '174px','54px','54px','auto', 'auto'],
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
                id: 'bt_ayuda',
                symbolName: 'bt_ayuda',
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
            "${_bt_ayuda}": [
                ["style", "top", '225px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bt_reiniciar}": [
                ["style", "top", '173px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_slide_1}": [
                ["style", "left", '5px']
            ],
            "${_instruccion}": [
                ["color", "color", 'rgba(44,53,104,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '104px'],
                ["style", "width", '1111px'],
                ["style", "top", '205px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif'],
                ["style", "height", '47px'],
                ["style", "font-size", '21px']
            ],
            "${_respuesta_c}": [
                ["style", "top", '169px'],
                ["style", "display", 'none'],
                ["style", "right", '57px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", 'auto']
            ],
            "${_respuesta_b}": [
                ["style", "top", '169px'],
                ["style", "display", 'none'],
                ["style", "right", '57px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", 'auto']
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
            "${_respuesta_a}": [
                ["style", "top", '169px'],
                ["style", "display", 'none'],
                ["style", "right", '57px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", 'auto']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_hotspot_reiniciar}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '174px'],
                ["style", "height", '54px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '1310px'],
                ["style", "width", '54px']
            ],
            "${_help_seleccionar}": [
                ["style", "top", '169px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '812px'],
                ["style", "width", '497px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3500,
            autoPlay: true,
            labels: {
                "slide_1": 0
            },
            timeline: [
                { id: "eid2524", tween: [ "style", "${_respuesta_b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid2523", tween: [ "style", "${_respuesta_c}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid2525", tween: [ "style", "${_respuesta_a}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid2516", tween: [ "style", "${_help_seleccionar}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" }            ]
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
            dom: [
                {
                    id: 'ABC_fondo',
                    type: 'image',
                    rect: ['0', '0', '1304px', '596px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ABC_fondo.jpg', '0px', '0px']
                },
                {
                    id: 'ABC01',
                    type: 'image',
                    rect: ['0', '0', '1304px', '596px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/ABC01.png', '0px', '0px']
                },
                {
                    rect: ['0', '92px', '1304px', '596px', 'auto', 'auto'],
                    type: 'image',
                    id: 'ABC02Copy2',
                    display: 'none',
                    clip: ['rect(0px 280px 138.66650390625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/ABC02.png', '0px', '0px']
                },
                {
                    rect: ['0', '192px', '1304px', '596px', 'auto', 'auto'],
                    type: 'image',
                    id: 'ABC02Copy3',
                    display: 'none',
                    clip: ['rect(0px 280px 138.66650390625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/ABC02.png', '0px', '0px']
                },
                {
                    rect: ['0', '292px', '1304px', '596px', 'auto', 'auto'],
                    type: 'image',
                    id: 'ABC02',
                    display: 'none',
                    clip: ['rect(0px 280px 138.66650390625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/ABC02.png', '0px', '0px']
                },
                {
                    rect: ['0px', '292px', '1304px', '596px', 'auto', 'auto'],
                    type: 'image',
                    id: 'a',
                    display: 'none',
                    clip: ['rect(46.6669921875px 282.6669921875px 134.66650390625px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/ABC03.png', '0px', '0px']
                },
                {
                    rect: ['0px', '192px', '1304px', '596px', 'auto', 'auto'],
                    type: 'image',
                    id: 'b',
                    display: 'none',
                    clip: ['rect(229.33349609375px 282.6669921875px 320px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/ABC03.png', '0px', '0px']
                },
                {
                    rect: ['0px', '92px', '1304px', '596px', 'auto', 'auto'],
                    type: 'image',
                    id: 'c',
                    display: 'none',
                    clip: ['rect(413.33349609375px 282.6669921875px 502.6669921875px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/ABC03.png', '0px', '0px']
                },
                {
                    rect: ['192px', '509px', '919px', '79px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hsC',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    rect: ['192px', '426px', '919px', '79px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hsB',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    rect: ['192px', '343px', '919px', '79px', 'auto', 'auto'],
                    type: 'rect',
                    id: 'hsA',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ABC02Copy2}": [
                ["style", "-webkit-transform-origin", [18.02,76.68], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [18.02,76.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [18.02,76.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [18.02,76.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [18.02,76.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [18.02,76.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "display", 'none'],
                ["style", "clip", [410,280,504.66650390625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '92px']
            ],
            "${_hsC}": [
                ["style", "top", '509px'],
                ["style", "height", '79px'],
                ["style", "left", '192px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '919px']
            ],
            "${_a}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "clip", [46.6669921875,282.6669921875,134.66650390625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '292px']
            ],
            "${_hsB}": [
                ["style", "top", '426px'],
                ["style", "height", '79px'],
                ["style", "left", '192px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '919px']
            ],
            "${_c}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "clip", [413.33349609375,282.6669921875,502.6669921875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '92px']
            ],
            "${_hsA}": [
                ["style", "top", '343px'],
                ["style", "height", '79px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '192px'],
                ["style", "width", '919px']
            ],
            "${symbolSelector}": [
                ["style", "height", '596px'],
                ["style", "width", '1304px']
            ],
            "${_b}": [
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "clip", [229.33349609375,282.6669921875,320,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '192px']
            ],
            "${_ABC01}": [
                ["style", "top", '-34px'],
                ["style", "opacity", '0']
            ],
            "${_ABC02Copy3}": [
                ["style", "-webkit-transform-origin", [18.1,47.15], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [18.1,47.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [18.1,47.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [18.1,47.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [18.1,47.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [18.1,47.15],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "top", '192px'],
                ["style", "clip", [223,280,319.66650390625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none']
            ],
            "${_ABC02}": [
                ["style", "top", '292px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "-webkit-transform-origin", [18.17,15.44], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [18.17,15.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [18.17,15.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [18.17,15.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [18.17,15.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [18.17,15.44],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [0,280,138.66650390625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3500,
            autoPlay: true,
            timeline: [
                { id: "eid2486", tween: [ "style", "${_ABC02}", "clip", [0,1303,138.66650390625,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,280,138.66650390625,0]}], position: 1250, duration: 750, easing: "easeOutQuad" },
                { id: "eid2502", tween: [ "style", "${_b}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid2490", tween: [ "transform", "${_ABC02Copy2}", "scaleY", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeOutBack" },
                { id: "eid2481", tween: [ "style", "${_ABC02}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeOutBack" },
                { id: "eid2483", tween: [ "transform", "${_ABC02}", "scaleX", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid2503", tween: [ "style", "${_a}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid2491", tween: [ "style", "${_ABC02Copy3}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeOutBack" },
                { id: "eid2487", tween: [ "transform", "${_ABC02Copy2}", "scaleX", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeOutBack" },
                { id: "eid2475", tween: [ "style", "${_ABC01}", "top", '40px', { fromValue: '-34px'}], position: 0, duration: 750, easing: "easeOutQuad" },
                { id: "eid2485", tween: [ "transform", "${_ABC02}", "scaleY", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid2492", tween: [ "transform", "${_ABC02Copy3}", "scaleX", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "easeOutBack" },
                { id: "eid2489", tween: [ "style", "${_ABC02Copy2}", "clip", [405,1303,504.66650390625,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [410,280,504.66650390625,0]}], position: 2750, duration: 750, easing: "easeOutQuad" },
                { id: "eid2493", tween: [ "transform", "${_ABC02Copy3}", "scaleY", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "easeOutBack" },
                { id: "eid2494", tween: [ "style", "${_ABC02Copy3}", "clip", [225,1303,322.66650390625,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [223,280,319.66650390625,0]}], position: 2000, duration: 750, easing: "easeOutQuad" },
                { id: "eid2488", tween: [ "style", "${_ABC02Copy2}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0, easing: "easeOutBack" },
                { id: "eid2476", tween: [ "style", "${_ABC01}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750, easing: "easeOutQuad" },
                { id: "eid2501", tween: [ "style", "${_c}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" }            ]
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
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '54px', '54px', 'auto', 'auto'],
                    display: 'none',
                    id: 'hotspot_ayudaCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '45px', '45px', 'auto', 'auto'],
                    display: 'block',
                    id: 'hotspot_ayudaCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hotspot_ayudaCopy}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '45px'],
                ["style", "display", 'block'],
                ["style", "left", '0px'],
                ["style", "width", '45px']
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
            ],
            "${_botones3}": [
                ["style", "top", '0px'],
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-143px'],
                ["style", "clip", [0,213.05126953125,63.43017578125,143.0166015625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_hotspot_ayudaCopy2}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '54px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
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
                { id: "eid2505", tween: [ "style", "${_hotspot_ayudaCopy2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
                { id: "eid49", tween: [ "style", "${_botones}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 },
                { id: "eid1316", tween: [ "style", "${_botones}", "left", '-219px', { fromValue: '-219px'}], position: 0, duration: 0 },
                { id: "eid1318", tween: [ "style", "${_botones}", "left", '-218px', { fromValue: '-219px'}], position: 250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_botones3}", "background-position", [0,-0.55859374999943], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_botones3}", "background-position", [0,-65.921875499999], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 250, duration: 0 },
                { id: "eid1317", tween: [ "style", "${_botones}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1319", tween: [ "style", "${_botones}", "top", '-5px', { fromValue: '-4px'}], position: 250, duration: 0 },
                { id: "eid2504", tween: [ "style", "${_hotspot_ayudaCopy}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 }            ]
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
