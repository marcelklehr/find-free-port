// Generated by CoffeeScript 1.8.0
(function() {
  var assert, fp, net, port_base;

  fp = require("./index");

  assert = require("assert");

  net = require("net");

  port_base = 3300;

  fp(port_base, function(err, port) {
    var s;
    assert(err === null);
    s = net.createServer().listen(port_base);
    return s.on('listening', function() {
      return fp(port_base, function(err, port) {
        assert(err === null);
        assert(port > port_base);
        return fp(port_base, port_base + 1, function(err, port) {
          assert(err !== null);
          return fp(port_base, port_base + 10, '0.0.0.0', 2, function(err, port1, port2) {
            assert(err === null);
            assert(port1 > port_base);
            assert(port2 > port_base);
            return s.close();
          });
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=test.js.map
