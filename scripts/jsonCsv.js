function jsonCSV(json) {
  var array = json;
  var str = '';

  for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
          if (line != '') {
            line += ','
          }
          line += array[i][index];
      }
      str += line + '\r\n';
  }

  let result = str

  return result;
}
