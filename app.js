require('dotenv').config();
const bent = require('bent');
const fs = require('fs');
let inputDir = './queries/';
let files = fs.readdirSync(inputDir);

let outputDir = './results/';
try {
  fs.rmdirSync(outputDir, { recursive: true });
} catch (err) {}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

async function test (outputFile, table, sql, print) {

  const post = bent('POST', 200);
  let dee = await post(
    process.env.OUAF_SQLREST_URL,
    Buffer.from(sql),
    {
      'Authorization': process.env.OUAF_SQLREST_AUTHORIZATION,
      'Content-Type': 'application/sql'
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
  let keys = Object.keys(fileInput.queries);// || Object.keys(fileInput);
  // console.log(keys);
  let print = fileInput.print !== undefined ? fileInput.print : false;

  keys.sort(); // alphabetize
  for (let i = 0, l = keys.length; i < l; i++) {
    let key = keys[i];
    setTimeout(() => {
      console.log(i, 'of', l);
      test(ofn, key, fileInput.queries[key], print);
    }, (i + 1) * 250);
  }
}
