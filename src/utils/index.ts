// ─── Central image registry ───────────────────────────────────────────────────
// All site images MUST come from this file. Never use external URLs.

import img2149116562   from '../assets/2149116562.jpg';
import img94714        from '../assets/94714.jpg';
import img96081        from '../assets/96081.jpg';
import imgCorporate2   from '../assets/Corporate.jpg';
import imgSurmesure1   from '../assets/Surmesure1.jpg';
import imgTechno       from '../assets/Techno.png';
import imgTechnologie  from '../assets/Technologie.png';
import imgFinance      from '../assets/definition-fonds-investissement.jpg';
import imgElearning    from '../assets/E-learning2.jpg';
import imgDmplusTech   from '../assets/dmplus-tech.jpg';
import imgEconResearch from '../assets/economical-research.jpg';
import imgEmployeeWork from '../assets/employee-working-marketing-setting_23-2151871181.jpg';
import imgFinanceWebp  from '../assets/finance.webp';
import imgHero         from '../assets/hero.png';
import imgMeeting      from '../assets/manager-discussing-with-coworkers-night-meeting.jpg';
import imgTeaching     from '../assets/medium-shot-smiley-woman-teaching_23-2149272223.jpg';
import imgOfficeWorkers from '../assets/office-workers-using-finance-graphs.jpg';
import imgProgramming  from '../assets/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg';
import imgSoftSkills   from '../assets/soft-skills.jpeg';
import imgStatistiques from '../assets/statistiques.jpg';
import imgStudyGroup1  from '../assets/study-group-african-people_23-2149156428.jpg';
import imgStudyGroup2  from '../assets/study-group-african-people_23-2149156431.jpg';
import imgFormateurAfrique from '../assets/Formateur Afrique.jpg';
import imgWomanDebugging from '../assets/woman-debugging-optimizing-code-using-ai_482257-112287.jpg';
import imgWomanLibrary from '../assets/woman-sitting-library-with-her-laptop.jpg';

export const ASSETS = {
  // People & Team
  teamHandshake:    img94714,          // équipe / cohésion
  teamCollaborate:  img96081,          // collaboration bureau
  corporate:        imgCorporate2,     // corporate / équipe formelle
  formateurAfrique: imgFormateurAfrique, // formateur présentation
  studyGroup:       imgStudyGroup1,    // groupe étude africain
  studyGroup2:      imgStudyGroup2,    // groupe étude africain 2
  teaching:         imgTeaching,       // enseignante tableau blanc
  meeting:          imgMeeting,        // réunion nocturne

  // Tech & Work
  programming:      imgProgramming,    // développeur code
  womanDebugging:   imgWomanDebugging, // IA / coding femme
  womanLibrary:     imgWomanLibrary,   // femme laptop bibliothèque
  employeeWork:     imgEmployeeWork,   // marketing / bureau
  officeWorkers:    imgOfficeWorkers,  // finance / graphiques

  // Data & Finance
  econResearch:     imgEconResearch,   // data / graphiques BI
  finance:          imgFinance,        // finance / investissement
  financeWebp:      imgFinanceWebp,    // finance compact

  // Hero & Brand
  hero:             imgHero,           // hero PNG
  dmplusTech:       imgDmplusTech,     // brand DM+

  // Products & Services
  surmesure:        imgSurmesure1,     // sur mesure / service client
  elearning:        imgElearning,      // e-learning
  softSkills:       imgSoftSkills,     // soft skills
  statistiques:     imgStatistiques,   // statistiques

  // Tech graphics
  techno:           imgTechno,
  technologie:      imgTechnologie,
  mainHero:         img2149116562,     // femme laptop casque
} as const;

export type AssetKey = keyof typeof ASSETS;
