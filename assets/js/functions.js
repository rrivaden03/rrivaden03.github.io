$(function() {
  smoothScrool(300);
  projectBelt();
  projectLoad();
  $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });
})

//smoothscroll function applied from document ready function
function smoothScrool (duration) {
  $('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}

function projectBelt() {
  $('.thumb-unit').click(function() {
    $('.project-belt').css('left', '-100%');
    $('.project-container').show();
  });

  $('.project-return').click(function() {
    $('.project-belt').css('left', '0%');
    $('.project-container').hide(500);
  });
}

function projectLoad() {
  $.ajaxSetup ({ cache: true });
  $('.thumb-unit').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newFolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = '/projects/' + newFolder + '.html';
        // newHTML = '/projects/' + newFolder;

    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });
}

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

