import axios from 'axios';
import global from '../_service/global';

const baseURL = global.domain;

const getquotes = async url => {
  let response = await axios.get(url);
  let data = response.data.slice(0, 11);
  return data;
};

const getSkillData = async () => {
  console.log(baseURL + 'skills');
  let response = await axios.get(baseURL + 'skills');
  let data = response.data;
  return data;
};

export default {
  getquotes,
  getSkillData,
};
