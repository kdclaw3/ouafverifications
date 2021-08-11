require('dotenv').config();
const bent = require('bent');
const fs = require('fs');
let inputDir = './queries/'
let files = fs.readdirSync(inputDir);

let outputDir = './results/';
try {
  fs.rmdirSync(outputDir, { recursive: true });
} catch (err) {}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

async function test (outputFile, table, sql) {

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
  if (rs.items[0].resultSet.items.length > 0) {
    //console.log(table, rs.items[0].resultSet.items);

    let txt = rs.items[0].resultSet.items.length.toString() + '      ' + sql + '\n';
    console.log(txt);

    if (!fs.existsSync(outputFile)) {
      fs.writeFileSync(outputFile, txt);
    } else {
      fs.appendFileSync(outputFile, txt);
    }

  }

}

for (let i = 0, l = files.length; i < l; i++) {
  let file = files[i];

  let ofn = outputDir + file.replace(/.js/g, '') + '.txt';

  let query = require(inputDir + file);
  let keys = Object.keys(query);
  keys.sort(); // alphabetize
  for (let i = 0, l = keys.length; i < l; i++) {
    let key = keys[i];
    setTimeout(() => {
      console.log(i, 'of', l);
      test(ofn, key, query[key]);
    }, (i + 1) * 250);
  }
}
