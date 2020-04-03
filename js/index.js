$(document).ready(function() {
  let btnSubmit = document.getElementById("btn-submit");
  btnSubmit.addEventListener("click", function() {
    let nameValue = document.getElementById("name").value;
    let form = document.getElementById("sample-form");
    let q2value = form["q2"].value;
    let q3Inputs = form["q3"];
    let q3Array = [];
    let q3Value = "";

    q3Inputs.forEach((input, index) => {
      if (input.checked) {
        q3Array.push(input.value);
        q3Value += input.value;
      }
    });

    let data = {
      name: nameValue,
      q2: q2value,
      q3: q3Value
    };

    const options = {
      method: "POST",
      mode: "no-cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch("https://sample-recruit.herokuapp.com/submit", options)
      .then(response => {
        console.log('response', response);
        return response.json();
      })
      .then(result => {
        // console.log('result', result);
        console.log(JSON.stringify(result, null, 2));
      })
      .catch(error => {
        console.log("Error: " + error.message);
      });
  });
});
