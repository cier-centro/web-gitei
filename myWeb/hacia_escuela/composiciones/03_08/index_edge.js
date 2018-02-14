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
                id: 'F1_D8',
                type: 'image',
                rect: ['5', '72','1304px','596px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"F1_D8.png",'0px','0px']
            },
            {
                id: 'azul',
                display: 'none',
                type: 'image',
                rect: ['-85px', '142px','1304px','596px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"azul.png",'0px','0px']
            },
            {
                id: 'amarillo',
                display: 'none',
                type: 'image',
                rect: ['-85px', '142px','1304px','596px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"amarillo.png",'0px','0px']
            },
            {
                id: 'rojo',
                display: 'none',
                type: 'image',
                rect: ['-85px', '142px','1304px','596px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"rojo.png",'0px','0px']
            },
            {
                id: 'verde',
                display: 'none',
                type: 'image',
                rect: ['-85px', '142px','1304px','596px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"verde.png",'0px','0px']
            },
            {
                id: 'bt_verde',
                display: 'block',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(297.333251953125px 1214.6669921875px 557.33349609375px 952.00048828125px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"botones.png",'0px','0px']
            },
            {
                id: 'bt_rojo',
                display: 'block',
                type: 'image',
                rect: ['5px', '152px','1304px','596px','auto', 'auto'],
                clip: ['rect(86.666748046875px 930.6669921875px 352px 658.66650390625px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"botones.png",'0px','0px']
            },
            {
                id: 'bt_amarillo',
                display: 'block',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(294.66650390625px 641.333984375px 566.66650390625px 372px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"botones.png",'0px','0px']
            },
            {
                id: 'bt_azul',
                display: 'block',
                type: 'image',
                rect: ['5px', '152px','1304px','596px','auto', 'auto'],
                clip: ['rect(88px 356px 348px 85.33349609375px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"botones.png",'0px','0px']
            },
            {
                id: 'off',
                display: 'none',
                type: 'rect',
                rect: ['1028px', '195px','245px','251px','auto', 'auto'],
                cursor: ['pointer'],
                opacity: 1,
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'instruccion',
                display: 'none',
                type: 'text',
                rect: ['104px', '205px','1111px','32px','auto', 'auto'],
                text: "Haz clic para conocer algunos ejemplos de fluidez creativa.<br>",
                align: "left",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 21, "rgba(44,53,104,1.00)", "400", "none", "normal"]
            }],
            symbolInstances: [
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
            "${_verde}": [
                ["style", "top", '57px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '-85px']
            ],
            "${_azul}": [
                ["style", "top", '57px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '-85px'],
                ["style", "cursor", 'pointer']
            ],
            "${_rojo}": [
                ["style", "top", '57px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '-85px']
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
                ["style", "display", 'none'],
                ["style", "font-family", 'cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif'],
                ["style", "height", '32px'],
                ["style", "font-size", '21px']
            ],
            "${_amarillo}": [
                ["style", "top", '57px'],
                ["style", "left", '-85px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${_bt_rojo}": [
                ["style", "-webkit-transform-origin", [60.61,37.47], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [60.61,37.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [60.61,37.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [60.61,37.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [60.61,37.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [60.61,37.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'block'],
                ["transform", "scaleY", '0'],
                ["style", "clip", [86.666748046875,930.6669921875,352,658.66650390625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["motion", "location", '795.3544px 375.3212px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleX", '0']
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
            "${_bt_azul}": [
                ["style", "-webkit-transform-origin", [16.64,37.47], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.64,37.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.64,37.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.64,37.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.64,37.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.64,37.47],{valueTemplate:'@@0@@% @@1@@%'}],
                ["motion", "location", '221.9856px 375.3212px'],
                ["transform", "scaleY", '0'],
                ["style", "clip", [88,356,348,85.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleX", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_bt_verde}": [
                ["style", "-webkit-transform-origin", [82.9,72.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [82.9,72.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [82.9,72.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [82.9,72.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [82.9,72.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [82.9,72.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "display", 'block'],
                ["transform", "scaleY", '0'],
                ["style", "clip", [297.333251953125,1214.6669921875,557.33349609375,952.00048828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["motion", "location", '1086.016px 503.3252px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleX", '0']
            ],
            "${_off}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '195px'],
                ["style", "left", '1028px'],
                ["style", "display", 'none'],
                ["style", "height", '251px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '245px']
            ],
            "${_bt_amarillo}": [
                ["style", "-webkit-transform-origin", [38.52,71.92], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [38.52,71.92],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [38.52,71.92],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [38.52,71.92],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [38.52,71.92],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [38.52,71.92],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0'],
                ["style", "clip", [294.66650390625,641.333984375,566.66650390625,372], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["motion", "location", '507.3008px 500.6432px'],
                ["style", "opacity", '1'],
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6500,
            autoPlay: true,
            labels: {
                "slide_1": 0,
                "menu": 1250,
                "azul": 1851,
                "amarillo": 3101,
                "rojo": 4351,
                "verde": 5601
            },
            timeline: [
                { id: "eid2482", tween: [ "transform", "${_bt_verde}", "scaleY", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "swing" },
                { id: "eid2622", tween: [ "transform", "${_bt_verde}", "scaleY", '0.7', { fromValue: '1'}], position: 5601, duration: 899, easing: "swing" },
                { id: "eid2508", tween: [ "style", "${_bt_rojo}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0, easing: "swing" },
                { id: "eid2608", tween: [ "style", "${_bt_rojo}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "swing" },
                { id: "eid2534", tween: [ "style", "${_bt_rojo}", "display", 'block', { fromValue: 'block'}], position: 3101, duration: 0, easing: "swing" },
                { id: "eid2542", tween: [ "style", "${_bt_rojo}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0, easing: "swing" },
                { id: "eid2561", tween: [ "style", "${_bt_rojo}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0, easing: "swing" },
                { id: "eid2590", tween: [ "style", "${_bt_rojo}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "swing" },
                { id: "eid2486", tween: [ "transform", "${_bt_amarillo}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "swing" },
                { id: "eid2551", tween: [ "transform", "${_bt_amarillo}", "scaleY", '0.7', { fromValue: '1'}], position: 3101, duration: 899, easing: "swing" },
                { id: "eid2579", tween: [ "transform", "${_bt_amarillo}", "scaleY", '1', { fromValue: '0.7'}], position: 4250, duration: 0, easing: "swing" },
                { id: "eid2555", tween: [ "style", "${_amarillo}", "top", '162px', { fromValue: '57px'}], position: 3101, duration: 899, easing: "swing" },
                { id: "eid2549", tween: [ "motion", "${_bt_amarillo}", [[507.3, 500.64, 0, 0],[537.5, 307.43, 150.11, -90.19, 258.23, -155.16],[849.25, 299.07, 297.71, 124.15, 278.31, 116.06],[1122.3, 327.64, 0, 0]]], position: 3101, duration: 899, easing: "swing" },
                { id: "eid2577", tween: [ "motion", "${_bt_amarillo}", [[977.97, 463.31, 0, 0],[507.66, 500.98, 0, 0]]], position: 4250, duration: 0, easing: "swing" },
                { id: "eid2587", tween: [ "motion", "${_bt_amarillo}", [[507.66, 500.98, 0, 0],[507.66, 500.98, 0, 0]]], position: 5601, duration: 0, easing: "swing" },
                { id: "eid2625", tween: [ "motion", "${_bt_verde}", [[1086.02, 503.33, 0, 0],[950.27, 587.17, -509.94, 30.55, -304.06, 18.22],[820.35, 440.42, 305.8, -241.17, 77.99, -61.51],[1120.02, 328.31, 0, 0]]], position: 5601, duration: 899, easing: "swing" },
                { id: "eid2502", tween: [ "style", "${_bt_rojo}", "opacity", '0', { fromValue: '1'}], position: 1851, duration: 399, easing: "swing" },
                { id: "eid2610", tween: [ "style", "${_bt_rojo}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 0, easing: "swing" },
                { id: "eid2544", tween: [ "style", "${_bt_rojo}", "opacity", '0', { fromValue: '1'}], position: 3101, duration: 399, easing: "swing" },
                { id: "eid2604", tween: [ "style", "${_bt_rojo}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 0, easing: "swing" },
                { id: "eid2591", tween: [ "style", "${_bt_rojo}", "opacity", '0', { fromValue: '1'}], position: 5601, duration: 399, easing: "swing" },
                { id: "eid2526", tween: [ "style", "${_bt_azul}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0, easing: "swing" },
                { id: "eid2568", tween: [ "style", "${_bt_azul}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0, easing: "swing" },
                { id: "eid2569", tween: [ "style", "${_bt_azul}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0, easing: "swing" },
                { id: "eid2581", tween: [ "style", "${_bt_azul}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0, easing: "swing" },
                { id: "eid2582", tween: [ "style", "${_bt_azul}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "swing" },
                { id: "eid2515", tween: [ "style", "${_off}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0, easing: "swing" },
                { id: "eid2519", tween: [ "style", "${_off}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "swing" },
                { id: "eid2521", tween: [ "style", "${_off}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0, easing: "swing" },
                { id: "eid2522", tween: [ "style", "${_off}", "display", 'none', { fromValue: 'block'}], position: 4250, duration: 0, easing: "swing" },
                { id: "eid2523", tween: [ "style", "${_off}", "display", 'block', { fromValue: 'none'}], position: 5250, duration: 0, easing: "swing" },
                { id: "eid2524", tween: [ "style", "${_off}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0, easing: "swing" },
                { id: "eid2626", tween: [ "style", "${_off}", "display", 'block', { fromValue: 'none'}], position: 6500, duration: 0, easing: "swing" },
                { id: "eid2510", tween: [ "style", "${_azul}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid2514", tween: [ "style", "${_azul}", "display", 'block', { fromValue: 'none'}], position: 1851, duration: 0, easing: "swing" },
                { id: "eid2525", tween: [ "style", "${_azul}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "swing" },
                { id: "eid2628", tween: [ "style", "${_verde}", "opacity", '1', { fromValue: '0'}], position: 5601, duration: 899, easing: "swing" },
                { id: "eid2532", tween: [ "style", "${_bt_azul}", "opacity", '0', { fromValue: '1'}], position: 3101, duration: 399, easing: "swing" },
                { id: "eid2606", tween: [ "style", "${_bt_azul}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 0, easing: "swing" },
                { id: "eid2567", tween: [ "style", "${_bt_azul}", "opacity", '0', { fromValue: '1'}], position: 4351, duration: 399, easing: "swing" },
                { id: "eid2614", tween: [ "style", "${_bt_azul}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 0, easing: "swing" },
                { id: "eid2583", tween: [ "style", "${_bt_azul}", "opacity", '0', { fromValue: '1'}], position: 5601, duration: 399, easing: "swing" },
                { id: "eid2512", tween: [ "style", "${_rojo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid2598", tween: [ "style", "${_rojo}", "display", 'block', { fromValue: 'none'}], position: 4351, duration: 0, easing: "swing" },
                { id: "eid2633", tween: [ "style", "${_rojo}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0, easing: "swing" },
                { id: "eid2617", tween: [ "motion", "${_bt_rojo}", [[795.35, 375.32, 0, 0],[531.44, 388.5, -238.65, 419.76, -102.7, 180.65],[693.62, 564.7, 473.26, 30.92, 315.59, 20.62],[1124.34, 329.31, 0, 0]]], position: 4351, duration: 899, easing: "swing" },
                { id: "eid2620", tween: [ "motion", "${_bt_rojo}", [[978.02, 477.12, 0, 0],[795.68, 375.5, 0, 0]]], position: 5500, duration: 0, easing: "swing" },
                { id: "eid2492", tween: [ "style", "${_azul}", "top", '162px', { fromValue: '57px'}], position: 1851, duration: 899, easing: "swing" },
                { id: "eid2503", tween: [ "style", "${_bt_verde}", "opacity", '0', { fromValue: '1'}], position: 1851, duration: 399, easing: "swing" },
                { id: "eid2609", tween: [ "style", "${_bt_verde}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 0, easing: "swing" },
                { id: "eid2543", tween: [ "style", "${_bt_verde}", "opacity", '0', { fromValue: '1'}], position: 3101, duration: 399, easing: "swing" },
                { id: "eid2605", tween: [ "style", "${_bt_verde}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 0, easing: "swing" },
                { id: "eid2566", tween: [ "style", "${_bt_verde}", "opacity", '0', { fromValue: '1'}], position: 4351, duration: 399, easing: "swing" },
                { id: "eid2611", tween: [ "style", "${_bt_verde}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 0, easing: "swing" },
                { id: "eid2488", tween: [ "transform", "${_bt_azul}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid2504", tween: [ "transform", "${_bt_azul}", "scaleX", '0.7', { fromValue: '1'}], position: 1851, duration: 899, easing: "swing" },
                { id: "eid2539", tween: [ "transform", "${_bt_azul}", "scaleX", '1', { fromValue: '0.7'}], position: 3000, duration: 0, easing: "swing" },
                { id: "eid2629", tween: [ "style", "${_verde}", "top", '162px', { fromValue: '57px'}], position: 5601, duration: 899, easing: "swing" },
                { id: "eid2599", tween: [ "style", "${_rojo}", "top", '162px', { fromValue: '57px'}], position: 4351, duration: 899, easing: "swing" },
                { id: "eid2494", tween: [ "style", "${_azul}", "opacity", '1', { fromValue: '0'}], position: 1851, duration: 899, easing: "swing" },
                { id: "eid2634", tween: [ "style", "${_instruccion}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2635", tween: [ "style", "${_instruccion}", "display", 'none', { fromValue: 'block'}], position: 1851, duration: 0 },
                { id: "eid2501", tween: [ "style", "${_bt_amarillo}", "opacity", '0', { fromValue: '1'}], position: 1851, duration: 399, easing: "swing" },
                { id: "eid2538", tween: [ "style", "${_bt_amarillo}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 0, easing: "swing" },
                { id: "eid2603", tween: [ "style", "${_bt_amarillo}", "opacity", '0', { fromValue: '1'}], position: 4351, duration: 399, easing: "swing" },
                { id: "eid2613", tween: [ "style", "${_bt_amarillo}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 0, easing: "swing" },
                { id: "eid2586", tween: [ "style", "${_bt_amarillo}", "opacity", '0', { fromValue: '1'}], position: 5601, duration: 399, easing: "swing" },
                { id: "eid2507", tween: [ "style", "${_bt_verde}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0, easing: "swing" },
                { id: "eid2607", tween: [ "style", "${_bt_verde}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "swing" },
                { id: "eid2533", tween: [ "style", "${_bt_verde}", "display", 'block', { fromValue: 'block'}], position: 3101, duration: 0, easing: "swing" },
                { id: "eid2541", tween: [ "style", "${_bt_verde}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0, easing: "swing" },
                { id: "eid2564", tween: [ "style", "${_bt_verde}", "display", 'block', { fromValue: 'none'}], position: 4250, duration: 0, easing: "swing" },
                { id: "eid2565", tween: [ "style", "${_bt_verde}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0, easing: "swing" },
                { id: "eid2592", tween: [ "style", "${_bt_verde}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0, easing: "swing" },
                { id: "eid2511", tween: [ "style", "${_amarillo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid2548", tween: [ "style", "${_amarillo}", "display", 'block', { fromValue: 'none'}], position: 3101, duration: 0, easing: "swing" },
                { id: "eid2557", tween: [ "style", "${_amarillo}", "display", 'none', { fromValue: 'block'}], position: 4250, duration: 0, easing: "swing" },
                { id: "eid2476", tween: [ "transform", "${_bt_rojo}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "swing" },
                { id: "eid2615", tween: [ "transform", "${_bt_rojo}", "scaleX", '0.7', { fromValue: '1'}], position: 4351, duration: 899, easing: "swing" },
                { id: "eid2618", tween: [ "transform", "${_bt_rojo}", "scaleX", '1', { fromValue: '0.7'}], position: 5500, duration: 0, easing: "swing" },
                { id: "eid2480", tween: [ "transform", "${_bt_verde}", "scaleX", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "swing" },
                { id: "eid2621", tween: [ "transform", "${_bt_verde}", "scaleX", '0.7', { fromValue: '1'}], position: 5601, duration: 899, easing: "swing" },
                { id: "eid2506", tween: [ "motion", "${_bt_azul}", [[221.99, 375.32, 0, 0],[343.54, 554.49, 334.17, 53.5, 326.91, 52.34],[855.46, 545.02, 189.64, -48.07, 257.31, -65.22],[1123.98, 329.31, 0, 0]]], position: 1851, duration: 899, easing: "swing" },
                { id: "eid2531", tween: [ "motion", "${_bt_azul}", [[984.65, 471.31, 0, 0],[221.73, 375.31, 0, 0]]], position: 3000, duration: 0, easing: "swing" },
                { id: "eid2513", tween: [ "style", "${_verde}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
                { id: "eid2627", tween: [ "style", "${_verde}", "display", 'block', { fromValue: 'none'}], position: 5601, duration: 0, easing: "swing" },
                { id: "eid2556", tween: [ "style", "${_amarillo}", "opacity", '1', { fromValue: '0'}], position: 3101, duration: 899, easing: "swing" },
                { id: "eid2478", tween: [ "transform", "${_bt_rojo}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "swing" },
                { id: "eid2616", tween: [ "transform", "${_bt_rojo}", "scaleY", '0.7', { fromValue: '1'}], position: 4351, duration: 899, easing: "swing" },
                { id: "eid2619", tween: [ "transform", "${_bt_rojo}", "scaleY", '1', { fromValue: '0.7'}], position: 5500, duration: 0, easing: "swing" },
                { id: "eid2509", tween: [ "style", "${_bt_amarillo}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0, easing: "swing" },
                { id: "eid2535", tween: [ "style", "${_bt_amarillo}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "swing" },
                { id: "eid2602", tween: [ "style", "${_bt_amarillo}", "display", 'none', { fromValue: 'block'}], position: 4750, duration: 0, easing: "swing" },
                { id: "eid2596", tween: [ "style", "${_bt_amarillo}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0, easing: "swing" },
                { id: "eid2597", tween: [ "style", "${_bt_amarillo}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0, easing: "swing" },
                { id: "eid2484", tween: [ "transform", "${_bt_amarillo}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "swing" },
                { id: "eid2550", tween: [ "transform", "${_bt_amarillo}", "scaleX", '0.7', { fromValue: '1'}], position: 3101, duration: 899, easing: "swing" },
                { id: "eid2578", tween: [ "transform", "${_bt_amarillo}", "scaleX", '1', { fromValue: '0.7'}], position: 4250, duration: 0, easing: "swing" },
                { id: "eid2600", tween: [ "style", "${_rojo}", "opacity", '1', { fromValue: '0'}], position: 4351, duration: 899, easing: "swing" },
                { id: "eid2490", tween: [ "transform", "${_bt_azul}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid2505", tween: [ "transform", "${_bt_azul}", "scaleY", '0.7', { fromValue: '1'}], position: 1851, duration: 899, easing: "swing" },
                { id: "eid2540", tween: [ "transform", "${_bt_azul}", "scaleY", '1', { fromValue: '0.7'}], position: 3000, duration: 0, easing: "swing" }            ]
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
