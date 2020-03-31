$("#tombol-lanjut").click(function() {
  let nama = $("#nama").val();
  console.log(nama);
  if (nama == "") {
    console.log("WAJIB TULIS NAMA!");
  } else {
    $("#phase-1").addClass("hide");

    $("#phase-2").removeClass("hide");
    $("#nama-user").html(nama);
  }
});
