const Format = require('./index');

describe('Sample tests', function () {
  it('should wrap input in the correct element', function () {
    expect(Format.div('Foo')).toBe(`<div>Foo</div>`);
  });

  it('tag property should have other tag properties', function () {
    expect(Format.div.h1('Foo')).toHaveProperty('h1');
  });

  it('tag property should have other tag properties many levels deep', function () {
    expect(Format.div.div.div.div.div).toHaveProperty('div');
  });

  it('should chain call together', function () {
    expect(Format.div.h1('Foo')).toBe(`<div><h1>Foo</h1></div>`);
  });

  it('should allow multiple arguments', function () {
    expect(Format.div('Foo', 'Bar')).toBe(`<div>FooBar</div>`);
  });

  it('Should allow you to store and reuse methods', function () {
    let wrapInDiv = Format.div;
    expect(wrapInDiv('Foo')).toBe(`<div>Foo</div>`);
  });
});
