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
                id: '_52_vision',
                type: 'image',
                rect: ['-98px', '0px','1269px','1178px','auto', 'auto'],
                clip: ['rect(0px 1123px 1178px 100px)'],
                fill: ["rgba(0,0,0,0)",im+"5.3.%20Lineas.png",'0px','0px']
            },
            {
                id: 'servicios',
                type: 'rect',
                rect: ['83', '110','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'serviciosCopy',
                type: 'rect',
                rect: ['83', '110','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'vinculacion',
                type: 'rect',
                rect: ['309', '110','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'vinculacionCopy',
                type: 'rect',
                rect: ['309', '110','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'Ideas',
                type: 'rect',
                rect: ['159', '110','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'menu2Copy2',
                type: 'rect',
                rect: ['314', '0','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'menu2Copy2',
                symbolName: 'menu_3'
            },
            {
                id: 'serviciosCopy',
                symbolName: 'servicios'
            },
            {
                id: 'vinculacion',
                symbolName: 'vinculacion'
            },
            {
                id: 'vinculacionCopy',
                symbolName: 'vinculacion'
            },
            {
                id: 'Ideas',
                symbolName: 'Ideas'
            },
            {
                id: 'servicios',
                symbolName: 'servicios'
            }
            ]
        },
    states: {
        "Base State": {
            "${_vinculacion}": [
                ["style", "cursor", 'pointer'],
                ["style", "top", '106px']
            ],
            "${__52_vision}": [
                ["style", "top", '0px'],
                ["style", "left", '-98px'],
                ["style", "clip", [0,1123,1178,100], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_servicios}": [
                ["style", "cursor", 'pointer'],
                ["style", "top", '106px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1181px'],
                ["style", "width", '1024px']
            ],
            "${_Ideas}": [
                ["style", "cursor", 'pointer'],
                ["style", "top", '106px']
            ],
            "${_vinculacionCopy}": [
                ["transform", "scaleX", '0.8427'],
                ["style", "top", '106px'],
                ["style", "left", '473px'],
                ["style", "cursor", 'pointer']
            ],
            "${_serviciosCopy}": [
                ["transform", "scaleX", '0.86842'],
                ["style", "top", '106px'],
                ["style", "left", '12px'],
                ["style", "cursor", 'pointer']
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
                    rect: ['0px', '0px', '136px', '36px', 'auto', 'auto'],
                    type: 'rect',
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
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '136px']
            ],
            "${_RectangleCopy4}": [
                ["color", "background-color", 'rgba(0,135,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
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
                    rect: ['0px', '0px', '91px', '36px', 'auto', 'auto'],
                    type: 'rect',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    id: 'RectangleCopy2',
                    opacity: 0.15,
                    cursor: ['pointer'],
                    fill: ['rgba(0,135,255,1.00)']
                },
                {
                    rect: ['-1308px', '30px', '1542px', '1992px', 'auto', 'auto'],
                    id: '_2Inicio5',
                    type: 'image',
                    clip: ['rect(6px 1542px 239px 1309px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2.Inicio.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__2Inicio5}": [
                ["style", "-webkit-transform-origin", [84.95,0.35], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "top", '-8px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-1310px'],
                ["style", "clip", [6,1542,239,1309], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '91px']
            ],
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(0,135,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '91px']
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
                { id: "eid8", tween: [ "style", "${__2Inicio5}", "top", '24px', { fromValue: '-8px'}], position: 0, duration: 125 },
                { id: "eid4", tween: [ "style", "${__2Inicio5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
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
                    rect: ['0px', '0px', '157px', '36px', 'auto', 'auto'],
                    type: 'rect',
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
                ["style", "left", '0px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
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
                    rect: ['0px', '0px', '169px', '36px', 'auto', 'auto'],
                    type: 'rect',
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
            "${_RectangleCopy3}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(0,135,255,1.00)'],
                ["style", "left", '0px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '169px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
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
                    rect: ['0px', '0px', '157px', '36px', 'auto', 'auto'],
                    type: 'rect',
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
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(0,135,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
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
                { id: "eid1", tween: [ "style", "${_Rectangle}", "opacity", '0.15', { fromValue: '0'}], position: 0, duration: 250 }            ]
        }
    }
},
"Ideas": {
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
                    rect: ['0px', '0px', '150px', '36px', 'auto', 'auto'],
                    opacity: 0.2,
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,143,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(0,143,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '150px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '150px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 130,
            autoPlay: false,
            timeline: [
                { id: "eid20", tween: [ "style", "${_RectangleCopy2}", "opacity", '0.20000000298023224', { fromValue: '0'}], position: 0, duration: 130 }            ]
        }
    }
},
"vinculacion": {
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
                    rect: ['0px', '0px', '178px', '36px', 'auto', 'auto'],
                    opacity: 0.2,
                    id: 'RectangleCopy3',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(0,143,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '178px']
            ],
            "${_RectangleCopy3}": [
                ["color", "background-color", 'rgba(0,143,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '178px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 135,
            autoPlay: false,
            timeline: [
                { id: "eid22", tween: [ "style", "${_RectangleCopy3}", "opacity", '0.20000000298023224', { fromValue: '0'}], position: 0, duration: 135 }            ]
        }
    }
},
"servicios": {
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
                    rect: ['0px', '0px', '76px', '36px', 'auto', 'auto'],
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    id: 'RectangleCopy',
                    opacity: 0.2,
                    type: 'rect',
                    fill: ['rgba(0,143,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(0,143,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '76px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '76px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 140,
            autoPlay: false,
            timeline: [
                { id: "eid18", tween: [ "style", "${_RectangleCopy}", "opacity", '0.20000000298023224', { fromValue: '0'}], position: 0, duration: 140 }            ]
        }
    }
},
"historia": {
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
                    rect: ['0px', '0px', '230px', '23px', 'auto', 'auto'],
                    opacity: 0.1,
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,135,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '230px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
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
                { id: "eid33", tween: [ "style", "${_Rectangle2}", "opacity", '0.10000000149011612', { fromValue: '0'}], position: 0, duration: 125 }            ]
        }
    }
},
"conozcanos_1": {
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
                    id: '_2Inicio5',
                    rect: ['-1308px', '30px', '1542px', '1992px', 'auto', 'auto'],
                    clip: ['rect(6px 1542px 239px 1309px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2.Inicio.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'mision',
                    rect: ['0', '59', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'lineas',
                    rect: ['0px', '135px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Actividades',
                    rect: ['1px', '158px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Vision',
                    rect: ['1px', '84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'historia',
                    rect: ['1', '209px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'equipo',
                    rect: ['0', '233px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '91px', '36px', 'auto', 'auto'],
                    opacity: 0.15,
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,135,255,1.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'historia',
                symbolName: 'historia',
                autoPlay: {

               }
            },
            {
                id: 'Vision',
                symbolName: 'Vision',
                autoPlay: {

               }
            },
            {
                id: 'mision',
                symbolName: 'mision',
                autoPlay: {

               }
            },
            {
                id: 'equipo',
                symbolName: 'equipo',
                autoPlay: {

               }
            },
            {
                id: 'lineas',
                symbolName: 'lineas',
                autoPlay: {

               }
            },
            {
                id: 'Actividades',
                symbolName: 'Actividades',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Vision}": [
                ["style", "top", '84px'],
                ["style", "left", '1px'],
                ["style", "display", 'none']
            ],
            "${_Actividades}": [
                ["style", "top", '158px'],
                ["style", "left", '1px'],
                ["style", "display", 'none']
            ],
            "${_mision}": [
                ["style", "display", 'none']
            ],
            "${_historia}": [
                ["style", "top", '209px'],
                ["style", "display", 'none']
            ],
            "${__2Inicio5}": [
                ["style", "-webkit-transform-origin", [84.95,0.35], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "top", '-8px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-1310px'],
                ["style", "clip", [6,1542,239,1309], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_lineas}": [
                ["style", "top", '135px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(0,135,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '91px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '91px']
            ],
            "${_equipo}": [
                ["style", "top", '233px'],
                ["style", "display", 'none']
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
                { id: "eid37", tween: [ "style", "${_Actividades}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid36", tween: [ "style", "${_lineas}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid8", tween: [ "style", "${__2Inicio5}", "top", '24px', { fromValue: '-8px'}], position: 0, duration: 125 },
                { id: "eid34", tween: [ "style", "${_mision}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid12", tween: [ "transform", "${__2Inicio5}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 125 },
                { id: "eid39", tween: [ "style", "${_historia}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid38", tween: [ "style", "${_equipo}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid6", tween: [ "style", "${__2Inicio5}", "left", '-1309px', { fromValue: '-1310px'}], position: 0, duration: 125 },
                { id: "eid35", tween: [ "style", "${_Vision}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid4", tween: [ "style", "${__2Inicio5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
                { id: "eid14", tween: [ "transform", "${__2Inicio5}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 125 },
                { id: "eid10", tween: [ "style", "${_RectangleCopy2}", "opacity", '0.15000000596046448', { fromValue: '0'}], position: 0, duration: 125 }            ]
        }
    }
},
"lineas": {
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
                    rect: ['0px', '0px', '230px', '23px', 'auto', 'auto'],
                    opacity: 0.1,
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,135,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '230px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
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
                { id: "eid33", tween: [ "style", "${_Rectangle2}", "opacity", '0.10000000149011612', { fromValue: '0'}], position: 0, duration: 125 }            ]
        }
    }
},
"Vision": {
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
                    rect: ['0px', '0px', '230px', '23px', 'auto', 'auto'],
                    opacity: 0.1,
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,135,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '230px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
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
                { id: "eid33", tween: [ "style", "${_Rectangle2}", "opacity", '0.10000000149011612', { fromValue: '0'}], position: 0, duration: 125 }            ]
        }
    }
},
"mision": {
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
                    rect: ['0px', '0px', '230px', '23px', 'auto', 'auto'],
                    opacity: 0.1,
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,135,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '230px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
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
                { id: "eid33", tween: [ "style", "${_Rectangle2}", "opacity", '0.10000000149011612', { fromValue: '0'}], position: 0, duration: 125 }            ]
        }
    }
},
"Actividades": {
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
                    rect: ['0px', '0px', '230px', '23px', 'auto', 'auto'],
                    opacity: 0.1,
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,135,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '230px']
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
                { id: "eid33", tween: [ "style", "${_Rectangle2}", "opacity", '0.10000000149011612', { fromValue: '0'}], position: 0, duration: 125 }            ]
        }
    }
},
"equipo": {
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
                    rect: ['0px', '0px', '230px', '23px', 'auto', 'auto'],
                    opacity: 0.1,
                    id: 'Rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,135,255,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '230px']
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
                { id: "eid33", tween: [ "style", "${_Rectangle2}", "opacity", '0.10000000149011612', { fromValue: '0'}], position: 0, duration: 125 }            ]
        }
    }
},
"menu_1": {
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
                symbolName: 'conozcanos_1',
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
"conozcanos_2": {
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
                    id: '_2Inicio5',
                    rect: ['-1308px', '30px', '1542px', '1992px', 'auto', 'auto'],
                    clip: ['rect(6px 1542px 239px 1309px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2.Inicio.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'mision',
                    rect: ['0', '59', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'lineas',
                    rect: ['0px', '135px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Actividades',
                    rect: ['1px', '158px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Vision',
                    rect: ['1px', '84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'historia',
                    rect: ['1', '209px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'equipo',
                    rect: ['0', '233px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '91px', '36px', 'auto', 'auto'],
                    opacity: 0.15,
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,135,255,1.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'historia',
                symbolName: 'historia',
                autoPlay: {

               }
            },
            {
                id: 'Vision',
                symbolName: 'Vision',
                autoPlay: {

               }
            },
            {
                id: 'mision',
                symbolName: 'mision',
                autoPlay: {

               }
            },
            {
                id: 'equipo',
                symbolName: 'equipo',
                autoPlay: {

               }
            },
            {
                id: 'lineas',
                symbolName: 'lineas',
                autoPlay: {

               }
            },
            {
                id: 'Actividades',
                symbolName: 'Actividades',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Vision}": [
                ["style", "top", '84px'],
                ["style", "left", '1px'],
                ["style", "display", 'none']
            ],
            "${_Actividades}": [
                ["style", "top", '158px'],
                ["style", "left", '1px'],
                ["style", "display", 'none']
            ],
            "${_mision}": [
                ["style", "display", 'none']
            ],
            "${_historia}": [
                ["style", "top", '209px'],
                ["style", "display", 'none']
            ],
            "${__2Inicio5}": [
                ["style", "-webkit-transform-origin", [84.95,0.35], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "top", '-8px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-1310px'],
                ["style", "clip", [6,1542,239,1309], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_lineas}": [
                ["style", "top", '135px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(0,135,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '91px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '91px']
            ],
            "${_equipo}": [
                ["style", "top", '233px'],
                ["style", "display", 'none']
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
                { id: "eid37", tween: [ "style", "${_Actividades}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid36", tween: [ "style", "${_lineas}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid8", tween: [ "style", "${__2Inicio5}", "top", '24px', { fromValue: '-8px'}], position: 0, duration: 125 },
                { id: "eid34", tween: [ "style", "${_mision}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid12", tween: [ "transform", "${__2Inicio5}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 125 },
                { id: "eid39", tween: [ "style", "${_historia}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid38", tween: [ "style", "${_equipo}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid6", tween: [ "style", "${__2Inicio5}", "left", '-1309px', { fromValue: '-1310px'}], position: 0, duration: 125 },
                { id: "eid35", tween: [ "style", "${_Vision}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid4", tween: [ "style", "${__2Inicio5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
                { id: "eid14", tween: [ "transform", "${__2Inicio5}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 125 },
                { id: "eid10", tween: [ "style", "${_RectangleCopy2}", "opacity", '0.15000000596046448', { fromValue: '0'}], position: 0, duration: 125 }            ]
        }
    }
},
"menu_2": {
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
                symbolName: 'conozcanos_2',
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
"conozcanos_3": {
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
                    id: '_2Inicio5',
                    rect: ['-1308px', '30px', '1542px', '1992px', 'auto', 'auto'],
                    clip: ['rect(6px 1542px 239px 1309px)'],
                    fill: ['rgba(0,0,0,0)', 'images/2.Inicio.png', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'mision',
                    rect: ['0', '59', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'lineas',
                    rect: ['0px', '135px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Actividades',
                    rect: ['1px', '158px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'Vision',
                    rect: ['1px', '84px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'historia',
                    rect: ['1', '209px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    display: 'none',
                    type: 'rect',
                    id: 'equipo',
                    rect: ['0', '233px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    rect: ['0px', '0px', '91px', '36px', 'auto', 'auto'],
                    opacity: 0.15,
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,135,255,1.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'historia',
                symbolName: 'historia',
                autoPlay: {

               }
            },
            {
                id: 'Vision',
                symbolName: 'Vision',
                autoPlay: {

               }
            },
            {
                id: 'mision',
                symbolName: 'mision',
                autoPlay: {

               }
            },
            {
                id: 'equipo',
                symbolName: 'equipo',
                autoPlay: {

               }
            },
            {
                id: 'lineas',
                symbolName: 'lineas',
                autoPlay: {

               }
            },
            {
                id: 'Actividades',
                symbolName: 'Actividades',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Vision}": [
                ["style", "top", '84px'],
                ["style", "left", '1px'],
                ["style", "display", 'none']
            ],
            "${_Actividades}": [
                ["style", "top", '158px'],
                ["style", "left", '1px'],
                ["style", "display", 'none']
            ],
            "${_mision}": [
                ["style", "display", 'none']
            ],
            "${_historia}": [
                ["style", "top", '209px'],
                ["style", "display", 'none']
            ],
            "${__2Inicio5}": [
                ["style", "-webkit-transform-origin", [84.95,0.35], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [84.95,0.35],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0'],
                ["style", "top", '-8px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-1310px'],
                ["style", "clip", [6,1542,239,1309], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_lineas}": [
                ["style", "top", '135px'],
                ["style", "left", '0px'],
                ["style", "display", 'none']
            ],
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(0,135,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '91px']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '91px']
            ],
            "${_equipo}": [
                ["style", "top", '233px'],
                ["style", "display", 'none']
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
                { id: "eid37", tween: [ "style", "${_Actividades}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid36", tween: [ "style", "${_lineas}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid8", tween: [ "style", "${__2Inicio5}", "top", '24px', { fromValue: '-8px'}], position: 0, duration: 125 },
                { id: "eid34", tween: [ "style", "${_mision}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid12", tween: [ "transform", "${__2Inicio5}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 125 },
                { id: "eid39", tween: [ "style", "${_historia}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid38", tween: [ "style", "${_equipo}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid6", tween: [ "style", "${__2Inicio5}", "left", '-1309px', { fromValue: '-1310px'}], position: 0, duration: 125 },
                { id: "eid35", tween: [ "style", "${_Vision}", "display", 'block', { fromValue: 'none'}], position: 125, duration: 0 },
                { id: "eid4", tween: [ "style", "${__2Inicio5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 125 },
                { id: "eid14", tween: [ "transform", "${__2Inicio5}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 125 },
                { id: "eid10", tween: [ "style", "${_RectangleCopy2}", "opacity", '0.15000000596046448', { fromValue: '0'}], position: 0, duration: 125 }            ]
        }
    }
},
"menu_3": {
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
                symbolName: 'conozcanos_3',
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-25450965");
