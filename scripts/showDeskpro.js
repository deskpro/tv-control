lgtv = require("lgtv");
/*---------------------------------------------------------------------------*/
var retry_timeout = 10;
var run_test = function() {
  lgtv.discover_ip(retry_timeout, function(err, ipaddr) {
    if (err) {
      console.log("Failed to find TV IP address on the LAN. Verify that TV is on, and that you are on the same LAN/Wifi.");

    } else {
      console.log("Found TV at address " + ipaddr + ", running example.");
      lgtv.connect(ipaddr, function(err, response){
        if (!err) {
          // lgtv.input_pointer_move(0,-10);
          // lgtv.apps();
          lgtv.open_browser_at("http://deskpro.com", function(err, response){
            if (!err) {
              lgtv.disconnect();
            }
          });
        }
      });
    }
  });
};

run_test();