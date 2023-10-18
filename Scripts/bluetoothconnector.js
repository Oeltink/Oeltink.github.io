function transmit(host,data){
    navigator.bluetooth.requestDevice({
        filters: [{
          namePrefix: "Airpods"
        }],
        exclusionFilters: [{
          name: ""
        }],
        optionalServices: ['battery_service']
      })
      .then(device => { /* … */ })
      .catch(error => { console.error(error); });
    }
    (function () {
      var old = console.log;
      var logger = document.getElementById('log');
      console.log = function (message) {
          if (typeof message == 'object') {
              logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
          } else {
              logger.innerHTML += message + '<br />';
          }
      }
  })();