require('dotenv').config();
const bent = require('bent');
const fs = require('fs');
let inputDir = './queries/';
let files = fs.readdirSync(inputDir);

// remove and create the output directory
let outputDir = './results/';
try {
  fs.rmdirSync(outputDir, { recursive: true });
} catch (err) {}
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// prep url calls
const { OUAF_SQLREST_URL, OUAF_SQLREST_USERNAMEPASSWORD } = process.env;
const url = OUAF_SQLREST_URL;
const authorization = OUAF_SQLREST_USERNAMEPASSWORD ? 'Basic ' + Buffer.from(OUAF_SQLREST_USERNAMEPASSWORD).toString('base64') : null;
if (!url || !authorization) console.error('Error: Missing Params, URL:', url, 'Auth:', authorization), process.exit(1);

async function test (outputFile, table, sql, print) {

  const post = bent('POST', 200);
  let dee = await post(
    url,
    Buffer.from(sql),
    {
      authorization,
      'content-type': 'application/sql'
    }
  );

  let rs = await dee.json();
  try {
    if (rs.items[0].resultSet.items.length > 0) {

      let txt = rs.items[0].resultSet.items.length.toString() + '      ' + sql + '\n';

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

for (let i = 0, l = files.length; i < l; i++) {
  let file = files[i];

  let ofn = outputDir + file.replace(/.js/g, '') + '.txt';

  let fileInput = require(inputDir + file);
  // allow an input file with printing defined
  let keys = Object.keys(fileInput.queries);
  let print = fileInput.print !== undefined ? fileInput.print : false;

  keys.sort(); // alphabetize
  for (let i = 0, l = keys.length; i < l; i++) {
    let key = keys[i];
    setTimeout(() => {
      console.log(i, 'of', l);
      test(ofn, key, fileInput.queries[key], print);
    }, (i + 1) * 250); // because
  }
}
