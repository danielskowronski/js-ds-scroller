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

    $(document).unbind("DOMMouseScroll", parseScroll);
    $('html, body').animate({
        scrollTop: $(currentElement).offset().top - 50
        },
        {
        duration: 150,
        complete: function(){ 
            setTimeout( function(){$(document).bind("DOMMouseScroll", parseScroll); lastScrollTop=$(this).scrollTop(); }, 10 );
          }
        }
    );
  }, 250));
}

$(document).bind("DOMMouseScroll", parseScroll);
