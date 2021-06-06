
      function sendEmail() {
        Email.send({
          Host: "smtp.gmail.com",
        Username: "spkbride@gmail.com",
        Password: "lsfn mxvm azfm auuk",
            SecureToken: "security token of your smtp",
            To: "parumaniyan@gmail.com",
            From: "spkbride@gmail.com",
            Body: "SPK BRIDE BOOKING MESSAGE" + "<br/>" + "Customer Name:&nbsp;&nbsp;" + document.getElementById('name').value + "<br/>" + "customer number:&nbsp;&nbsp;" + document.getElementById('number').value + "<br/>" +  "Customer Choice:&nbsp;&nbsp;" + document.getElementById('spk').value + "<br/>" + "Customer Message:&nbsp;&nbsp;" + document.getElementById('message').value + "<br/><br/><br/>" +"Visit Our Site :https://spkbride.github.io",
            Subject: document.getElementById('name').value
            
        }).then( 
            message => alert("Message Send Successfully")
        );
    }
