var statistic = exports;

function meanHandler(sample) {
  var out = null;

  function sum(a, b) {
    return a + b;
  }

  if (sample.length) {
    out = (sample.reduce(sum) / sample.length);
  }

  return out;
}
statistic.mean = meanHandler;

function _sortSample (a, b) { return a - b; }

function medianHandler(sample) {
  sample.sort(_sortSample);
  var out = (sample[0] || null);
  var len = sample.length;
  var k = Math.floor(len / 2);
  var r = null;

  if (len % 2) {
    out = r = sample[k];
  } else {
    out = r = (sample[k - 1] + sample[k]) / 2.0;
  } 

  return out;
}
statistic.median = medianHandler;

function modeHandler(sample) {
  sample.sort(_sortSample);
  var out = (null);
  var tax = {};
  var keys = [];
  var values = [];
  var key = null;
  var value = null;
  var notRepeated = 0;

  function _taxMapHandler(i) {
    if (i in tax) {
      tax[i] += 1;
    } else {
      tax[i] = 1;
    }
  }
  sample.map(_taxMapHandler);

  keys = Object.keys(tax);

  function _extractValues(item) {
    return tax[item]; 
  }
  values = keys.map(_extractValues);

  function _maxKey(current, left) {
    return value = Math.max(current, left);
  }
  value = values.reduce(_maxKey);
  key = keys[values.indexOf(value)];
  
  function _notRepeated(item) {
    if (item === 1) {
      notRepeated += 1;
    } 
  }
  values.map(_notRepeated);

  if (!(values.length === notRepeated)) {
    out = parseFloat(key);
  }

  return out;
}
statistic.mode = modeHandler;

function rangeHandler(sample) {
  sample.sort(_sortSample);
  var out = null;
  var lastIndex = sample.length - 1;

  out = sample[lastIndex] - sample[0];

  return out;
}
statistic.range = rangeHandler;
