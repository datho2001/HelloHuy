 $(document).ready(function () {
     // $container = $('aside'),
     // $scrollTo = $('footer'),
     // $container.animate({
     //     scrollTop: $scrollTo.offset().top - $container.offset().top + $container.scrollTop
     // });
     $('input').click(function () {
         //alert("hello");
         $('#aside').hidden();
     })
     $('button').click(function () {
        //alert("hello cc");
         $('#aside').show();
     })
 });
