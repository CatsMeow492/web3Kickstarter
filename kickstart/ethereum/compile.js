const path= require('path');
const solc = require('solc');
const fs = require('fs-extra');

const builtPath = path.resolve(__dirname, 'build');
//remove file in build module
fs.removeSync(builtPath);
const campaignPath = path.resolve(__dirname, 'contracts','Campaign.sol');
//read  content present in file
console.log(campaignPath);
const source = fs.readFileSync(campaignPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'Campaign.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};

//compile contract
var output = JSON.parse(solc.compile(JSON.stringify(input)));

//create build folder
fs.ensureDirSync(builtPath);
console.log(output);

for(let contract in output.contracts['Campaign.sol']){
  fs.outputJsonSync(
      path.resolve(buildPath, contract + '.json'),
      output.contracts['Campaign.sol'][contract].evm
  );
}


