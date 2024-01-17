function importAll(r) {
  r.keys().forEach(r);
}

// Import all *DataItem.js and *DataClass.js files under src/Data/
importAll(require.context("./", true, /(DataItem|DataClass)\.js$/));
