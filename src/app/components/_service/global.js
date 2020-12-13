let object = {
  domain: '',
};

if (process.env.NODE_ENV === 'production') {
  object.domain = 'http://192.168.1.11:1337/';
} else {
  object.domain = 'http://192.168.1.11:1337/';
}
module.exports = object;
