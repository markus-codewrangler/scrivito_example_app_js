function importAll(r) {
  r.keys().forEach(r);
}

// Import all *EditingConfig.js files under src/Data/
importAll(require.context("./", true, /EditingConfig\.js$/));
