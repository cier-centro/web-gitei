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
                id: 'F1_D25',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"F1_D25.png",'0px','0px']
            },
            {
                id: 'instruccion',
                display: 'none',
                type: 'text',
                rect: ['104px', '283px','1111px','42px','auto', 'auto'],
                text: "Esta la ruta para aprender a generar ideas con fluidez dentro de una situación que nos implica ser propositivos.",
                align: "left",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 21, "rgba(44,53,104,1.00)", "400", "none", "normal"]
            },
            {
                id: 'pop1',
                display: 'none',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(249.33349609375px 1096px 574.66650390625px 199.99951171875px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"pop1.png",'0px','0px']
            },
            {
                id: 'pop2',
                display: 'none',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(250.6669921875px 1093.333984375px 573.33349609375px 200.00048828125px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"pop2.png",'0px','0px']
            },
            {
                id: 'pop3',
                display: 'none',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(247.999755859375px 1093.3330078125px 572px 197.3330078125px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"pop3.png",'0px','0px']
            },
            {
                id: 'bt3',
                display: 'block',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(285.333251953125px 1188px 562.6669921875px 938.66650390625px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"menu.png",'0px','0px']
            },
            {
                id: 'bt2',
                display: 'block',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(284.000244140625px 773.3330078125px 564px 518.66650390625px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"menu.png",'0px','0px']
            },
            {
                id: 'bt1',
                display: 'block',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(281.333251953125px 366.6669921875px 566.66650390625px 121.3330078125px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"menu.png",'0px','0px']
            },
            {
                id: 'Rectangle',
                display: 'none',
                type: 'rect',
                rect: ['873px', '346px','202px','199px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(192,192,192,0)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'titulo',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(28px 1044px 200px 261.33349609375px)'],
                fill: ["rgba(0,0,0,0)",im+"menu.png",'0px','0px']
            },
            {
                id: 'bt_audio1',
                display: 'none',
                type: 'rect',
                rect: ['931px', '530px','auto','auto','auto', 'auto'],
                title: 'Au1'
            },
            {
                id: 'bt_audio2',
                display: 'none',
                type: 'rect',
                rect: ['941px', '530px','auto','auto','auto', 'auto'],
                title: 'Au2'
            },
            {
                id: 'bt_audio3',
                display: 'none',
                type: 'rect',
                rect: ['941px', '530px','auto','auto','auto', 'auto'],
                title: 'Au3'
            },
            {
                id: 'Au2',
                type: 'audio',
                tag: 'audio',
                rect: ['1477', '258','320px','45px','auto', 'auto'],
                source: ['media/F1_E4_D25_N_2.mp3'],
                preload: 'auto'
            },
            {
                id: 'Au1',
                type: 'audio',
                tag: 'audio',
                rect: ['1477', '258','320px','45px','auto', 'auto'],
                source: ['media/F1_E4_D25_N_1.mp3'],
                preload: 'auto'
            },
            {
                id: 'Au3',
                type: 'audio',
                tag: 'audio',
                rect: ['1477', '258','320px','45px','auto', 'auto'],
                source: ['media/F1_E4_D25_N.mp3'],
                preload: 'auto'
            }],
            symbolInstances: [
            {
                id: 'bt_audio3',
                symbolName: 'bt_audio',
                autoPlay: {

                }
            },
            {
                id: 'bt_audio1',
                symbolName: 'bt_audio',
                autoPlay: {

                }
            },
            {
                id: 'bt_audio2',
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
            "${_bt_audio3}": [
                ["style", "display", 'none'],
                ["style", "left", '941px'],
                ["style", "top", '530px']
            ],
            "${_pop3}": [
                ["style", "top", '72px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [247.999755859375,1093.3330078125,572,197.3330078125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '5px']
            ],
            "${_titulo}": [
                ["style", "top", '124px'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "clip", [28,1044,95.999755859375,261.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_slide_1}": [
                ["style", "left", '5px']
            ],
            "${_instruccion}": [
                ["color", "color", 'rgba(44,53,104,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '104px'],
                ["style", "width", '1111px'],
                ["style", "top", '283px'],
                ["style", "display", 'none'],
                ["style", "font-family", 'cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif'],
                ["style", "height", '42px'],
                ["style", "font-size", '21px']
            ],
            "${_bt3}": [
                ["style", "-webkit-transform-origin", [80.96,74.38], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [80.96,74.38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [80.96,74.38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [80.96,74.38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [80.96,74.38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [80.96,74.38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '5px'],
                ["style", "top", '72px'],
                ["transform", "scaleY", '0'],
                ["style", "display", 'block'],
                ["style", "clip", [285.333251953125,1188,562.6669921875,938.66650390625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer']
            ],
            "${_bt_audio1}": [
                ["style", "display", 'none'],
                ["style", "left", '931px'],
                ["style", "top", '530px']
            ],
            "${_bt_audio2}": [
                ["style", "display", 'none'],
                ["style", "left", '941px'],
                ["style", "top", '530px']
            ],
            "${_F1_D25}": [
                ["style", "left", '5px'],
                ["style", "top", '72px']
            ],
            "${_pop2}": [
                ["style", "top", '72px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [250.6669921875,1093.333984375,573.33349609375,200.00048828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
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
            "${_bt2}": [
                ["style", "-webkit-transform-origin", [49.36,74.38], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [49.36,74.38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [49.36,74.38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [49.36,74.38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [49.36,74.38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [49.36,74.38],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '5px'],
                ["style", "top", '72px'],
                ["transform", "scaleY", '0'],
                ["style", "display", 'block'],
                ["style", "clip", [284.000244140625,773.3330078125,564,518.66650390625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_Rectangle}": [
                ["style", "height", '199px'],
                ["style", "top", '346px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none']
            ],
            "${_pop1}": [
                ["style", "top", '72px'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "clip", [249.33349609375,1096,574.66650390625,199.99951171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '5px']
            ],
            "${_bt1}": [
                ["style", "-webkit-transform-origin", [17.97,75.28], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [17.97,75.28],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [17.97,75.28],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [17.97,75.28],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [17.97,75.28],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [17.97,75.28],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '5px'],
                ["style", "top", '72px'],
                ["transform", "scaleY", '0'],
                ["style", "display", 'block'],
                ["style", "clip", [281.333251953125,366.6669921875,566.66650390625,121.3330078125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4871,
            autoPlay: true,
            labels: {
                "slide_1": 0,
                "home": 1500,
                "pop1": 2000,
                "pop2": 3000,
                "pop3": 4000
            },
            timeline: [
                { id: "eid2486", tween: [ "style", "${_titulo}", "top", '72px', { fromValue: '124px'}], position: 0, duration: 250, easing: "easeInCirc" },
                { id: "eid2509", tween: [ "transform", "${_bt2}", "scaleY", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "swing" },
                { id: "eid2560", tween: [ "transform", "${_bt2}", "scaleY", '0.8', { fromValue: '1'}], position: 3000, duration: 750, easing: "swing" },
                { id: "eid2577", tween: [ "transform", "${_bt2}", "scaleY", '1', { fromValue: '0.8'}], position: 3869, duration: 0, easing: "swing" },
                { id: "eid2514", tween: [ "style", "${_instruccion}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "swing" },
                { id: "eid2593", tween: [ "style", "${_pop3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid2590", tween: [ "style", "${_pop3}", "display", 'block', { fromValue: 'none'}], position: 4301, duration: 0, easing: "swing" },
                { id: "eid2591", tween: [ "style", "${_pop3}", "display", 'none', { fromValue: 'block'}], position: 4871, duration: 0, easing: "swing" },
                { id: "eid2525", tween: [ "style", "${_bt_audio1}", "display", 'block', { fromValue: 'none'}], position: 2449, duration: 0, easing: "swing" },
                { id: "eid2544", tween: [ "style", "${_bt_audio1}", "display", 'none', { fromValue: 'block'}], position: 2869, duration: 0, easing: "swing" },
                { id: "eid2488", tween: [ "style", "${_titulo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeInCirc" },
                { id: "eid2553", tween: [ "style", "${_pop2}", "opacity", '1', { fromValue: '0'}], position: 3301, duration: 449, easing: "swing" },
                { id: "eid2521", tween: [ "style", "${_bt3}", "display", 'none', { fromValue: 'block'}], position: 2449, duration: 0, easing: "swing" },
                { id: "eid2537", tween: [ "style", "${_bt3}", "display", 'block', { fromValue: 'none'}], position: 2869, duration: 0, easing: "swing" },
                { id: "eid2574", tween: [ "style", "${_bt3}", "display", 'block', { fromValue: 'block'}], position: 3869, duration: 0, easing: "swing" },
                { id: "eid2549", tween: [ "style", "${_bt1}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 449, easing: "swing" },
                { id: "eid2580", tween: [ "style", "${_bt1}", "opacity", '1', { fromValue: '0'}], position: 3869, duration: 0, easing: "swing" },
                { id: "eid2581", tween: [ "style", "${_bt1}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 449, easing: "swing" },
                { id: "eid2511", tween: [ "transform", "${_bt1}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "swing" },
                { id: "eid2528", tween: [ "transform", "${_bt1}", "scaleX", '0.8', { fromValue: '1'}], position: 2000, duration: 750, easing: "swing" },
                { id: "eid2546", tween: [ "transform", "${_bt1}", "scaleX", '1', { fromValue: '0.8'}], position: 2869, duration: 0, easing: "swing" },
                { id: "eid2531", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0, easing: "swing" },
                { id: "eid2505", tween: [ "transform", "${_bt3}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "swing" },
                { id: "eid2595", tween: [ "transform", "${_bt3}", "scaleY", '0.8', { fromValue: '1'}], position: 4000, duration: 750, easing: "swing" },
                { id: "eid2524", tween: [ "style", "${_pop1}", "opacity", '1', { fromValue: '0'}], position: 2301, duration: 449, easing: "swing" },
                { id: "eid2561", tween: [ "style", "${_bt2}", "left", '329px', { fromValue: '5px'}], position: 3000, duration: 750, easing: "swing" },
                { id: "eid2578", tween: [ "style", "${_bt2}", "left", '5px', { fromValue: '329px'}], position: 3869, duration: 0, easing: "swing" },
                { id: "eid2559", tween: [ "style", "${_bt2}", "top", '8px', { fromValue: '72px'}], position: 3000, duration: 750, easing: "swing" },
                { id: "eid2576", tween: [ "style", "${_bt2}", "top", '72px', { fromValue: '8px'}], position: 3869, duration: 0, easing: "swing" },
                { id: "eid2596", tween: [ "style", "${_bt3}", "left", '-86px', { fromValue: '5px'}], position: 4000, duration: 750, easing: "swing" },
                { id: "eid2503", tween: [ "transform", "${_bt3}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "swing" },
                { id: "eid2597", tween: [ "transform", "${_bt3}", "scaleX", '0.8', { fromValue: '1'}], position: 4000, duration: 750, easing: "swing" },
                { id: "eid2522", tween: [ "style", "${_bt2}", "display", 'none', { fromValue: 'block'}], position: 2449, duration: 0, easing: "swing" },
                { id: "eid2547", tween: [ "style", "${_bt2}", "display", 'block', { fromValue: 'none'}], position: 2869, duration: 0, easing: "swing" },
                { id: "eid2572", tween: [ "style", "${_bt2}", "display", 'block', { fromValue: 'block'}], position: 3869, duration: 0, easing: "swing" },
                { id: "eid2586", tween: [ "style", "${_bt2}", "display", 'none', { fromValue: 'block'}], position: 4449, duration: 0, easing: "swing" },
                { id: "eid2592", tween: [ "style", "${_pop3}", "opacity", '1', { fromValue: '0'}], position: 4301, duration: 449, easing: "swing" },
                { id: "eid2526", tween: [ "style", "${_bt1}", "left", '726px', { fromValue: '5px'}], position: 2000, duration: 750, easing: "swing" },
                { id: "eid2542", tween: [ "style", "${_bt1}", "left", '5px', { fromValue: '726px'}], position: 2869, duration: 0, easing: "swing" },
                { id: "eid2533", tween: [ "style", "${_Rectangle}", "top", '325px', { fromValue: '346px'}], position: 2750, duration: 0, easing: "swing" },
                { id: "eid2507", tween: [ "transform", "${_bt2}", "scaleX", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "swing" },
                { id: "eid2562", tween: [ "transform", "${_bt2}", "scaleX", '0.8', { fromValue: '1'}], position: 3000, duration: 750, easing: "swing" },
                { id: "eid2579", tween: [ "transform", "${_bt2}", "scaleX", '1', { fromValue: '0.8'}], position: 3869, duration: 0, easing: "swing" },
                { id: "eid2594", tween: [ "style", "${_bt3}", "top", '8px', { fromValue: '72px'}], position: 4000, duration: 750, easing: "swing" },
                { id: "eid2564", tween: [ "style", "${_bt_audio2}", "top", '540px', { fromValue: '530px'}], position: 3000, duration: 449, easing: "swing" },
                { id: "eid2519", tween: [ "style", "${_bt3}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 449, easing: "swing" },
                { id: "eid2567", tween: [ "style", "${_bt3}", "opacity", '1', { fromValue: '0'}], position: 2869, duration: 0, easing: "swing" },
                { id: "eid2551", tween: [ "style", "${_bt3}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 449, easing: "swing" },
                { id: "eid2575", tween: [ "style", "${_bt3}", "opacity", '1', { fromValue: '0'}], position: 3869, duration: 0, easing: "swing" },
                { id: "eid2583", tween: [ "style", "${_bt1}", "display", 'none', { fromValue: 'block'}], position: 3449, duration: 0, easing: "swing" },
                { id: "eid2584", tween: [ "style", "${_bt1}", "display", 'block', { fromValue: 'none'}], position: 3869, duration: 0, easing: "swing" },
                { id: "eid2582", tween: [ "style", "${_bt1}", "display", 'none', { fromValue: 'block'}], position: 4449, duration: 0, easing: "swing" },
                { id: "eid2554", tween: [ "style", "${_pop2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid2555", tween: [ "style", "${_pop2}", "display", 'block', { fromValue: 'none'}], position: 3301, duration: 0, easing: "swing" },
                { id: "eid2558", tween: [ "style", "${_pop2}", "display", 'none', { fromValue: 'block'}], position: 3878, duration: 0, easing: "swing" },
                { id: "eid2598", tween: [ "style", "${_bt_audio3}", "display", 'block', { fromValue: 'none'}], position: 4449, duration: 0, easing: "swing" },
                { id: "eid2599", tween: [ "style", "${_bt_audio3}", "display", 'none', { fromValue: 'block'}], position: 4869, duration: 0, easing: "swing" },
                { id: "eid2556", tween: [ "style", "${_pop1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid2557", tween: [ "style", "${_pop1}", "display", 'block', { fromValue: 'none'}], position: 2301, duration: 0, easing: "swing" },
                { id: "eid2543", tween: [ "style", "${_pop1}", "display", 'none', { fromValue: 'block'}], position: 2869, duration: 0, easing: "swing" },
                { id: "eid2600", tween: [ "style", "${_bt_audio3}", "top", '540px', { fromValue: '530px'}], position: 4000, duration: 449, easing: "swing" },
                { id: "eid2530", tween: [ "style", "${_bt_audio1}", "top", '540px', { fromValue: '530px'}], position: 2000, duration: 449, easing: "swing" },
                { id: "eid2513", tween: [ "transform", "${_bt1}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "swing" },
                { id: "eid2529", tween: [ "transform", "${_bt1}", "scaleY", '0.8', { fromValue: '1'}], position: 2000, duration: 750, easing: "swing" },
                { id: "eid2545", tween: [ "transform", "${_bt1}", "scaleY", '1', { fromValue: '0.8'}], position: 2869, duration: 0, easing: "swing" },
                { id: "eid2527", tween: [ "style", "${_bt1}", "top", '6px', { fromValue: '72px'}], position: 2000, duration: 750, easing: "swing" },
                { id: "eid2541", tween: [ "style", "${_bt1}", "top", '72px', { fromValue: '6px'}], position: 2869, duration: 0, easing: "swing" },
                { id: "eid2532", tween: [ "style", "${_Rectangle}", "height", '220px', { fromValue: '199px'}], position: 2750, duration: 0, easing: "swing" },
                { id: "eid2520", tween: [ "style", "${_bt2}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 449, easing: "swing" },
                { id: "eid2535", tween: [ "style", "${_bt2}", "opacity", '1', { fromValue: '0'}], position: 2869, duration: 0, easing: "swing" },
                { id: "eid2573", tween: [ "style", "${_bt2}", "opacity", '1', { fromValue: '1'}], position: 3869, duration: 0, easing: "swing" },
                { id: "eid2585", tween: [ "style", "${_bt2}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 449, easing: "swing" },
                { id: "eid2484", tween: [ "style", "${_titulo}", "clip", [28,1044,95.999755859375,261.33349609375], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [28,1044,95.999755859375,261.33349609375]}], position: 0, duration: 0 },
                { id: "eid2489", tween: [ "style", "${_titulo}", "clip", [28,1044,199.999755859375,261.33349609375], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [28,1044,95.999755859375,261.33349609375]}], position: 250, duration: 250, easing: "easeInCirc" },
                { id: "eid2565", tween: [ "style", "${_bt_audio2}", "display", 'block', { fromValue: 'none'}], position: 3449, duration: 0, easing: "swing" },
                { id: "eid2566", tween: [ "style", "${_bt_audio2}", "display", 'none', { fromValue: 'block'}], position: 3869, duration: 0, easing: "swing" }            ]
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
                    rect: ['-3px', '3px', '90px', '84px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/fondo_girar.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['-12px', '1px', '90px', '90px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                },
                {
                    type: 'image',
                    id: 'bt_audio',
                    rect: ['0px', '0px', '90px', '180px', 'auto', 'auto'],
                    clip: ['rect(0px 90px 180px 0px)'],
                    fill: ['rgba(0,0,0,0)', 'images/bt_audio.png', '0px', '-97px']
                },
                {
                    transform: [[0, 0], [], [], ['0.88889', '0.92222']],
                    rect: ['-7px', '1px', '90px', '90px', 'auto', 'auto'],
                    clip: ['rect(0px 90px 90px 0px)'],
                    type: 'rect',
                    id: 'ht_spot',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_fondo_girar}": [
                ["style", "left", '-3px'],
                ["style", "top", '3px']
            ],
            "${symbolSelector}": [
                ["style", "height", '90px'],
                ["style", "width", '90px'],
                ["style", "overflow", 'visible']
            ],
            "${_bt_audio}": [
                ["style", "top", '0px'],
                ["style", "background-position", [0,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '180px'],
                ["style", "clip", [0,90,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-6px'],
                ["style", "width", '90px']
            ],
            "${_Rectangle}": [
                ["style", "top", '1px'],
                ["style", "height", '90px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '-12px'],
                ["style", "width", '90px']
            ],
            "${_ht_spot}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "scaleX", '0.88889'],
                ["style", "left", '-7px'],
                ["style", "width", '90px'],
                ["style", "top", '1px'],
                ["transform", "scaleY", '0.92222'],
                ["style", "height", '90px'],
                ["style", "clip", [0,90,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer']
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
                { id: "eid3", tween: [ "style", "${_bt_audio}", "background-position", [0,5], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,5]}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_bt_audio}", "background-position", [0,-97], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,5]}], position: 250, duration: 0 },
                { id: "eid1243", tween: [ "style", "${_bt_audio}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1245", tween: [ "style", "${_bt_audio}", "top", '1px', { fromValue: '0px'}], position: 250, duration: 0 },
                { id: "eid1242", tween: [ "style", "${_bt_audio}", "left", '-6px', { fromValue: '-6px'}], position: 0, duration: 0 },
                { id: "eid1244", tween: [ "style", "${_bt_audio}", "left", '-6px', { fromValue: '-6px'}], position: 250, duration: 0 }            ]
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
