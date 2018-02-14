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
                id: 'success',
                type: 'audio',
                tag: 'audio',
                rect: ['-6557px', '399','320px','45px','auto', 'auto'],
                source: ['media/success.mp3','media/success.ogg'],
                preload: 'false'
            },
            {
                id: 'error',
                type: 'audio',
                tag: 'audio',
                rect: ['396', '399','320px','45px','auto', 'auto'],
                source: ['media/error.mp3','media/error.ogg'],
                preload: 'false'
            },
            {
                id: 'ok_bad',
                type: 'group',
                rect: ['-355px', '-11px','0','0','auto', 'auto'],
                c: [
                {
                    id: 'bad1',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok1',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad2',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok2',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad3',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok3',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad4',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok4',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad5',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok5',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad6',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok6',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad7',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok7',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad8',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok8',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad9',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok9',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad10',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok10',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad11',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok11',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad12',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok12',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad13',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok13',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad14',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok14',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad15',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok15',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad16',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok16',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad17',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok17',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad18',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok18',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad19',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok19',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad20',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok20',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'F1_D9',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"F1_D9.png",'0px','0px']
            },
            {
                id: 'd',
                type: 'image',
                rect: ['47px', '72','1304px','596px','auto', 'auto'],
                clip: ['rect(481.333251953125px 930.6669921875px 572px 32px)'],
                fill: ["rgba(0,0,0,0)",im+"opciones.png",'0px','0px']
            },
            {
                id: 'c',
                type: 'image',
                rect: ['47px', '102px','1304px','596px','auto', 'auto'],
                clip: ['rect(356px 933.3330078125px 447.999755859375px 32px)'],
                fill: ["rgba(0,0,0,0)",im+"opciones.png",'0px','0px']
            },
            {
                id: 'b',
                type: 'image',
                rect: ['47px', '132px','1304px','596px','auto', 'auto'],
                clip: ['rect(237.33349609375px 932px 322.666748046875px 33.33349609375px)'],
                fill: ["rgba(0,0,0,0)",im+"opciones.png",'0px','0px']
            },
            {
                id: 'a',
                type: 'image',
                rect: ['47px', '162px','1304px','596px','auto', 'auto'],
                clip: ['rect(110.66650390625px 936px 201.333251953125px 33.33349609375px)'],
                fill: ["rgba(0,0,0,0)",im+"opciones.png",'0px','0px']
            },
            {
                id: '_1',
                type: 'image',
                rect: ['65px', '175px','1304px','596px','auto', 'auto'],
                clip: ['rect(25.333251953125px 81.333984375px 74.666748046875px 34.6669921875px)'],
                fill: ["rgba(0,0,0,0)",im+"opciones.png",'0px','0px']
            },
            {
                id: 'per',
                type: 'rect',
                rect: ['831px', '-59px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 556px 817.1497192382813px 0px)'],
                transform: [[],[],[],['0.6719','0.6719']]
            },
            {
                id: 'checkbox_1',
                display: 'none',
                type: 'rect',
                rect: ['107px', '299px','35px','35px','auto', 'auto'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(255,255,255,0.00)","none"],
                userClass: "check-on"
            },
            {
                id: 'checkbox_2',
                display: 'none',
                type: 'rect',
                rect: ['107px', '393px','35px','35px','auto', 'auto'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(255,255,255,0.00)","none"],
                userClass: "check-on"
            },
            {
                id: 'checkbox_3',
                display: 'none',
                type: 'rect',
                rect: ['107px', '485px','35px','35px','auto', 'auto'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(255,255,255,0.00)","none"],
                userClass: "check-on"
            },
            {
                id: 'checkbox_4',
                display: 'none',
                type: 'rect',
                rect: ['107px', '578px','35px','35px','auto', 'auto'],
                borderRadius: ["5px 5px", "5px 5px", "5px 5px", "5px 5px"],
                fill: ["rgba(255,255,255,0.00)"],
                stroke: [0,"rgba(255,255,255,0.00)","none"],
                userClass: "check-on"
            },
            {
                id: 'instruccion',
                display: 'block',
                type: 'text',
                rect: ['148px', '205px','947px','52px','auto', 'auto'],
                text: "¿En cuál de las siguientes actividades puedes hacer mayor uso de la fluidez creativa?<br>",
                align: "left",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 21, "rgba(44,53,104,1.00)", "400", "none", "normal"]
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
                id: 'help_checkbox',
                display: 'none',
                type: 'image',
                rect: ['492px', '258px','816px','164px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"help_checkbox.png",'0px','0px']
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
                id: 'ok2',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad2',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok17',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok3',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok12',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad17',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok14',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok7',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad11',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad16',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bt_solucion',
                symbolName: 'bt_solucion',
                autoPlay: {

                }
            },
            {
                id: 'bad20',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad13',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok6',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad8',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bt_reiniciar',
                symbolName: 'bt_reiniciar',
                autoPlay: {

                }
            },
            {
                id: 'bad4',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok8',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad1',
                symbolName: 'bad',
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
                id: 'ok5',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad9',
                symbolName: 'bad',
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
                id: 'bad15',
                symbolName: 'bad',
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
                id: 'bad18',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad14',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok19',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok4',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok20',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad7',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad12',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok11',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad6',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad19',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok18',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok16',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok10',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad10',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad5',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok1',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok15',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad3',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok9',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok13',
                symbolName: 'ok',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_checkbox_4}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '177px'],
                ["style", "width", '35px'],
                ["style", "top", '578px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "display", 'none'],
                ["style", "height", '35px'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${_resp_correcta}": [
                ["style", "top", '169px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "left", '812px'],
                ["style", "width", '497px']
            ],
            "${_bad4}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok16}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok5}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok37}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad16}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad11}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_success}": [
                ["style", "left", '-6557px']
            ],
            "${_bt_validar}": [
                ["style", "top", '173px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bt_ayuda}": [
                ["style", "top", '335px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bad7}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_hotspot_validar}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '173px'],
                ["style", "height", '58px'],
                ["style", "left", '1309px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '54px']
            ],
            "${_instruccion}": [
                ["color", "color", 'rgba(44,53,104,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '148px'],
                ["style", "width", '947px'],
                ["style", "top", '285px'],
                ["style", "font-size", '21px'],
                ["style", "display", 'block'],
                ["style", "font-family", 'cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif'],
                ["style", "height", '52px'],
                ["style", "opacity", '0']
            ],
            "${_per}": [
                ["style", "top", '-59px'],
                ["transform", "scaleY", '0.6719'],
                ["transform", "scaleX", '0.6719'],
                ["style", "left", '831px'],
                ["style", "clip", [0,556,817.1497192382812,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_ok18}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad19}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_c}": [
                ["style", "top", '102px'],
                ["style", "opacity", '0'],
                ["style", "clip", [356,933.3330078125,447.999755859375,32], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '287px']
            ],
            "${_bt_solucion}": [
                ["style", "top", '230px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_help_checkbox}": [
                ["style", "top", '169px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "left", '812px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '497px']
            ],
            "${_bt_reiniciar}": [
                ["style", "top", '283px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_ok8}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok12}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok4}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok9}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${__1}": [
                ["style", "top", '175px'],
                ["transform", "rotateZ", '360deg'],
                ["style", "clip", [25.333251953125,81.333984375,74.666748046875,34.6669921875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '65px'],
                ["style", "-webkit-transform-origin", [4.47,8.56], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [4.47,8.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [4.47,8.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [4.47,8.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [4.47,8.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [4.47,8.56],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(211,227,195,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_ok_bad}": [
                ["style", "top", '0px'],
                ["style", "overflow", 'visible'],
                ["style", "height", '768px'],
                ["style", "left", '0px'],
                ["style", "width", '1366px']
            ],
            "${_resp_incorrecta}": [
                ["style", "top", '169px'],
                ["style", "height", '234px'],
                ["style", "display", 'none'],
                ["style", "left", '812px'],
                ["style", "width", '497px']
            ],
            "${_b}": [
                ["style", "top", '132px'],
                ["style", "opacity", '0'],
                ["style", "clip", [237.33349609375,932,322.666748046875,33.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '287px']
            ],
            "${_ok20}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok2}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad1}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok17}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_d}": [
                ["style", "opacity", '0'],
                ["style", "left", '287px'],
                ["style", "clip", [481.333251953125,930.6669921875,572,32], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_checkbox_3}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'auto'],
                ["style", "width", '35px'],
                ["style", "top", '485px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '35px'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '177px']
            ],
            "${_bad15}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad9}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok10}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok11}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok7}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_F1_D9}": [
                ["style", "left", '5px'],
                ["style", "top", '72px']
            ],
            "${_bad14}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_checkbox_1}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '0px'],
                ["style", "border-style", 'none'],
                ["style", "cursor", 'auto'],
                ["style", "width", '35px'],
                ["style", "top", '299px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '35px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '177px']
            ],
            "${_bad10}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok6}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_hotspot_ayuda}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '335px'],
                ["style", "height", '54px'],
                ["style", "left", '1310px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '54px']
            ],
            "${_bad18}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok1}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok14}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_flecha_c}": [
                ["style", "top", '112px'],
                ["style", "left", '116px']
            ],
            "${_checkbox_2}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '177px'],
                ["style", "width", '35px'],
                ["style", "top", '393px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '35px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-width", '0px'],
                ["style", "cursor", 'auto']
            ],
            "${_bad12}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok19}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok15}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_a}": [
                ["style", "top", '162px'],
                ["style", "opacity", '0'],
                ["style", "clip", [110.66650390625,936,201.333251953125,33.33349609375], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '287px']
            ],
            "${_bad6}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad3}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok3}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad13}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad20}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok13}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad17}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad8}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad2}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad5}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_hotspot_solucion}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '230px'],
                ["style", "height", '54px'],
                ["style", "left", '1310px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '54px']
            ],
            "${_hotspot_reiniciar}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '284px'],
                ["style", "height", '54px'],
                ["style", "left", '1310px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '54px']
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
                { id: "eid1295", tween: [ "style", "${_ok_bad}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1167", tween: [ "style", "${_bad7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1161", tween: [ "style", "${_bad4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1188", tween: [ "style", "${_ok13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1061", tween: [ "style", "${_ok1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1186", tween: [ "style", "${_ok14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1189", tween: [ "style", "${_bad13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1192", tween: [ "style", "${_ok11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1360", tween: [ "transform", "${__1}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 0, duration: 500 },
                { id: "eid1157", tween: [ "style", "${_bad2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1183", tween: [ "style", "${_bad16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1163", tween: [ "style", "${_bad5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1283", tween: [ "style", "${_resp_incorrecta}", "width", '497px', { fromValue: '497px'}], position: 0, duration: 0 },
                { id: "eid1164", tween: [ "style", "${_ok6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1178", tween: [ "style", "${_ok18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1184", tween: [ "style", "${_ok15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1338", tween: [ "style", "${_help_checkbox}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1364", tween: [ "style", "${_instruccion}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
                { id: "eid1158", tween: [ "style", "${_ok3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1160", tween: [ "style", "${_ok4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1187", tween: [ "style", "${_bad14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1346", tween: [ "style", "${_c}", "left", '47px', { fromValue: '287px'}], position: 500, duration: 500 },
                { id: "eid1365", tween: [ "style", "${_c}", "left", '117px', { fromValue: '47px'}], position: 1000, duration: 250 },
                { id: "eid1375", tween: [ "style", "${_checkbox_3}", "left", '177px', { fromValue: '177px'}], position: 1250, duration: 0 },
                { id: "eid1062", tween: [ "style", "${_bad1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1293", tween: [ "style", "${_ok_bad}", "height", '768px', { fromValue: '768px'}], position: 0, duration: 0 },
                { id: "eid1348", tween: [ "style", "${_a}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid1179", tween: [ "style", "${_bad18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1168", tween: [ "style", "${_ok8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1332", tween: [ "style", "${_instruccion}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1357", tween: [ "style", "${_checkbox_3}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid500", tween: [ "style", "${_resp_incorrecta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1162", tween: [ "style", "${_ok5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1171", tween: [ "style", "${_bad9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1175", tween: [ "style", "${_bad20}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1374", tween: [ "style", "${_checkbox_2}", "left", '177px', { fromValue: '177px'}], position: 1250, duration: 0 },
                { id: "eid1352", tween: [ "style", "${_b}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500 },
                { id: "eid1190", tween: [ "style", "${_ok12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1180", tween: [ "style", "${_ok17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1294", tween: [ "style", "${_ok_bad}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid1174", tween: [ "style", "${_ok20}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1358", tween: [ "style", "${_checkbox_4}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid1373", tween: [ "style", "${_checkbox_1}", "left", '177px', { fromValue: '177px'}], position: 1250, duration: 0 },
                { id: "eid1372", tween: [ "style", "${_checkbox_4}", "left", '177px', { fromValue: '177px'}], position: 1250, duration: 0 },
                { id: "eid1289", tween: [ "style", "${_resp_incorrecta}", "top", '169px', { fromValue: '169px'}], position: 0, duration: 0 },
                { id: "eid1337", tween: [ "style", "${_resp_correcta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1165", tween: [ "style", "${_bad6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1185", tween: [ "style", "${_bad15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1177", tween: [ "style", "${_bad19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1181", tween: [ "style", "${_bad17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1350", tween: [ "style", "${_d}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500 },
                { id: "eid1285", tween: [ "style", "${_resp_incorrecta}", "height", '234px', { fromValue: '234px'}], position: 0, duration: 0 },
                { id: "eid1127", tween: [ "style", "${_ok37}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1156", tween: [ "style", "${_ok2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1182", tween: [ "style", "${_ok16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1172", tween: [ "style", "${_ok10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1193", tween: [ "style", "${_bad11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1169", tween: [ "style", "${_bad8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1288", tween: [ "style", "${_resp_incorrecta}", "left", '812px', { fromValue: '812px'}], position: 0, duration: 0 },
                { id: "eid1191", tween: [ "style", "${_bad12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1292", tween: [ "style", "${_ok_bad}", "width", '1366px', { fromValue: '1366px'}], position: 0, duration: 0 },
                { id: "eid1173", tween: [ "style", "${_bad10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1159", tween: [ "style", "${_bad3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1356", tween: [ "style", "${_checkbox_2}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid1342", tween: [ "style", "${_d}", "left", '117px', { fromValue: '287px'}], position: 750, duration: 500 },
                { id: "eid1344", tween: [ "style", "${_b}", "left", '47px', { fromValue: '287px'}], position: 250, duration: 500 },
                { id: "eid1370", tween: [ "style", "${_b}", "left", '117px', { fromValue: '47px'}], position: 750, duration: 500 },
                { id: "eid1176", tween: [ "style", "${_ok19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1354", tween: [ "style", "${_c}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
                { id: "eid1170", tween: [ "style", "${_ok9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1166", tween: [ "style", "${_ok7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1340", tween: [ "style", "${_a}", "left", '47px', { fromValue: '287px'}], position: 0, duration: 500 },
                { id: "eid1366", tween: [ "style", "${_a}", "left", '117px', { fromValue: '47px'}], position: 500, duration: 750 },
                { id: "eid1355", tween: [ "style", "${_checkbox_1}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid1362", tween: [ "style", "${_instruccion}", "top", '205px', { fromValue: '285px'}], position: 250, duration: 250 }            ]
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
                ["style", "left", '-143px'],
                ["style", "clip", [0,213.05126953125,63.43017578125,143.0166015625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_botones}": [
                ["style", "top", '-4px'],
                ["style", "background-position", [0,-0.55859375000045], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-219px'],
                ["style", "clip", [0,284.00048828125,63.9892578125,213.966796875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                ["style", "clip", [0,213.05126953125,63.43017578125,143.0166015625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-147px']
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
                { id: "eid1309", tween: [ "style", "${_botones}", "left", '-147px', { fromValue: '-147px'}], position: 0, duration: 0 },
                { id: "eid1310", tween: [ "style", "${_botones}", "left", '-146px', { fromValue: '-147px'}], position: 250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_botones}", "background-position", [0,-0.55859374999943], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_botones}", "background-position", [0,-65.921875499999], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 250, duration: 0 },
                { id: "eid1308", tween: [ "style", "${_botones}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1311", tween: [ "style", "${_botones}", "top", '-5px', { fromValue: '-4px'}], position: 250, duration: 0 },
                { id: "eid49", tween: [ "style", "${_botones2}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones2}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 }            ]
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
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '-75px'],
                ["style", "clip", [0,140.42529296875,63.43017578125,70.39111328125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                { id: "eid1314", tween: [ "style", "${_botones}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1315", tween: [ "style", "${_botones}", "top", '-5px', { fromValue: '-4px'}], position: 250, duration: 0 },
                { id: "eid49", tween: [ "style", "${_botones2}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones2}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 },
                { id: "eid1313", tween: [ "style", "${_botones}", "left", '-75px', { fromValue: '-75px'}], position: 0, duration: 0 },
                { id: "eid1312", tween: [ "style", "${_botones}", "left", '-74px', { fromValue: '-75px'}], position: 250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_botones}", "background-position", [0,-0.55859374999943], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_botones}", "background-position", [0,-65.921875499999], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 250, duration: 0 }            ]
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
                ["style", "left", '-4px'],
                ["style", "clip", [0,69.47509765625,63.43017578125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "background-position", [0,-0.55859374999943], {valueTemplate:'@@0@@px @@1@@px'} ]
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
                { id: "eid1326", tween: [ "style", "${_botones}", "top", '-2px', { fromValue: '-2px'}], position: 0, duration: 0 },
                { id: "eid1323", tween: [ "style", "${_botones}", "top", '-3px', { fromValue: '-2px'}], position: 250, duration: 0 },
                { id: "eid51", tween: [ "style", "${_botones}", "background-position", [0,-0.55859374999943], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_botones}", "background-position", [0,-65.921875499999], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859374999943]}], position: 250, duration: 0 },
                { id: "eid1320", tween: [ "style", "${_botones}", "left", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid1321", tween: [ "style", "${_botones}", "left", '-3px', { fromValue: '-4px'}], position: 250, duration: 0 },
                { id: "eid49", tween: [ "style", "${_botones2}", "background-position", [0,-0.55859375000045], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_botones2}", "background-position", [0,-65.921875250001], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-0.55859375000045]}], position: 250, duration: 0 }            ]
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
                    type: 'rect',
                    id: 'Rectangle8',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '556px', '1091px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    id: 'piernas',
                    type: 'image',
                    rect: ['162', '161px', '1117px', '1000px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'IZQ',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['105px', '358px', '279px', '348px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        type: 'rect',
                        id: 'MANO2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['-3px', '124px', '246px', '224px', 'auto', 'auto'],
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
                    rect: ['162', '221px', '1117px', '1000px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/euler.png', '0px', '0px']
                },
                {
                    type: 'rect',
                    id: 'DER',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['399px', '348px', '106px', '438px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)'],
                    c: [
                    {
                        type: 'rect',
                        id: 'MANO',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        rect: ['1px', '134px', '96px', '302px', 'auto', 'auto'],
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
                    type: 'rect',
                    id: 'CABEZA',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['254px', '61px', '260px', '287px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)'],
                    c: [
                    {
                        type: 'image',
                        id: 'cabeza',
                        opacity: 1,
                        rect: ['-393px', '-680px', '1117px', '1000px', 'auto', 'auto'],
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
                ["style", "top", '358px'],
                ["transform", "rotateZ", '28deg']
            ],
            "${_mano_1}": [
                ["style", "top", '-421px'],
                ["style", "clip", [594,909,726,822], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-822px'],
                ["style", "-webkit-transform-origin", [78.07,61.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_cabeza}": [
                ["style", "top", '-680px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "clip", [684,657,972,396], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "opacity", '1'],
                ["style", "left", '-393px'],
                ["style", "-webkit-transform-origin", [48.16,93.9], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_bra_1}": [
                ["style", "-webkit-transform-origin", [77.17,22.3], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-817px'],
                ["style", "clip", [186,913,370,820], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '-187px']
            ],
            "${_piernas}": [
                ["style", "-webkit-transform-origin", [16.29,46.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.29,46.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [414,341,1000,34], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '161px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1091px'],
                ["style", "width", '556px']
            ],
            "${_DER}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "-webkit-transform-origin", [42.45,8.22], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '348px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Rectangle8}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '1091px']
            ],
            "${_antbra_1}": [
                ["style", "top", '-376px'],
                ["style", "clip", [374,913,586,842], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-821px'],
                ["style", "-webkit-transform-origin", [78.51,42], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}]
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
            "${_tronco}": [
                ["style", "top", '221px'],
                ["style", "clip", [28,305,412,112], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [16.65,37.5], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [16.65,37.5],{valueTemplate:'@@0@@% @@1@@%'}]
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
            "${_antbra_2}": [
                ["style", "top", '-380px'],
                ["style", "clip", [380,621,538,460], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-381px'],
                ["style", "-webkit-transform-origin", [52.55,40.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_mano_2}": [
                ["style", "-webkit-transform-origin", [40.29,57.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '-352px'],
                ["style", "clip", [550,477,668,348], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '-438px']
            ],
            "${_bra_2}": [
                ["style", "top", '-197px'],
                ["style", "left", '-384px'],
                ["style", "clip", [194,661,372,564], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "-webkit-transform-origin", [55.6,21.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [55.6,21.7],{valueTemplate:'@@0@@% @@1@@%'}]
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
                { id: "eid2370", tween: [ "transform", "${_boca}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2371", tween: [ "transform", "${_boca}", "rotateZ", '-3deg', { fromValue: '2deg'}], position: 4215, duration: 5571 },
                { id: "eid2372", tween: [ "transform", "${_boca}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 9786, duration: 3714 },
                { id: "eid2387", tween: [ "transform", "${_mano_2}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 5886, duration: 750 },
                { id: "eid2388", tween: [ "transform", "${_mano_2}", "rotateZ", '0deg', { fromValue: '-10deg'}], position: 6636, duration: 750 },
                { id: "eid2376", tween: [ "transform", "${_cabeza}", "rotateZ", '2deg', { fromValue: '0deg'}], position: 500, duration: 3714 },
                { id: "eid2377", tween: [ "transform", "${_cabeza}", "rotateZ", '-3deg', { fromValue: '2deg'}], position: 4215, duration: 5571 },
                { id: "eid2378", tween: [ "transform", "${_cabeza}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 9786, duration: 3714 },
                { id: "eid2383", tween: [ "transform", "${_IZQ}", "rotateZ", '20deg', { fromValue: '28deg'}], position: 2386, duration: 2750 },
                { id: "eid2384", tween: [ "transform", "${_IZQ}", "rotateZ", '28deg', { fromValue: '20deg'}], position: 8136, duration: 2750 },
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
})(jQuery, AdobeEdge, "EDGE-7842101");
