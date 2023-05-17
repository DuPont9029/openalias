const regex = /=(.*?);/;
var addresses = [], cr = [], awc;


function makeRequest(username) {
  const url = `https://cloudflare-dns.com/dns-query?name=${username}&type=TXT`;
  const headers = {
    'Accept': 'application/dns-json'
  };

  return fetch(url, { headers })
    .then(response => response.json())
    .then(data => {
      //const addresses = [];
      for (let i = 0; i < data.Answer.length; i++) {
        const answer = data.Answer[i];
        if (answer.data.includes("oa1:")) {
          const match = regex.exec(answer.data);
          if (match) {
            const address = match[1];
            const crypto = answer.data.match(/oa1:([a-zA-Z]{3})/)[1];
            addresses.push(`${crypto}:${address}`);
          }
        }
      }
      return addresses;
    })
    .catch(error => {
      console.error(error);
      return []; // return empty array on error
    });
}


function removeCrypto(addresses) { // ["xmr:123", "btc:456"] -> ["123", "456"]
  return addresses.map(address => address.replace(/^[a-zA-Z]{3}:/, ''));
}





function openalias(str) {
makeRequest(str)
  .then(result => {
    cr = result;
    console.log(result); // ["xmr:123", "btc:456"]
    awc = removeCrypto(result);
    console.log(awc); // ["123", "456"]

    // do whatever you want with the arrays





  });
}

//! example
/* 
openalias("yuujikazami.xmr.id");
*/