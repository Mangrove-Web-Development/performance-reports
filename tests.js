const sites = [
  'https://mangrove-web.com',
  'https://action-analytics.com',
  'https://beneficialstate.org',
  'https://calseed.fund',
  'https://civicmakers.com',
  'https://cleanvehiclegrants.org',
  'https://designlinebuilds.com',
  'https://dijeaupoage.com',
  'https://dmarcian.com',
  'https://elementalexcelerator.com',
  'https://leonidfinance.io',
  'https://factoryos.com',
  'https://familypaths.org',
  'https://forestclimateconnect.org',
  'https://forthemany.org',
  'https://friendsofchinacamp.org',
  'https://geltor.com',
  'https://facet.ltd',
  'https://helpmegrowmarin.org',
  'https://www.huanani.com',
  'https://impact.beneficialstate.org',
  'https://informingchange.com',
  'https://kcceb.org',
  'https://missingmiddlehousing.com',
  'https://morosoconstruction.com',
  'https://www.natelenergy.com',
  'https://newfest.org',
  'https://niaimpactcapital.com',
  'https://niaimpactfunds.com',
  'https://niftylit.io',
  'https://blend.com',
  'https://www.one.app',
];
let test = {
  tests: []
};

for (site of sites) {
  for (let i = 0; i < 2; i++) {
    test.tests.push({
      "label": `${site} (${i === 0 ? 'Desktop' : 'Mobile'})`,
      "url": site,
      "recurring": {
        "frequency": "Daily",
        "nextTriggerTimestamp": 1666953235658
      },
      "gatherer": "psi",
      "settings": {
        "locale": "en-GB",
        "strategy": `${i === 0 ? 'desktop' : 'mobile'}`
      },
    })
  }
}

const json = JSON.stringify(test)

var fs = require('fs');
fs.writeFile('tests.json', json, 'utf8', function readFileCallback(err, data){
  if (err){
    console.log(err);
  } else {

  }});
