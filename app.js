const fs = require('fs');
let inputDir = './queries/';
let files = fs.readdirSync(inputDir);

// remove and create the output directory
let outputDir = './results/';
try {
  fs.rmdirSync(outputDir, { recursive: true });
} catch (err) {
  null;
}
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// prep url calls
const { url = process.env.OUAF_SQLREST_URL, unpw = process.env.OUAF_SQLREST_USERNAMEPASSWORD } = process.env;
if (!url || !unpw) console.error('Error: Missing Params, URL:', url, 'UNPW:', unpw), process.exit(1);
const headers = { 'authorization': 'Basic ' + Buffer.from(unpw).toString('base64'), 'content-type': 'application/sql' };

async function test (outputFile, table, sql, print) {

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: sql
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const rs = await response.json();
  
  try {
    if (rs.items[0].resultSet.items.length > 0) {

      let txt = rs.items[0].resultSet.items.length.toString().padEnd(10) + sql + '\n';

      if (print && (rs.items[0].resultSet.items).length > 0) console.log(rs.items[0].resultSet.items);

      if (!fs.existsSync(outputFile)) {
        fs.writeFileSync(outputFile, txt);
      } else {
        fs.appendFileSync(outputFile, txt);
      }
    }
  } catch (e) {
    console.log('ERROR:');
    console.log(outputFile, table, sql, print);
    console.log('ERROR:', e);
  }

}

// let sum = 0;
for (let i = 0, l = files.length; i < l; i++) {
  const file = files[i];

  const ofn = outputDir + file.replace(/.js/g, '') + '.txt';

  const fileInput = require(inputDir + file);
  // allow an input file with printing defined
  const { print = false, queries } = fileInput;
  const keys = Object.keys(queries);

  // sum += keys.length;

  keys.sort(); // alphabetize
  for (let i = 0, l = keys.length; i < l; i++) {
    let key = keys[i];
    setTimeout(() => {
      console.log(i, 'of', l);
      test(ofn, key, queries[key], print);
    }, (i + 1) * 250); // because
  }
}

// console.log(sum);
