import {
  _id,
  _price,
  _times,
  _company,
  _boolean,
  _fullName,
  _taskNames,
  _postTitles,
  _description,
  _productNames,
} from './_mock';

export const _myAccount = {
  displayName: 'Jaydon Frankie',
  email: 'demo@minimals.cc',
  photoURL: '/assets/images/avatar/avatar25.webp',
};

export const _users = [...Array(24)].map((_, index) => ({
  // nodeId: `node-${_id(index)}`,  // Adding the nodeId field here
 
  // name: _fullName(index),
  
  
  // status: index % 4 ? 'active' : 'banned',
  
}));

export const _posts = [...Array(23)].map((_, index) => ({
}));

const COLORS = []

export const _products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;


});

export const _langs = [
 
];

export const _timeline = [...Array(5)].map((_, index) => ({
 
}));

export const _tasks = [...Array(5)].map((_, index) => ({
  id: _id(index),
  name: _taskNames(index),
}));

export const _notifications = [
 
];
