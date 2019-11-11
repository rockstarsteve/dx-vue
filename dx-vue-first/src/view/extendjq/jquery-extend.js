(function ($) {
  $.fn.extend({
    hello: function () {

      setTimeout("$(\"#div1\").css(\"background-color\",\"red\");", 2000);

      setTimeout("$(\"#div1\").css(\"background-color\",\"black\");", 4000);

      setTimeout("$(\"#div1\").css(\"background-color\",\"gold\");", 6000);
    },
    sayHello() {
      console.info(this.hello());
      console.info("hello !!!")
    }
  })
})(jQuery);

