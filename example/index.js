const fs = require('fs');
// const output = require('d3node-output');
const svg2img = require('svg2img');
const d3 = require('d3-node')().d3;
const d3nBar = require('../');

const csvString = fs.readFileSync('data/data.csv').toString();
const data = d3.csvParse(csvString);

// create output file

const bar = d3nBar({ data: data })

svg2img(bar.svgString(), function(error, buffer) {
    fs.writeFileSync('example/output.png', buffer);
});

fs.writeFileSync('example/output.svg', bar.svgString());

fs.writeFileSync('example/output.html', bar.html());