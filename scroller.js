// --- BEGIN CONFIG
var baseOfElements = $(".standard_section");
// --- END CONFIG

var lastScrollTop = 0;
var currentElement = baseOfElements.first();

function parseScroll() { 
  clearTimeout( $.data( this, "scrollCheck" ) );
  $.data( this, "scrollCheck", setTimeout(function() {
    var st = $(this).scrollTop();

    if (st > lastScrollTop){
        if (! currentElement.is(baseOfElements.last()))
          currentElement = currentElement.next();
    } else if (st < lastScrollTop){
        if (! currentElement.is(baseOfElements.first()))
          currentElement = currentElement.prev();
    }

    $(window).unbind("scroll", parseScroll);
    $('html, body').animate(
      {
        scrollTop: $(currentElement).offset().top - 50
      },
      {
        duration: 150,
        complete: function(){ 
          setTimeout( function(){$(window).bind("scroll", parseScroll); lastScrollTop=$(this).scrollTop(); }, 10 );
        }
      }
    );
  }, 250));
}

$(window).bind("scroll", parseScroll);
