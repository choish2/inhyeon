$('.btn a').click(function() {
    const imgBox = $('.page1 .img_box');
   
    if (imgBox.hasClass('hide')) {
       
        imgBox.css('height', '700px').removeClass('hide');
      
    } else {
       
        imgBox.css('height', 'auto').addClass('hide'); 
        
    }

    return false;
});