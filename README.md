# Preliminary Biology — Quiz Arena (student game)

Static site. Deploy with GitHub Pages: **Settings → Pages → branch `main`, folder `/root`**.

Students open the Pages URL, pick their name, set a 4-digit PIN, and play. Results
sync to Firebase, so nothing needs re-uploading when the class list changes.

## What's in here

| File | Purpose |
|---|---|
| `index.html` | The whole game — screens, styling and logic |
| `config.js` | Class list, Firebase project, XP settings |
| `syllabus.js` | Module and content-area map |
| `data.js` | 10 Section I multiple-choice questions (Exam Choice 2022) |
| `data-sa.js` | 17 Section II short-answer sub-questions (Exam Choice 2022), with official marking criteria and model answers |
| `glossary.js` | 95 concept/term definitions |
| `syllabus-content.js` | 104 NESA syllabus dot points |
| `chains.js` | 24 cause-and-effect chains |
| `diagrams.js` | 11 labelled diagrams (SVG) |

**On the exam bank:** Exam Choice 2022 is a text-only paper (no diagrams), so every
self-contained question was kept and diagram-dependent ones were dropped rather than
guessed at. Six more real papers with answer keys are sitting in the project files
(Independent 2022, Fort St 2022, Presbyterian 2018, Sydney Girls 2020, and two
undated-key papers) — those are scanned images, so growing the bank means running
them through a cropping pipeline, not retyping. Ask any time to keep extending it.
| `syllabus-games.js` | The four Syllabus Drill games |
| `store.js` | Firebase/localStorage data layer, XP, badges |
| `*.png` | Scanned question and stimulus images |

## Game modes

**Exam practice** — Multiple Choice Quiz, Short Answer Quiz, Exam Simulation
(20 questions / 20 minutes), My Mistakes, Daily Challenge, Survival, Duels.

**Concept practice** — Syllabus Drills (four games on the NESA dot points),
Matching, Flashcards with spaced repetition, Definition Quiz, Chain Builder,
Diagram Labelling.

**Progress** — Peer Marking, My Answers, Leaderboard, My Progress.

## Notes

- `config.js` contains the Firebase web config. Those keys are designed to be
  public; access is controlled by Firestore rules, not by hiding them.
- The teacher dashboard is deployed as a **separate** repository so students
  can never reach it. Never add `quiz-teacher` to this repo.
- `.nojekyll` stops GitHub Pages running Jekyll over the files — leave it in place.

See `SETUP.md` in the project folder for full setup instructions.
