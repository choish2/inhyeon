$(document).ready(function() {
    $('.btn a').click(function(e) {
        e.preventDefault(); // 기본 링크 클릭 동작을 방지

        const imgBox = $('.page1 .img_box');
        const text = $('.page1 .more');

        if (imgBox.hasClass('hide')) {
            imgBox.css('height', '700px').removeClass('hide');
            text.text('자세히보기'); // 원하는 텍스트로 변경
        } else {
            imgBox.css('height', 'auto').addClass('hide');
            text.text('접어놓기'); // 원래 텍스트로 복원
        }
    });
});
$('#section2 .title a').click(function() {
 $(this).addClass('click');
    const clickbar = $('#section2 .title a')

    if (clickbar.hasClass('click')) {
        $(this).siblings().removeClass('click');    
    }

 return false;

})
$(document).ready(function() {
    const deliveryCharge = 3500; // 배송비
    const unitPrice = parseInt($('.pay').text().replace(/[^0-9]/g, '')); // 단가

    // 초기 수량 설정
    $('.num').text(0);
    updateTotalPrice(0); // 초기 가격 업데이트

    // 수량을 증가시키는 버튼 클릭 이벤트
    $('.add').click(function() {
        let number = parseInt($('.num').text());
        number += 1;
        $('.num').text(number);
        updateTotalPrice(number);
    });

    // 수량을 감소시키는 버튼 클릭 이벤트
    $('.remove').click(function() {
        let number = parseInt($('.num').text());

        // 수량이 0보다 큰 경우에만 감소
        if (number > 0) {
            number -= 1;
            $('.num').text(number);
            updateTotalPrice(number);
        }
    });

    // 총 가격 업데이트 함수
    function updateTotalPrice(quantity) {
        const totalPrice = quantity * unitPrice; // 총 상품 가격
        const totalWithDelivery = totalPrice + (quantity > 0 ? deliveryCharge : 0); // 배송비는 수량이 1 이상일 때만 추가

        // 총 금액 업데이트
        $('.amount').text(`총 수량 ${quantity}개`);
        $('.total span').html(`${totalWithDelivery.toLocaleString()}<p>원</p>`);
        $('.charges').text(`${(quantity > 0 ? deliveryCharge : 0).toLocaleString()}원`); // 배송비 업데이트
    }
});
