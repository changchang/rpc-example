module.exports = function(app) {
  return {
    echo: function(msg, cb) {
      console.error('echo server: %j', msg);
      cb(null, msg);
    }
  };
};