// Preliminary Biology diagram labelling
// Each diagram is an SVG drawn on a 640x400 canvas with the labels stripped out.
// `zones` are the empty boxes a student drops labels into (viewBox coordinates).
// px/py, where present, is the point on the artwork the label refers to — the game
// draws a leader line from the box to that point, so boxes can sit in clear margins.
// Artwork uses CSS variables so it themes with the rest of the app.
const DIAGRAMS = [

{id:"dg-plant-cell", title:"Plant cell structure",
 topic:"Cells as the Basis of Life", sub:"Cell Structure",
 note:"Plant cells have a rigid cell wall outside the membrane and a large central vacuole, both absent from animal cells, alongside chloroplasts for photosynthesis.",
 art:`
  <rect x="120" y="60" width="400" height="280" rx="18" fill="none" stroke="var(--line)" stroke-width="4"/>
  <rect x="132" y="72" width="376" height="256" rx="14" fill="rgba(129,199,132,.06)" stroke="var(--accent2)" stroke-width="2.5"/>
  <ellipse cx="230" cy="200" rx="80" ry="60" fill="rgba(108,92,231,.18)" stroke="var(--accent)" stroke-width="2.5"/>
  <ellipse cx="230" cy="200" rx="24" ry="18" fill="var(--accent)"/>
  <ellipse cx="400" cy="130" rx="46" ry="24" fill="rgba(129,199,132,.35)" stroke="var(--good)" stroke-width="2"/>
  <ellipse cx="400" cy="270" rx="46" ry="24" fill="rgba(129,199,132,.35)" stroke="var(--good)" stroke-width="2"/>
  <ellipse cx="330" cy="290" rx="40" ry="22" fill="rgba(255,206,84,.25)" stroke="var(--gold)" stroke-width="2"/>
  <path d="M370 200 Q 420 190 460 210" fill="none" stroke="var(--ink2)" stroke-width="2" stroke-dasharray="4 4"/>`,
 zones:[
   {label:"Cell wall",        x:6,   y:40,  w:110, h:32, px:120, py:200},
   {label:"Cell membrane",    x:6,   y:150, w:110, h:32, px:132, py:150},
   {label:"Nucleus",          x:6,   y:340, w:110, h:32, px:230, py:200},
   {label:"Cytoplasm",        x:524, y:40,  w:112, h:32, px:400, py:180},
   {label:"Chloroplast",      x:524, y:100, w:112, h:32, px:400, py:130},
   {label:"Mitochondrion",    x:524, y:220, w:112, h:32, px:400, py:270},
   {label:"Vacuole",          x:524, y:340, w:112, h:32, px:330, py:290}
 ]},

{id:"dg-animal-cell", title:"Animal cell structure",
 topic:"Cells as the Basis of Life", sub:"Cell Structure",
 note:"Animal cells have no cell wall or large central vacuole, but share a nucleus, mitochondria and a network of endoplasmic reticulum and Golgi apparatus with plant cells.",
 art:`
  <ellipse cx="320" cy="200" rx="220" ry="150" fill="rgba(162,155,254,.05)" stroke="var(--line)" stroke-width="3.5"/>
  <ellipse cx="260" cy="200" rx="70" ry="55" fill="rgba(108,92,231,.18)" stroke="var(--accent)" stroke-width="2.5"/>
  <ellipse cx="260" cy="200" rx="20" ry="16" fill="var(--accent)"/>
  <ellipse cx="410" cy="140" rx="38" ry="20" fill="rgba(255,94,122,.2)" stroke="var(--bad)" stroke-width="2"/>
  <ellipse cx="420" cy="260" rx="38" ry="20" fill="rgba(255,94,122,.2)" stroke="var(--bad)" stroke-width="2"/>
  <path d="M340 130 C 380 120, 400 150, 380 170 C 420 175, 430 200, 400 210" fill="none" stroke="var(--gold)" stroke-width="2.5"/>
  <path d="M300 290 C 340 300, 380 295, 410 305" fill="none" stroke="var(--ink2)" stroke-width="3"/>
  <circle cx="160" cy="150" r="3.5" fill="var(--good)"/>
  <circle cx="175" cy="270" r="3.5" fill="var(--good)"/>
  <circle cx="470" cy="180" r="3.5" fill="var(--good)"/>`,
 zones:[
   {label:"Cell membrane",         x:6,   y:40,  w:130, h:32, px:100, py:220},
   {label:"Nucleus",               x:6,   y:180, w:130, h:32, px:260, py:200},
   {label:"Mitochondrion",         x:6,   y:340, w:130, h:32, px:410, py:140},
   {label:"Endoplasmic reticulum", x:504, y:40,  w:132, h:32, px:380, py:170},
   {label:"Golgi apparatus",       x:504, y:200, w:132, h:32, px:360, py:298},
   {label:"Ribosome",              x:504, y:340, w:132, h:32, px:175, py:270}
 ]},

{id:"dg-enzyme-model", title:"Enzyme-substrate interaction",
 topic:"Cells as the Basis of Life", sub:"Cell Function",
 note:"The substrate binds to the enzyme's active site, forming an enzyme-substrate complex; the reaction proceeds and products are released, leaving the enzyme unchanged and free to react again.",
 art:`
  <path d="M120 260 C 160 180, 260 170, 300 240 C 320 275, 280 300, 240 300 C 180 300, 130 300, 120 260 Z" fill="rgba(108,92,231,.14)" stroke="var(--accent)" stroke-width="3"/>
  <path d="M195 210 Q 220 190 245 215 Q 255 235 230 245 Q 205 250 195 230 Z" fill="var(--card2)" stroke="var(--gold)" stroke-width="2.5"/>
  <ellipse cx="220" cy="120" rx="26" ry="20" fill="rgba(255,206,84,.3)" stroke="var(--gold)" stroke-width="2.5"/>
  <path d="M260 130 L 210 175" stroke="var(--ink2)" stroke-width="2" stroke-dasharray="3 3"/>
  <path d="M340 220 L 420 220" stroke="var(--ink2)" stroke-width="2.5"/>
  <path d="M410 214 L 424 220 L 410 226 Z" fill="var(--ink2)"/>
  <path d="M460 260 C 500 180, 600 170, 620 240 C 636 275, 600 300, 560 300 C 500 300, 470 300, 460 260 Z" fill="rgba(108,92,231,.14)" stroke="var(--accent)" stroke-width="3"/>
  <ellipse cx="500" cy="150" rx="18" ry="14" fill="rgba(0,214,143,.3)" stroke="var(--good)" stroke-width="2"/>
  <ellipse cx="545" cy="140" rx="16" ry="13" fill="rgba(0,214,143,.3)" stroke="var(--good)" stroke-width="2"/>`,
 zones:[
   {label:"Enzyme",                    x:6,   y:340, w:150, h:32, px:180, py:270},
   {label:"Substrate",                 x:170, y:6,   w:150, h:32, px:220, py:120},
   {label:"Active site",               x:330, y:6,   w:150, h:32, px:220, py:225},
   {label:"Enzyme-substrate complex",  x:6,   y:150, w:150, h:32, px:230, py:230},
   {label:"Products",                  x:484, y:340, w:150, h:32, px:520, py:145}
 ]},

{id:"dg-heart", title:"The mammalian heart and double circulation",
 topic:"Organisation of Living Things", sub:"Transport",
 note:"Deoxygenated blood enters the right side of the heart and is pumped to the lungs; oxygenated blood returns to the left side and is pumped, at higher pressure, to the rest of the body.",
 art:`
  <path d="M220 60 C 140 60, 90 130, 90 190 C 90 270, 220 340, 320 380 C 420 340, 550 270, 550 190 C 550 130, 500 60, 420 60 C 380 60, 340 90, 320 120 C 300 90, 260 60, 220 60 Z"
        fill="rgba(255,94,122,.08)" stroke="var(--line)" stroke-width="3.5"/>
  <line x1="320" y1="90" x2="320" y2="360" stroke="var(--line)" stroke-width="3"/>
  <path d="M150 130 L 220 130" stroke="var(--accent2)" stroke-width="6"/>
  <path d="M420 130 L 490 130" stroke="var(--bad)" stroke-width="6"/>
  <circle cx="220" cy="130" r="10" fill="var(--accent2)"/>
  <circle cx="420" cy="130" r="10" fill="var(--bad)"/>
  <circle cx="230" cy="280" r="26" fill="rgba(162,155,254,.25)" stroke="var(--accent2)" stroke-width="2.5"/>
  <circle cx="410" cy="280" r="26" fill="rgba(255,94,122,.25)" stroke="var(--bad)" stroke-width="2.5"/>`,
 zones:[
   {label:"Right atrium",                    x:6,   y:40,  w:150, h:32, px:220, py:130},
   {label:"Left atrium",                     x:484, y:40,  w:150, h:32, px:420, py:130},
   {label:"Right ventricle (to lungs)",      x:6,   y:340, w:170, h:32, px:230, py:280},
   {label:"Left ventricle (to body)",        x:464, y:340, w:170, h:32, px:410, py:280},
   {label:"Septum separating the two sides", x:230, y:6,   w:180, h:32, px:320, py:220}
 ]},

{id:"dg-xylem-phloem", title:"Xylem and phloem in a stem",
 topic:"Organisation of Living Things", sub:"Transport",
 note:"Xylem carries water and minerals upward from the roots in dead, hollow cells; phloem carries the sugars made in photosynthesis to and from all parts of the plant in living cells.",
 art:`
  <ellipse cx="320" cy="200" rx="230" ry="150" fill="rgba(129,199,132,.05)" stroke="var(--line)" stroke-width="3"/>
  <circle cx="320" cy="200" r="60" fill="rgba(79,195,247,.18)" stroke="var(--m1)" stroke-width="3"/>
  <circle cx="320" cy="200" r="30" fill="rgba(79,195,247,.35)" stroke="var(--m1)" stroke-width="2"/>
  <circle cx="240" cy="150" r="26" fill="rgba(129,199,132,.3)" stroke="var(--good)" stroke-width="2.5"/>
  <circle cx="400" cy="150" r="26" fill="rgba(129,199,132,.3)" stroke="var(--good)" stroke-width="2.5"/>
  <circle cx="240" cy="250" r="26" fill="rgba(129,199,132,.3)" stroke="var(--good)" stroke-width="2.5"/>
  <circle cx="400" cy="250" r="26" fill="rgba(129,199,132,.3)" stroke="var(--good)" stroke-width="2.5"/>
  <line x1="320" y1="80" x2="320" y2="20" stroke="var(--m1)" stroke-width="3"/>
  <line x1="240" y1="280" x2="240" y2="360" stroke="var(--good)" stroke-width="3" stroke-dasharray="4 3"/>`,
 zones:[
   {label:"Xylem (water and minerals up)",     x:6,   y:40,  w:170, h:36, px:320, py:200},
   {label:"Phloem (sugars around the plant)",  x:454, y:40,  w:180, h:36, px:400, py:150},
   {label:"Outer stem tissue",                 x:6,   y:330, w:170, h:36, px:120, py:200},
   {label:"Direction of water transport",      x:454, y:330, w:180, h:36, px:320, py:40}
 ]},

{id:"dg-alveolus", title:"Gas exchange at the alveolus",
 topic:"Organisation of Living Things", sub:"Nutrient and Gas Requirements",
 note:"The alveolus wall and the surrounding capillary wall are each one cell thick, giving oxygen and carbon dioxide the shortest possible diffusion distance between air and blood.",
 art:`
  <circle cx="260" cy="200" r="120" fill="rgba(79,195,247,.08)" stroke="var(--m1)" stroke-width="3"/>
  <path d="M170 160 C 230 120, 350 130, 400 190 C 420 220, 400 270, 350 280" fill="none" stroke="var(--bad)" stroke-width="10" stroke-linecap="round"/>
  <circle cx="180" cy="260" r="4" fill="var(--m1)"/>
  <circle cx="200" cy="240" r="4" fill="var(--m1)"/>
  <circle cx="220" cy="270" r="4" fill="var(--m1)"/>
  <circle cx="380" cy="210" r="4" fill="var(--gold)"/>
  <circle cx="360" cy="230" r="4" fill="var(--gold)"/>
  <path d="M260 320 L 260 200" stroke="var(--ink2)" stroke-width="2" stroke-dasharray="4 4"/>
  <path d="M340 200 L 400 190" stroke="var(--ink2)" stroke-width="2" stroke-dasharray="4 4"/>`,
 zones:[
   {label:"Alveolus (air sac)",              x:6,   y:40,  w:160, h:34, px:170, py:200},
   {label:"Capillary",                       x:474, y:40,  w:160, h:34, px:400, py:190},
   {label:"Oxygen diffusing into the blood", x:6,   y:330, w:200, h:34, px:200, py:250},
   {label:"CO\u2082 diffusing into the alveolus", x:434, y:330, w:200, h:34, px:370, py:220}
 ]},

{id:"dg-leaf-stomata", title:"Leaf cross-section and gas exchange",
 topic:"Organisation of Living Things", sub:"Nutrient and Gas Requirements",
 note:"Guard cells change shape to open or close each stoma, controlling the balance between carbon dioxide entry for photosynthesis and water loss through transpiration.",
 art:`
  <rect x="60" y="60" width="520" height="24" fill="rgba(200,200,200,.15)" stroke="var(--line)" stroke-width="2"/>
  <rect x="60" y="84" width="520" height="90" fill="rgba(129,199,132,.2)" stroke="var(--line)" stroke-width="1.5"/>
  <rect x="60" y="174" width="520" height="110" fill="rgba(129,199,132,.08)" stroke="var(--line)" stroke-width="1.5"/>
  <circle cx="140" cy="220" r="18" fill="rgba(129,199,132,.35)" stroke="var(--good)" stroke-width="1.5"/>
  <circle cx="220" cy="240" r="18" fill="rgba(129,199,132,.35)" stroke="var(--good)" stroke-width="1.5"/>
  <circle cx="320" cy="215" r="18" fill="rgba(129,199,132,.35)" stroke="var(--good)" stroke-width="1.5"/>
  <ellipse cx="300" cy="300" rx="14" ry="8" fill="var(--bg2)" stroke="var(--gold)" stroke-width="2.5"/>
  <ellipse cx="260" cy="300" rx="14" ry="8" fill="var(--bg2)" stroke="var(--gold)" stroke-width="2.5"/>
  <rect x="60" y="284" width="520" height="20" fill="rgba(200,200,200,.1)" stroke="var(--line)" stroke-width="1.5"/>`,
 zones:[
   {label:"Upper epidermis (waxy cuticle)", x:6,   y:6,   w:200, h:32, px:200, py:70},
   {label:"Palisade mesophyll (photosynthesis)", x:440, y:6, w:196, h:32, px:400, py:120},
   {label:"Spongy mesophyll (air spaces)",  x:6,   y:340, w:200, h:32, px:220, py:230},
   {label:"Stoma and guard cells",          x:440, y:340, w:196, h:32, px:280, py:300}
 ]},

{id:"dg-food-web", title:"A simple food web",
 topic:"Ecosystem Dynamics", sub:"Population Dynamics",
 note:"Arrows in a food web point from the organism being eaten to the organism that eats it, showing the direction energy flows through the community.",
 art:`
  <ellipse cx="320" cy="330" rx="90" ry="34" fill="rgba(129,199,132,.25)" stroke="var(--good)" stroke-width="2.5"/>
  <ellipse cx="150" cy="220" rx="70" ry="30" fill="rgba(255,206,84,.22)" stroke="var(--gold)" stroke-width="2.5"/>
  <ellipse cx="480" cy="220" rx="70" ry="30" fill="rgba(255,206,84,.22)" stroke="var(--gold)" stroke-width="2.5"/>
  <ellipse cx="320" cy="90" rx="80" ry="32" fill="rgba(255,94,122,.22)" stroke="var(--bad)" stroke-width="2.5"/>
  <path d="M280 305 L 190 245" stroke="var(--ink2)" stroke-width="2.5"/>
  <path d="M360 305 L 450 245" stroke="var(--ink2)" stroke-width="2.5"/>
  <path d="M170 195 L 280 105" stroke="var(--ink2)" stroke-width="2.5"/>
  <path d="M460 195 L 360 105" stroke="var(--ink2)" stroke-width="2.5"/>`,
 zones:[
   {label:"Producer",         x:230, y:340, w:180, h:32, px:320, py:330},
   {label:"Primary consumer", x:6,   y:180, w:170, h:32, px:150, py:220},
   {label:"Primary consumer", x:464, y:180, w:170, h:32, px:480, py:220},
   {label:"Secondary consumer (top predator)", x:230, y:40, w:180, h:32, px:320, py:90}
 ]},

{id:"dg-population-growth", title:"Population growth curve",
 topic:"Ecosystem Dynamics", sub:"Population Dynamics",
 note:"A population introduced to a new environment first grows exponentially while resources are abundant, then levels off as competition for limited resources slows growth near carrying capacity.",
 art:`
  <line x1="70" y1="340" x2="610" y2="340" stroke="var(--line)" stroke-width="2"/>
  <line x1="70" y1="340" x2="70" y2="40" stroke="var(--line)" stroke-width="2"/>
  <path d="M80 330 C 150 325, 220 300, 280 240 C 340 175, 400 100, 470 75 C 520 62, 570 58, 600 56"
        fill="none" stroke="var(--accent2)" stroke-width="3.5"/>
  <line x1="70" y1="56" x2="610" y2="56" stroke="var(--gold)" stroke-width="2" stroke-dasharray="6 4"/>
  <circle cx="280" cy="240" r="5" fill="var(--good)"/>`,
 zones:[
   {label:"Population size",        x:6,   y:150, w:130, h:32, px:70,  py:170},
   {label:"Time",                   x:520, y:350, w:100, h:32, px:590, py:340},
   {label:"Exponential growth phase", x:150, y:6,  w:190, h:32, px:220, py:270},
   {label:"Carrying capacity",      x:400, y:6,   w:190, h:32, px:550, py:56},
   {label:"Growth slows as competition increases", x:340, y:350, w:230, h:32, px:280, py:240}
 ]},

{id:"dg-rock-strata", title:"Rock strata and relative dating",
 topic:"Ecosystem Dynamics", sub:"Past Ecosystems",
 note:"Because sediment builds up over time, undisturbed rock layers are oldest at the bottom and youngest at the top — so fossils found deeper are generally older than fossils found above them.",
 art:`
  <rect x="90" y="60"  width="460" height="60" fill="rgba(255,206,84,.14)" stroke="var(--line)" stroke-width="2"/>
  <rect x="90" y="120" width="460" height="70" fill="rgba(129,199,132,.14)" stroke="var(--line)" stroke-width="2"/>
  <rect x="90" y="190" width="460" height="70" fill="rgba(79,195,247,.14)" stroke="var(--line)" stroke-width="2"/>
  <rect x="90" y="260" width="460" height="80" fill="rgba(255,94,122,.14)" stroke="var(--line)" stroke-width="2"/>
  <ellipse cx="180" cy="90"  rx="16" ry="10" fill="var(--gold)"/>
  <ellipse cx="420" cy="155" rx="16" ry="10" fill="var(--good)"/>
  <ellipse cx="300" cy="225" rx="16" ry="10" fill="var(--m1)"/>
  <ellipse cx="240" cy="300" rx="16" ry="10" fill="var(--bad)"/>`,
 zones:[
   {label:"Youngest layer (deposited most recently)", x:6,   y:6,   w:220, h:32, px:180, py:90},
   {label:"Older layer",                              x:420, y:80,  w:200, h:32, px:420, py:155},
   {label:"Even older layer",                         x:6,   y:200, w:200, h:32, px:300, py:225},
   {label:"Oldest layer (deposited first)",           x:420, y:340, w:200, h:32, px:240, py:300}
 ]},

{id:"dg-natural-selection", title:"Natural selection in a changing environment",
 topic:"Biological Diversity", sub:"Theory of Evolution by Natural Selection",
 note:"A selection pressure — here, predation on a light-coloured background — removes individuals that stand out, so the trait that camouflages best becomes more common across generations.",
 art:`
  <rect x="60" y="60"  width="240" height="120" fill="rgba(238,240,255,.06)" stroke="var(--line)" stroke-width="2"/>
  <rect x="340" y="60" width="240" height="120" fill="rgba(50,56,107,.35)" stroke="var(--line)" stroke-width="2"/>
  <circle cx="120" cy="120" r="10" fill="#eef0ff" stroke="var(--line)"/>
  <circle cx="160" cy="140" r="10" fill="#eef0ff" stroke="var(--line)"/>
  <circle cx="210" cy="110" r="10" fill="#3a3f5c"/>
  <circle cx="400" cy="120" r="10" fill="#3a3f5c"/>
  <circle cx="450" cy="140" r="10" fill="#3a3f5c"/>
  <circle cx="500" cy="110" r="10" fill="#eef0ff" stroke="var(--line)"/>
  <line x1="70" y1="230" x2="570" y2="230" stroke="var(--line)" stroke-width="2"/>
  <rect x="100" y="200" width="60" height="30" fill="var(--m3)"/>
  <rect x="200" y="150" width="60" height="80" fill="#3a3f5c"/>
  <rect x="360" y="190" width="60" height="40" fill="var(--m3)"/>
  <rect x="460" y="140" width="60" height="90" fill="#3a3f5c"/>`,
 zones:[
   {label:"Light habitat before soot pollution",  x:6,   y:340, w:230, h:32, px:180, py:120},
   {label:"Dark, sooty habitat after pollution",   x:404, y:340, w:230, h:32, px:460, py:120},
   {label:"Population before selection pressure",  x:6,   y:200, w:130, h:32, px:130, py:215},
   {label:"Population after selection pressure",   x:504, y:200, w:130, h:32, px:490, py:170}
 ]},
];
