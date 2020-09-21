(function () {
  const geoLocation = document.getElementById("coordinates");

  document.getElementById("bNameBtn").addEventListener("click", () => {
    const browserName = "Browser Name: " + navigator.appName;
    document.getElementById("bName").innerHTML = browserName;
  });

  document.getElementById("coordinatesBtn").addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      geoLocation.innerHTML = "Geolocation is not supported by this browser.";
    }
  });

  document.getElementById("pasteBtn").addEventListener("click", () => {
    let paste_promise = navigator.clipboard.readText();
    paste_promise
      .then((text) => {
        document.getElementById("pasteTxt").innerHTML = text;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function showPosition(position) {
    geoLocation.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;
  }
  function failOrSuccess(number) {
    return new Promise((resolve, reject) => {
      let num = 16;
      if (16 == number) {
        resolve("sucess");
      } else {
        reject("fail");
      }
    });
  }

  document.getElementById("subBtn").addEventListener("click", () => {
    let number = document.getElementById("numInput").value;
    getResult(number);
  });

  async function getResult(number) {
    try {
      let result = await failOrSuccess(number);
      document.getElementById("result").innerHTML = result;
    } catch (err) {
      document.getElementById("result").innerHTML = err;
    }
  }
  document.getElementById("subThenBtn").addEventListener("click", () => {
    let number = document.getElementById("numInput").value;
    failOrSuccess(number)
      .then((message) => {
        document.getElementById("result").innerHTML =
          "this is in 'then' and its a " + message;
      })
      .catch((message) => {
        document.getElementById("result").innerHTML =
          "this is in 'catch' and it's a " + message;
      });
  });
})();
