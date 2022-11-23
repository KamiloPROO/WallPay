function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {

            console.log(data);

            // var formData = JSON.stringify(data, null ,2);
            var formData = JSON.parse(data);

            console.log(formData);

            const idcfLogin = formData.IdCf;
            const tokenLogin = formData.Token;

            // console.log( idcfLogin + " | " + tokenLogin);

            // console.log(formData.Respose);
            if (formData.Response === 707) {


                localStorage.setItem("idCfLogin", idcfLogin);
                localStorage.setItem("tokenLogin", tokenLogin);
                window.location.href = URL_API_BASE;
                location.replace("Dash.html");
                location.href = "Dash.html";

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario o Contraseña Incorrectas',

                })
            }



        },
        error: function () {
            alert("Ha ocurrido un error, por favor vuelva a intentarlo")
        }
    });
}