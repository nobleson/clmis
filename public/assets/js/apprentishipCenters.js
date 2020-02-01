$(document).ready(function(){
    buildApprentishipCenterCard(getApprentishipCenterList(),"apprentiship-center_card_blocker")
});

function getApprentishipCenterList(){

    var dataString = ["loadarticles"];
    var jsonData;
    $.ajax
      ({
      type: "GET",
      url: "/api/apprcenter/getall",
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

function buildApprentishipCenterCard(data,e){
    var json = JSON.stringify(data); 
    console.log("group list json:",json);
    $("#"+e).empty();
    var div = document.getElementById(e);      
    var count = 0;
      $.each($.parseJSON(json), function(keys,obj) {
              count++;
              var id = obj._id;
              var name = obj.aprCenterName;
              var address = obj.contactAddress;
              var phone = obj.phoneNumber;
              var local = obj.lgArea;
              var location = obj.state;
              var group = '<div class=" col-md-3 service-item wow fadeInUpQuick animated" data-wow-delay=".3s">'+
                            '<h2>'+name+'</h2>'+
                            '<p>'+address+'</p>'+
                            '<p class="badge badge-warning">'+phone+'</p>'+
                            '<p>'+local+'</p>'+  
                            '<p>'+location+'</p>'+    
                            '</div>';
          $(div).append(group);

      });    
//$("#group_count").text(count);
} 