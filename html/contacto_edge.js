/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
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
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_6Ingreso_a_clientes',
                type: 'image',
                rect: ['-97px', '0px','1271px','1063px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"6.Ingreso%20a%20clientes.png",'0px','0px']
            },
            {
                id: 'menu2',
                type: 'rect',
                rect: ['314', '0','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'menu2',
                symbolName: 'menu'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1024px'],
                ["style", "height", '1100px'],
                ["style", "overflow", 'hidden']
            ],
            "${__6Ingreso_a_clientes}": [
                ["style", "left", '-97px'],
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
"aulas": {
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
                    rect: ['0px', '0px', '136px', '36px', 'auto', 'auto'],
                    id: 'RectangleCopy4',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,135,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy4}": [
                ["color", "background-color", 'rgba(0,135,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '136px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '136px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid16", tween: [ "style", "${_RectangleCopy4}", "opacity", '0.15', { fromValue: '0'}], position: 0, duration: 250 }            ]
        }
    }
},
"menu": {
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
                    id: 'ingresoClientes',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'nuestrasp',
                    type: 'rect',
                    rect: ['157', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'conozcanos',
                    type: 'rect',
                    rect: ['314', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'contacto',
                    type: 'rect',
                    rect: ['405', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'aulas',
                    type: 'rect',
                    rect: ['574', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'aulas',
                symbolName: 'aulas',
                autoPlay: {

               }
            },
            {
                id: 'nuestrasp',
                symbolName: 'nuestrasp',
                autoPlay: {

               }
            },
            {
                id: 'conozcanos',
                symbolName: 'conozcanos',
                autoPlay: {

               }
            },
            {
                id: 'contacto',
                symbolName: 'contacto',
                autoPlay: {

               }
            },
            {
                id: 'ingresoClientes',
                symbolName: 'ingresoClientes',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '710px']
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
"conozcanos": {
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
                    rect: ['0px', '0px', '91px', '36px', 'auto', 'auto'],
                    opacity: 0.15,
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,135,255,1.00)']
                },
                {
                    type: 'image',
                    id: '_2Inicio5',
                    rect: ['-1308px', '30px', '1542px', '1992px', 'auto', 'auto'],
                    clip: ['rect(6px 1542px 239px 1309px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2.Inicio.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(0,135,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '91px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '91px']
            ],
            "${__2Inicio5}": [
                ["style", "-webkit-transform-origin", [84.95,0.35], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "left", '-1310px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "clip", [6,1542,239,1309], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "top", '-8px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 125,
            autoPlay: false,
            timeline: [
                { id: "eid4", tween: [ "style", "${__2Inicio5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
                { id: "eid8", tween: [ "style", "${__2Inicio5}", "top", '24px', { fromValue: '-8px'}], position: 0, duration: 125 },
                { id: "eid6", tween: [ "style", "${__2Inicio5}", "left", '-1309px', { fromValue: '-1310px'}], position: 0, duration: 125 },
                { id: "eid12", tween: [ "transform", "${__2Inicio5}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 125 },
                { id: "eid14", tween: [ "transform", "${__2Inicio5}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 125 },
                { id: "eid10", tween: [ "style", "${_RectangleCopy2}", "opacity", '0.15000000596046448', { fromValue: '0'}], position: 0, duration: 125 }            ]
        }
    }
},
"nuestrasp": {
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
                    rect: ['0px', '0px', '157px', '36px', 'auto', 'auto'],
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,135,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,135,255,1.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '157px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '157px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid2", tween: [ "style", "${_RectangleCopy}", "opacity", '0.15', { fromValue: '0'}], position: 0, duration: 250 }            ]
        }
    }
},
"contacto": {
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
                    rect: ['0px', '0px', '169px', '36px', 'auto', 'auto'],
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,135,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '169px']
            ],
            "${_RectangleCopy3}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,135,255,1.00)'],
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '169px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid15", tween: [ "style", "${_RectangleCopy3}", "opacity", '0.15', { fromValue: '0'}], position: 0, duration: 250 }            ]
        }
    }
},
"ingresoClientes": {
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
                    rect: ['0px', '0px', '157px', '36px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,135,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '157px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,135,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "cursor", 'pointer'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '157px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid1", tween: [ "style", "${_Rectangle}", "opacity", '0.15', { fromValue: '0'}], position: 0, duration: 250 }            ]
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
})(jQuery, AdobeEdge, "EDGE-25918742");
