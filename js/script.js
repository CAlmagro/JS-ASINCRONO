// XMLHttpRequest
$("#btnXHR").click(function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dummyjson.com/recipes/?delay=3000");
    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);

            data.recipes.forEach(function (item) {
                $("#resultXHR").append("<li>" + item.name + "</li>");
            });
        }
    };
    xhr.onerror = function () {
        console.error("Error XHR");
    };
    xhr.send();
});

// Uso de fetch()
$("#btnFetch").click(function () {
    fetch("https://dummyjson.com/recipes/?delay=3000")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(function (data) {
            data.recipes.forEach(function (item) {
                $("#resultFetch").append("<li>" + item.name + "</li>");
            });
        })
        .catch(function (error) {
            console.error("Error Fetch:", error);
        });
});

// Crear alerta
document.getElementById("btnAlert").addEventListener("click", function () {
    alert("¡Hola, mundo!");
});

// Promesas
var miPromesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var exito = true;
        exito ? resolve("¡Promesa cumplida!") : reject("Error en promesa");
    }, 2000);
});

miPromesa
    .then(function (result) {
        document.getElementById("resultPromise").textContent = result;
    })
    .catch(function (error) {
        console.error(error);
    });

// jQuery
$("#btnJQuery").click(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET",
        success: function (data) {
            console.log(data);
            data.forEach(function(item){
                $("#resultJQuery").append('<li>'+item.title+'</li>');
            }); 
        },
        error: function (error) {
            console.error("Error jQuery:", error);
        },
    });
});

// Axios
document.getElementById("btnAxios").addEventListener("click", function () {
    axios
        .get("https://jsonplaceholder.typicode.com/albums")
        .then(function (response) {
            document.getElementById("resultAxios").textContent = response.data.title;
            response.data.forEach(function(item){
                $("#resultAxios").append('<li>'+item.title+'</li>');
            }); 
        })
        .catch(function (error) {
            console.error("Error Axios:", error);
        });
});

$("btnImg").on("click",function(){
    fetch("https://jsonplaceholder.typicode.com/recipes/1")
        .then(function(response){
            f (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(function(response){
            console.log(response);

            $("imgCont").append('<img src="' +response.image+ '" alt="imagen de API">')
        })
        .catch(function(error){
            console.log(error);
        });
});