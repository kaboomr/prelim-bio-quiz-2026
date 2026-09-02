// Preliminary Biology concept & term library
// Definitions written in NESA marking-guideline style, mapped to the same
// module / content-area keys used by SYLLABUS in syllabus.js so results
// feed the topic analysis. Fields: id, term, topic, sub, def, eg?
const GLOSSARY = [

// ================= CELLS AS THE BASIS OF LIFE =================
// --- Cell Structure ---
{id:"c-cell", term:"Cell", topic:"Cells as the Basis of Life", sub:"Cell Structure", def:"The basic structural and functional unit of all living organisms, containing organelles that carry out specific life processes."},
{id:"c-prokaryote", term:"Prokaryotic cell", topic:"Cells as the Basis of Life", sub:"Cell Structure", def:"A simple cell with no membrane-bound nucleus or organelles, and circular DNA free in the cytoplasm, e.g. bacteria."},
{id:"c-eukaryote", term:"Eukaryotic cell", topic:"Cells as the Basis of Life", sub:"Cell Structure", def:"A complex cell containing a membrane-bound nucleus and membrane-bound organelles, e.g. plant, animal, fungal and protist cells."},
{id:"c-nucleus", term:"Nucleus", topic:"Cells as the Basis of Life", sub:"Cell Structure", def:"The membrane-bound organelle that stores genetic material (DNA) and controls cell activities including growth and reproduction."},
{id:"c-mitochondria", term:"Mitochondria", topic:"Cells as the Basis of Life", sub:"Cell Structure", def:"Double membrane-bound organelles that are the site of aerobic cellular respiration, producing most of a cell's ATP."},
{id:"c-chloroplast", term:"Chloroplast", topic:"Cells as the Basis of Life", sub:"Cell Structure", def:"A double membrane-bound organelle found in plant cells that is the site of photosynthesis, containing the pigment chlorophyll."},
{id:"c-er", term:"Endoplasmic reticulum", topic:"Cells as the Basis of Life", sub:"Cell Structure", def:"A network of membranes involved in the synthesis (rough ER, studded with ribosomes) and processing (smooth ER) of proteins and lipids."},
{id:"c-golgi", term:"Golgi apparatus", topic:"Cells as the Basis of Life", sub:"Cell Structure", def:"An organelle that modifies, packages and sorts proteins and lipids received from the endoplasmic reticulum, often into vesicles for export."},
{id:"c-ribosome", term:"Ribosome", topic:"Cells as the Basis of Life", sub:"Cell Structure", def:"A small structure, free in the cytoplasm or attached to the rough ER, that is the site of protein synthesis."},
{id:"c-cellwall", term:"Cell wall", topic:"Cells as the Basis of Life", sub:"Cell Structure", def:"A rigid layer outside the cell membrane, made of cellulose in plants, that provides structural support and protection."},
{id:"c-vacuole", term:"Vacuole", topic:"Cells as the Basis of Life", sub:"Cell Structure", def:"A membrane-bound sac used for storage; plant cells typically have one large central vacuole that maintains turgor pressure."},
{id:"c-lysosome", term:"Lysosome", topic:"Cells as the Basis of Life", sub:"Cell Structure", def:"A membrane-bound organelle containing digestive enzymes that break down waste materials and worn-out organelles within the cell."},
{id:"c-magnification", term:"Magnification", topic:"Cells as the Basis of Life", sub:"Cell Structure", def:"The number of times larger an image appears compared with the actual size of the specimen, calculated as image size ÷ actual size."},

// --- Cell Function ---
{id:"c-satv", term:"Surface area to volume ratio", topic:"Cells as the Basis of Life", sub:"Cell Function", def:"The relationship between a cell's outer surface area and its internal volume; as cells grow larger this ratio decreases, limiting the rate at which materials can be exchanged."},
{id:"c-diffusion", term:"Diffusion", topic:"Cells as the Basis of Life", sub:"Cell Function", def:"The passive net movement of particles from an area of high concentration to an area of low concentration, requiring no energy input."},
{id:"c-osmosis", term:"Osmosis", topic:"Cells as the Basis of Life", sub:"Cell Function", def:"The passive diffusion of water molecules across a selectively permeable membrane, from an area of high water concentration to low water concentration."},
{id:"c-facilitated", term:"Facilitated diffusion", topic:"Cells as the Basis of Life", sub:"Cell Function", def:"Passive transport of particles across a membrane through a specific channel or carrier protein, still moving down the concentration gradient."},
{id:"c-active-transport", term:"Active transport", topic:"Cells as the Basis of Life", sub:"Cell Function", def:"The movement of particles across a membrane against their concentration gradient, requiring energy in the form of ATP."},
{id:"c-selectively-permeable", term:"Selectively permeable membrane", topic:"Cells as the Basis of Life", sub:"Cell Function", def:"A membrane that allows some substances to pass through freely while restricting others, based on size, charge or the presence of transport proteins."},
{id:"c-enzyme", term:"Enzyme", topic:"Cells as the Basis of Life", sub:"Cell Function", def:"A biological catalyst, usually a protein, that increases the rate of a biochemical reaction by lowering its activation energy without being consumed."},
{id:"c-substrate", term:"Substrate", topic:"Cells as the Basis of Life", sub:"Cell Function", def:"The specific molecule an enzyme acts upon, binding to the enzyme's active site to form an enzyme-substrate complex."},
{id:"c-active-site", term:"Active site", topic:"Cells as the Basis of Life", sub:"Cell Function", def:"The specific region of an enzyme where a substrate binds, allowing the reaction to be catalysed."},
{id:"c-denaturation", term:"Denaturation", topic:"Cells as the Basis of Life", sub:"Cell Function", def:"A permanent change to the shape of an enzyme, usually caused by high temperature or extreme pH, which destroys its active site and stops it functioning."},
{id:"c-optimum-temp", term:"Optimum temperature", topic:"Cells as the Basis of Life", sub:"Cell Function", def:"The temperature at which an enzyme catalyses a reaction at its fastest rate; human enzymes typically have an optimum around 37°C."},
{id:"c-aerobic-resp", term:"Aerobic respiration", topic:"Cells as the Basis of Life", sub:"Cell Function", def:"The breakdown of glucose in the presence of oxygen within mitochondria, releasing energy along with carbon dioxide and water as products."},
{id:"c-anaerobic-resp", term:"Anaerobic respiration", topic:"Cells as the Basis of Life", sub:"Cell Function", def:"The breakdown of glucose without oxygen, releasing less energy than aerobic respiration and producing lactic acid (animals) or ethanol and carbon dioxide (yeast)."},
{id:"c-photosynthesis", term:"Photosynthesis", topic:"Cells as the Basis of Life", sub:"Cell Function", def:"The process by which chloroplasts convert light energy into chemical energy, using carbon dioxide and water to produce glucose and oxygen."},
{id:"c-atp", term:"ATP", topic:"Cells as the Basis of Life", sub:"Cell Function", def:"Adenosine triphosphate, the molecule cells use to store and transfer usable chemical energy for cellular processes such as active transport."},

// ================= ORGANISATION OF LIVING THINGS =================
// --- Organisation of Cells ---
{id:"o-tissue", term:"Tissue", topic:"Organisation of Living Things", sub:"Organisation of Cells", def:"A group of similar, specialised cells that work together to perform a shared function."},
{id:"o-organ", term:"Organ", topic:"Organisation of Living Things", sub:"Organisation of Cells", def:"A structure composed of two or more different tissue types working together to carry out a specific function, e.g. the heart or a leaf."},
{id:"o-organ-system", term:"Organ system", topic:"Organisation of Living Things", sub:"Organisation of Cells", def:"A group of organs that work together to perform a broad function within an organism, e.g. the circulatory system."},
{id:"o-stem-cell", term:"Stem cell", topic:"Organisation of Living Things", sub:"Organisation of Cells", def:"An unspecialised cell capable of differentiating into one or more specialised cell types and, in some cases, of self-renewal."},
{id:"o-differentiation", term:"Cell differentiation", topic:"Organisation of Living Things", sub:"Organisation of Cells", def:"The process by which an unspecialised cell becomes a specialised cell type suited to a particular function."},
{id:"o-epithelial", term:"Epithelial tissue", topic:"Organisation of Living Things", sub:"Organisation of Cells", def:"Animal tissue that lines body surfaces and cavities, functioning in protection, secretion or absorption."},
{id:"o-vascular-tissue", term:"Vascular tissue", topic:"Organisation of Living Things", sub:"Organisation of Cells", def:"Plant tissue, comprising xylem and phloem, specialised for the transport of water, minerals and nutrients."},

// --- Nutrient and Gas Requirements ---
{id:"o-autotroph", term:"Autotroph", topic:"Organisation of Living Things", sub:"Nutrient and Gas Requirements", def:"An organism that synthesises its own organic nutrients from inorganic sources, typically using light energy through photosynthesis."},
{id:"o-heterotroph", term:"Heterotroph", topic:"Organisation of Living Things", sub:"Nutrient and Gas Requirements", def:"An organism that cannot synthesise its own organic nutrients and must obtain them by consuming other organisms."},
{id:"o-stomata", term:"Stomata", topic:"Organisation of Living Things", sub:"Nutrient and Gas Requirements", def:"Small pores, mostly on the underside of leaves, that open and close to regulate gas exchange and water loss in plants."},
{id:"o-gills", term:"Gills", topic:"Organisation of Living Things", sub:"Nutrient and Gas Requirements", def:"Highly folded, thin respiratory structures that extract dissolved oxygen from water, providing a large surface area for gas exchange."},
{id:"o-tracheae", term:"Tracheae", topic:"Organisation of Living Things", sub:"Nutrient and Gas Requirements", def:"A network of branching air-filled tubes found in insects that carries oxygen directly to tissues, bypassing the blood."},
{id:"o-alveoli", term:"Alveoli", topic:"Organisation of Living Things", sub:"Nutrient and Gas Requirements", def:"Tiny air sacs in the lungs, surrounded by capillaries, that provide a large moist surface area for gas exchange by diffusion."},

// --- Transport ---
{id:"o-xylem", term:"Xylem", topic:"Organisation of Living Things", sub:"Transport", def:"Plant vascular tissue made of dead, hollow cells that transports water and dissolved minerals from the roots to the leaves."},
{id:"o-phloem", term:"Phloem", topic:"Organisation of Living Things", sub:"Transport", def:"Plant vascular tissue made of living cells that transports the products of photosynthesis (sugars) around the plant."},
{id:"o-open-circ", term:"Open circulatory system", topic:"Organisation of Living Things", sub:"Transport", def:"A transport system in which blood (haemolymph) is pumped directly into the body cavity and bathes the organs, rather than remaining in vessels."},
{id:"o-closed-circ", term:"Closed circulatory system", topic:"Organisation of Living Things", sub:"Transport", def:"A transport system in which blood remains within blood vessels as it is pumped around the body."},
{id:"o-double-circ", term:"Double circulatory system", topic:"Organisation of Living Things", sub:"Transport", def:"A circulatory system, found in mammals, in which blood passes through the heart twice per full circuit — once to the lungs and once to the body."},
{id:"o-artery", term:"Artery", topic:"Organisation of Living Things", sub:"Transport", def:"A thick, muscular, elastic blood vessel that carries blood away from the heart under high pressure."},
{id:"o-vein", term:"Vein", topic:"Organisation of Living Things", sub:"Transport", def:"A blood vessel with a wide lumen and valves that carries blood back towards the heart under low pressure."},
{id:"o-capillary", term:"Capillary", topic:"Organisation of Living Things", sub:"Transport", def:"A microscopic, thin-walled blood vessel, one cell thick, where the exchange of gases and nutrients occurs between blood and tissue."},

// ================= BIOLOGICAL DIVERSITY =================
// --- Effects of the Environment on Organisms ---
{id:"b-biotic", term:"Biotic factor", topic:"Biological Diversity", sub:"Effects of the Environment on Organisms", def:"A living component of an ecosystem that influences other organisms, such as predation, competition or disease."},
{id:"b-abiotic", term:"Abiotic factor", topic:"Biological Diversity", sub:"Effects of the Environment on Organisms", def:"A non-living, physical or chemical component of an ecosystem, such as temperature, water availability or soil pH."},
{id:"b-quadrat", term:"Quadrat", topic:"Biological Diversity", sub:"Effects of the Environment on Organisms", def:"A square sampling frame of known area used to estimate the abundance and distribution of species within a habitat."},
{id:"b-transect", term:"Transect", topic:"Biological Diversity", sub:"Effects of the Environment on Organisms", def:"A line placed across a habitat, along which species are sampled at intervals to study how distribution changes across an environmental gradient."},
{id:"b-limiting-factor", term:"Limiting factor", topic:"Biological Diversity", sub:"Effects of the Environment on Organisms", def:"An environmental factor that restricts the growth, abundance or distribution of a population within an ecosystem."},

// --- Adaptations ---
{id:"b-structural", term:"Structural adaptation", topic:"Biological Diversity", sub:"Adaptations", def:"A physical feature of an organism that increases its chance of survival in its environment, e.g. thick fur or a waxy leaf cuticle."},
{id:"b-physiological", term:"Physiological adaptation", topic:"Biological Diversity", sub:"Adaptations", def:"An internal bodily process that increases an organism's chance of survival, e.g. producing concentrated urine to conserve water."},
{id:"b-behavioural", term:"Behavioural adaptation", topic:"Biological Diversity", sub:"Adaptations", def:"An action or pattern of behaviour that increases an organism's chance of survival, e.g. migration or nocturnal activity."},
{id:"b-convergent", term:"Convergent evolution", topic:"Biological Diversity", sub:"Adaptations", def:"The process by which unrelated species independently evolve similar adaptations because they face similar environmental pressures."},
{id:"b-divergent", term:"Divergent evolution", topic:"Biological Diversity", sub:"Adaptations", def:"The process by which related species evolve increasingly different adaptations as they occupy different environments."},
{id:"b-selection-pressure", term:"Selection pressure", topic:"Biological Diversity", sub:"Adaptations", def:"An environmental factor that favours individuals with particular traits, increasing their chance of survival and reproduction relative to others."},

// --- Theory of Evolution by Natural Selection ---
{id:"b-natural-selection", term:"Natural selection", topic:"Biological Diversity", sub:"Theory of Evolution by Natural Selection", def:"The process by which individuals with heritable traits better suited to their environment survive and reproduce more successfully, passing those traits to offspring."},
{id:"b-variation", term:"Variation", topic:"Biological Diversity", sub:"Theory of Evolution by Natural Selection", def:"Differences in traits between individuals of the same species, arising from genetic differences, which provide the raw material for natural selection."},
{id:"b-fossil-record", term:"Fossil record", topic:"Biological Diversity", sub:"Theory of Evolution by Natural Selection", def:"The collection of preserved remains or traces of past organisms, used as evidence for how species have changed over geological time."},
{id:"b-homologous", term:"Homologous structure", topic:"Biological Diversity", sub:"Theory of Evolution by Natural Selection", def:"A structure with the same underlying form in different species due to shared ancestry, though it may serve different functions, e.g. vertebrate forelimbs."},
{id:"b-vestigial", term:"Vestigial structure", topic:"Biological Diversity", sub:"Theory of Evolution by Natural Selection", def:"A reduced structure that has lost most or all of its original function through evolution, but is retained as evidence of an organism's ancestry."},
{id:"b-biogeography", term:"Biogeography", topic:"Biological Diversity", sub:"Theory of Evolution by Natural Selection", def:"The study of the geographic distribution of species, used as evidence for evolution by explaining patterns of similarity between geographically separated species."},
{id:"b-binomial", term:"Binomial nomenclature", topic:"Biological Diversity", sub:"Theory of Evolution by Natural Selection", def:"The internationally standardised system of naming species using two Latinised names — genus and species — e.g. Homo sapiens."},
{id:"b-biodiversity", term:"Biodiversity", topic:"Biological Diversity", sub:"Theory of Evolution by Natural Selection", def:"The variety of living organisms in an area, encompassing genetic, species and ecosystem diversity."},

// ================= ECOSYSTEM DYNAMICS =================
// --- Population Dynamics ---
{id:"e-predation", term:"Predation", topic:"Ecosystem Dynamics", sub:"Population Dynamics", def:"An interaction in which a predator hunts, kills and consumes another organism, the prey."},
{id:"e-competition", term:"Competition", topic:"Ecosystem Dynamics", sub:"Population Dynamics", def:"An interaction in which two or more organisms compete for the same limited resource, such as food, water, light or space."},
{id:"e-mutualism", term:"Mutualism", topic:"Ecosystem Dynamics", sub:"Population Dynamics", def:"A symbiotic relationship in which both interacting species benefit, e.g. bees pollinating flowers in exchange for nectar."},
{id:"e-commensalism", term:"Commensalism", topic:"Ecosystem Dynamics", sub:"Population Dynamics", def:"A symbiotic relationship in which one species benefits and the other is neither helped nor harmed."},
{id:"e-parasitism", term:"Parasitism", topic:"Ecosystem Dynamics", sub:"Population Dynamics", def:"A symbiotic relationship in which one species, the parasite, benefits at the expense of the other, the host."},
{id:"e-food-web", term:"Food web", topic:"Ecosystem Dynamics", sub:"Population Dynamics", def:"A model showing the interconnected feeding relationships between multiple food chains within a community."},
{id:"e-trophic-level", term:"Trophic level", topic:"Ecosystem Dynamics", sub:"Population Dynamics", def:"A feeding position in a food chain, such as producer, primary consumer or secondary consumer, through which energy is transferred."},
{id:"e-carrying-capacity", term:"Carrying capacity", topic:"Ecosystem Dynamics", sub:"Population Dynamics", def:"The maximum population size of a species that an environment can sustain indefinitely, given available resources."},
{id:"e-keystone", term:"Keystone species", topic:"Ecosystem Dynamics", sub:"Population Dynamics", def:"A species that has a disproportionately large effect on its ecosystem relative to its abundance; its removal can cause dramatic ecosystem change."},

// --- Past Ecosystems ---
{id:"e-fossil", term:"Fossil", topic:"Ecosystem Dynamics", sub:"Past Ecosystems", def:"The preserved remains or traces of a once-living organism, typically formed when an organism is rapidly buried under conditions that prevent decay."},
{id:"e-relative-dating", term:"Relative dating", topic:"Ecosystem Dynamics", sub:"Past Ecosystems", def:"A technique for estimating the age of a fossil based on its position within rock strata, using the principle that deeper layers are generally older."},
{id:"e-absolute-dating", term:"Absolute dating", topic:"Ecosystem Dynamics", sub:"Past Ecosystems", def:"A technique for determining the actual numerical age of a fossil or rock, such as radiometric dating based on the decay of radioactive isotopes."},
{id:"e-strata", term:"Strata", topic:"Ecosystem Dynamics", sub:"Past Ecosystems", def:"Distinct layers of sedimentary rock, each formed at a different point in geological time, that can be used to date embedded fossils."},

// --- Future Ecosystems ---
{id:"e-habitat-loss", term:"Habitat destruction", topic:"Ecosystem Dynamics", sub:"Future Ecosystems", def:"The process by which a natural habitat is altered or destroyed, typically by human activity, reducing its capacity to support species."},
{id:"e-fragmentation", term:"Habitat fragmentation", topic:"Ecosystem Dynamics", sub:"Future Ecosystems", def:"The breaking up of a large, continuous habitat into smaller, isolated patches, often as a result of land clearing."},
{id:"e-introduced-species", term:"Introduced species", topic:"Ecosystem Dynamics", sub:"Future Ecosystems", def:"A species moved by human activity to an area outside its natural range, which may outcompete or prey upon native species."},
{id:"e-invasive-species", term:"Invasive species", topic:"Ecosystem Dynamics", sub:"Future Ecosystems", def:"An introduced species that spreads rapidly and causes significant harm to the native ecosystem, economy or human health."},
{id:"e-biomagnification", term:"Bioaccumulation", topic:"Ecosystem Dynamics", sub:"Future Ecosystems", def:"The gradual build-up of a pollutant, such as a pesticide, within an organism's tissues over its lifetime."},
{id:"e-conservation", term:"Conservation strategy", topic:"Ecosystem Dynamics", sub:"Future Ecosystems", def:"A deliberate action taken to protect biodiversity, such as establishing protected areas, captive breeding programs or habitat restoration."},

// ================= WORKING SCIENTIFICALLY =================
{id:"w-hypothesis", term:"Hypothesis", topic:"Working Scientifically", sub:"Questioning and Predicting", def:"A testable statement, based on scientific reasoning, that predicts the relationship between variables in an investigation."},
{id:"w-independent-var", term:"Independent variable", topic:"Working Scientifically", sub:"Questioning and Predicting", def:"The variable that is deliberately changed or manipulated by the investigator in an experiment."},
{id:"w-dependent-var", term:"Dependent variable", topic:"Working Scientifically", sub:"Questioning and Predicting", def:"The variable that is measured or observed in an experiment, expected to change in response to the independent variable."},
{id:"w-controlled-var", term:"Controlled variable", topic:"Working Scientifically", sub:"Questioning and Predicting", def:"A variable that is kept constant throughout an experiment so that it does not affect the result being measured."},
{id:"w-validity", term:"Validity", topic:"Working Scientifically", sub:"Planning and Conducting Investigations", def:"The extent to which an investigation tests what it claims to test, achieved by controlling all variables except the one being investigated."},
{id:"w-reliability", term:"Reliability", topic:"Working Scientifically", sub:"Planning and Conducting Investigations", def:"The extent to which repeated measurements or trials of an investigation produce consistent results."},
{id:"w-accuracy", term:"Accuracy", topic:"Working Scientifically", sub:"Planning and Conducting Investigations", def:"How close a measured value is to the true or accepted value, influenced by the precision of equipment and technique used."},
{id:"w-secondary-data", term:"Secondary-sourced data", topic:"Working Scientifically", sub:"Processing and Analysing Data", def:"Data that was not collected first-hand by the investigator, but obtained from another source such as a published study or database."},
];
