// src/utils/tutorialLoader.js

// Dynamic tutorial loader using Vite's import.meta.glob
export const getTutorialMap = () => {
  const tutorialModules = import.meta.glob('../data/*Tutorial.js', { eager: true });
  const tutorials = {};

  Object.entries(tutorialModules).forEach(([path, module]) => {
    // Extract tutorial name from file path
    // e.g., '../data/sqlTutorial.js' -> 'sql'
    const fileName = path.split('/').pop().replace('.js', '');
    const tutorialName = fileName.replace('Tutorial', '').toLowerCase();
    
    if (module.default) {
      tutorials[tutorialName] = module.default;
    }
  });

  return tutorials;
};

export default getTutorialMap;
