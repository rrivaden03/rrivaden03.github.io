$(function() {
  smoothScrool(300);
  projectBelt();
  projectLoad();
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

    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });
}
