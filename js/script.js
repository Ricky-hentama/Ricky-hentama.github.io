$(document).ready(function () {
  // phase-1
  $("#tombol-lanjut").click(function () {
    let namaUser = $("#nama").val();
    if (namaUser != "") {
      $("#phase-1").addClass("hide");
      $("#phase-2").removeClass("hide");
      $(".nama-user").html(namaUser);

      // phase-2
      $("#phase-2 button").click(function (e) {
        let jwb = e.target.dataset.jawab;
        if (jwb == "ora") {
          $("#phase-2").addClass("hide");
          $("#phase-3-ora").removeClass("hide");
          $(".nama-user").html(namaUser);
        }
        // phase-3
        else {
          $("#phase-2").addClass("hide");
          $("#phase-3-iya").removeClass("hide");
          $("#kategori li").click(function (e) {
            let kategori = e.target.dataset.kategori;
            let textKategori = e.target.innerText;

            $("#phase-3-iya").addClass("hide");
            $("#phase-4").removeClass("hide");
            $("#kategori-terpilih").html(textKategori);
            // bg kartu setelah diklik
            $(".ceklis").click(function () {
              $(this).parent().parent().toggleClass("bg-kartu");

              // hasil akhir
              let jml = [];
              $("#hasil").click(function () {
                jml = $(".bg-kartu").length;
                if (jml <= 4) {
                  alert(jml);
                }
              });
              // hasil akhir
            });
            let isi = document.getElementsByClassName("isi");
            // berdasarkan kategori
            if (kategori == "toi") {
              // ide
              $("#ide-terpilih").html(i_toi);
              // isi
              for (let i = 0; i < isi.length; i++) {
                k_toi.forEach((e, i) => {
                  isi[i].innerHTML = e;
                });
              }
            } else if (kategori == "mesum") {
              // ide
              $("#ide-terpilih").html(i_mesum);
              // isi
              for (let i = 0; i < isi.length; i++) {
                k_mesum.forEach((e, i) => {
                  isi[i].innerHTML = e;
                });
              }
            }
          });
        }
      });
    }
  });
});
