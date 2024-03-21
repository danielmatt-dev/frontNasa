var url = "http://localhost:3300/api/images/"

function postImage(){

    console.log(url);

    var myID = $('#id').val();
    var myImg = $('#img').val();
    var myCamara = $('#camara').val();
    var myFecha = $('#fecha').val();
    var myRover = $('#rover').val();

    var image = {
        id: myID,
        img_src: myImg,
        nombre_camara: myCamara,
        fecha_tierra: myFecha,
        nombre_rover:myRover
    };
    console.log(image);

    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data) {
            console.log(data);
            $('#resultado').html(JSON.stringify(data.RoverImages));
        },
        data: JSON.stringify(image)
    });
}

function getImages(){

    console.log(url);

    $.getJSON(url, 
        function(json) {
            var arrUsers = json.RoverImages;

            var htmlTableUsers = '<table border=1>';

            arrUsers.forEach(function(item) {
                console.log(item);
                htmlTableUsers += '<tr>' + 
                                        '<td>' + item.id + '</td>' +
                                        '<td>' + item.img_src + '</td>' +
                                        '<td>' + item.nombre_camara + '</td>' +
                                        '<td>' + item.fecha_tierra + '</td>' +
                                        '<td>' + item.nombre_rover + '</td>' +
                                   '</tr>'

            });

            htmlTableUsers += '</table>'

            $('#resultado').html(htmlTableUsers);

        });

}