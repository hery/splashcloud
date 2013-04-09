$('span.vertical').each(function(index) {
  var freq = this.dataset.freq;
  $(this).css('font-size', freq*2);
});

$('span.horizontal').each(function(index) {
  var freq = this.dataset.freq;
  $(this).css('font-size', freq*2);
});
