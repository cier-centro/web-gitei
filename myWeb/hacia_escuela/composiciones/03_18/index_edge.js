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
                rect: ['530', '363','320px','45px','auto', 'auto'],
                source: ['media/error.mp3','media/error.ogg'],
                preload: 'false'
            },
            {
                id: 'success',
                type: 'audio',
                tag: 'audio',
                rect: ['530', '363','320px','45px','auto', 'auto'],
                source: ['media/success.mp3','media/success.ogg'],
                preload: 'false'
            },
            {
                id: 'ok-bad',
                display: 'block',
                type: 'rect',
                rect: ['24px', '41px','429px','250px','auto', 'auto'],
                borderRadius: ["10px", "10px", "0px 0px", "0px 0px"],
                fill: ["rgba(253,249,222,1.00)"],
                stroke: [0,"rgb(83, 30, 30)","none"],
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
                },
                {
                    id: 'bad21',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok21',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad22',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok22',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad23',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok23',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok24',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad24',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok25',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad25',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok26',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad26',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad27',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok27',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad28',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok28',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad29',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok29',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad30',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok30',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad31',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok31',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad32',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok32',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad33',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok33',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad34',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok34',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad35',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok35',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad36',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok36',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad37',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok137',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad38',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok38',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad39',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok39',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad40',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok40',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad41',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok41',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '397','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad42',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok42',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad43',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok43',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad44',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok44',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad45',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok45',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad46',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok46',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad47',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok47',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad48',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok48',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad49',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok49',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'bad50',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                },
                {
                    id: 'ok50',
                    display: 'none',
                    type: 'rect',
                    rect: ['23', '177px','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'F1_D9',
                type: 'image',
                rect: ['5px', '72px','1304px','596px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"F1_D93.png",'0px','0px']
            },
            {
                id: '_1',
                type: 'image',
                rect: ['106px', '206px','40px','41px','auto', 'auto'],
                borderRadius: ["0px 0px", "0px 0px", "0px 0px", "0px 0px"],
                fill: ["rgba(0,0,0,0)",im+"2.png",'0px','0px'],
                transform: [[],['-180']]
            },
            {
                id: 'opcion_d',
                type: 'image',
                rect: ['955px', '259px','651px','395px','auto', 'auto'],
                clip: ['rect(293.150634765625px 651px 395px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"opciones.png",'0px','0px']
            },
            {
                id: 'opcion_c',
                type: 'image',
                rect: ['955px', '259px','651px','395px','auto', 'auto'],
                clip: ['rect(197.26025390625px 651px 289.5205078125px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"opciones.png",'0px','0px']
            },
            {
                id: 'opcion_b',
                type: 'image',
                rect: ['955px', '259px','651px','395px','auto', 'auto'],
                clip: ['rect(104.109619140625px 651px 193.630126953125px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"opciones.png",'0px','0px']
            },
            {
                id: 'opcion_a',
                type: 'image',
                rect: ['954px', '259px','651px','395px','auto', 'auto'],
                clip: ['rect(0px 651px 100.4794921875px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"opciones.png",'0px','0px']
            },
            {
                id: 'letra_d',
                type: 'image',
                rect: ['296px', '226px','54px','395px','auto', 'auto'],
                clip: ['rect(301.1904296875px 54px 370px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"letras.png",'0px','0px']
            },
            {
                id: 'letra_c',
                type: 'image',
                rect: ['auto', 'auto','54px','395px','1016px', '146px'],
                clip: ['rect(208.33349609375px 54px 277.142822265625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"letras.png",'0px','0px']
            },
            {
                id: 'letra_b',
                type: 'image',
                rect: ['auto', 'auto','54px','395px','1016px', '182px'],
                clip: ['rect(115.476318359375px 54px 184.28564453125px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"letras.png",'0px','0px']
            },
            {
                id: 'letra_a',
                type: 'image',
                rect: ['auto', 'auto','54px','395px','1016px', '182px'],
                clip: ['rect(22.618896484375px 54px 92.618896484375px 0px)'],
                borderRadius: ["0px 208.33325195313px", "0px 208.33325195313px", "0px 208.33325195313px", "0px 208.33325195313px"],
                fill: ["rgba(0,0,0,0)",im+"letras.png",'0px','0px'],
                transform: [[],[],[],[],['47.0021%','14.8764%']]
            },
            {
                id: 'instruccion',
                display: 'block',
                type: 'text',
                rect: ['160px', '351px','833px','52px','auto', 'auto'],
                text: "Al frente de cada una de las siguientes situaciones marca si la fluidez creativa pueda ayudarte mucho o poco:",
                align: "left",
                font: ['cabin, Trebuchet MS, Myriad Pro, Gill Sans MT, Helvetica, sans-serif', 21, "rgba(44,53,104,1.00)", "400", "none", "normal"]
            },
            {
                id: 'per',
                type: 'rect',
                rect: ['831px', '-59px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 556px 817.1497192382813px 0px)'],
                transform: [[],[],[],['0.6719','0.6719']]
            },
            {
                id: 'combobox_4',
                display: 'block',
                type: 'rect',
                rect: ['766px', '578px','124px','35px','auto', 'auto'],
                fill: ["rgba(229,229,229,1.00)"],
                stroke: [0,"rgb(83, 30, 30)","none"],
                transform: [[],[],[],['0.90909']]
            },
            {
                id: 'combobox_3',
                display: 'block',
                type: 'rect',
                rect: ['766px', '485px','124px','35px','auto', 'auto'],
                fill: ["rgba(229,229,229,1.00)"],
                stroke: [0,"rgb(83, 30, 30)","none"],
                transform: [[],[],[],['0.90909']]
            },
            {
                id: 'combobox_2',
                display: 'block',
                type: 'rect',
                rect: ['766px', '392px','124px','35px','auto', 'auto'],
                fill: ["rgba(229,229,229,1.00)"],
                stroke: [0,"rgb(83, 30, 30)","none"],
                transform: [[],[],[],['0.90909']]
            },
            {
                id: 'combobox_1',
                display: 'block',
                type: 'rect',
                rect: ['766px', '300px','124px','35px','auto', 'auto'],
                fill: ["rgba(229,229,229,1.00)"],
                stroke: [0,"rgb(83, 30, 30)","none"],
                transform: [[],[],[],['0.90909']]
            },
            {
                id: 'resp_correcta',
                display: 'none',
                type: 'image',
                rect: ['812px', '169px','497px','234px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"msg_correcto.png",'0px','0px']
            },
            {
                id: 'resp_incorrecta',
                display: 'none',
                type: 'image',
                rect: ['812px', '169px','497px','234px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"msg_incorrecto.png",'0px','0px']
            },
            {
                id: 'help_combobox',
                display: 'none',
                type: 'image',
                rect: ['812px', '169px','497px','234px','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"help_combobox.png",'0px','0px']
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
                id: 'bad39',
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
                id: 'ok22',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok35',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad26',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad22',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad30',
                symbolName: 'bad',
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
                id: 'bad37',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad27',
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
                id: 'bad41',
                symbolName: 'bad',
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
                id: 'ok33',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok34',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad33',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok40',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok29',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad31',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok26',
                symbolName: 'ok',
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
                id: 'ok4',
                symbolName: 'ok',
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
                id: 'per',
                symbolName: 'per',
                autoPlay: {

                }
            },
            {
                id: 'ok42',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok23',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad21',
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
                id: 'ok47',
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
                id: 'bad38',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad28',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad49',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok32',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok48',
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
                id: 'bad48',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad50',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad47',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok46',
                symbolName: 'ok',
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
                id: 'bad46',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok45',
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
                id: 'ok43',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad23',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok41',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok44',
                symbolName: 'ok',
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
                id: 'bad44',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad43',
                symbolName: 'bad',
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
                id: 'ok49',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok31',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad45',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok24',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok39',
                symbolName: 'ok',
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
                id: 'ok20',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad24',
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
                id: 'ok38',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok25',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad36',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'bad42',
                symbolName: 'bad',
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
                id: 'ok36',
                symbolName: 'ok',
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
                id: 'ok137',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad35',
                symbolName: 'bad',
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
                id: 'bad34',
                symbolName: 'bad',
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
                id: 'ok27',
                symbolName: 'ok',
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
                id: 'bad32',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok30',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok13',
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
                id: 'bad29',
                symbolName: 'bad',
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
                id: 'ok9',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'bad25',
                symbolName: 'bad',
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
                id: 'bad40',
                symbolName: 'bad',
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
                id: 'ok21',
                symbolName: 'ok',
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
                id: 'bad4',
                symbolName: 'bad',
                autoPlay: {

                }
            },
            {
                id: 'ok50',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok28',
                symbolName: 'ok',
                autoPlay: {

                }
            },
            {
                id: 'ok18',
                symbolName: 'ok',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_bad40}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad22}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_resp_correcta}": [
                ["style", "top", '169px'],
                ["style", "height", '234px'],
                ["style", "display", 'none'],
                ["style", "left", '812px'],
                ["style", "width", '497px']
            ],
            "${_bad36}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad49}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad34}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok5}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok45}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok37}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok31}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad21}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_letra_b}": [
                ["style", "top", 'auto'],
                ["style", "clip", [115.476318359375,54,184.28564453125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "opacity", '0'],
                ["style", "bottom", '147px'],
                ["style", "height", '395px'],
                ["style", "right", '1016px'],
                ["style", "left", 'auto'],
                ["style", "width", '54px']
            ],
            "${_bad39}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok42}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok36}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad30}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_opcion_d}": [
                ["style", "top", '259px'],
                ["style", "opacity", '0'],
                ["style", "left", '955px'],
                ["style", "clip", [293.150634765625,651,395,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bt_validar}": [
                ["style", "top", '173px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_ok39}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_hotspot_reiniciar}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '284px'],
                ["style", "height", '54px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '1310px'],
                ["style", "width", '54px']
            ],
            "${_ok137}": [
                ["style", "top", '177px'],
                ["style", "height", '20px'],
                ["style", "display", 'none'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_per}": [
                ["style", "top", '-59px'],
                ["transform", "scaleY", '0.6719'],
                ["transform", "scaleX", '0.6719'],
                ["style", "left", '831px'],
                ["style", "clip", [0,556,817.14971923828,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bad19}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bt_solucion}": [
                ["style", "top", '230px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bad45}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok34}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok23}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok6}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_combobox_1}": [
                ["color", "background-color", 'rgba(229,229,229,1)'],
                ["transform", "scaleX", '0.90909'],
                ["style", "opacity", '1'],
                ["style", "left", '766px'],
                ["style", "width", '124px'],
                ["style", "top", '300px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'block'],
                ["style", "height", '35px']
            ],
            "${_ok49}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
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
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad42}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok9}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad38}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${__1}": [
                ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "rotateZ", '-180deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '106px'],
                ["style", "width", '40px'],
                ["style", "top", '206px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["style", "height", '41px'],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_ok50}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "min-width", '320px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '768px'],
                ["style", "max-width", '1366px'],
                ["style", "width", '1366px']
            ],
            "${_ok21}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad43}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad28}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok2}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad31}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_opcion_a}": [
                ["style", "top", '259px'],
                ["style", "opacity", '0'],
                ["style", "left", '954px'],
                ["style", "clip", [0,651,100.4794921875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_ok46}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad15}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok48}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad33}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok32}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_combobox_3}": [
                ["color", "background-color", 'rgba(229,229,229,1)'],
                ["transform", "scaleX", '0.90909'],
                ["style", "opacity", '1'],
                ["style", "left", '766px'],
                ["style", "width", '124px'],
                ["style", "top", '485px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'block'],
                ["style", "height", '35px']
            ],
            "${_bad10}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad25}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok14}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok28}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok19}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_hotspot_solucion}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '230px'],
                ["style", "height", '54px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '1310px'],
                ["style", "width", '54px']
            ],
            "${_ok3}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
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
            "${_bad5}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad4}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok33}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad50}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok41}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad2}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok40}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_combobox_4}": [
                ["color", "background-color", 'rgba(229,229,229,1)'],
                ["transform", "scaleX", '0.90909'],
                ["style", "opacity", '1'],
                ["style", "left", '766px'],
                ["style", "width", '124px'],
                ["style", "top", '578px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'block'],
                ["style", "height", '35px']
            ],
            "${_ok47}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bt_ayuda}": [
                ["style", "top", '335px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bad7}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_instruccion}": [
                ["color", "color", 'rgba(44,53,104,1)'],
                ["style", "font-weight", '400'],
                ["style", "left", '160px'],
                ["style", "width", '833px'],
                ["style", "top", '351px'],
                ["style", "opacity", '0'],
                ["style", "display", 'block'],
                ["style", "font-family", 'cabin, \'Trebuchet MS\', \'Myriad Pro\', \'Gill Sans MT\', Helvetica, sans-serif'],
                ["style", "height", '52px'],
                ["style", "font-size", '21px']
            ],
            "${_bad32}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok18}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad27}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad41}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bt_reiniciar}": [
                ["style", "top", '283px'],
                ["style", "left", '1309px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bad37}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad47}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok-bad}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "width", '1366px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "overflow", 'auto'],
                ["style", "height", '768px'],
                ["style", "display", 'block']
            ],
            "${_resp_incorrecta}": [
                ["style", "top", '169px'],
                ["style", "left", '812px'],
                ["style", "display", 'none']
            ],
            "${_bad24}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad1}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
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
            "${_combobox_2}": [
                ["color", "background-color", 'rgba(229,229,229,1)'],
                ["transform", "scaleX", '0.90909'],
                ["style", "opacity", '1'],
                ["style", "left", '766px'],
                ["style", "width", '124px'],
                ["style", "top", '392px'],
                ["transform", "scaleY", '1'],
                ["style", "display", 'block'],
                ["style", "height", '35px']
            ],
            "${_ok22}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_letra_d}": [
                ["style", "top", '226px'],
                ["style", "opacity", '0'],
                ["style", "left", '296px'],
                ["style", "clip", [301.1904296875,54,370,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_letra_c}": [
                ["style", "top", 'auto'],
                ["style", "clip", [208.33349609375,54,277.142822265625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "opacity", '0'],
                ["style", "bottom", '146px'],
                ["style", "height", '395px'],
                ["style", "right", '1016px'],
                ["style", "left", 'auto'],
                ["style", "width", '54px']
            ],
            "${_letra_a}": [
                ["style", "-webkit-transform-origin", [47,14.88], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [47,14.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [47,14.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [47,14.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [47,14.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [47,14.88],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "border-top-left-radius", [0,208.33325195313], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "bottom", '182px'],
                ["style", "opacity", '0'],
                ["style", "left", 'auto'],
                ["style", "width", '54px'],
                ["style", "top", 'auto'],
                ["style", "border-bottom-left-radius", [0,208.33325195313], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [0,208.33325195313], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '395px'],
                ["style", "border-top-right-radius", [0,208.33325195313], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [22.618896484375,54,92.618896484375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "right", '1016px']
            ],
            "${_ok10}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_opcion_b}": [
                ["style", "top", '259px'],
                ["style", "opacity", '0'],
                ["style", "left", '955px'],
                ["style", "clip", [104.109619140625,651,193.630126953125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_opcion_c}": [
                ["style", "top", '259px'],
                ["style", "opacity", '0'],
                ["style", "left", '955px'],
                ["style", "clip", [197.26025390625,651,289.5205078125,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_ok35}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad9}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad29}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok16}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok44}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok25}": [
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
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad23}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad16}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_F1_D9}": [
                ["style", "left", '5px'],
                ["style", "top", '72px']
            ],
            "${_bad44}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_help_combobox}": [
                ["style", "top", '169px'],
                ["style", "display", 'none'],
                ["style", "height", '234px'],
                ["style", "left", '812px'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '497px']
            ],
            "${_bad14}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok30}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad11}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad46}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad20}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok27}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad8}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad18}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok43}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad12}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad48}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok38}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok29}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad6}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok15}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_hotspot_ayuda}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '335px'],
                ["style", "height", '54px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '1310px'],
                ["style", "width", '54px']
            ],
            "${_bad35}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_hotspot_validar}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "top", '173px'],
                ["style", "height", '58px'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '1309px'],
                ["style", "width", '54px']
            ],
            "${_ok4}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_bad26}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_bad3}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_EnunciadoCopy}": [
                ["style", "top", '34px'],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '29px'],
                ["style", "font-size", '14px']
            ],
            "${_bad17}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '49px'],
                ["style", "width", '20px']
            ],
            "${_ok20}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok1}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok26}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok13}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
            ],
            "${_ok24}": [
                ["style", "top", '177px'],
                ["style", "display", 'none'],
                ["style", "height", '20px'],
                ["style", "left", '79px'],
                ["style", "width", '20px']
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
                { id: "eid1222", tween: [ "style", "${_letra_c}", "bottom", '113px', { fromValue: '146px'}], position: 3500, duration: 500, easing: "easeOutBack" },
                { id: "eid899", tween: [ "style", "${_ok30}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid784", tween: [ "style", "${_ok43}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid769", tween: [ "style", "${_bad50}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid844", tween: [ "style", "${_ok13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid842", tween: [ "style", "${_ok14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid843", tween: [ "style", "${_bad13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid919", tween: [ "style", "${_ok40}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid782", tween: [ "style", "${_ok44}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid859", tween: [ "style", "${_bad5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid909", tween: [ "style", "${_ok35}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid901", tween: [ "style", "${_ok31}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid922", tween: [ "style", "${_ok-bad}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid902", tween: [ "style", "${_bad31}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid858", tween: [ "style", "${_ok6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid828", tween: [ "style", "${_ok21}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid834", tween: [ "style", "${_ok18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid814", tween: [ "style", "${_ok28}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1101", tween: [ "style", "${_instruccion}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid1186", tween: [ "style", "${_opcion_c}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 750, easing: "easeOutBack" },
                { id: "eid906", tween: [ "style", "${_bad33}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid862", tween: [ "style", "${_ok4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid923", tween: [ "style", "${_ok-bad}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid816", tween: [ "style", "${_ok27}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid916", tween: [ "style", "${_bad38}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid832", tween: [ "style", "${_ok19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid787", tween: [ "style", "${_bad41}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1213", tween: [ "style", "${_letra_a}", "bottom", '113px', { fromValue: '182px'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid827", tween: [ "style", "${_bad21}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid780", tween: [ "style", "${_ok45}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1169", tween: [ "transform", "${__1}", "scaleX", '1.33', { fromValue: '1'}], position: 250, duration: 375, easing: "easeOutBack" },
                { id: "eid1171", tween: [ "transform", "${__1}", "scaleX", '1', { fromValue: '1.33'}], position: 625, duration: 375, easing: "easeOutBack" },
                { id: "eid851", tween: [ "style", "${_bad9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid777", tween: [ "style", "${_bad46}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid776", tween: [ "style", "${_ok47}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid914", tween: [ "style", "${_bad37}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid900", tween: [ "style", "${_bad30}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid821", tween: [ "style", "${_bad24}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid911", tween: [ "style", "${_ok36}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid839", tween: [ "style", "${_bad15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid831", tween: [ "style", "${_bad19}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid927", tween: [ "style", "${_ok137}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid838", tween: [ "style", "${_ok16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid866", tween: [ "style", "${_ok2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid926", tween: [ "style", "${_ok-bad}", "width", '1366px', { fromValue: '1366px'}], position: 0, duration: 0 },
                { id: "eid903", tween: [ "style", "${_ok32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid818", tween: [ "style", "${_ok26}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid825", tween: [ "style", "${_bad22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid778", tween: [ "style", "${_ok46}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid852", tween: [ "style", "${_ok9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid856", tween: [ "style", "${_ok7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid904", tween: [ "style", "${_bad32}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid947", tween: [ "style", "${_help_combobox}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid907", tween: [ "style", "${_ok34}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid773", tween: [ "style", "${_bad48}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid861", tween: [ "style", "${_bad4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid824", tween: [ "style", "${_ok23}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid868", tween: [ "style", "${_ok1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1175", tween: [ "style", "${_opcion_a}", "left", '264px', { fromValue: '954px'}], position: 1250, duration: 750, easing: "easeOutBack" },
                { id: "eid848", tween: [ "style", "${_ok11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1167", tween: [ "transform", "${__1}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 250, duration: 750, easing: "easeOutBack" },
                { id: "eid1170", tween: [ "transform", "${__1}", "scaleY", '1.33', { fromValue: '1'}], position: 250, duration: 375, easing: "easeOutBack" },
                { id: "eid1172", tween: [ "transform", "${__1}", "scaleY", '1', { fromValue: '1.33'}], position: 625, duration: 375, easing: "easeOutBack" },
                { id: "eid819", tween: [ "style", "${_bad25}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid865", tween: [ "style", "${_bad2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid837", tween: [ "style", "${_bad16}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid917", tween: [ "style", "${_ok39}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1181", tween: [ "style", "${_opcion_b}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid921", tween: [ "color", "${_ok-bad}", "background-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 0, duration: 0 },
                { id: "eid857", tween: [ "style", "${_bad6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1248", tween: [ "style", "${_combobox_2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1252", tween: [ "style", "${_combobox_2}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid1247", tween: [ "style", "${_combobox_3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1251", tween: [ "style", "${_combobox_3}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid774", tween: [ "style", "${_ok48}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1214", tween: [ "style", "${_letra_a}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeOutBack" },
                { id: "eid855", tween: [ "style", "${_bad7}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1249", tween: [ "style", "${_combobox_1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1253", tween: [ "style", "${_combobox_1}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid1229", tween: [ "style", "${_letra_d}", "top", '261px', { fromValue: '226px'}], position: 4250, duration: 500, easing: "easeOutBack" },
                { id: "eid783", tween: [ "style", "${_bad43}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid813", tween: [ "style", "${_bad28}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid867", tween: [ "style", "${_bad1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1099", tween: [ "style", "${_instruccion}", "top", '205px', { fromValue: '351px'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid1231", tween: [ "style", "${_letra_d}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 500, easing: "easeOutBack" },
                { id: "eid915", tween: [ "style", "${_ok38}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid905", tween: [ "style", "${_ok33}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid912", tween: [ "style", "${_bad36}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid854", tween: [ "style", "${_ok8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid775", tween: [ "style", "${_bad47}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1176", tween: [ "style", "${_opcion_a}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 750, easing: "easeOutBack" },
                { id: "eid1217", tween: [ "style", "${_letra_b}", "bottom", '113px', { fromValue: '147px'}], position: 2750, duration: 500, easing: "easeOutBack" },
                { id: "eid1219", tween: [ "style", "${_letra_b}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 500, easing: "easeOutBack" },
                { id: "eid950", tween: [ "style", "${_resp_incorrecta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid860", tween: [ "style", "${_ok5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1191", tween: [ "style", "${_opcion_d}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 750, easing: "easeOutBack" },
                { id: "eid822", tween: [ "style", "${_ok24}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1179", tween: [ "style", "${_opcion_b}", "left", '265px', { fromValue: '955px'}], position: 2000, duration: 750, easing: "easeOutBack" },
                { id: "eid811", tween: [ "style", "${_bad29}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid812", tween: [ "style", "${_ok29}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid823", tween: [ "style", "${_bad23}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid863", tween: [ "style", "${_bad3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid829", tween: [ "style", "${_bad20}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid918", tween: [ "style", "${_bad39}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid826", tween: [ "style", "${_ok22}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid846", tween: [ "style", "${_ok12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid925", tween: [ "style", "${_ok-bad}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid864", tween: [ "style", "${_ok3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid836", tween: [ "style", "${_ok17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid781", tween: [ "style", "${_bad44}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid830", tween: [ "style", "${_ok20}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1246", tween: [ "style", "${_combobox_4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid1250", tween: [ "style", "${_combobox_4}", "display", 'block', { fromValue: 'none'}], position: 4500, duration: 0 },
                { id: "eid815", tween: [ "style", "${_bad27}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid841", tween: [ "style", "${_bad14}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1184", tween: [ "style", "${_opcion_c}", "left", '264px', { fromValue: '955px'}], position: 2750, duration: 750, easing: "easeOutBack" },
                { id: "eid849", tween: [ "style", "${_bad10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid948", tween: [ "style", "${_resp_correcta}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid779", tween: [ "style", "${_bad45}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid817", tween: [ "style", "${_bad26}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid847", tween: [ "style", "${_bad11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid833", tween: [ "style", "${_bad18}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1224", tween: [ "style", "${_letra_c}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 500, easing: "easeOutBack" },
                { id: "eid920", tween: [ "style", "${_bad40}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid853", tween: [ "style", "${_bad8}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid850", tween: [ "style", "${_ok10}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid771", tween: [ "style", "${_bad49}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid835", tween: [ "style", "${_bad17}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid840", tween: [ "style", "${_ok15}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid845", tween: [ "style", "${_bad12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid910", tween: [ "style", "${_bad35}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid770", tween: [ "style", "${_ok50}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid820", tween: [ "style", "${_ok25}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid913", tween: [ "style", "${_ok37}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid786", tween: [ "style", "${_ok42}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid908", tween: [ "style", "${_bad34}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid785", tween: [ "style", "${_bad42}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid924", tween: [ "style", "${_ok-bad}", "height", '768px', { fromValue: '768px'}], position: 0, duration: 0 },
                { id: "eid1166", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0.000000'}], position: 250, duration: 750, easing: "easeOutBack" },
                { id: "eid772", tween: [ "style", "${_ok49}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid788", tween: [ "style", "${_ok41}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1189", tween: [ "style", "${_opcion_d}", "left", '265px', { fromValue: '955px'}], position: 3500, duration: 750, easing: "easeOutBack" }            ]
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
                ["style", "top", '358px'],
                ["style", "-webkit-transform-origin", [84.95,5.75], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [84.95,5.75],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '28deg']
            ],
            "${_mano_1}": [
                ["style", "top", '-421px'],
                ["style", "-webkit-transform-origin", [78.07,61.7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [78.07,61.7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [594,909,726,822], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-822px']
            ],
            "${_cabeza}": [
                ["style", "top", '-680px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "-webkit-transform-origin", [48.16,93.9], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [48.16,93.9],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "opacity", '1'],
                ["style", "clip", [684,657,972,396], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-393px']
            ],
            "${_bra_1}": [
                ["style", "-webkit-transform-origin", [77.17,22.3], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [77.17,22.3],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '-187px'],
                ["style", "left", '-817px'],
                ["style", "clip", [186,913,370,820], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
                ["style", "-webkit-transform-origin", [42.45,8.22], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.45,8.22],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '348px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Rectangle8}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "height", '1091px']
            ],
            "${_mano_2}": [
                ["style", "-webkit-transform-origin", [40.29,57.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [40.29,57.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["style", "top", '-438px'],
                ["style", "left", '-352px'],
                ["style", "clip", [550,477,668,348], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
            "${_CABEZA}": [
                ["style", "-webkit-transform-origin", [55.77,90.24], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [55.77,90.24],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '61px']
            ],
            "${_antbra_2}": [
                ["style", "top", '-380px'],
                ["style", "-webkit-transform-origin", [52.55,40.4], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [52.55,40.4],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [380,621,538,460], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-381px']
            ],
            "${_antbra_1}": [
                ["style", "top", '-376px'],
                ["style", "-webkit-transform-origin", [78.51,42], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [78.51,42],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [374,913,586,842], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-821px']
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
            "${_MANO2}": [
                ["style", "-webkit-transform-origin", [83.73,10.71], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [83.73,10.71],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '77deg']
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
})(jQuery, AdobeEdge, "EDGE-3785112");
