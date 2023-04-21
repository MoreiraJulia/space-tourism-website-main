$(".link-one").click(function() {
    $("#d1").show();
    $("#d2,#d3,#d4").hide();
});
$(".link-two").click(function() {
    $("#d2").show();
    $("#d1,#d3,#d4").hide();
});
$(".link-three").click(function() {
    $("#d3").show();
    $("#d1,#d2,#d4").hide();
});
$(".link-four").click(function() {
    $("#d4").show();
    $("#d1,#d2,#d3").hide();
});
  
$('.btn-links-planets').click(function(){
    $('.btn-links-planets').removeClass('selected')
    $(this).addClass('selected');
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  function openTechnology(evt, tecnologyName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tecnologyName).style.display = "block";
    evt.currentTarget.className += " active";
  }