(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  // StackOverflow Reputation
  $.getJSON("https://api.stackexchange.com/2.2/users/6182497?site=stackoverflow")
    .done(function (json) {
      $('#stackOverflowRep').text(json.items[0].reputation);
    })
    .fail(function (jqxhr, textStatus, error) {
      $('#stackOverflowRep').text("-1");
    });

  // Reddit Karma
  $.getJSON("https://www.reddit.com/user/dashidasher/about.json")
    .done(function (json) {
      $('#redditKarma').text(json.data.total_karma);
    })
    .fail(function (jqxhr, textStatus, error) {
      $('#redditKarma').text("-1");
    });

  // Fortnite Wins
  $.ajax({
    beforeSend: function (request) {
      request.setRequestHeader("Authorization", "9e55871a-22aa-472c-ba81-7aeb80a4cf66"); // Don't make your keys public like this, this one is being monitored and will be disabled if abused
    },
    dataType: "json",
    url: "https://fortnite-api.com/v2/stats/br/v2?name=dashydasher"
  })
    .done(function (json) {
      $('#fortniteWins').text(json.data.stats.all.overall.wins);
    })
    .fail(function (jqxhr, textStatus, error) {
      $('#fortniteWins').text("-1");
    });

})(jQuery); // End of use strict
