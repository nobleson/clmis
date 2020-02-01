$(document).ready(function(){
    buildCenterCard(getCenterList(),"center_card_blocker")
});

function getCenterList(){

    var dataString = ["loadarticles"];
    var jsonData;
    $.ajax
      ({
      type: "GET",
      url: "/api/trainingprovider/getall",
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

function buildCenterCard(data,e){
    var json = JSON.stringify(data); 
    console.log("group list json:",json);
    $("#"+e).empty();
    var div = document.getElementById(e);      
    var count = 0;
      $.each($.parseJSON(json), function(keys,obj) {
              count++;
              var id = obj._id;
              var name = obj.fullLegalName;
              var other = obj.acronym;
              var address = obj.officialAddress;
              var phone = obj.telephone;
              var email = obj.email;
              var photo = obj.logo;
              var location = obj.state;
              var group = '<div class=" col-md-3 service-item wow fadeInUpQuick animated" data-wow-delay=".3s">'+
                            //'<img src='+photo+' alt="" width="70" height="70" class="rounded-circle"/>'+
                            '<h2>'+name+'</h2>'+
                            '<p>'+other+'</p>'+
                            '<p>'+address+'</p>'+
                            '<p class="badge badge-primary">'+email+'</p>'+
                            '<p class="badge badge-warning">'+phone+'</p>'+
                            '<p>'+location+'</p>'+    
                            '</div>';
          $(div).append(group);

      });    
//$("#group_count").text(count);
} 