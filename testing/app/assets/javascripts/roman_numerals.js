var RomanNumerals = function() {
  var self = this;

  self.convert = function(number) {
    mapping = [
      {'number': 10, 'symbol': 'X'},
      {'number': 5, 'symbol': 'V'},
      {'number': 4, 'symbol': 'IV'},
      {'number': 1, 'symbol':  'I'}
    ];
    for(var i = 0; i < mapping.length; i++) {
      roman_mapping = mapping[i];
      if(number >= roman_mapping['number']) {
        return roman_mapping['symbol'] + this.convert(number - roman_mapping['number']);
      }
    }
    return '';
  }
}
