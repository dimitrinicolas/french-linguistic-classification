const path = require('path');
const fs = require('fs');
const Viz = require('viz.js');
const { Module, render } = require('viz.js/full.render.js');

const viz = new Viz({ Module, render });

const SOURCE_DIR = 'src';
const BUILD_DIR = 'bin';
const INPUT_FILE_NAME = 'diagram.dot';
const OUTPUT_FILE_NAME = 'diagram.svg';

const input = fs.readFileSync(
  path.join(__dirname, '..', SOURCE_DIR, INPUT_FILE_NAME),
  { encoding: 'utf-8' }
);

viz
  .renderString(input)
  .then(result => {
    fs.writeFileSync(
      path.join(__dirname, '..', BUILD_DIR, OUTPUT_FILE_NAME),
      result,
      { encoding: 'utf-8' }
    );
    console.log('Done.');
  })
  .catch(error => {
    console.error(error);
  });
