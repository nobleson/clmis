'use strict';

function getTrainersList(){
  let self = this;
  return new Promise(function (resolve, reject){
   let herokuUrl = '/api/center/trainer/getall';
   axios.get(herokuUrl)
    .then(function (response){
      resolve(response)
    })
    .catch(function (error) {
      reject(error.message) 
    })
  })
  }


function buildCountCard(data,e){
    //var json = JSON.stringify(data); 
    
    //console.log("group list json:",json);
    $("#"+e).empty();
    var div = document.getElementById(e);      
    var count = 0;
       
      $.each($.parseJSON(json), function(keys,obj) {
              count++;
              var group = 
              '<div class="col-sm-6 col-md-3 col-lg-3">'+
                '<div class="fact-block clearfix wow fadeInUpQuick" data-wow-delay="0.3s">'+
                '<div class="facts-item">'+
                '<img src="/public/assets/img/asso/apple-touch-icon.png" width="100px" height="100px">'+
                '<div class="fact-count">'+
                '<h3><span class="counter">'+count+'</span>+</h3>'+
                '<h4>Trainees</h4>'+
                '</div>'
                '</div>'
                '</div>'
                '</div> ';                     
          $(div).append(group);

      });    
//$("#group_count").text(count);
} 