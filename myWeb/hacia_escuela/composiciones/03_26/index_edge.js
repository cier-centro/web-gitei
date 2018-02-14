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
                id: 'F1_D26',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"F1_D26.png",'0px','0px']
            },
            {
                id: 'cont',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(232px 1304px 584px 565.33349609375px)'],
                fill: ["rgba(0,0,0,0)",im+"cont.png",'0px','0px']
            },
            {
                id: 'per',
                type: 'rect',
                rect: ['12px', '58px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 556px 675px 0px)'],
                transform: [[],[],[],['-0.4982','0.5']]
            },
            {
                id: 'titulo',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(28px 1152px 224px 150.6669921875px)'],
                fill: ["rgba(0,0,0,0)",im+"cont.png",'0px','0px']
            },
            {
                id: 'escalon1',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(526.666748046875px 710.6669921875px 574.6669921875px 667.99951171875px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"escalones.png",'0px','0px']
            },
            {
                id: 'escalon2',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(457.33349609375px 813.333984375px 508.000244140625px 767.9990234375px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"escalones.png",'0px','0px']
            },
            {
                id: 'escalon3',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(390.666748046875px 914.6669921875px 441.33349609375px 869.33349609375px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"escalones.png",'0px','0px']
            },
            {
                id: 'escalon4',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(325.333251953125px 1017.3330078125px 374.666748046875px 970.6669921875px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"escalones.png",'0px','0px']
            },
            {
                id: 'escalon5',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                clip: ['rect(257.33349609375px 1118.6669921875px 308px 1073.3330078125px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"escalones.png",'0px','0px']
            },
            {
                id: 'pop5',
                display: 'none',
                type: 'image',
                rect: ['157px', '175px','1304px','596px','auto', 'auto'],
                clip: ['rect(144px 1130.6669921875px 474.66650390625px 172px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"pop5.png",'0px','0px']
            },
            {
                id: 'pop4',
                display: 'none',
                type: 'image',
                rect: ['157px', '175px','1304px','596px','auto', 'auto'],
                clip: ['rect(146.666748046875px 1132px 473.333740234375px 172px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"pop4.png",'0px','0px']
            },
            {
                id: 'pop3',
                display: 'none',
                type: 'image',
                rect: ['157px', '175px','1304px','596px','auto', 'auto'],
                clip: ['rect(144px 1132px 474.66650390625px 170.6669921875px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"pop3.png",'0px','0px']
            },
            {
                id: 'pop2',
                display: 'none',
                type: 'image',
                rect: ['157px', '175px','1304px','596px','auto', 'auto'],
                clip: ['rect(146.666748046875px 1132px 473.333251953125px 173.3330078125px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"pop2.png",'0px','0px']
            },
            {
                id: 'pop1',
                display: 'none',
                type: 'image',
                rect: ['157px', '175px','1304px','596px','auto', 'auto'],
                clip: ['rect(145.333251953125px 1132px 473.3330078125px 173.3330078125px)'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"pop1.png",'0px','0px']
            },
            {
                id: 'bt_audio1',
                display: 'none',
                type: 'rect',
                rect: ['1159px', '437px','auto','auto','auto', 'auto'],
                title: 'Au1'
            },
            {
                id: 'bt_audio2',
                display: 'none',
                type: 'rect',
                rect: ['1159px', '437px','auto','auto','auto', 'auto'],
                title: 'Au2'
            },
            {
                id: 'bt_audio3',
                display: 'none',
                type: 'rect',
                rect: ['1159px', '437px','auto','auto','auto', 'auto'],
                title: 'Au3'
            },
            {
                id: 'bt_audio4',
                display: 'none',
                type: 'rect',
                rect: ['1159px', '437px','auto','auto','auto', 'auto'],
                title: 'Au4'
            },
            {
                id: 'bt_audio5',
                display: 'none',
                type: 'rect',
                rect: ['1159px', '437px','auto','auto','auto', 'auto'],
                title: 'Au5'
            },
            {
                id: 'instruccion',
                display: 'block',
                type: 'text',
                rect: ['105px', '310px','645px','31px','auto', 'auto'],
                text: "Haz clic en cada estrategia aplicada para conocerla mejor.",
                align: "left",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 21, "rgba(44,53,104,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Au5',
                type: 'audio',
                tag: 'audio',
                rect: ['1450', '321','320px','45px','auto', 'auto'],
                source: ['media/F1_E4_D26_N_3.mp3'],
                preload: 'auto'
            },
            {
                id: 'Au4',
                type: 'audio',
                tag: 'audio',
                rect: ['1450', '321','320px','45px','auto', 'auto'],
                source: ['media/F1_E4_D26_N_2_%28Audio%204%29.mp3'],
                preload: 'auto'
            },
            {
                id: 'Au3',
                type: 'audio',
                tag: 'audio',
                rect: ['1450', '321','320px','45px','auto', 'auto'],
                source: ['media/F1_E4_D26_N_2_%28Audio%203%29.mp3'],
                preload: 'auto'
            },
            {
                id: 'Au2',
                type: 'audio',
                tag: 'audio',
                rect: ['1450', '321','320px','45px','auto', 'auto'],
                source: ['media/F1_E4_D26_N_1_Audio_2.mp3'],
                preload: 'auto'
            },
            {
                id: 'Au1',
                type: 'audio',
                tag: 'audio',
                rect: ['1450', '321','320px','45px','auto', 'auto'],
                source: ['media/F1_E4_D26_N_1.mp3'],
                preload: 'auto'
            }],
            symbolInstances: [
            {
                id: 'bt_audio4',
                symbolName: 'bt_audio',
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
                id: 'slide_1',
                symbolName: 'slide_1',
                autoPlay: {

                }
            },
            {
                id: 'bt_audio5',
                symbolName: 'bt_audio',
                autoPlay: {

                }
            },
            {
                id: 'bt_audio3',
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
                id: 'bt_audio1',
                symbolName: 'bt_audio',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_escalon1}": [
                ["style", "-webkit-transform-origin", [52.94,92.39], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [52.94,92.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [52.94,92.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [52.94,92.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [52.94,92.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [52.94,92.39],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "top", '72px'],
                ["transform", "scaleX", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '5px'],
                ["style", "clip", [526.666748046875,710.6669921875,574.6669921875,667.99951171875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_pop4}": [
                ["style", "top", '175px'],
                ["style", "display", 'none'],
                ["style", "left", '157px'],
                ["style", "clip", [146.666748046875,1132,473.333740234375,172], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer']
            ],
            "${_slide_1}": [
                ["style", "left", '5px']
            ],
            "${_instruccion}": [
                ["color", "color", 'rgba(44,53,104,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '105px'],
                ["style", "width", '645px'],
                ["style", "top", '310px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif'],
                ["style", "font-size", '21px'],
                ["style", "height", '31px']
            ],
            "${_per}": [
                ["style", "top", '58px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '-0.4982'],
                ["style", "clip", [0,556,675,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '12px']
            ],
            "${_bt_audio5}": [
                ["style", "display", 'none'],
                ["style", "left", '1159px'],
                ["style", "top", '437px']
            ],
            "${_bt_audio4}": [
                ["style", "display", 'none'],
                ["style", "left", '1159px'],
                ["style", "top", '437px']
            ],
            "${_escalon5}": [
                ["style", "-webkit-transform-origin", [84.13,47.43], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [84.13,47.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [84.13,47.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [84.13,47.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [84.13,47.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [84.13,47.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "top", '72px'],
                ["transform", "scaleX", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '5px'],
                ["style", "clip", [257.33349609375,1118.6669921875,308,1073.3330078125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_cont}": [
                ["style", "top", '72px'],
                ["style", "left", '5px'],
                ["style", "clip", [232,1304,584,565.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_escalon3}": [
                ["style", "-webkit-transform-origin", [68.38,69.8], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [68.38,69.8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [68.38,69.8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [68.38,69.8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [68.38,69.8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [68.38,69.8],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "top", '72px'],
                ["transform", "scaleX", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '5px'],
                ["style", "clip", [390.666748046875,914.6669921875,441.33349609375,869.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_pop3}": [
                ["style", "top", '175px'],
                ["style", "display", 'none'],
                ["style", "left", '157px'],
                ["style", "clip", [144,1132,474.66650390625,170.6669921875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer']
            ],
            "${_titulo}": [
                ["style", "top", '124px'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "clip", [28,1044,95.999755859375,261.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_pop1}": [
                ["style", "top", '175px'],
                ["style", "display", 'none'],
                ["style", "left", '157px'],
                ["style", "clip", [145.333251953125,1132,473.3330078125,173.3330078125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer']
            ],
            "${_F1_D26}": [
                ["style", "left", '5px'],
                ["style", "top", '72px']
            ],
            "${_bt_audio1}": [
                ["style", "display", 'none'],
                ["style", "left", '1159px'],
                ["style", "top", '437px']
            ],
            "${_bt_audio2}": [
                ["style", "display", 'none'],
                ["style", "left", '1159px'],
                ["style", "top", '437px']
            ],
            "${_pop2}": [
                ["style", "top", '175px'],
                ["style", "display", 'none'],
                ["style", "left", '157px'],
                ["style", "clip", [146.666748046875,1132,473.333251953125,173.3330078125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "cursor", 'pointer']
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
            "${_bt_audio3}": [
                ["style", "display", 'none'],
                ["style", "left", '1159px'],
                ["style", "top", '437px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_escalon2}": [
                ["style", "-webkit-transform-origin", [60.71,81.43], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [60.71,81.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [60.71,81.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [60.71,81.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [60.71,81.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [60.71,81.43],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "top", '72px'],
                ["transform", "scaleX", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '5px'],
                ["style", "clip", [457.33349609375,813.333984375,508.000244140625,767.9990234375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_pop5}": [
                ["style", "top", '175px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '157px'],
                ["style", "clip", [144,1130.6669921875,474.66650390625,172], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_escalon4}": [
                ["style", "-webkit-transform-origin", [76.15,58.61], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [76.15,58.61],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [76.15,58.61],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [76.15,58.61],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [76.15,58.61],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [76.15,58.61],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "top", '72px'],
                ["transform", "scaleX", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '5px'],
                ["style", "clip", [325.333251953125,1017.3330078125,374.666748046875,970.6669921875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid2475", tween: [ "style", "${_titulo}", "top", '72px', { fromValue: '124px'}], position: 0, duration: 250, easing: "easeInCirc" },
                { id: "eid2530", tween: [ "style", "${_pop5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2480", tween: [ "transform", "${_escalon4}", "scaleX", '1', { fromValue: '0'}], position: 1000, duration: 250, easing: "easeInCirc" },
                { id: "eid2537", tween: [ "style", "${_bt_audio4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2500", tween: [ "style", "${_escalon2}", "clip", [457.33349609375,930.6669921875,508.000244140625,670.666015625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [457.33349609375,813.333984375,508.000244140625,767.9990234375]}], position: 750, duration: 250, easing: "easeInCirc" },
                { id: "eid2539", tween: [ "style", "${_bt_audio2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2488", tween: [ "transform", "${_escalon2}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "easeInCirc" },
                { id: "eid2496", tween: [ "transform", "${_escalon1}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 250, easing: "easeInCirc" },
                { id: "eid2540", tween: [ "style", "${_bt_audio1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2492", tween: [ "transform", "${_escalon5}", "scaleX", '1', { fromValue: '0'}], position: 1250, duration: 250, easing: "easeInCirc" },
                { id: "eid2476", tween: [ "style", "${_titulo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250, easing: "easeInCirc" },
                { id: "eid2482", tween: [ "transform", "${_escalon4}", "scaleY", '1', { fromValue: '0'}], position: 1000, duration: 250, easing: "easeInCirc" },
                { id: "eid2502", tween: [ "style", "${_escalon4}", "clip", [325.333251953125,1133.3330078125,374.666748046875,878.6669921875], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [325.333251953125,1017.3330078125,374.666748046875,970.6669921875]}], position: 1250, duration: 250, easing: "easeInCirc" },
                { id: "eid2499", tween: [ "style", "${_escalon1}", "clip", [526.666748046875,830.6669921875,574.6669921875,561.33251953125], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [526.666748046875,710.6669921875,574.6669921875,667.99951171875]}], position: 500, duration: 250, easing: "easeInCirc" },
                { id: "eid2528", tween: [ "style", "${_pop3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2477", tween: [ "style", "${_titulo}", "clip", [28,1152,95.999755859375,150.66748046875], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [28,1044,95.999755859375,261.33349609375]}], position: 0, duration: 0 },
                { id: "eid2478", tween: [ "style", "${_titulo}", "clip", [28,1148,225.3330078125,154.66650390625], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [28,1152,95.999755859375,150.66748046875]}], position: 250, duration: 250, easing: "easeInCirc" },
                { id: "eid2494", tween: [ "transform", "${_escalon5}", "scaleY", '1', { fromValue: '0'}], position: 1250, duration: 250, easing: "easeInCirc" },
                { id: "eid2527", tween: [ "style", "${_pop2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2501", tween: [ "style", "${_escalon3}", "clip", [390.666748046875,1030.6669921875,441.33349609375,776.00048828125], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [390.666748046875,914.6669921875,441.33349609375,869.33349609375]}], position: 1000, duration: 250, easing: "easeInCirc" },
                { id: "eid2541", tween: [ "style", "${_pop1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2529", tween: [ "style", "${_pop4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2498", tween: [ "transform", "${_escalon1}", "scaleY", '1', { fromValue: '0'}], position: 250, duration: 250, easing: "easeInCirc" },
                { id: "eid2503", tween: [ "style", "${_escalon5}", "clip", [257.33349609375,1236.0009765625,308,981.3330078125], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [257.33349609375,1118.6669921875,308,1073.3330078125]}], position: 1500, duration: 250, easing: "easeInCirc" },
                { id: "eid2538", tween: [ "style", "${_bt_audio3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2536", tween: [ "style", "${_bt_audio5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid2490", tween: [ "transform", "${_escalon2}", "scaleY", '1', { fromValue: '0'}], position: 500, duration: 250, easing: "easeInCirc" },
                { id: "eid2484", tween: [ "transform", "${_escalon3}", "scaleX", '1', { fromValue: '0'}], position: 750, duration: 250, easing: "easeInCirc" },
                { id: "eid2486", tween: [ "transform", "${_escalon3}", "scaleY", '1', { fromValue: '0'}], position: 750, duration: 250, easing: "easeInCirc" }            ]
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
                ["style", "overflow", 'hidden'],
                ["style", "width", '106px']
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
                { id: "eid2320", tween: [ "style", "${_bocCopy}", "left", '-876px', { fromValue: '-524px'}], position: 2000, duration: 0 },
                { id: "eid2272", tween: [ "style", "${_bocCopy}", "top", '-91px', { fromValue: '-91px'}], position: 250, duration: 0 },
                { id: "eid2307", tween: [ "style", "${_bocCopy}", "top", '-71px', { fromValue: '-91px'}], position: 750, duration: 0 },
                { id: "eid2309", tween: [ "style", "${_bocCopy}", "top", '-91px', { fromValue: '-71px'}], position: 877, duration: 0 },
                { id: "eid2317", tween: [ "style", "${_bocCopy}", "top", '-71px', { fromValue: '-91px'}], position: 1636, duration: 0 },
                { id: "eid2318", tween: [ "style", "${_bocCopy}", "top", '-91px', { fromValue: '-71px'}], position: 1763, duration: 0 }            ]
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
                    rect: ['-859px', '-24px', '1117px', '1000px', 'auto', 'auto'],
                    id: 'ojoCopy',
                    type: 'image',
                    clip: ['rect(24px 979px 90px 676px)'],
                    fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_ojoCopy}": [
                ["style", "top", '-24px'],
                ["style", "left", '-859px'],
                ["style", "clip", [24,979,90,676], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '60px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '106px']
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
                    id: 'piernas',
                    type: 'image',
                    rect: ['162', '101px', '1117px', '1000px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                },
                {
                    rect: ['105px', '298px', '279px', '348px', 'auto', 'auto'],
                    id: 'IZQ',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        rect: ['11px', '126px', '246px', '224px', 'auto', 'auto'],
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
                    id: 'tronco',
                    type: 'image',
                    rect: ['162', '161px', '1117px', '1000px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                },
                {
                    rect: ['399px', '288px', '106px', '438px', 'auto', 'auto'],
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
                },
                {
                    rect: ['254px', '1px', '260px', '287px', 'auto', 'auto'],
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
                ["style", "-webkit-transform-origin", [84.95,5.75], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '298px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_CABEZA}": [
                ["style", "-webkit-transform-origin", [55.77,90.24], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '1px']
            ],
            "${_cabeza}": [
                ["style", "-webkit-transform-origin", [48.16,93.9], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '-393px'],
                ["style", "opacity", '1'],
                ["style", "clip", [684,657,972,396], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '-680px']
            ],
            "${_bra_1}": [
                ["style", "top", '-187px'],
                ["style", "clip", [186,913,370,820], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-817px'],
                ["style", "-webkit-transform-origin", [77.17,22.3], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_piernas}": [
                ["style", "-webkit-transform-origin", [16.29,46.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [414,341,1000,34], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '101px']
            ],
            "${_bra_2}": [
                ["style", "top", '-197px'],
                ["style", "-webkit-transform-origin", [55.6,21.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-384px'],
                ["style", "clip", [194,661,372,564], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_DER}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "-webkit-transform-origin", [42.45,8.22], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '288px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_tronco}": [
                ["style", "top", '161px'],
                ["style", "clip", [28,305,412,112], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [16.65,37.5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_antbra_1}": [
                ["style", "-webkit-transform-origin", [78.51,42], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-821px'],
                ["style", "clip", [374,913,586,842], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '-376px']
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
            "${_boca}": [
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '191px'],
                ["style", "left", '39px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${symbolSelector}": [
                ["style", "height", '1091px'],
                ["style", "width", '556px']
            ],
            "${_antbra_2}": [
                ["style", "-webkit-transform-origin", [52.55,40.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-381px'],
                ["style", "clip", [380,621,538,460], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '-380px']
            ],
            "${_mano_2}": [
                ["style", "top", '-438px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "clip", [550,477,668,348], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-352px'],
                ["style", "-webkit-transform-origin", [40.29,57.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_MANO2}": [
                ["style", "-webkit-transform-origin", [83.73,10.71], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '126px'],
                ["style", "left", '11px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_mano_1}": [
                ["style", "-webkit-transform-origin", [78.07,61.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-822px'],
                ["style", "clip", [594,909,726,822], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '-421px']
            ],
            "${_ojos}": [
                ["style", "-webkit-transform-origin", [100,225], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,225],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,225],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,225],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,225],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [100,225],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '124px'],
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
                { id: "eid2383", tween: [ "transform", "${_IZQ}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 2386, duration: 2750 },
                { id: "eid2384", tween: [ "transform", "${_IZQ}", "rotateZ", '0deg', { fromValue: '5deg'}], position: 8136, duration: 2750 },
                { id: "eid2387", tween: [ "transform", "${_mano_2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 5886, duration: 750 },
                { id: "eid2388", tween: [ "transform", "${_mano_2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 6636, duration: 750 },
                { id: "eid2376", tween: [ "transform", "${_cabeza}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2377", tween: [ "transform", "${_cabeza}", "rotateZ", '-3deg', { fromValue: '2deg'}], position: 4215, duration: 5571 },
                { id: "eid2378", tween: [ "transform", "${_cabeza}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 9786, duration: 3714 },
                { id: "eid2370", tween: [ "transform", "${_boca}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2371", tween: [ "transform", "${_boca}", "rotateZ", '-3deg', { fromValue: '2deg'}], position: 4215, duration: 5571 },
                { id: "eid2372", tween: [ "transform", "${_boca}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 9786, duration: 3714 },
                { id: "eid2381", tween: [ "transform", "${_MANO}", "rotateZ", '15deg', { fromValue: '0deg'}], position: 3000, duration: 2250 },
                { id: "eid2382", tween: [ "transform", "${_MANO}", "rotateZ", '0deg', { fromValue: '15deg'}], position: 5250, duration: 2250 },
                { id: "eid2379", tween: [ "transform", "${_DER}", "rotateZ", '-6deg', { fromValue: '0deg'}], position: 1000, duration: 2750 },
                { id: "eid2380", tween: [ "transform", "${_DER}", "rotateZ", '0deg', { fromValue: '-6deg'}], position: 6750, duration: 2750 },
                { id: "eid2385", tween: [ "transform", "${_MANO2}", "rotateZ", '-14deg', { fromValue: '0deg'}], position: 3636, duration: 2250 },
                { id: "eid2386", tween: [ "transform", "${_MANO2}", "rotateZ", '0deg', { fromValue: '-14deg'}], position: 7386, duration: 2250 }            ]
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
                ["style", "left", '0px'],
                ["style", "height", '180px'],
                ["style", "background-position", [0,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,90,90,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
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
