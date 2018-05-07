var api = "http://calculator.dswip.com/";  

// setInterval(otentikasi, 3000);
function otentikasi(){
    
    $(document).ready(function(e){  

        // var userid = localStorage.getItem("userid");
        // var log = localStorage.getItem("log");
            
        var nilai = '{ "userid":"'+localStorage.userid+'", "log":"'+localStorage.log+'", "mobile":"1" }';
        alert(nilai);
        // $.ajax({
        //     type: 'POST',
        //     url: api+'agent/otentikasi',
        //     data : nilai,
        //     contentType: "application/json",
        //     dataType: 'json',
        //     success: function(data)
        //     {   
        //       if (data.status == false){ logout(); }
        //       else if (data.status == true){ category(7); category(16); }
        //     },
        //     error: function (request, status, error) {
        //         console.log('Request Failed...!'+error);
        //         alert('Request Failed Otentikasi...! - '+error);
        //     }
        // })
        // return false;

    }); // end document ready

}

// ----------------------------- acl --------------------------------------------------------