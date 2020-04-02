$(document).ready(function() {
  // kategori
  let k_toi = [
    "adit",
    "ade",
    "apri",
    "agung",
    "alfat",
    "andre",
    "pandu",
    "arfan",
    "dena",
    "elvin",
    "faizal",
    "fuad",
    "gani",
    "galih",
    "hamdan",
    "habibi"
  ];
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
          $("#phase-3-ora").removeClass("hide");
          $(".nama-user").html(namaUser);
        } else {
          $("#phase-2").addClass("hide");
          $("#phase-3-iya").removeClass("hide");

          $("#kategori li").click(function(e) {
            let kategori = e.target.dataset.kategori;
            let textKategori = e.target.innerText;
            $("#phase-3-iya").addClass("hide");
            $("#phase-4").removeClass("hide");
            $("#kategori-terpilih").html(textKategori);
            $(".kartu").each(function(i, e) {
              k_toi.each(function(z) {
                $(".kartu").html("z");
              });
            });
          });
        }
      });
    }
  });
});
