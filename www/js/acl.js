var api = "http://calculator.dswip.com/";  

// function helloword(){
//     alert("Hello World");
// }  

function otentikasi(){
    
    $(document).ready(function(){  
    
        alert("ini muncul setelah 3 detik");
        // setInterval(function(){ 
            
        //     // var nilai = '{ "userid":"'+localStorage.userid+'", "log":"'+localStorage.log+'", "mobile":"1" }';
        //     // $.ajax({
        //     //     type: 'POST',
        //     //     url: api+'agent/otentikasi',
        //     //     data : nilai,
        //     //     contentType: "application/json",
        //     //     dataType: 'json',
        //     //     success: function(data)
        //     //     {   
        //     //       if (data.status == false){ logout(); }
        //     //     },
        //     //     error: function (request, status, error) {
        //     //         alert('Request Failed...!', error, "error");
        //     //         console.log('Request Failed...!'+error);
        //     //     }
        //     // })
        //     // return false; 

        //     }, param);

    }); // end document ready

}

function otentikasi_interval(){
    
    alert("ini muncul setelah 3 detik");

    // $(document).ready(function(){  
        
        // setInterval(function(){ 
            
        //     // var nilai = '{ "userid":"'+localStorage.userid+'", "log":"'+localStorage.log+'", "mobile":"1" }';
        //     // $.ajax({
        //     //     type: 'POST',
        //     //     url: api+'agent/otentikasi',
        //     //     data : nilai,
        //     //     contentType: "application/json",
        //     //     dataType: 'json',
        //     //     success: function(data)
        //     //     {   
        //     //       if (data.status == false){ logout(); }
        //     //     },
        //     //     error: function (request, status, error) {
        //     //         alert('Request Failed...!', error, "error");
        //     //         console.log('Request Failed...!'+error);
        //     //     }
        //     // })
        //     // return false; 

        //     }, param);

    // }); // end document ready

}

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("userid");
    localStorage.removeItem("log");
    window.location = "login.html";
}


// ----------------------------- acl --------------------------------------------------------