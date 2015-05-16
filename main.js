var util = require('util'),
    http = require('http'),
    httpProxy = require('http-proxy');

var welcome = [
  '#    # ##### ##### #####        #####  #####   ####  #    # #   #',
  '#    #   #     #   #    #       #    # #    # #    #  #  #   # # ',
  '######   #     #   #    # ##### #    # #    # #    #   ##     #  ',
  '#    #   #     #   #####        #####  #####  #    #   ##     #  ',
  '#    #   #     #   #            #      #   #  #    #  #  #    #  ',
  '#    #   #     #   #            #      #    #  ####  #    #   #  '
].join('\n');

util.puts(welcome);

//
// Basic Http Proxy Server
//
httpProxy
  .createServer({
    target:'http://pixeldebugger.herokuapp.com'
  })
  .listen(process.env.PORT || 5000);

util.puts('http proxy server started.');
