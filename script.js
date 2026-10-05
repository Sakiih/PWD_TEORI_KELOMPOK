$(document).ready(function () {

    $("#nama").focus(function () {
        $("#errorNama").text("");
        $("#nama").removeClass("error");
    });

    $("#email").focus(function () {
        $("#errorEmail").text("");
        $("#email").removeClass("error");
    });

    $("#nohp").focus(function () {
        $("#errorNohp").text("");
        $("#nohp").removeClass("error");
    });

    $("#sesi").focus(function () {
        $("#errorSesi").text("");
        $("#sesi").removeClass("error");
    });

    $("#nama").blur(function () {
        var nama = $("#nama").val().trim();

        if (nama == "") {
            $("#errorNama").text("Nama wajib diisi!");
            $("#nama").addClass("error");
        }
        else if (nama.length < 3) {
            $("#errorNama").text("Nama minimal 3 karakter!");
            $("#nama").addClass("error");
        }
        else if (
            nama.indexOf("0") != -1 ||
            nama.indexOf("1") != -1 ||
            nama.indexOf("2") != -1 ||
            nama.indexOf("3") != -1 ||
            nama.indexOf("4") != -1 ||
            nama.indexOf("5") != -1 ||
            nama.indexOf("6") != -1 ||
            nama.indexOf("7") != -1 ||
            nama.indexOf("8") != -1 ||
            nama.indexOf("9") != -1
        ) {
            $("#errorNama").text(
                "Nama tidak boleh mengandung angka!"
            );

            $("#nama").addClass("error");
        }
    });

    $("#email").blur(function () {
        var email = $("#email").val().trim();

        if (email == "") {
            $("#errorEmail").text("Email wajib diisi!");
            $("#email").addClass("error");
        }
        else if (
            email.indexOf("@") == -1 ||
            email.indexOf(".") == -1
        ) {
            $("#errorEmail").text(
                "Email harus memiliki @ dan titik!"
            );

            $("#email").addClass("error");
        }
    });

    $("#nohp").blur(function () {
        var nohp = $("#nohp").val().trim();

        if (nohp != "") {

            if (
                nohp.indexOf("08") != 0 &&
                nohp.indexOf("62") != 0 &&
                nohp.indexOf("+62") != 0
            ) {
                $("#errorNohp").text(
                    "Nomor HP harus diawali 08, 62, atau +62!"
                );

                $("#nohp").addClass("error");
            }
            else if (nohp.indexOf("+62") == 0) {

                if (!$.isNumeric(nohp.substring(1))) {
                    $("#errorNohp").text(
                        "Nomor HP hanya boleh berisi angka!"
                    );

                    $("#nohp").addClass("error");
                }

            }
            else {

                if (!$.isNumeric(nohp)) {
                    $("#errorNohp").text(
                        "Nomor HP hanya boleh berisi angka!"
                    );

                    $("#nohp").addClass("error");
                }

            }
        }
    });

    $("#formPendaftaran").submit(function (event) {

        event.preventDefault();

        var nama = $("#nama").val().trim();
        var email = $("#email").val().trim();
        var nohp = $("#nohp").val().trim();
        var sesi = $("#sesi").val();
        var persetujuan = $("#persetujuan").prop("checked");

        var valid = true;

        $("#errorNama").text("");
        $("#errorEmail").text("");
        $("#errorNohp").text("");
        $("#errorSesi").text("");
        $("#errorPersetujuan").text("");
        $("#pesanError").text("");

        $("input").removeClass("error");
        $("select").removeClass("error");

        if (nama == "") {
            $("#errorNama").text("Nama wajib diisi!");
            $("#nama").addClass("error");
            valid = false;
        }
        else if (nama.length < 3) {
            $("#errorNama").text("Nama minimal 3 karakter!");
            $("#nama").addClass("error");
            valid = false;
        }
        else if (
            nama.indexOf("0") != -1 ||
            nama.indexOf("1") != -1 ||
            nama.indexOf("2") != -1 ||
            nama.indexOf("3") != -1 ||
            nama.indexOf("4") != -1 ||
            nama.indexOf("5") != -1 ||
            nama.indexOf("6") != -1 ||
            nama.indexOf("7") != -1 ||
            nama.indexOf("8") != -1 ||
            nama.indexOf("9") != -1
        ) {
            $("#errorNama").text(
                "Nama tidak boleh mengandung angka!"
            );

            $("#nama").addClass("error");
            valid = false;
        }

        if (email == "") {
            $("#errorEmail").text("Email wajib diisi!");
            $("#email").addClass("error");
            valid = false;
        }
        else if (
            email.indexOf("@") == -1 ||
            email.indexOf(".") == -1
        ) {
            $("#errorEmail").text(
                "Email harus memiliki @ dan titik!"
            );

            $("#email").addClass("error");
            valid = false;
        }

        if (nohp != "") {

            if (
                nohp.indexOf("08") != 0 &&
                nohp.indexOf("62") != 0 &&
                nohp.indexOf("+62") != 0
            ) {
                $("#errorNohp").text(
                    "Nomor HP harus diawali 08, 62, atau +62!"
                );

                $("#nohp").addClass("error");
                valid = false;
            }
            else if (nohp.indexOf("+62") == 0) {

                if (!$.isNumeric(nohp.substring(1))) {
                    $("#errorNohp").text(
                        "Nomor HP hanya boleh berisi angka!"
                    );

                    $("#nohp").addClass("error");
                    valid = false;
                }

            }
            else {

                if (!$.isNumeric(nohp)) {
                    $("#errorNohp").text(
                        "Nomor HP hanya boleh berisi angka!"
                    );

                    $("#nohp").addClass("error");
                    valid = false;
                }

            }
        }

        if (sesi == "") {
            $("#errorSesi").text(
                "Silakan pilih sesi workshop!"
            );

            $("#sesi").addClass("error");
            valid = false;
        }

        if (persetujuan == false) {
            $("#errorPersetujuan").text(
                "Kamu harus menyetujui pendaftaran!"
            );

            valid = false;
        }

        if (valid == true) {

            var nomor =
                "WP" + Math.floor(Math.random() * 1000);

            $("#hasilPendaftaran").empty();

            var kartu = $("<div>");

            var judul = $("<h3>")
                .text("✓ Pendaftaran Berhasil!");

            var pesan = $("<p>")
                .text(
                    "Data kamu berhasil didaftarkan."
                );

            var nomorKartu = $("<div>")
                .addClass("nomor")
                .text(
                    "Nomor Pendaftaran: " + nomor
                );

            var data = $("<div>")
                .addClass("data");

            var dataNama = $("<p>");

            dataNama.append(
                $("<span>").text("Nama")
            );

            dataNama.append(
                $("<span>").text(nama)
            );

            var dataEmail = $("<p>");

            dataEmail.append(
                $("<span>").text("Email")
            );

            dataEmail.append(
                $("<span>").text(email)
            );

            var dataNohp = $("<p>");

            dataNohp.append(
                $("<span>").text("No. HP")
            );

            if (nohp == "") {
                dataNohp.append(
                    $("<span>").text("-")
                );
            }
            else {
                dataNohp.append(
                    $("<span>").text(nohp)
                );
            }

            var dataSesi = $("<p>");

            dataSesi.append(
                $("<span>").text("Sesi")
            );

            dataSesi.append(
                $("<span>").text(sesi)
            );

            data.append(dataNama);
            data.append(dataEmail);
            data.append(dataNohp);
            data.append(dataSesi);

            kartu.append(judul);
            kartu.append(pesan);
            kartu.append(nomorKartu);
            kartu.append(data);

            $("#hasilPendaftaran")
                .append(kartu)
                .addClass("show");

            $("#pesanError")
                .text("Pendaftaran berhasil!")
                .css("color", "green");

            $("#formPendaftaran")
                .trigger("reset");

        }
        else {

            $("#pesanError")
                .text(
                    "Mohon periksa kembali data yang diisi."
                )
                .css("color", "red");

        }

    });

});