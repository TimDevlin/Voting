$(function() {
  $("#btn-cust").submit(function(event) {
    event.preventDefault();

    var nexPres = $("input:radio[name=candidate]:checked").val();

    if (nexPres === "Trump") {
      $("#Frump").show();
    }  else {
      $("#bigHil").show();
    }

  });
});
