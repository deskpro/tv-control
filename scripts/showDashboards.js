var config_path = '../config';
if (process.argv[2]) {
  config_path = process.env.PWD + '/' + process.argv[2];
}
config = require(config_path);
/*---------------------------------------------------------------------------*/
var showDashboards = function() {
  for (i in config) {
    const tv = config[i];
    tv.lgtv = require("lgtv2")({
      url: `ws://${tv.ip}:3000`,
      keyFile: 'keys/keyfile-' + tv.name
    });
    tv.lgtv.on('connect', function() {
      tv.lgtv.request('ssap://system.launcher/open', JSON.stringify({target: tv.url}), function (err, res) {
        tv.lgtv.disconnect();
      });
    })
  }
};

showDashboards();