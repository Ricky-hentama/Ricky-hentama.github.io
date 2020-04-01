$(document).ready(function() {
  $("#tombol-lanjut").click(function() {
    let namaUser = $("#nama").val();
    $("#phase-1").addClass("hide");
    $("#phase-2").removeClass("hide");
    $("#nama-user").html(namaUser);
  });
});
