import axios from 'axios';
import global from '../_service/global';

const baseURL = global.domain;

const getquotes = async url => {
  let response = await axios.get(url);
  let data = response.data.slice(0, 11);
  return data;
};

const getSkillData = async () => {
  let response = await axios.get(baseURL + 'skills');
  let data = response.data;
  return data;
};

const getResumeData = async () => {
  console.log('resume api called');

  let response = await axios.get(baseURL + 'resumes');
  let data = response.data;
  return data;
};

const getProjects = async () => {
  let response = await axios.get(baseURL + 'projects');
  let data = response.data;
  return data;
};

export default {
  getquotes,
  getSkillData,
  getResumeData,
  getProjects,
};
