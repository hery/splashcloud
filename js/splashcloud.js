$('span.vertical').each(function() {
  var freq = this.dataset.freq;
  $(this).css('font-size', freq*2);
});
