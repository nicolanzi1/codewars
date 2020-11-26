const elementFormatter = (tag) =>
  function elementFunc(...texts) {
    return `<${tag}>${texts.join('')}</${tag}>`;
  };

const Format = {
  tags: ['div', 'h1', 'p', 'span'],
};

Format.tags.forEach((tag) => {
  Format[tag] = elementFormatter(tag);
});

Format.tags.forEach((ogTag) => {
  Format.tags.forEach((otherTag) => {
    //   Object.defineProperty ...
    Format[ogTag][otherTag] = Format[otherTag];
  });
});

module.exports = Format;
