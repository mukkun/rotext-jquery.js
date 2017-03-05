/* -----------------------------------------------
/* Author : Ryota Otsuka - elites.jp
/* MIT license: http://opensource.org/licenses/MIT
/* GitHub : github.com/mukkun/rotext-jquery.js
/* How to use? : Check the GitHub README
/* v0.0.1
/* ----------------------------------------------- */
(function($) {
  $.fn.rotext = function(params) {
    let self = this;
    let settings = $.extend({
      exclusion: null,
      speed: 100,
      color: $(self).css('color'),
      rotate: 360,
      delay: 0,
      interval: 0,
      range: 100,
      anime: 'cubic-bezier(0.55, 0.06, 0.68, 0.19)',
    }, params);

    // Ready
    let charArr = $(self).text().split('');
    $(self).empty();

    $.each(charArr, function() {
      let $dom;

      if (this.match(/\n/)) {
        $dom = '<br />';
      } else if (!this.match(/\S/g)) {
        $dom = $('<span> </span>');
      } else {
        $dom = $('<span>' + this + '</span>');
        $dom.css({
          position: 'relative',
          display: 'inline-block',
          opacity: 0,
          color: settings.color,
          transition: 'all ' + settings.speed + 'ms ' + settings.anime,
          'transform-style': 'preserve-3d',
          'transition-duration': settings.speed + 'ms',
          transform: 'translate(' +
            (Math.random() - Math.random()) * settings.range + 'px, ' +
            (Math.random() - Math.random()) * settings.range + 'px' +
          ') ' +
          'rotateX(' + Math.random() * settings.rotate + 'deg) ' +
          'rotateY(' + Math.random() * settings.rotate + 'deg)'
        });
      }

      $(self).append($dom);
    });

    // StartAnimation
    let targets = $(self).children();
    let interval = settings.interval;

    $(targets).each(function(i, v) {
      setTimeout(function () {
        $(v).css({
          opacity: 1,
          transform: 'translate(0, 0)',
        });
      }, settings.delay + interval);

      interval += settings.interval;
    });

    return this;
  };
})(jQuery);
