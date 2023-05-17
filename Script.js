const regex = /=(.*?);/;
        var a, b, c, indirizzo = [];

        function copy(address)
        {
          // Copy the text inside the text field
            navigator.clipboard.writeText(address);
          
          // Alert the copied text
          alert("Hai copiato l'indirizzo: " + address);
        }
        



        function makeRequest() {
            var username = document.getElementById("input1").value;
            const url = `https://cloudflare-dns.com/dns-query?name=${username}&type=TXT`;
            const headers = {
                'Accept': 'application/dns-json'
            };

            fetch(url, { headers })
                .then(response => response.json())
                .then(data => {
                console.clear();
                const txtData = data.Answer[0].data;
                a = data.Answer.length;
                for (var i = 0; i < a; i++) 
                {
                    if (data.Answer[i].data.includes("oa1:"))
                    {
                        b = data.Answer[i].data;
                        c = regex.exec(b);
                        console.log("i tuoi indirizzi sono: ", b);
                        
                        const stringa = b;
                        const inizio = stringa.indexOf("=") + 1; // Trova l'indice di inizio di "42"
                        const fine = stringa.indexOf(";"); // Trova l'indice di fine di "w" e aggiunge 1


/* vede prof? */        const porzioneStringa = stringa.substring(inizio, fine);
                        console.log(porzioneStringa); //boono
                        
                        const crypto1 = stringa.indexOf("oa1:") + 4;
                        const crypto2 = stringa.indexOf(" recipient_address=") + 1;

/* vede prof? */        const crypto = stringa.substring(crypto1, crypto2);

                        console.log(crypto);
                        
                        indirizzo.push({ label: crypto, address: porzioneStringa });
                        console.log(indirizzo);
                    }
                    
                }undefined
                // console.log(txtData);
                // console.warn(a);

                displayAddresses();
                

                indirizzo = [];
                })
                .catch(error => console.error(error));
          
        }

        function displayAddresses() {
            var output = document.getElementById("output");
            output.innerHTML = ""; // Resetta il contenuto dell'elemento di output

            for (var i = 0; i < indirizzo.length; i++) {
                var label = indirizzo[i].label;
                var address = indirizzo[i].address;
                var addressHTML = `<strong>${label}:</strong> <span class="pippo" onclick="copy('${address}')">${address}</span><br><br>`;
                output.innerHTML += addressHTML;
            }
        }
