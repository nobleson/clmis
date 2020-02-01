$(document).ready(function(){
    buildArtisanCard(getArtisansList(),"artisans_card_blocker")

   // $("[type=button]").button();
   $(document).on('click','.toogle-control',function(){
    $(this).button('toggle');
    if ($(this).text()==="Less"){
      //$(this).button('more');
      $(this).text()= "More"
    }
    else {
       // $(this).button('reset');
       $(this).text() ="Less"
    }
   })
});


function getArtisansList(){
    var dataString = ["loadarticles"];
    var jsonData;
    $.ajax
      ({
      type: "GET",
      url: "/api/artisan/getall",
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

function buildArtisanCard(data,e){
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
              var ln  = obj.uniqueLearnersNumber;
              var competency =obj.competencyLevel;
              var address = obj.contactAddress;
              var city      = obj.cityOfResidence;
              var residence = obj.stateOfResidence;
              var mail     = obj.emailAddress;
              var photo = obj.photo;
              var phone = obj.phoneNumber;
              
              var group = '<div class="col-sm-6 col-md-6 col-lg-4 col-xs-12">'+
                            '<div class="service-item  wow fadeInUpQuick animated" data-wow-delay="1.8s">'+
                            '<div class="icon-wrapper">'+
                            '<img class="mr-3" src='+photo+' alt="Sample photo" width="100px" height="100px">'+
                            '</div>'+
                            '<h6>'+name+' '+middle+' '+last+'</h6>'+
                            '<button   class="btn btn-common btn-xs toogle-control" data-toggle="collapse" data-target="#demo" data-more-text="more">Toogle Details</button>'+
                            '<div id="demo" class="collapse">'+
                            '<dl style="text-align: left;">'+
                            '<dt style="color:black">Unique ID</dt>'+
                            '<dd>'+ln+'</dd>'+
                            '<dt style="color:black"><strong>Compentency Level</strong></dt>'+
                            '<dd>'+competency+'</dd>'+
                            '<dt style="color:black"><strong>State Of Residence</strong></dt>'+
                            '<dd>'+residence+'</dd>'+
                            '<dt style="color:black"><strong>City</strong></dt>'+
                            '<dd>'+city+'</dd>'+
                            '<dt style="color:black"><strong>Address</strong></dt>'+
                            '<dd>'+address +'</dd>'+
                            '<dt style="color:black"><strong>Email</strong></dt>'+
                            '<dd>'+mail+'</dd>'+
                            '<dt style="color:black"><strong>Phone Number</strong></dt>'+
                            '<dd>'+phone+'</dd>'+
                            '</dl>'+
                            '</div>'
                            '</div>'
                            '</div>';
                           
          $(div).append(group);
      });    
//$("#group_count").text(count);
} 