(function($) {
  $.fn.fastSearch = function(options) {
    var settings = $.extend({
      searchElements: "table", // The elements that should be searched.
      searchContainer: "tr", // When we find an element, what should we show?
      caseSensitive: false // True for case sensitive search
    }, options);

    $(this).keyup(function() {
      term = $(this).val()

      if (!settings.caseSensitive) {
        term = term.toLowerCase()
      }

      $(settings.searchElements).each(function() {
        element = $(this)

        if (term == '') {
          element.closest(settings.searchContainer).show()
        } else {

          html = element.html()
          
          if (!settings.caseSensitive) {
            html = html.toLowerCase()
          }

          if (html.indexOf(term) !== -1) {
            element.closest(settings.searchContainer).show()
          } else {
            element.closest(settings.searchContainer).hide()
          }
        }
      })
    })
  };
 
}(jQuery));