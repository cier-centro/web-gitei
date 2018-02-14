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
                id: 'fondo',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(25.33349609375px 1250.6669921875px 370.66650390625px 845.3330078125px)'],
                fill: ["rgba(0,0,0,0)",im+"pasos.png",'0px','0px'],
                transform: [[],[],[],[],['79.9205%','41.0618%']]
            },
            {
                id: 'F1_D3',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(374.666748046875px 1009.3330078125px 522.66650390625px 861.33349609375px)'],
                fill: ["rgba(0,0,0,0)",im+"F1_D3.png",'0px','0px'],
                transform: [[],[],[],[],['71.6513%','75.727%']]
            },
            {
                id: 'F1_D3_1',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(182.66650390625px 846.666015625px 425.33349609375px 52.00048828125px)'],
                fill: ["rgba(0,0,0,0)",im+"F1_D3.png",'0px','0px']
            },
            {
                id: 'per',
                type: 'rect',
                rect: ['703px', '-138px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['0.54902','0.54902'],['61.9025%','41.6803%']]
            },
            {
                id: 'icono',
                type: 'image',
                rect: ['-49px', '-73px','1304px','596px','auto', 'auto'],
                clip: ['rect(410.666748046875px 1272px 570.6669921875px 1106.66650390625px)'],
                fill: ["rgba(0,0,0,0)",im+"pasos.png",'0px','0px']
            },
            {
                id: 'cierre',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(381.33349609375px 1001.3330078125px 516px 868.00048828125px)'],
                fill: ["rgba(0,0,0,0)",im+"pasos.png",'0px','0px'],
                transform: [[],[],[],[],['71.6513%','75.727%']]
            },
            {
                id: 'logro',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(522.666748046875px 1050.6669921875px 557.33349609375px 827.99951171875px)'],
                fill: ["rgba(0,0,0,0)",im+"pasos.png",'0px','0px']
            },
            {
                id: 'parte3_',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(424px 821.3330078125px 542.66650390625px 634.66650390625px)'],
                fill: ["rgba(0,0,0,0)",im+"pasos.png",'0px','0px']
            },
            {
                id: 'parte2',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(424.000244140625px 552px 524px 356.00048828125px)'],
                fill: ["rgba(0,0,0,0)",im+"pasos.png",'0px','0px']
            },
            {
                id: 'parte1',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(426.666748046875px 261.3330078125px 522.66650390625px 92.00048828125px)'],
                fill: ["rgba(0,0,0,0)",im+"pasos.png",'0px','0px']
            },
            {
                id: '_3',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(208px 825.3330078125px 405.33349609375px 629.33349609375px)'],
                fill: ["rgba(0,0,0,0)",im+"pasos.png",'0px','0px'],
                transform: [[],[],[],[],['55.7003%','51.3422%']]
            },
            {
                id: '_2',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(204px 558.666015625px 401.33349609375px 346.66650390625px)'],
                fill: ["rgba(0,0,0,0)",im+"pasos.png",'0px','0px'],
                transform: [[],[],[],[],['34.3302%','52.0134%']]
            },
            {
                id: '_1',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(204px 280px 409.3330078125px 73.333984375px)'],
                fill: ["rgba(0,0,0,0)",im+"pasos.png",'0px','0px'],
                transform: [[],[],[],[],['13.6758%','51.3422%']]
            },
            {
                id: 'instruccion',
                display: 'block',
                type: 'text',
                rect: ['104px', '205px','791px','71px','auto', 'auto'],
                text: "Esta la ruta para aprender a generar ideas con fluidez dentro de una situación que nos implica ser propositivos.",
                align: "left",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 21, "rgba(44,53,104,1.00)", "400", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'per',
                symbolName: 'per',
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
            "${_parte3_}": [
                ["style", "top", '72px'],
                ["style", "opacity", '0'],
                ["style", "clip", [424,821.3330078125,542.66650390625,634.66650390625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '5px']
            ],
            "${_instruccion}": [
                ["color", "color", 'rgba(44,53,104,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '104px'],
                ["style", "width", '791px'],
                ["style", "top", '205px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif'],
                ["style", "font-size", '21px'],
                ["style", "height", '71px']
            ],
            "${__2}": [
                ["style", "top", '72px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "-webkit-transform-origin", [34.33,52.01], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [34.33,52.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [34.33,52.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [34.33,52.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [34.33,52.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [34.33,52.01],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [204,558.666015625,401.33349609375,346.66650390625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '5px']
            ],
            "${_parte2}": [
                ["style", "top", '72px'],
                ["style", "opacity", '0'],
                ["style", "clip", [424.000244140625,552,524,356.00048828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '5px']
            ],
            "${_icono}": [
                ["style", "top", '-3px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "clip", [410.666748046875,1272,570.6669921875,1106.66650390625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-49px']
            ],
            "${_parte1}": [
                ["style", "top", '72px'],
                ["style", "opacity", '0'],
                ["style", "clip", [426.666748046875,261.3330078125,522.66650390625,92.00048828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '5px']
            ],
            "${__3}": [
                ["style", "top", '72px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "-webkit-transform-origin", [55.7,51.34], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [55.7,51.34],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [55.7,51.34],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [55.7,51.34],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [55.7,51.34],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [55.7,51.34],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [208,825.3330078125,405.33349609375,629.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '5px']
            ],
            "${_fondo}": [
                ["style", "-webkit-transform-origin", [79.92,41.06], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [79.92,41.06],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [79.92,41.06],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [79.92,41.06],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [79.92,41.06],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [79.92,41.06],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "top", '142px'],
                ["style", "clip", [25.33349609375,1250.6669921875,370.66650390625,845.3330078125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '5px']
            ],
            "${_F1_D3_1}": [
                ["style", "top", '72px'],
                ["style", "clip", [182.66650390625,55.9990234375,425.33349609375,52.00048828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '5px']
            ],
            "${_per}": [
                ["style", "top", '-68px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "left", '703px'],
                ["style", "-webkit-transform-origin", [61.9,41.68], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [61.9,41.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [61.9,41.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [61.9,41.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [61.9,41.68],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [61.9,41.68],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__1}": [
                ["style", "-webkit-transform-origin", [13.68,51.34], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [13.68,51.34],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [13.68,51.34],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [13.68,51.34],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [13.68,51.34],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [13.68,51.34],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "top", '72px'],
                ["style", "clip", [204,280,409.3330078125,73.333984375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
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
            "${_cierre}": [
                ["style", "-webkit-transform-origin", [71.65,75.73], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [71.65,75.73],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [71.65,75.73],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [71.65,75.73],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [71.65,75.73],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [71.65,75.73],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "top", '112px'],
                ["style", "clip", [381.33349609375,1001.3330078125,516,868.00048828125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '5px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_slide_1}": [
                ["style", "left", '5px']
            ],
            "${_F1_D3}": [
                ["style", "-webkit-transform-origin", [71.65,75.73], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [71.65,75.73],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [71.65,75.73],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [71.65,75.73],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [71.65,75.73],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [71.65,75.73],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "top", '112px'],
                ["style", "clip", [374.666748046875,1009.3330078125,522.66650390625,861.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '5px']
            ],
            "${_logro}": [
                ["style", "top", '112px'],
                ["style", "opacity", '0'],
                ["style", "clip", [522.666748046875,1050.6669921875,557.33349609375,827.99951171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '5px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14000,
            autoPlay: true,
            labels: {
                "slide_1": 0
            },
            timeline: [
                { id: "eid2404", tween: [ "transform", "${__2}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeInOutBack" },
                { id: "eid2446", tween: [ "transform", "${_fondo}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid2400", tween: [ "transform", "${__1}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutBack" },
                { id: "eid2444", tween: [ "transform", "${_fondo}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid2408", tween: [ "transform", "${__3}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInOutBack" },
                { id: "eid2394", tween: [ "transform", "${_cierre}", "scaleY", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "swing" },
                { id: "eid2412", tween: [ "style", "${_parte1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "swing" },
                { id: "eid2398", tween: [ "transform", "${_F1_D3}", "scaleY", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "swing" },
                { id: "eid2396", tween: [ "transform", "${_F1_D3}", "scaleX", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "swing" },
                { id: "eid2440", tween: [ "transform", "${_per}", "scaleX", '0.54902', { fromValue: '0'}], position: 0, duration: 500, easing: "swing" },
                { id: "eid2416", tween: [ "style", "${_parte3_}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250, easing: "swing" },
                { id: "eid2414", tween: [ "style", "${_parte2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250, easing: "swing" },
                { id: "eid2406", tween: [ "transform", "${__2}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeInOutBack" },
                { id: "eid2418", tween: [ "style", "${_logro}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 250, easing: "swing" },
                { id: "eid2402", tween: [ "transform", "${__1}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeInOutBack" },
                { id: "eid2410", tween: [ "transform", "${__3}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInOutBack" },
                { id: "eid2450", tween: [ "transform", "${_icono}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "swing" },
                { id: "eid2448", tween: [ "transform", "${_icono}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "swing" },
                { id: "eid2390", tween: [ "style", "${_F1_D3_1}", "clip", [182.66650390625,846.666015625,425.33349609375,52.00048828125], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [182.66650390625,55.9990234375,425.33349609375,52.00048828125]}], position: 0, duration: 1500 },
                { id: "eid2392", tween: [ "transform", "${_cierre}", "scaleX", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "swing" },
                { id: "eid2442", tween: [ "transform", "${_per}", "scaleY", '0.54902', { fromValue: '0'}], position: 0, duration: 500, easing: "swing" }            ]
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
                    id: 'bocCopy',
                    type: 'image',
                    rect: ['-876px', '-91px', '1117px', '1000px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_bocCopy}": [
                ["style", "top", '-91px'],
                ["style", "clip", [92,981,166,444], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-876px']
            ],
            "${symbolSelector}": [
                ["style", "height", '68px'],
                ["style", "width", '106px'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            labels: {
                "mute": 0,
                "ini": 250
            },
            timeline: [
                { id: "eid2272", tween: [ "style", "${_bocCopy}", "top", '-91px', { fromValue: '-91px'}], position: 250, duration: 0 },
                { id: "eid2307", tween: [ "style", "${_bocCopy}", "top", '-71px', { fromValue: '-91px'}], position: 750, duration: 0 },
                { id: "eid2309", tween: [ "style", "${_bocCopy}", "top", '-91px', { fromValue: '-71px'}], position: 877, duration: 0 },
                { id: "eid2317", tween: [ "style", "${_bocCopy}", "top", '-71px', { fromValue: '-91px'}], position: 1636, duration: 0 },
                { id: "eid2318", tween: [ "style", "${_bocCopy}", "top", '-91px', { fromValue: '-71px'}], position: 1763, duration: 0 },
                { id: "eid2273", tween: [ "style", "${_bocCopy}", "left", '-876px', { fromValue: '-876px'}], position: 250, duration: 0 },
                { id: "eid2274", tween: [ "style", "${_bocCopy}", "left", '-749px', { fromValue: '-876px'}], position: 374, duration: 0 },
                { id: "eid2304", tween: [ "style", "${_bocCopy}", "left", '-635px', { fromValue: '-749px'}], position: 500, duration: 0 },
                { id: "eid2305", tween: [ "style", "${_bocCopy}", "left", '-524px', { fromValue: '-635px'}], position: 614, duration: 0 },
                { id: "eid2306", tween: [ "style", "${_bocCopy}", "left", '-431px', { fromValue: '-524px'}], position: 750, duration: 0 },
                { id: "eid2308", tween: [ "style", "${_bocCopy}", "left", '-749px', { fromValue: '-431px'}], position: 877, duration: 0 },
                { id: "eid2310", tween: [ "style", "${_bocCopy}", "left", '-524px', { fromValue: '-749px'}], position: 1000, duration: 0 },
                { id: "eid2311", tween: [ "style", "${_bocCopy}", "left", '-635px', { fromValue: '-524px'}], position: 1123, duration: 0 },
                { id: "eid2312", tween: [ "style", "${_bocCopy}", "left", '-876px', { fromValue: '-635px'}], position: 1250, duration: 0 },
                { id: "eid2313", tween: [ "style", "${_bocCopy}", "left", '-635px', { fromValue: '-876px'}], position: 1386, duration: 0 },
                { id: "eid2314", tween: [ "style", "${_bocCopy}", "left", '-524px', { fromValue: '-635px'}], position: 1500, duration: 0 },
                { id: "eid2315", tween: [ "style", "${_bocCopy}", "left", '-431px', { fromValue: '-524px'}], position: 1636, duration: 0 },
                { id: "eid2316", tween: [ "style", "${_bocCopy}", "left", '-749px', { fromValue: '-431px'}], position: 1763, duration: 0 },
                { id: "eid2319", tween: [ "style", "${_bocCopy}", "left", '-524px', { fromValue: '-749px'}], position: 1877, duration: 0 },
                { id: "eid2320", tween: [ "style", "${_bocCopy}", "left", '-876px', { fromValue: '-524px'}], position: 2000, duration: 0 }            ]
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
                    id: 'ojoCopy',
                    rect: ['-859px', '-24px', '1117px', '1000px', 'auto', 'auto'],
                    clip: ['rect(24px 979px 90px 676px)'],
                    fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "width", '106px'],
                ["style", "overflow", 'hidden']
            ],
            "${_ojoCopy}": [
                ["style", "top", '-24px'],
                ["style", "left", '-859px'],
                ["style", "clip", [24,979,90,676], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid2294", tween: [ "style", "${_ojoCopy}", "top", '-24px', { fromValue: '-24px'}], position: 0, duration: 0 },
                { id: "eid2295", tween: [ "style", "${_ojoCopy}", "left", '-859px', { fromValue: '-859px'}], position: 0, duration: 0 },
                { id: "eid2296", tween: [ "style", "${_ojoCopy}", "left", '-699px', { fromValue: '-859px'}], position: 250, duration: 0 },
                { id: "eid2297", tween: [ "style", "${_ojoCopy}", "left", '-859px', { fromValue: '-699px'}], position: 500, duration: 0 },
                { id: "eid2298", tween: [ "style", "${_ojoCopy}", "left", '-859px', { fromValue: '-859px'}], position: 3750, duration: 0 },
                { id: "eid2299", tween: [ "style", "${_ojoCopy}", "left", '-699px', { fromValue: '-859px'}], position: 4000, duration: 0 },
                { id: "eid2300", tween: [ "style", "${_ojoCopy}", "left", '-859px', { fromValue: '-699px'}], position: 4250, duration: 0 },
                { id: "eid2301", tween: [ "style", "${_ojoCopy}", "left", '-859px', { fromValue: '-859px'}], position: 8000, duration: 0 },
                { id: "eid2302", tween: [ "style", "${_ojoCopy}", "left", '-699px', { fromValue: '-859px'}], position: 8250, duration: 0 },
                { id: "eid2303", tween: [ "style", "${_ojoCopy}", "left", '-859px', { fromValue: '-699px'}], position: 8500, duration: 0 }            ]
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
                    rect: ['105px', '358px', '279px', '348px', 'auto', 'auto'],
                    id: 'IZQ',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        rect: ['-3px', '124px', '246px', '224px', 'auto', 'auto'],
                        id: 'MANO2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(192,192,192,0)'],
                        c: [
                        {
                            id: 'antbra_2',
                            type: 'image',
                            rect: ['-381px', '-380px', '1117px', '1000px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                        },
                        {
                            id: 'mano_2',
                            type: 'image',
                            rect: ['-352px', '-438px', '1117px', '1000px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                        }]
                    },
                    {
                        id: 'bra_2',
                        type: 'image',
                        rect: ['-384px', '-197px', '1117px', '1000px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                    }]
                },
                {
                    rect: ['97px', '185px', '477px', '477px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    overflow: 'hidden',
                    id: 'recorte',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        id: 'piernas',
                        type: 'image',
                        rect: ['65px', '-24px', '1117px', '1000px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                    },
                    {
                        id: 'tronco',
                        type: 'image',
                        rect: ['65px', '36px', '1117px', '1000px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                    },
                    {
                        rect: ['302px', '163px', '106px', '438px', 'auto', 'auto'],
                        id: 'DER',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(192,192,192,0.00)'],
                        c: [
                        {
                            rect: ['1px', '134px', '96px', '302px', 'auto', 'auto'],
                            id: 'MANO',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)'],
                            c: [
                            {
                                id: 'mano_1',
                                type: 'image',
                                rect: ['-822px', '-421px', '1117px', '1000px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                            },
                            {
                                id: 'antbra_1',
                                type: 'image',
                                rect: ['-821px', '-376px', '1117px', '1000px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                            }]
                        },
                        {
                            id: 'bra_1',
                            type: 'image',
                            rect: ['-817px', '-187px', '1117px', '1000px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                        }]
                    }]
                },
                {
                    rect: ['254px', '61px', '260px', '287px', 'auto', 'auto'],
                    id: 'CABEZA',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        rect: ['-393px', '-680px', '1117px', '1000px', 'auto', 'auto'],
                        id: 'cabeza',
                        opacity: 1,
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                    },
                    {
                        id: 'ojos',
                        type: 'rect',
                        rect: ['39px', '124px', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        id: 'boca',
                        type: 'rect',
                        rect: ['39px', '191px', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            {
                id: 'ojos',
                symbolName: 'ojos',
                autoPlay: {

               }
            },
            {
                id: 'boca',
                symbolName: 'boca',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_IZQ}": [
                ["style", "top", '358px'],
                ["style", "-webkit-transform-origin", [84.95,5.75], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '21deg']
            ],
            "${_CABEZA}": [
                ["style", "-webkit-transform-origin", [55.77,90.24], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '61px']
            ],
            "${_cabeza}": [
                ["style", "-webkit-transform-origin", [48.16,93.9], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "top", '-680px'],
                ["style", "opacity", '1'],
                ["style", "left", '-393px'],
                ["style", "clip", [684,657,972,396], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bra_1}": [
                ["style", "top", '-187px'],
                ["style", "-webkit-transform-origin", [77.17,22.3], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [186,913,370,820], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-817px']
            ],
            "${_piernas}": [
                ["style", "top", '-24px'],
                ["style", "left", '65px'],
                ["style", "clip", [414,341,1000,34], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [16.29,46.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '1091px'],
                ["style", "width", '556px']
            ],
            "${_DER}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "rotateZ", '0deg'],
                ["style", "top", '163px'],
                ["style", "left", '302px'],
                ["style", "-webkit-transform-origin", [42.45,8.22], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_tronco}": [
                ["style", "-webkit-transform-origin", [16.65,37.5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '65px'],
                ["style", "clip", [28,305,412,112], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '36px']
            ],
            "${_mano_2}": [
                ["style", "top", '-438px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "-webkit-transform-origin", [40.29,57.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [550,477,668,348], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-352px']
            ],
            "${_MANO2}": [
                ["style", "-webkit-transform-origin", [83.73,10.71], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '77deg']
            ],
            "${_recorte}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '185px'],
                ["style", "left", '97px'],
                ["style", "overflow", 'hidden']
            ],
            "${_mano_1}": [
                ["style", "-webkit-transform-origin", [78.07,61.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-421px'],
                ["style", "left", '-822px'],
                ["style", "clip", [594,909,726,822], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_boca}": [
                ["style", "top", '191px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '39px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_antbra_2}": [
                ["style", "-webkit-transform-origin", [52.55,40.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-380px'],
                ["style", "left", '-381px'],
                ["style", "clip", [380,621,538,460], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_antbra_1}": [
                ["style", "-webkit-transform-origin", [78.51,42], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-376px'],
                ["style", "left", '-821px'],
                ["style", "clip", [374,913,586,842], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bra_2}": [
                ["style", "-webkit-transform-origin", [55.6,21.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-197px'],
                ["style", "clip", [194,661,372,564], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-384px']
            ],
            "${_MANO}": [
                ["style", "-webkit-transform-origin", [58.29,14.57], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [58.29,14.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [58.29,14.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [58.29,14.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [58.29,14.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [58.29,14.57],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_ojos}": [
                ["style", "top", '124px'],
                ["style", "-webkit-transform-origin", [100,225], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,225],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,225],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,225],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,225],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,225],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '39px'],
                ["transform", "rotateZ", '0deg']
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
                { id: "eid2373", tween: [ "transform", "${_ojos}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2374", tween: [ "transform", "${_ojos}", "rotateZ", '-3deg', { fromValue: '2deg'}], position: 4215, duration: 5571 },
                { id: "eid2375", tween: [ "transform", "${_ojos}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 9786, duration: 3714 },
                { id: "eid2370", tween: [ "transform", "${_boca}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2371", tween: [ "transform", "${_boca}", "rotateZ", '-3deg', { fromValue: '2deg'}], position: 4215, duration: 5571 },
                { id: "eid2372", tween: [ "transform", "${_boca}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 9786, duration: 3714 },
                { id: "eid2376", tween: [ "transform", "${_cabeza}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2377", tween: [ "transform", "${_cabeza}", "rotateZ", '-3deg', { fromValue: '2deg'}], position: 4215, duration: 5571 },
                { id: "eid2378", tween: [ "transform", "${_cabeza}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 9786, duration: 3714 },
                { id: "eid2387", tween: [ "transform", "${_mano_2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 5886, duration: 750 },
                { id: "eid2388", tween: [ "transform", "${_mano_2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 6636, duration: 750 },
                { id: "eid2383", tween: [ "transform", "${_IZQ}", "rotateZ", '20deg', { fromValue: '21deg'}], position: 2386, duration: 2750 },
                { id: "eid2384", tween: [ "transform", "${_IZQ}", "rotateZ", '21deg', { fromValue: '20deg'}], position: 8136, duration: 2750 },
                { id: "eid2381", tween: [ "transform", "${_MANO}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 3000, duration: 2250 },
                { id: "eid2382", tween: [ "transform", "${_MANO}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 5250, duration: 2250 },
                { id: "eid2379", tween: [ "transform", "${_DER}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 1000, duration: 2750 },
                { id: "eid2380", tween: [ "transform", "${_DER}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 6750, duration: 2750 },
                { id: "eid2385", tween: [ "transform", "${_MANO2}", "rotateZ", '90deg', { fromValue: '77deg'}], position: 3636, duration: 2250 },
                { id: "eid2386", tween: [ "transform", "${_MANO2}", "rotateZ", '77deg', { fromValue: '90deg'}], position: 7386, duration: 2250 }            ]
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
