import * as utils from './utils.js';

export const checkConnect = () => {
  console.log('java script is connected!');
};

export const sample1 = () => {
  let title = 'Check 1';
  let pattern = new RegExp('....');
  let textList = ['test', 'box', 'abcde'];
  utils.regExpCheck(title, pattern, textList);
};
