$(document).ready(function(){
    buildAssesorCard(getAssesorList(),"assesor_card_blocker")
});

function getAssesorList(){
    var dataString = ["loadarticles"];
    var jsonData;
    $.ajax
      ({
      type: "GET",
      url: "/api/assesor/getall",
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

function buildAssesorCard(data,e){
    var json = JSON.stringify(data); 
    console.log("group list json:",json);
    $("#"+e).empty();
    var div = document.getElementById(e);      
    var count = 0;
      $.each($.parseJSON(json), function(keys,obj) {
              count++;
              var id = obj._id;
              var name = obj.firstName;
              var middle = obj.middleName;
              var last = obj.lastName;
              var reg  = obj.regNumber;
              var address = obj.contactAddress;
              var location = obj.state;
              var email     = obj.email;
              var photo = obj.photo;
              var phone = obj.phoneNumber;
              
              var group = '<div class="offset-md-3 col-md-6 col-lg-6 col-sm-9 service-item wow fadeInUpQuick animated" data-wow-delay=".3s">'+
                            '<div class="media">'+
                            '<img class="mr-3" src='+photo+' alt="Sample photo">'+
                            '<div class="media-body container">'+
                            '<h4>'+name+' '+middle+' '+last+'</h4>'+
                            '<p>'+reg+'</p>'+
                            '<p class="bade badge-primary">'+address+'</p>'+
                            '<p class="bade badge-secondary">'+phone+'</p>'+
                            '</div>'
                            '</div>'
                            '</div>';
          $(div).append(group);
      });    
//$("#group_count").text(count);
} 