// Preliminary Biology cause-and-effect chains
// Each chain is an ordered causal sequence a student must rebuild. Steps are
// stored in the CORRECT order and shuffled at run time.
// Fields: id, title, topic, sub, steps[] (ordered), why (one-line explanation)
const CHAINS = [

// ============ CELLS AS THE BASIS OF LIFE · Cell Structure ============
{id:"c1-microscope-mag", title:"Calculating magnification", topic:"Cells as the Basis of Life", sub:"Cell Structure",
 steps:["A specimen is placed under a light microscope","Light passes through the objective and eyepiece lenses","Each lens magnifies the image of the specimen further","The final image size is compared to the specimen's actual size","Magnification is calculated as image size divided by actual size"],
 why:"Magnification is the combined effect of every lens the light passes through before the image is viewed."},

{id:"c1-organelle-function", title:"Protein export from a cell", topic:"Cells as the Basis of Life", sub:"Cell Structure",
 steps:["Ribosomes on the rough ER synthesise a protein","The protein enters the endoplasmic reticulum for initial processing","It is transported to the Golgi apparatus in a vesicle","The Golgi apparatus modifies and packages the protein","A vesicle buds off the Golgi and moves to the cell membrane","The vesicle fuses with the membrane and releases the protein outside the cell"],
 why:"Protein export relies on a coordinated production line across several organelles, not any single structure acting alone."},

// ============ CELLS AS THE BASIS OF LIFE · Cell Function ============
{id:"c2-satv-limit", title:"Surface area to volume ratio limits cell size", topic:"Cells as the Basis of Life", sub:"Cell Function",
 steps:["A cell grows larger through cell growth","Volume increases faster than surface area as the cell enlarges","The surface area to volume ratio decreases","Less membrane is available per unit of cytoplasm to exchange materials","Nutrients cannot diffuse in and wastes cannot diffuse out fast enough","The cell divides instead of continuing to grow"],
 why:"Because volume grows by the cube while surface area grows by the square, larger cells struggle to exchange materials fast enough — which is why cells divide rather than keep growing."},

{id:"c2-osmosis-lysis", title:"Osmosis and a hypotonic environment", topic:"Cells as the Basis of Life", sub:"Cell Function",
 steps:["A cell is placed in a solution more dilute than its cytoplasm","A water concentration gradient exists across the cell membrane","Water molecules move into the cell by osmosis","The cell's internal volume increases","An animal cell without a cell wall may burst (lyse)"],
 why:"Osmosis always follows the water concentration gradient, and without a rigid cell wall to resist the pressure, excess water intake can rupture the cell."},

{id:"c2-enzyme-denature", title:"High temperature denatures an enzyme", topic:"Cells as the Basis of Life", sub:"Cell Function",
 steps:["Temperature rises well above an enzyme's optimum","The enzyme's molecular structure vibrates excessively","Bonds holding the enzyme's shape break","The active site changes shape and is denatured","The substrate can no longer bind to the active site","The rate of the reaction falls to zero"],
 why:"Enzyme activity depends entirely on active-site shape, so once heat destroys that shape the enzyme cannot function, no matter how much substrate is available."},

{id:"c2-anaerobic-lactic", title:"Anaerobic respiration during intense exercise", topic:"Cells as the Basis of Life", sub:"Cell Function",
 steps:["Muscle cells demand energy faster than oxygen can be delivered","Oxygen supply to the muscle cells becomes insufficient","Cells switch to anaerobic respiration to keep producing ATP","Glucose is broken down without oxygen","Lactic acid is produced as a by-product","Lactic acid build-up contributes to muscle fatigue"],
 why:"Anaerobic respiration is a rapid backup for producing ATP when oxygen delivery cannot keep pace with demand, at the cost of a fatigue-causing by-product."},

// ============ ORGANISATION OF LIVING THINGS · Organisation of Cells ============
{id:"o1-stem-cell-diff", title:"Stem cell differentiation into a tissue", topic:"Organisation of Living Things", sub:"Organisation of Cells",
 steps:["An unspecialised stem cell divides repeatedly","Chemical signals switch on specific genes within some daughter cells","Those cells develop specialised structures suited to one function","The specialised cells are now a distinct differentiated cell type","Many identical differentiated cells group together","A tissue with a specific shared function is formed"],
 why:"Differentiation is how a single, unspecialised stem cell lineage becomes the many specialised tissues that make up a multicellular organism."},

// ============ ORGANISATION OF LIVING THINGS · Nutrient and Gas Requirements ============
{id:"o2-stomata-co2", title:"Stomata regulate photosynthetic gas exchange", topic:"Organisation of Living Things", sub:"Nutrient and Gas Requirements",
 steps:["Light intensity increases on a leaf","The rate of photosynthesis rises","The leaf's cells demand more carbon dioxide","Guard cells open the stomata wider","Carbon dioxide diffuses into the leaf faster","Photosynthesis can continue at a higher rate"],
 why:"Stomatal opening links a plant's changing internal demand for carbon dioxide directly to how much gas exchange the leaf allows."},

// ============ ORGANISATION OF LIVING THINGS · Transport ============
{id:"o3-blood-o2-cycle", title:"Oxygen delivery through the double circulatory system", topic:"Organisation of Living Things", sub:"Transport",
 steps:["Deoxygenated blood returns to the right side of the heart","The heart pumps this blood to the lungs","Oxygen diffuses from the alveoli into the blood at the capillaries","Oxygenated blood returns to the left side of the heart","The heart pumps oxygenated blood out to the body tissues","Oxygen diffuses out of capillaries into respiring cells"],
 why:"A double circulatory system routes blood through the heart twice per full circuit, once to pick up oxygen at the lungs and once to deliver it to the body."},

{id:"o3-capillary-exchange", title:"Composition change of blood at a capillary bed", topic:"Organisation of Living Things", sub:"Transport",
 steps:["Oxygenated, nutrient-rich blood enters a capillary bed","A concentration gradient exists between the blood and surrounding tissue","Oxygen and nutrients diffuse out of the capillary into the tissue cells","Carbon dioxide and other wastes diffuse from tissue cells into the capillary","Blood leaving the capillary bed is now deoxygenated and nutrient-depleted","This blood returns towards the heart via veins"],
 why:"The one-cell-thick wall of a capillary exists specifically to let diffusion change the composition of blood as it passes through tissue."},

// ============ BIOLOGICAL DIVERSITY · Effects of the Environment on Organisms ============
{id:"b1-abiotic-distribution", title:"An abiotic factor limits species distribution", topic:"Biological Diversity", sub:"Effects of the Environment on Organisms",
 steps:["Soil moisture varies across a sample site","A plant species requires consistently moist soil to survive","The species is only found where soil moisture is high enough","Quadrats placed across the site record its uneven distribution","Ecologists conclude soil moisture is a limiting factor for the species"],
 why:"Sampling with quadrats across an environmental gradient is how ecologists link an organism's distribution back to a specific abiotic limiting factor."},

// ============ BIOLOGICAL DIVERSITY · Adaptations ============
{id:"b2-convergent-desert", title:"Convergent evolution in arid environments", topic:"Biological Diversity", sub:"Adaptations",
 steps:["Two unrelated species live in separate hot, dry environments","Both populations face the same selection pressure to conserve water","Individuals with water-conserving traits survive and reproduce more","Over many generations each species evolves similar water-saving adaptations","The two unrelated species end up with strikingly similar features"],
 why:"Convergent evolution shows that similar selection pressures, not shared ancestry, can independently produce similar adaptations in unrelated species."},

{id:"b2-camel-conserve-water", title:"A physiological adaptation for water conservation", topic:"Biological Diversity", sub:"Adaptations",
 steps:["An animal lives in an environment with limited access to water","Individuals that lose less water through urine are more likely to survive","Natural selection favours kidneys able to produce highly concentrated urine","This physiological adaptation becomes common in the population","The species can survive for extended periods with minimal water intake"],
 why:"A physiological adaptation like concentrating urine is an internal process, shaped by natural selection, that improves survival in a specific environment."},

// ============ BIOLOGICAL DIVERSITY · Theory of Evolution by Natural Selection ============
{id:"b3-natural-selection-process", title:"The process of natural selection", topic:"Biological Diversity", sub:"Theory of Evolution by Natural Selection",
 steps:["Genetic variation exists for a trait within a population","More offspring are produced than the environment can support","A selection pressure makes survival harder for individuals lacking the trait","Individuals with the favourable trait survive and reproduce more successfully","The favourable trait is passed on to a greater proportion of offspring","Over many generations the trait becomes more common in the population"],
 why:"Natural selection requires heritable variation, overproduction and differential survival — remove any one step and the trait cannot spread through a population."},

{id:"b3-fossil-evidence", title:"Using fossil evidence to infer evolutionary change", topic:"Biological Diversity", sub:"Theory of Evolution by Natural Selection",
 steps:["An organism dies and is rapidly buried by sediment","Hard parts of the organism are preserved as sediment compacts into rock","Later organisms are buried and preserved in layers above","Scientists excavate the rock strata and compare fossils from each layer","Progressive changes in the fossils across layers reveal evolutionary change over time"],
 why:"The fossil record only reveals evolutionary change when fossils from successive rock strata can be compared in sequence."},

// ============ ECOSYSTEM DYNAMICS · Population Dynamics ============
{id:"e1-keystone-removal", title:"Removing a keystone species", topic:"Ecosystem Dynamics", sub:"Population Dynamics",
 steps:["A keystone predator is removed from an ecosystem","Its prey species is no longer controlled by predation","The prey population grows rapidly, exceeding previous levels","The prey over-consumes its own food source","The food source becomes severely depleted","Other species dependent on that food source also decline"],
 why:"A keystone species has an effect on ecosystem structure far larger than its abundance would suggest, so removing it can trigger a cascade of change."},

{id:"e1-energy-transfer", title:"Energy loss along a food chain", topic:"Ecosystem Dynamics", sub:"Population Dynamics",
 steps:["Producers convert light energy into chemical energy via photosynthesis","A primary consumer eats the producer","Much of the energy consumed is lost as heat through respiration","Only a fraction of the energy is converted into the consumer's own biomass","A secondary consumer eats the primary consumer and gains only that smaller fraction","Available energy decreases sharply at each successive trophic level"],
 why:"Roughly 90% of energy is lost as heat at each trophic level, which is why food chains rarely extend beyond four or five levels."},

{id:"e1-carrying-capacity", title:"A population approaches carrying capacity", topic:"Ecosystem Dynamics", sub:"Population Dynamics",
 steps:["A small population is introduced to a resource-rich environment","Food and space are abundant relative to population size","The population grows rapidly with few limiting factors","As numbers rise, competition for food and space intensifies","Birth rate falls and death rate rises due to limited resources","Population size stabilises near the environment's carrying capacity"],
 why:"Carrying capacity is reached when a growing population's own resource use begins to limit its further growth."},

// ============ ECOSYSTEM DYNAMICS · Past Ecosystems ============
{id:"e2-relative-dating", title:"Relative dating of fossils in rock strata", topic:"Ecosystem Dynamics", sub:"Past Ecosystems",
 steps:["Sediment is deposited in layers over long periods of time","Older layers are buried beneath newer layers as time passes","An organism dies and becomes fossilised within a particular layer","The rock strata are later exposed by erosion or excavation","Scientists compare the depth of fossils within the strata","Fossils in deeper layers are inferred to be relatively older"],
 why:"Relative dating relies on the principle of superposition — that within undisturbed rock, deeper layers were deposited earlier and are therefore older."},

// ============ ECOSYSTEM DYNAMICS · Future Ecosystems ============
{id:"e3-land-clearing", title:"Land clearing fragments a habitat", topic:"Ecosystem Dynamics", sub:"Future Ecosystems",
 steps:["Land is cleared for agriculture or urban development","A once-continuous habitat is broken into smaller, isolated patches","Populations within each patch become separated from one another","Genetic exchange between the isolated populations decreases","Genetic diversity within each small population declines","The fragmented populations become more vulnerable to extinction"],
 why:"Habitat fragmentation harms biodiversity not just by reducing total habitat area but by isolating populations and eroding genetic diversity."},

{id:"e3-invasive-species", title:"An invasive species disrupts a food web", topic:"Ecosystem Dynamics", sub:"Future Ecosystems",
 steps:["An invasive species is introduced to a new ecosystem","It has no natural predators in this new environment","Its population grows unchecked by predation","It outcompetes native species for shared food and habitat resources","Native species populations decline as resources become scarce","The ecosystem's original food web structure is disrupted"],
 why:"Introduced species often thrive precisely because the predators and competitors that regulated them in their native range are absent."},

{id:"e3-bioaccumulation", title:"Bioaccumulation of a pollutant up a food chain", topic:"Ecosystem Dynamics", sub:"Future Ecosystems",
 steps:["A persistent pesticide is applied to farmland and enters waterways","Producers absorb small amounts of the pesticide from the water","Primary consumers eat many producers, accumulating the pesticide in their tissue","Secondary consumers eat many primary consumers, accumulating even more pesticide","Top predators, eating many secondary consumers, accumulate the highest concentration","The pollutant reaches toxic levels at the top of the food chain"],
 why:"Because pollutants aren't easily broken down or excreted, their concentration magnifies at each trophic level, hitting top predators hardest."},

// ============ WORKING SCIENTIFICALLY ============
{id:"w1-hypothesis-testing", title:"Testing a hypothesis with a controlled investigation", topic:"Working Scientifically", sub:"Planning and Conducting Investigations",
 steps:["A testable hypothesis is proposed based on prior scientific knowledge","The independent, dependent and controlled variables are identified","An investigation is designed that changes only the independent variable","The investigation is repeated multiple times to improve reliability","Results are collected, averaged and analysed for a trend","The trend is compared back to the original hypothesis to draw a conclusion"],
 why:"A valid conclusion depends on isolating the independent variable and repeating trials, so results can be trusted to reflect a genuine relationship."},

{id:"w1-improve-validity", title:"Improving the validity of an investigation", topic:"Working Scientifically", sub:"Planning and Conducting Investigations",
 steps:["A flaw is identified where an uncontrolled variable could affect the results","The uncontrolled variable is identified and added to the list of controlled variables","The investigation is redesigned so this variable is held constant","The investigation is repeated under the improved design","Any change in the dependent variable can now be attributed to the independent variable alone","The investigation's validity is improved"],
 why:"Validity depends on isolating a single variable, so identifying and controlling an overlooked variable directly strengthens how much a result can be trusted."},
];
