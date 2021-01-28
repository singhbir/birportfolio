let object = {
  domain: '',
};

if (process.env.NODE_ENV === 'production') {
  object.domain = 'https://singhbirbackend.herokuapp.com/';
} else {
  object.domain = 'https://singhbirbackend.herokuapp.com/';
}
module.exports = object;
