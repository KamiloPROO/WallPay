function CallEndPointPost(url, jsonArgs) {
    $.ajax({
        type: "POST",
        url: url,
        data: jsonArgs,
        success: function (data) {
            
            console.log(data);

            // var formData = JSON.stringify(data, null ,2);
            var formData = JSON.parse(data);

            // console.log(formData.Response);
    

            // console.log(formData.Respose);
            if (formData.Response === 707){

                window.location.href = URL_API_BASE;
                location.replace("Dash.html");
                location.href ="Dash.html";

                // console.log(formData);

            }else{
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