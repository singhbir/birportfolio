import axios from 'axios';

const getquotes = async url => {
  let response = await axios.get(url);
  let data = response.data.slice(0, 11);
  return data;
};

export default {
  getquotes,
};
