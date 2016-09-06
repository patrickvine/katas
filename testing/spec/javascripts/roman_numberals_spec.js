describe("roman numberals kata", function() {

  it("1 to return I", function() {
    convertor = new RomanNumerals();
    expect(convertor.convert(1)).toBe('I');
  });

  it("2 to return II", function() {
    convertor = new RomanNumerals();
    expect(convertor.convert(2)).toBe('II');
  });

  it("4 to return IV", function() {
    convertor = new RomanNumerals();
    expect(convertor.convert(4)).toBe('IV');
  });

  it("5 to return V", function() {
    convertor = new RomanNumerals();
    expect(convertor.convert(5)).toBe('V');
  });

  it("6 to return VI", function() {
    convertor = new RomanNumerals();
    expect(convertor.convert(5)).toBe('V');
  });

  it("10 to return X", function() {
    convertor = new RomanNumerals();
    expect(convertor.convert(10)).toBe('X');
  });

  it("20 to return XX", function() {
    convertor = new RomanNumerals();
    expect(convertor.convert(20)).toBe('XX');
  });

  it("33 to return XX", function() {
    convertor = new RomanNumerals();
    expect(convertor.convert(33)).toBe('XXXIII');
  });
});
