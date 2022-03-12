// const http = require('http');
// const fs = require("fs");
// const path = require('path');
const prompt = require("prompt-sync")();
let data=[
    String.raw`
    Direct numerical
control (DNC) is
defined as a
system that
integrates
multiple machines
by direct
connection
through a central
computer. The
central computer
is designed to
provide
instructions on
demand to each
machine
tools.Two types of
DNC System are
used: 1. Behind
the Tape Reader
(BTR) System, 2.
Special Machine
Control Unit
(SMCU).
    `,
    String.raw`
    The Inventory
    requirement is
    less because of
    fewer set ups and
    shorter lead time.
    The
    manufacturing
    lead time is also
    less because of
    quick and less set
    up time. Tools can
    be utilised at
    optimum feeds
    and speeds that
    can be
    programmed.
    Inspection time is
    reduced.
    `,
    String.raw`
    It requires special
    training of the
    personnel
    working on NC
    machines. The
    automatic
    operation of NC
    machines implies
    relatively higher
    running costs. The
    requirements of
    conditioned 
    environment for
    operating NC
    technology adds
    further to tha
    running costs.
    `,
    String.raw`
    In today's CNC
    technology, the
    machine control
    unit (MCU)
    consists of some
    kinds of
    computers with
    related control
    hardware that
    store and
    sequentially
    execute the
    program of
    instructions by
    converting each
    command into
    mechanical
    actions of the
    processing
    equipment.Three
    types  Housed
    Swing Stand Alone
    MCU
    `,
    String.raw`
    The third part of
    the numerical
    control system is
    the machine tool
    itself. It is the
    principal
    manufacturing
    arm of the NC
    system. It receives
    the raw material
    and perform
    different
    machining
    operations over it
    in accordance
    with the
    instructions
    conveyed by the
    machine control
    unit to shape the
    latter into the
    desired shape and
    size of finished
    article NC drilling
    machine NC
    milling machine
    NC lathes etc.
    `,
    String.raw`
    Numerical control
    is a method
    employed for
    controlling the
    motions of a
    machine tool slide
    and its auxiliary
    functions with an
    input in the form
    of numerical data.
    A computer
    numerical control
    is a
    microprocessor
    based system to
    store and process
    the data for the
    control of slide
    motions and
    auxiliary
    functions of the
    machine tools.
    `,
    String.raw`
     CNC machines are
    more expensive
    than manually
    operated
    machines,
    although costs are
    slowly coming
    down.The CNC
    machine operator
    only needs basic
    training and
    skills, enough to
    supervise several
    machines.Fewer
    workers are
    required to
    operate CNC
    machines
    compared to
    manually
    operated
    machines.
    `,
    String.raw`
    CNC Machining
    Produces Little to
    No Waste.Zero
    Defects and
    Greater
    Accuracy.Faster
    and Efficient
    Production.Quick-
    er
    Assembly.Enhanc-
    ed Personnel
    Safety.Reduction
    in Energy
    Consumption.
    .
    `,
    String.raw`
    CNC drilling
    machine cnc lathe
    or turning centre
    cnc punch press
    cnc electric
    discharge
    machine cnc
    grinding machine
    cnc universal
    milling
    `
    ,
    String.raw`
     CNC is used for
    high quantities
    and is not as cost-
    effective for
    smaller projects. A
    CNC machine uses
    three tools to cut
    parts, while
    conventional
    machines require
    five tools and
    more time to get
    the job done.
    Conventional and
    CNC technologies
    are available for
    most machining
    jobs.
    `,
    String.raw`
    Direct numerical
    control (DNC) is
    defined [3][EC96741B167E4E5EAE1D46286BB22A21][0]`,
    String.raw`
     Adaptive control
    is the continuous
    monitoring of
    cutting load and
    automatic
    adjustment of
    cutting feed rate
    based on the load.
    During
    machining, the
    cutting load may
    suddenly increase
    because of local
    hard spots in
    castings or
    variation in the
    height of raw
    material. The load
    also increases as
    the tool wears
    out.
    `,
    String.raw`
     Optimises cycle
    time.Enables
    unattended
    machining.Increa-
    ses machine and
    tool life.No
    learning process is
    required.Reduces
    the total energy
    consumption.Lea-
    rning process is
    not required.
    `,
    String.raw`
     PLC is short for
    programmable
    logic controller,
    which combines
    computer
    technology,
    automatic control
    technology and
    communication
    techniques, is
    made especially
    for industrial
    control computer
    system.
    `,
    String.raw`
    Programmable
    Logic Controllers
    have three
    components.
    These three PLC
    components are:
    processor, power
    supply, and an
    input/output (I/O)
    section. The
    processor, or the
    brain of the PLC
    system, is a solid-
    state device
    designed to
    perform a wide
    variety of
    production,
    machine tool, and
    process-control
    functions.
    `,
    String.raw`
     A slideway is used
    to control the
    direction or line of
    action of the
    translational
    movement of the
    table or carriage
    on which the tools
    or work are held.
    Although VEE type
    has certain
    advantages, it is
    the FLAT &
    DOVETAIL
    slideway forms
    which have
    commonly been
    used on CNC
    machine tools.
    `,
    String.raw`
    CNC stands for
    computer
    numerical control
    machine. It
    consists of a
    motorized tooling
    device and a
    motorized
    platform which
    are both
    controlled by a
    computer. CNC
    machines are
    programmed with
    specific
    instructions
    through G-code
    and M-code, which
    is usually
    generated by CAD
    or CAM software
    `,
    String.raw`
    In CNC
    applications, a
    transducer
    measures physical
    motion, then
    converts that
    measurement to
    an electrical
    input/output.
    There are different
    applications of
    this technology,
    but the prevalent
    one is using the
    transducer in a
    closed loop
    environment
    `,
    String.raw`
    A routine or
    subroutine, also
    referred to as a
    function,
    procedure,
    method, and
    subprogram, is
    code called and
    executed
    anywhere in a
    program. For
    example, a
    routine may be
    used to save a file
    or display the
    time.Functions
    are similar to
    subroutines,
    except that they
    return a value. A
    function
    commonly carries
    out some
    calculations and
    reports the result
    to the caller.
    Subroutines
    perform a task but
    do not report
    anything to the
    calling program.
    `,
    String.raw`
     An LVDT (linear
    variable
    differential
    transformer=is an
    electromechanical
    sensor used to
    convert
    mechanical
    motion or
    vibrations,
    specifically
    rectilinear
    motion, into a
    variable electrical
    current, voltage or
    electric signals,
    and the reverse.
    LVDT Sensor
    devices are
    sensitive to
    electromagnetic
    interference.Defe-
    nse Satellites and
    Launch Systems.
    Some of the most
    common uses for
    LVDTs in space are
    defense satellites
    and launch
    systems.It has low
    power
    consumption
    which is less than
    about 1 WattIt is
    frictionless
    deviceIt offers
    high resolution
    which is greater
    than 10 mm.
    `,
    String.raw`
    A canned cycle is a
    way of
    conveniently
    performing
    repetitive CNC
    machine
    operations.
    Canned cycles
    automate certain
    machining
    functions such as
    drilling, boring,
    threading,
    pocketing, etc...
    Canned cycles are
    so called because
    they allow a
    concise way to
    program a
    machine to
    produce a feature
    of a part.
    `,
    String.raw`
    Encoder circuit
    basically converts
    the applied
    information
    signal into a
    coded digital bit
    stream. Decoder
    performs reverse
    operation and
    recovers the
    original
    information
    signal from the
    coded bits. In case
    of encoder, the
    applied signal is
    the active signal
    input. Decoder
    accepts coded
    binary data as its
    input.
    `,
    String.raw`
     G-code is the
    most widely used
    computer
    numerical control
    programming
    language. It is
    used mainly in
    computer-aided
    manufacturing to
    control
    automated
    machine tools,
    and has many
    variants.G00 is
    used for rapid,
    non-cutting
    movements.G01 is
    used for linear
    movements at a
    programmed feed
    speed, usually
    used to cut
    material.G02 is
    used for circular
    movements at a
    feed speed.
    `,
    String.raw`
    Full automation
    requires CNC
    machines to
    perform not just
    one lengthy
    operation, but an
    entire series of
    operations on one
    or more parts.
    Machine shops
    seeking to attain
    that level of
    automation
    require control of
    both the
    production
    process and the
    environment.
    That means
    controlling
    thermal buildup.
    `,
    String.raw`
    A tachometer is a
    sensor device used
    to measure the
    rotation speed of
    an object such as
    the engine shaft
    in a car, and is
    usually restricted
    to mechanical or
    electrical
    instruments. This
    device indicates
    the revolutions
    per minute (RPM)
    performed by the
    object.A
    tachometer is an
    instrument that
    measures the
    working speed of
    an engine,
    typically in
    revolutions per
    minute (RPM). It is
    commonly used in
    cars, boats,
    planes, and other
    vehicles.
    `,
    String.raw`
Light sensor is a
transducer used
for detecting light
and creates a
voltage difference
equivalent to the
light intensity fall
on a light
sensor.Proximity
sensor can detect
the presence of
nearby object
without any
physical contact.
The working of a
proximity sensor
is simple. In
proximity sensor
transmitter
transmits an
electromagnetic
radiation and
receiver receives
and analyzes the
return signal for
interruptions.Sou-
nd sensors are
generally a
microphone used
to detect sound
and return a
voltage equivalent
to the sound level.
Using sound
sensor a simple
robot can be
designed to
navigate based on
the sound
receives.Tempera-
ture sensors are
used for sensing
the change in
temperature of
the surrounding.
It is based on the
principle of
change in voltage
`
    ];
let heading = [
    "Part Programming",
    "NC advantage",
    "NC disadvantage",
    "MCU",
    "Machine Tool",
    "Concept of CNC",
    "Disadvantage cnc",
    "advantage cnc",
    "Applications of cnc",
    "Different between CNC & Conventional",
    "DNC",
    "Adaptive control",
    "Adaptive advantage",
    "PLC",
    "plc components",
    "Slideways",
    "Robot CNC",
    "Transducers",
    "Subroutines",
    "LVDT",
    "Canned cycle",
    "Encoder and Decoder",
    "G Code",
    "Automation",
    "Tachometer",
    "Robotic Sensors"
 ];
function convertInLine(data){
    let dataArr = data.split('\n');
    let result = '';
    dataArr.forEach((line)=>{
        result += line + ' '; 
    });
    console.log(`"${result}"`)
}

function createPage(data,number){
    dataArr = data.replace(/[:]/g," ").split('\n');
    linenum = 0;
    l = '';
    console.log(`:p${number+1}=>[`);
    dataArr.forEach(line => {
        if(linenum==6){
            console.log(`"${l.trim()} ${line.trim()}",`.replace(/\s+/g," "));
            linenum = 0;
            l = '';
        }else{
            l += line+' '; 
            linenum++;
        }
    });
    if(l.trim()!=''){
        console.log(`"${l}"`+'\n\t],');
    }else{
        console.log("],");
    }
}

function varname(v){
	return Object.keys({v})[0]
}

let num = 0;
console.log(heading.length,data.length);
for(let i in heading){
    // console.log(`menu.addItem("${heading[i]}", :p${parseInt(i)+1});`);
	createPage(data[i],parseInt(i));
}

let aa = 



function displayArray(arr,name){
	console.log(`var ${name} = [`);
	for(let i in arr){
		console.log(`"${arr[i]}",`);
	}
	console.log(']');
}
