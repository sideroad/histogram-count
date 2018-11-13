function histogramCount(array, numberOfBucket, durationOfBucket) {
  const bin = [];
  for (var i = 0; i < numberOfBucket; i++) {
    bin.push(0);
  }

  array.forEach(function(item) {
    const index = Math.floor(item / durationOfBucket);
    bin.length > index ? bin[index]++ : bin[bin.length - 1]++;
  });
  return bin;
}

module.exports = histogramCount;
