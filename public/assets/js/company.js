'use stricts'

$(document).ready(function(){
    buildCompanyCard(getCompanyList(),"company_card_blocker")
});

function getCompanyList(){

    var dataString = ["loadarticles"];
    var jsonData;
    $.ajax
      ({
      type: "GET",
      url: "/api/company/getall",
      data: {dataString:dataString}, 
      dataType:"json",
      async: false,
      success: function(data)
      {
          jsonData = data;
    
      }
    
      });
      return  jsonData;
    } 

function buildCompanyCard(data,e){
    var json = JSON.stringify(data); 
    console.log("group list json:",json);
    $("#"+e).empty();
    var div = document.getElementById(e);      
    var count = 0;
      $.each($.parseJSON(json), function(keys,obj) {
              count++;
              var id = obj._id;
              var name = obj.companyName;
              var address = obj.companyAddress;
              var telephone = obj.companyTelephone;
              var email = obj.companyEmail;
              var photo = obj.logo;
              var group = '<div class="col-md-4 service-item wow fadeIn" data-wow-delay="0.3s">'+
                            '<img src='+photo+' alt="" width="70" height="70" class="rounded-circle"/>'+
                            '<h2>'+name+'</h2>'+
                            '<p>'+address+'</p>'+
                            '<p>'+telephone+'</p>'+
                            '<p>'+email+'</p>'+
                            '</div>';                       
          $(div).append(group);

      });    
//$("#group_count").text(count);
} 