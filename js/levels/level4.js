import * as utils from '../utils/utils.js';

const checkConnect = () => {
  console.log('level4 is connected!');
};

const showSample1 = () => {
  let title = 'Sample 1';
  let pattern = new RegExp('I am ...');
  let textList = ['I am M', 'I am Ma', 'I am Max', 'I am 123', 'You are Max'];
  utils.regExpCheck(title, pattern, textList);
};

const showSample2 = () => {
  let title = 'Sample 2';
  let pattern = new RegExp('\\w');
  let textList = ['a', 'z', '1', '9', '?'];
  utils.regExpCheck(title, pattern, textList);

  pattern = new RegExp('\\W');
  utils.regExpCheck(title, pattern, textList);
};

const showSample3 = () => {
  let title = 'Sample 3';
  let pattern = new RegExp('\\s');
  let textList = [' ', 'a', '_', '1'];
  utils.regExpCheck(title, pattern, textList);

  pattern = new RegExp('\\S');
  utils.regExpCheck(title, pattern, textList);
};

const showSample4 = () => {
  let title = 'Sample 4';
  let pattern = new RegExp('\\d');
  let textList = ['a', 'z', '1', '9', 'A', 'Z'];
  utils.regExpCheck(title, pattern, textList);

  pattern = new RegExp('\\D');
  utils.regExpCheck(title, pattern, textList);
};

const showSample5 = () => {
  let title = 'Sample 5';
  let pattern = new RegExp('a*');
  let textList = ['a', 'b', 'aa', 'aaaa', 'bbbb', '1', '111'];
  utils.regExpCheck(title, pattern, textList);
};

const showSample6 = () => {
  let title = 'Sample 6';
  let pattern = new RegExp('a+');
  let textList = ['a', 'b', 'aa', 'aaaa', 'bbbb', '1', '111'];
  utils.regExpCheck(title, pattern, textList);
};

const showSample7 = () => {
  let title = 'Sample 7';
  let pattern = new RegExp('a{3}');
  let textList = ['a', 'aa', 'aaa', 'aaaa'];
  utils.regExpCheck(title, pattern, textList);
};

const showSample8 = () => {
  let title = 'Sample 8';
  let pattern = new RegExp('a{3,}');
  let textList = ['a', 'aa', 'aaa', 'aaaaaaaa', 'abcde'];
  utils.regExpCheck(title, pattern, textList);
};

const showSample9 = () => {
  let title = 'Sample 9';
  let pattern = new RegExp('a{2,5}');
  let textList = ['a', 'aa', 'aaa', 'aaaaaaaa', 'abcde'];
  utils.regExpCheck(title, pattern, textList);
};

const showSample10 = () => {
  let title = 'Sample 10';
  let pattern = new RegExp('a?');
  let textList = ['', 'a', 'aa', 'b', '1'];
  utils.regExpCheck(title, pattern, textList);
};

const showSample11 = () => {
  let title = 'Sample 11';
  let pattern = new RegExp('^a');
  let textList = ['', 'a', 'ab', 'b', '1', 'ba'];
  utils.regExpCheck(title, pattern, textList);
};

const showSample12 = () => {
  let title = 'Sample 12';
  let pattern = new RegExp('a$');
  let textList = ['', 'a', 'ab', 'b', '1', 'ba'];
  utils.regExpCheck(title, pattern, textList);
};

const showSample13 = () => {
  let title = 'Sample 13';
  let pattern = new RegExp('\\btest\\b');
  let textList = ['test', 'a test b', 'atestb'];
  utils.regExpCheck(title, pattern, textList);

  pattern = new RegExp('\\Btest\\B');
  utils.regExpCheck(title, pattern, textList);
};

const showSample14 = () => {
  let title = 'Sample 14';
  let pattern = new RegExp('[ab]');
  let textList = ['a', 'b', 'c', 'ab', 'cd'];
  utils.regExpCheck(title, pattern, textList);

  pattern = new RegExp('[^ab]');
  utils.regExpCheck(title, pattern, textList);
};

const showSample15 = () => {
  let title = 'Sample 15';
  let pattern = new RegExp('[A-z]');
  let textList = ['a', 'b', 'C', '1', '!'];
  utils.regExpCheck(title, pattern, textList);

  pattern = new RegExp('[^A-z]');
  utils.regExpCheck(title, pattern, textList);
};

const showSample16 = () => {
  let title = 'Sample 16';
  let pattern = new RegExp('aaa|bbb');
  let textList = ['aaa', 'bbb', 'ccc', '111', '!!!', 'a', 'b'];
  utils.regExpCheck(title, pattern, textList);
};

export const showSamples = () => {
  checkConnect();
  showSample1();
  showSample2();
  showSample3();
  showSample4();
  showSample5();
  showSample6();
  showSample7();
  showSample8();
  showSample9();
  showSample10();
  showSample11();
  showSample12();
  showSample13();
  showSample14();
  showSample15();
  showSample16();
};
