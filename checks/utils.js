export const regExpCheck = (title, pattern, textList) => {
  const titleLine = '><><><><><><><><><><><><><><><><><><><><><><><><><><><';
  const sectionLine = '-------------------------------';

  console.log(titleLine);
  console.log(title, ':', pattern);
  console.log(titleLine);
  textList.forEach((text) => {
    const result = pattern.exec(text);
    console.log('input:', text);
    console.log('result:', result);
    console.log(sectionLine);
  });
};
