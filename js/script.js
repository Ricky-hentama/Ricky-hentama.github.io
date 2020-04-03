$(document).ready(function() {
  // kategori
  let k_toi = [
    ["adit"],
    ["ade"],
    ["apri"],
    ["agung"],
    ["alfat"],
    ["andre"],
    ["pandu"],
    ["arfan"],
    ["dena"],
    ["elvin"],
    ["faizal"],
    ["fuad"],
    ["gani"],
    ["galih"],
    ["hamdan"],
    ["habibi"]
  ];
  let k_mesum = [
    ["adit 2"],
    ["ade 3"],
    ["apri 4"],
    ["agung 5"],
    ["alfat 6"],
    ["andre 7"],
    ["pandu 8"],
    ["arfan 9"],
    ["dena 10"],
    ["elvin 11"],
    ["faizal 12"],
    ["fuad 13"],
    ["gani 14"],
    ["galih"],
    ["hamdan"],
    ["habibi"]
  ];

  // Akhir kategori
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
            let kartu = document.getElementsByClassName("kartu");

            // berdasarkan kategori
            if (kategori == "toi") {
              for (let i = 0; i < kartu.length; i++) {
                k_toi.forEach((e, i) => {
                  kartu[i].innerHTML = e;
                });
              }
            } else if (kategori == "mesum") {
              for (let i = 0; i < kartu.length; i++) {
                k_mesum.forEach((e, i) => {
                  kartu[i].innerHTML = e;
                });
              }
            }
          });
        }
      });
    }
  });
});
