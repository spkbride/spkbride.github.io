
      function sendEmail() {
        Email.send({
          Host: "smtp.gmail.com",
        Username: "jayavel2838@gmail.com",
        Password: "zrrh pxgx mfdh krtr",
            SecureToken: "security token of your smtp",
            To: "jayavelbrightbridge@gmail.com",
            From: "jayavel2838@gmail.com",
            Body: "SPK BRIDE BOOKING MESSAGE" + "<br/>" + "Customer Name:&nbsp;&nbsp;" + document.getElementById('name').value + "<br/>" + "customer number:&nbsp;&nbsp;" + document.getElementById('number').value + "<br/>" +  "Customer Choice:&nbsp;&nbsp;" + document.getElementById('spk').value + "<br/>" + "Customer Message:&nbsp;&nbsp;" + document.getElementById('message').value,
            Subject: document.getElementById('name').value
            
        }).then( 
            message => alert("mail sent successfully")
        );
    }

