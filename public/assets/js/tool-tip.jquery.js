$(document).ready(function(){
  
  $("#myTooltip").tooltip({
      title:'<div class="tooltip-menu">' +
      '<h6 class="head py-1 ml-1">Adamawa Statistics</h6>'+
      '<ul>' +
      '<li> Trainees  <span class="badge badge-secondary float-right">50</span></li>' +
      '<li> Trainers  <span class="badge badge-primary float-right">50</span></li>' +
      '<li> Providers <span class="badge badge-secondary float-right">50</span></li>' +
      '<li> Companies <span class="badge badge-warning float-right">50</span></li>' +
      '</ul>' +
      '</div>',  
      html: true,
      placement: 'top',
      color:'white' 
  }); 
});