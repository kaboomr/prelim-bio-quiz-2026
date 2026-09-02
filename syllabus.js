// Preliminary Biology (NSW Stage 6, 2017 syllabus) — module and content-area map.
// Sub-areas mirror the syllabus's own inquiry-question headings within each module.
const SYLLABUS = {
  "Cells as the Basis of Life": ["Cell Structure", "Cell Function"],
  "Organisation of Living Things": ["Organisation of Cells", "Nutrient and Gas Requirements", "Transport"],
  "Biological Diversity": ["Effects of the Environment on Organisms", "Adaptations", "Theory of Evolution by Natural Selection"],
  "Ecosystem Dynamics": ["Population Dynamics", "Past Ecosystems", "Future Ecosystems"],
  "Working Scientifically": ["Questioning and Predicting", "Planning and Conducting Investigations", "Processing and Analysing Data", "Problem Solving and Communicating"]
};

// The NESA inquiry question for each content area, shown in the UI.
const SUB_INQUIRY = {
  "Cell Structure": "What distinguishes one cell from another?",
  "Cell Function": "How do cells coordinate activities within their internal environment and the external environment?",
  "Organisation of Cells": "How are cells arranged in a multicellular organism?",
  "Nutrient and Gas Requirements": "What is the difference in nutrient and gas requirements between autotrophs and heterotrophs?",
  "Transport": "How does the composition of the transport medium change as it moves around an organism?",
  "Effects of the Environment on Organisms": "How do environmental pressures promote a change in species diversity and abundance?",
  "Adaptations": "How do adaptations increase the organism's ability to survive?",
  "Theory of Evolution by Natural Selection": "What is the relationship between evolution and biodiversity?",
  "Population Dynamics": "What effect can one species have on the other species in a community?",
  "Past Ecosystems": "How do selection pressures within an ecosystem influence evolutionary change?",
  "Future Ecosystems": "How can human activity impact on an ecosystem?",
  "Questioning and Predicting": "Developing and evaluating questions and hypotheses for scientific investigation.",
  "Planning and Conducting Investigations": "Designing and conducting valid, reliable and accurate investigations.",
  "Processing and Analysing Data": "Selecting, processing and analysing primary and secondary data.",
  "Problem Solving and Communicating": "Solving scientific problems and communicating understanding."
};

// Indicative NESA weighting of course time. The four modules are 30 indicative
// hours each (25% apiece). Working Scientifically is embedded across all four
// rather than timetabled separately, so it carries no weight of its own.
const TOPIC_WEIGHT = {
  "Cells as the Basis of Life": 25,
  "Organisation of Living Things": 25,
  "Biological Diversity": 25,
  "Ecosystem Dynamics": 25,
  "Working Scientifically": 0
};

// Module numbers, used for display ordering and short labels.
const MODULE_NO = {
  "Cells as the Basis of Life": 1,
  "Organisation of Living Things": 2,
  "Biological Diversity": 3,
  "Ecosystem Dynamics": 4
};
