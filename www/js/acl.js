var api = "http://calculator.dswip.com/";  

// setInterval(otentikasi, 3000);
function otentikasi(){
    
    $(document).ready(function(e){  

        // var userid = localStorage.getItem("userid");
        // var log = localStorage.getItem("log");
            
        var nilai = '{ "userid":"'+localStorage.userid+'", "log":"'+localStorage.log+'", "mobile":"1" }';
        $.ajax({
            type: 'POST',
            url: api+'agent/otentikasi',
            data : nilai,
            contentType: "application/json",
            dataType: 'json',
            success: function(data)
            {   
              if (data.status == false){ logout(); }
              else if (data.status == true){ category(16); /* category(16); */ }
            },
            error: function (request, status, error) {
                console.log('Request Failed...!'+error);
                alert('Request Failed Otentikasi Request...! - '+request.responseText);
                alert('Request Failed Otentikasi Status...! - '+error);
                alert('Request Failed Otentikasi Error...! - '+status);
            }
        })
        return false;

    }); // end document ready

}

function category(param){
       
    alert("Saya adalah function category");

    localStorage.removeItem("category");
    localStorage.removeItem("catname");
    localStorage.removeItem("model");
    localStorage.removeItem("modelname");
    localStorage.removeItem("pid");
       
    $(document).ready(function (e) {   
    
        var nilai = '{ "id":"'+param+'"}';
        
        $.ajax({
            type: 'POST',
            url: api+'api/category/',
            data : nilai,
            contentType: "application/json",
            dataType: 'json',
            success: function(data) 
            {
              for (i=0; i<data.content.length; i++){
//                  alert(data.content[i].name.toUpperCase());
                  var datax = data.content;
                  var con = "<div class=\"col-xs-4\"> <div class=\"thumbnail shadow\">"+
"<a onclick=\"series("+datax[i].id+",'"+datax[i].name+"');\" href=\"#\"> <img class=\"img-responsive\" id=\"pict\" src=\""+datax[i].image+"\" alt=\"\"> </a>"+
                            "<div class=\"caption\"> <h5 class=\"judul strong\"> "+datax[i].name.toUpperCase()+" </h5>"+
                            "</div> </div> </div>";
                  if (param == 7){ $("#doorbox").append(con); }else{ $("#windowbox").append(con); }
              }
            },
            error: function (request, status, error) {
               alert('Request Failed Category...!'+error);
                console.log('Request Failed Category...!');
            }
        }) 
        return false;
        
    });  // end document ready	
       
}

function logout(){

    localStorage.removeItem("username");
    localStorage.removeItem("userid");
    localStorage.removeItem("log");
    window.location = "login.html";
}

// ----------------------------- acl --------------------------------------------------------