$('.carousel').slick({
  arrows:false,
  dots:false,
  autoplay: true,
  autoplaySpeed: 6000,
  centerMode:true,
  slidesToShow: 1,
  infinite:false,
});

$(document).ready(()=>{
    setTimeout(()=>{
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
        startWriting()
    },
        4747
    )
})