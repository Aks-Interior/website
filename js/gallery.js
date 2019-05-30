$(document).on("click", ".open-AddImgDialog", function () {
 var imgsrc = $(this).data('id');
 $('#my_image').attr('src',imgsrc);
});