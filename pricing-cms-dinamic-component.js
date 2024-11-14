
<!-- Dinamic Price Table -->
<script>

//                        READ FIRST                               //
// Should replace the next variable names depending of your code  //
/* Custom variables 
   togle switch buton id -----------------------------> packageSwitch
   price number class    -----------------------------> price-number
   attribute name of price number amount year/month --> data-year or data-month
   "per month" or "per year" text class --------------> type-price-text.per-month
*/
  
$(document).ready(function () {
  var clicknum = 0;

  $('#packageSwitch').click(() => {
    // change month/year target
    $('.type-price-text.per-month').each(function () {
      var $this = $(this);
      var newText = (clicknum % 2 === 0) ? "Per month" : "Per year";
      $this.text(newText);
    });

    // save click event
    clicknum++;

    // change number target 
    $('.price-number').each(function () {
      var $this = $(this);
      var countTo = (clicknum % 2 === 0) ? $this.attr('data-year') : $this.attr('data-month');

			// number animation 
      $({ countNum: $this.text() }).animate({
        countNum: countTo
      },
      {
        duration: 500,
        easing: 'linear',
        step: function (now) {
          $this.text(Math.round(now.toFixed(2)));
        },
        complete: function () {
          $this.text(this.countNum);
        }
      });
    });
  });
});
  
</script>
