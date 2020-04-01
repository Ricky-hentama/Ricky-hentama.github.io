$(document).ready(function() {
  // phase-1
  $("#tombol-lanjut").click(function() {
    let namaUser = $("#nama").val();
    if (namaUser != "") {
      $("#phase-1").addClass("hide");
      $("#phase-2").removeClass("hide");
      $(".nama-user").html(namaUser);

      // phase-2
      $("#phase-2 button").click(function(e) {
        let jwb = e.target.dataset.jawab;
        if (jwb == "ora") {
          $("#phase-2").addClass("hide");
          $("#phase-3").removeClass("hide");
          $(".nama-user").html(namaUser);
        }
      });
    }
  });
});
