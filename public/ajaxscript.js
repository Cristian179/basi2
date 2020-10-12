$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
        var dati = $("#username").val();
        
        $.ajax({
            url: "/ajax",
            data: {
                username: dati
            },
            method: "POST",
            contentType: "application/x-www-form-urlencoded",
            success: function(res){
                console.log(res.from);
                $("#scriviqui").text(res.risp);
            },
            error: function(res){
                console.log("Erroree: "+ res);
            }
        });
    });


});

