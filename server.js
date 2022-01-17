var axios = require('axios');
var data = JSON.stringify({
  "Line": [
    {
      "DetailType": "SalesItemLineDetail",
      "Amount": 9890,
      "SalesItemLineDetail": {
        "ItemRef": {
          "name": "Services",
          "value": "1"
        }
      }
    }
  ],
  "CustomerRef": {
    "value": "1"
  }
});

var config = {
  method: 'post',
  url: 'https://sandbox-quickbooks.api.intuit.com/v3/company/4625319964620633028/invoice?minorversion=63',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..72QGxcvZoSFsZvBL_z_v4Q.gkqHI3ebdX2kc05J6wkqeKfvWBSCGPVCUbmWiea6ifBfQCfasQKwQZjYlt00DqaLgBaqx0J3jZ-bfGvnx9RKRFCm3AV7n0wlHkvi9HAtQ-HK5655lRF_CszReIN0kevspnox_OQjpNfU8zzmOAVKmSHTVz6PrBtpn3164xFukQaENFYCOIb3YoEygPovz18DHhT8aWuIOjsYJ3JMHl1MOBUIvqIzF9dhLxRuCqTEOCMGZOZHC7TpO1tPpdWChkzxSTS_zzotIFv1R-TzvdikRq-Ar66EqxZlErJa98a6g87ELrX3kHZCgp-9XlswFwLYmJTdlBavte6P5TIqRoqvlvW2S22-zG8OpQ0nHoHjOQzbAbB_J1R2emwHOgGnlQb_USMBgyP7T5As1KJcDoOq_m8L3e3IYqYBlX6fbA-iWPGhwtfdocAWSZjDYJV31r6ZKI2rDO8a5twyNCsUXn6XGUxTOiFOF_-1nAgmC_6um_KYZEWTfFrESHffZ81xcqJFFKRu47-oXwjBMfnEzaOM1-tfrt7sQTla1FAvjEFzgpj_BgKckIvO7gq0oFlWtN88GR2EtM1KV72u9KnApK3hSmnYMxHmO_Dr8bPjD-riMxGjHAZT8wHp4NzEw9tMYbbHS8i-aIUvFLEukc_yv-3Lu3uRRW0oYVJszxtbfRNHIiDwUapihjBkUv9aBmJEz9Oq786SE9hyiMtBEmKDEs0uV85_vQgNEvHtL1ZuYspSAqYMW67_GyIuhT21q1AwpQRg.ZTJfcqxlrgMPEcEQqjawBw'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
