var api = "http://calculator.dswip.com/";  

setInterval(otentikasi, 3000);
function otentikasi(){
    
    $(document).ready(function(){  
            
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
                },
                error: function (request, status, error) {
                    alert('Request Failed...!', error, "error");
                    console.log('Request Failed...!'+error);
                }
            })
            return false; 


    }); // end document ready

}

// ----------------------------- acl --------------------------------------------------------