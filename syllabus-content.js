// ====================================================================
// Preliminary Biology — syllabus "students learn about" content
// Dot points from the NESA Biology Stage 6 Syllabus (2017), Year 11.
// Used by the Syllabus Drills.
//
//   t = the dot point, as close to NESA wording as readability allows
//   k = key terms inside t that can be blanked out for the cloze game
//       (each MUST appear verbatim, same case, inside t)
//   x = true  -> never used as a "guess the sub-area" prompt or as a
//                decoy, because the wording is generic or duplicated
// ====================================================================
"use strict";

const SYL_CONTENT = {
  "Cells as the Basis of Life": {
    "Cell Structure": [
      {t:"Cells as the basic units of living things, containing subcellular structures/organelles to perform specific functions", k:["subcellular structures/organelles"]},
      {t:"Structural differences between prokaryotic and eukaryotic cells", k:["prokaryotic and eukaryotic"]},
      {t:"Structural differences between plant and animal cells", k:["plant and animal cells"]},
      {t:"The function of the nucleus in storing genetic material and controlling cell activities", k:["controlling cell activities"]},
      {t:"The function of mitochondria as the site of aerobic cellular respiration", k:["aerobic cellular respiration"]},
      {t:"The function of chloroplasts as the site of photosynthesis in plant cells", k:["site of photosynthesis"]},
      {t:"The function of the endoplasmic reticulum and Golgi apparatus in processing and packaging proteins", k:["processing and packaging proteins"]},
      {t:"The function of ribosomes as the site of protein synthesis", k:["site of protein synthesis"]},
      {t:"The function of the cell wall in providing structural support to plant cells", k:["structural support"]},
      {t:"Investigating cell structures using a light microscope, including calculating magnification", k:["calculating magnification"]},
      {t:"Comparing the relative scale of cells, organelles and molecules", k:["relative scale"], x:true}
    ],
    "Cell Function": [
      {t:"The relationship between surface area to volume ratio and a cell's ability to obtain nutrients and remove wastes", k:["surface area to volume ratio"]},
      {t:"Passive transport across the cell membrane by diffusion, including the effect of concentration gradient", k:["diffusion"]},
      {t:"Osmosis as the diffusion of water across a selectively permeable membrane", k:["Osmosis"]},
      {t:"Facilitated diffusion using membrane proteins as a form of passive transport", k:["Facilitated diffusion"]},
      {t:"Active transport as movement of particles against a concentration gradient, requiring energy (ATP)", k:["against a concentration gradient"]},
      {t:"The effect of surface area, temperature and concentration gradient on the rate of diffusion", k:["surface area, temperature and concentration gradient"]},
      {t:"Enzymes as biological catalysts that increase the rate of biochemical reactions by lowering activation energy", k:["lowering activation energy"]},
      {t:"The lock-and-key and induced-fit models of enzyme-substrate interaction", k:["lock-and-key and induced-fit"]},
      {t:"The effect of temperature, pH and substrate concentration on the rate of enzyme-controlled reactions", k:["temperature, pH and substrate concentration"]},
      {t:"Aerobic respiration as the breakdown of glucose in the presence of oxygen to release energy, carbon dioxide and water", k:["Aerobic respiration"]},
      {t:"Anaerobic respiration as the breakdown of glucose without oxygen, producing lactic acid or ethanol", k:["Anaerobic respiration"]},
      {t:"Photosynthesis as the conversion of light energy into chemical energy, producing glucose and oxygen from carbon dioxide and water", k:["Photosynthesis"]},
      {t:"Conducting a first-hand investigation into the effect of an environmental variable on enzyme activity", k:["environmental variable on enzyme activity"], x:true}
    ]
  },
  "Organisation of Living Things": {
    "Organisation of Cells": [
      {t:"The hierarchy of organisation from cells to tissues to organs to systems to organism", k:["cells to tissues to organs to systems"]},
      {t:"Tissues as groups of specialised cells that perform a similar function", k:["Tissues"]},
      {t:"Organs as structures composed of two or more tissue types working together for a common function", k:["Organs"]},
      {t:"Stem cells as unspecialised cells capable of differentiating into specialised cell types", k:["differentiating"]},
      {t:"Examples of plant tissues, including epidermal, vascular and ground tissue", k:["epidermal, vascular and ground tissue"]},
      {t:"Examples of animal tissues, including epithelial, connective, muscle and nervous tissue", k:["epithelial, connective, muscle and nervous"]},
      {t:"The advantages of increased cellular specialisation and differentiation in multicellular organisms", k:["specialisation and differentiation"]}
    ],
    "Nutrient and Gas Requirements": [
      {t:"Autotrophs as organisms that synthesise their own organic nutrients, typically using light energy", k:["Autotrophs"]},
      {t:"Heterotrophs as organisms that obtain organic nutrients by consuming other organisms", k:["Heterotrophs"]},
      {t:"The gas and nutrient requirements of autotrophs, including carbon dioxide, water and light for photosynthesis", k:["carbon dioxide, water and light"]},
      {t:"The gas and nutrient requirements of heterotrophs, including organic molecules and oxygen for respiration", k:["organic molecules and oxygen"]},
      {t:"Structural adaptations for gas exchange in plants, including stomata and the internal leaf structure", k:["stomata"]},
      {t:"Structural adaptations for gas exchange in animals, including gills, tracheae and lungs", k:["gills, tracheae and lungs"]},
      {t:"The relationship between the surface area of a gas exchange structure and metabolic demand", k:["surface area of a gas exchange structure"]},
      {t:"Investigating the gas exchange structures of a variety of plants and animals", k:["gas exchange structures"], x:true}
    ],
    "Transport": [
      {t:"The role of transport systems in moving nutrients, gases and wastes around a multicellular organism", k:["transport systems"]},
      {t:"Xylem as the plant tissue that transports water and dissolved minerals from roots to leaves", k:["Xylem"]},
      {t:"Phloem as the plant tissue that transports the products of photosynthesis around the plant", k:["Phloem"]},
      {t:"Open circulatory systems, where blood is pumped directly into the body cavity", k:["Open circulatory"]},
      {t:"Closed circulatory systems, where blood remains within vessels as it circulates", k:["Closed circulatory"]},
      {t:"The structure of the mammalian heart and its role in pumping blood through a double circulatory system", k:["double circulatory system"]},
      {t:"The structure and function of arteries, veins and capillaries in the circulatory system", k:["arteries, veins and capillaries"]},
      {t:"Changes in the composition of blood as it moves through the body, including gas and nutrient exchange at capillary beds", k:["capillary beds"]}
    ]
  },
  "Biological Diversity": {
    "Effects of the Environment on Organisms": [
      {t:"Biotic and abiotic factors that influence the distribution and abundance of organisms in an ecosystem", k:["Biotic and abiotic factors"]},
      {t:"Abiotic factors including temperature, water availability, light and soil composition", k:["temperature, water availability, light and soil composition"]},
      {t:"Biotic factors including predation, competition, food availability and disease", k:["predation, competition, food availability and disease"]},
      {t:"Using quadrats and transects to collect data on species distribution and abundance", k:["quadrats and transects"]},
      {t:"The effect of limiting factors on the distribution and abundance of a species", k:["limiting factors"]},
      {t:"Investigating the abiotic characteristics of a local ecosystem", k:["abiotic characteristics"], x:true}
    ],
    "Adaptations": [
      {t:"Structural adaptations as physical features that increase an organism's chance of survival", k:["Structural adaptations"]},
      {t:"Physiological adaptations as internal processes that increase an organism's chance of survival", k:["Physiological adaptations"]},
      {t:"Behavioural adaptations as actions that increase an organism's chance of survival", k:["Behavioural adaptations"]},
      {t:"Adaptations of Australian plants and animals to survive in their local environment, including water and temperature extremes", k:["water and temperature extremes"]},
      {t:"Convergent evolution as unrelated species independently evolving similar adaptations to similar environments", k:["Convergent evolution"]},
      {t:"Divergent evolution as related species evolving different adaptations as they occupy different environments", k:["Divergent evolution"]},
      {t:"The relationship between an adaptation and the selection pressure that favoured it", k:["selection pressure"]}
    ],
    "Theory of Evolution by Natural Selection": [
      {t:"Charles Darwin and Alfred Russel Wallace's independent contributions to the theory of evolution by natural selection", k:["Charles Darwin and Alfred Russel Wallace"]},
      {t:"The process of natural selection: variation, overproduction, competition for resources, survival and reproduction of the fittest", k:["variation, overproduction, competition"]},
      {t:"Evidence for evolution from the fossil record, showing change in species over geological time", k:["fossil record"]},
      {t:"Evidence for evolution from comparative anatomy, including homologous and vestigial structures", k:["homologous and vestigial structures"]},
      {t:"Evidence for evolution from biogeography, explaining the distribution of related species", k:["biogeography"]},
      {t:"Evidence for evolution from molecular biology, comparing DNA and protein sequences between species", k:["molecular biology"]},
      {t:"The relationship between evolution by natural selection and the biodiversity of species on Earth", k:["biodiversity of species"]},
      {t:"Classification systems as a way of organising biodiversity, including the use of binomial nomenclature", k:["binomial nomenclature"]}
    ]
  },
  "Ecosystem Dynamics": {
    "Population Dynamics": [
      {t:"Predation as an interaction where one species (the predator) hunts and consumes another (the prey)", k:["Predation"]},
      {t:"Competition as an interaction where organisms compete for the same limited resources", k:["Competition"]},
      {t:"Mutualism as a symbiotic relationship in which both species benefit", k:["Mutualism"]},
      {t:"Commensalism as a symbiotic relationship in which one species benefits and the other is unaffected", k:["Commensalism"]},
      {t:"Parasitism as a symbiotic relationship in which one species benefits at the expense of the other", k:["Parasitism"]},
      {t:"Food chains and food webs as models of feeding relationships and energy flow within a community", k:["Food chains and food webs"]},
      {t:"The transfer and transformation of energy as it flows through a food chain, including energy loss at each trophic level", k:["energy loss at each trophic level"]},
      {t:"Carrying capacity as the maximum population size an environment can sustain", k:["Carrying capacity"]},
      {t:"Keystone species as species whose impact on their ecosystem is disproportionately large relative to their abundance", k:["Keystone species"]},
      {t:"Population growth curves and the factors that limit exponential growth in an ecosystem", k:["Population growth curves"]}
    ],
    "Past Ecosystems": [
      {t:"Fossils as preserved evidence of past life, formed under specific environmental conditions", k:["Fossils"]},
      {t:"Relative dating techniques, including the principle that deeper rock strata are generally older", k:["Relative dating"]},
      {t:"Absolute dating techniques, including radiometric dating of rocks and fossils", k:["Absolute dating"]},
      {t:"Using fossil evidence to reconstruct past environments and infer changes in selection pressures over time", k:["reconstruct past environments"]},
      {t:"Evidence of changing Australian environments over geological time, including changes in climate and vegetation", k:["changing Australian environments"]},
      {t:"The relationship between environmental change and evolutionary change within an ecosystem", k:["environmental change and evolutionary change"]}
    ],
    "Future Ecosystems": [
      {t:"Human activity as a cause of habitat destruction and fragmentation", k:["habitat destruction and fragmentation"]},
      {t:"The impact of introduced species on the biodiversity of an ecosystem", k:["introduced species"]},
      {t:"The impact of pollution on the biotic and abiotic components of an ecosystem", k:["pollution"]},
      {t:"The impact of climate change on the distribution and abundance of species", k:["climate change"]},
      {t:"Strategies used to conserve biodiversity, including protected areas, captive breeding and habitat restoration", k:["protected areas, captive breeding and habitat restoration"]},
      {t:"Evaluating the effectiveness of a strategy used to conserve a threatened species or ecosystem", k:["conserve a threatened species"], x:true}
    ]
  },
  "Working Scientifically": {
    "Questioning and Predicting": [
      {t:"Developing a testable hypothesis based on scientific knowledge and observation", k:["testable hypothesis"]},
      {t:"Identifying the independent, dependent and controlled variables in an investigation", k:["independent, dependent and controlled variables"]},
      {t:"Predicting the outcome of an investigation based on scientific reasoning", k:["Predicting the outcome"]}
    ],
    "Planning and Conducting Investigations": [
      {t:"Designing a valid investigation that tests one variable at a time while controlling others", k:["valid investigation"]},
      {t:"Ensuring reliability by repeating an investigation and calculating an average result", k:["reliability"]},
      {t:"Improving the accuracy of measurements through appropriate choice of equipment and technique", k:["accuracy"]},
      {t:"Selecting appropriate materials and equipment to safely and ethically conduct an investigation", k:["safely and ethically"]}
    ],
    "Processing and Analysing Data": [
      {t:"Constructing appropriate tables and graphs to represent primary data collected during an investigation", k:["tables and graphs"]},
      {t:"Identifying trends, patterns and relationships in processed primary and secondary data", k:["trends, patterns and relationships"]},
      {t:"Calculating percentage change, ratios and rates from collected data", k:["percentage change, ratios and rates"]},
      {t:"Evaluating the validity and reliability of primary and secondary data sources", k:["validity and reliability"]}
    ],
    "Problem Solving and Communicating": [
      {t:"Selecting and using appropriate scientific terminology and representations when communicating findings", k:["scientific terminology"]},
      {t:"Justifying conclusions based on the analysis and evaluation of collected data", k:["Justifying conclusions"]},
      {t:"Identifying further questions arising from the results of an investigation", k:["further questions"]}
    ]
  }
};

// Flatten SYL_CONTENT into the two flat arrays the Syllabus Drill games actually
// read from: SYL_ITEMS (one entry per dot point) and SYL_SUBS (one entry per
// content area). Every dot point gets a unique id and inherits its topic/sub.
const SYL_ITEMS = [];
const SYL_SUBS = [];
(function buildSylFlat(){
  let n = 0;
  for (const topic in SYL_CONTENT) {
    for (const sub in SYL_CONTENT[topic]) {
      const subKey = topic + '|' + sub;
      SYL_SUBS.push({ topic: topic, sub: sub, key: subKey });
      SYL_CONTENT[topic][sub].forEach(function(item){
        SYL_ITEMS.push({
          id: 'syl-' + (n++),
          topic: topic, sub: sub, subKey: subKey,
          t: item.t, k: item.k || [], x: !!item.x
        });
      });
    }
  }
})();
