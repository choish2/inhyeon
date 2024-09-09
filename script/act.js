
// function bar() {
//     let scrT= $(window).scrollTop();
//     let winw = $(window).width();
//     let winh = $(window).height();
//     let doch = $(document).height();
//     let ratio = winw / (doch-winh)

//     $('.bar').width(scrT * ratio)

// }

// $(window).scroll(function() {
//     bar();
// })
// //function = 이름이 없는 함수 //
// $(window).resize(function() {
//     bar();
// })


$('.img_box li').eq(0).mouseenter(function() {
    $(this).find('img').attr('src','images/brand2.png').addClass('main')
    $(this).siblings().find('img').attr('src','images/brand1.png').removeClass('main')
    
})

$('.img_box li').eq(1).mouseenter(function() {
    $(this).find('img').attr('src','images/brand2.png').removeClass('main')
    $(this).siblings().find('img').attr('src','images/brand1.png').addClass('main')
    
})

document.addEventListener('DOMContentLoaded', function() {
    const surveyResults1 = [
        { label: '매우 촉촉해요', percentage: 60 },
        { label: '적당해요', percentage: 30 },
        { label: '건조해요', percentage: 10 },
    ];

    document.querySelectorAll('.pbar1').forEach((pbar) => {
        const items = pbar.querySelectorAll('li');
        surveyResults1.forEach((result, i) => {
            const item = items[i];
            if (item) {
                const span = item.querySelector('span');
                span.style.width = `${result.percentage}%`;
            }
        });
    });

    const surveyResults2 = [
        { label: '번들거려요', percentage: 30 },
        { label: '촉촉해요', percentage: 40 },
        { label: '없는편이에요', percentage: 30 },
    ];

    document.querySelectorAll('.pbar2').forEach((pbar) => {
        const items = pbar.querySelectorAll('li');
        surveyResults2.forEach((result, i) => {
            const item = items[i];
            if (item) {
                const span = item.querySelector('span');
                span.style.width = `${result.percentage}%`;
            }
        });
    });

    const surveyResults3 = [
        { label: '너무좋아요, 또 구매할게요', percentage: 60 },
        { label: '고민돼요', percentage: 35 },
        { label: '재구매 의사 없어요', percentage: 5 },
    ];

    document.querySelectorAll('.pbar3').forEach((pbar) => {
        const items = pbar.querySelectorAll('li');
        surveyResults3.forEach((result, i) => {
            const item = items[i];
            if (item) {
                const span = item.querySelector('span');
                span.style.width = `${result.percentage}%`;
            }
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const pbar = entry.target;
                pbar.classList.add('animate'); 
                observer.unobserve(pbar); 
            }
        });
    }, { threshold: 1.5 });

    document.querySelectorAll('.pbar1, .pbar2, .pbar3').forEach(pbar => {
        observer.observe(pbar);
    });
});