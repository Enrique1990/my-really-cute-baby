function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
waitForElm('label[data-label-subsave]').then((elm) => {
        setTimeout(function(){
            document.querySelector('label[data-label-subsave]').click()
            document.querySelector('.button--add-to-cart[name="add"]').classList.add('button--subscription-selected')
            document.querySelector('label[data-label-subsave]').addEventListener('click', function(){
                document.querySelector('.button--add-to-cart[name="add"]').classList.add('button--subscription-selected')
            })
            document.querySelector('label[data-label-onetime]').addEventListener('click', function(){
                document.querySelector('.button--add-to-cart[name="add"]').classList.remove('button--subscription-selected')
            })
        }, 1000)
});
//code for sticky atc
function isInViewport (el) {
    let rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}
document.addEventListener('DOMContentLoaded', function(){
    let currentPrice = document.querySelector('.current_price').innerText
    setTimeout(function(){
        document.querySelector('.sticky-atc__price').innerHTML = '&nbsp;— ' + currentPrice;
        document.querySelector('.sticky-atc__price').classList.add('is-active');
    }, 1500)
    let allOptions = document.querySelectorAll('[data-value-handle]')
    for (let a=0; a < allOptions.length; a++){
        allOptions[a].addEventListener('click', function(){
            document.querySelector('.sticky-atc__price').classList.remove('is-active');
            setTimeout(function(){
                let currentPrice = document.querySelector('.current_price').innerText
                document.querySelector('.sticky-atc__price').innerHTML = '&nbsp;— ' + currentPrice;
                document.querySelector('.sticky-atc__price').classList.add('is-active');
            }, 1500)
        })
    }

    document.addEventListener('scroll', function(){
        if (isInViewport(document.querySelector('.sticky-atc-anchor'))){
            document.querySelector('.sticky-atc').classList.remove('sticky-atc--fixed')
        } else {
            document.querySelector('.sticky-atc').classList.add('sticky-atc--fixed')
        }
    })

    $(document).on('change', '.rc_widget__option__input', function(e) {
        if (this.classList.contains('rc_widget__option__input--onetime')) {
            document.querySelector('.button--add-to-cart .text').innerHTML = "Add to cart";
        } else {
            document.querySelector('.button--add-to-cart .text').innerHTML = "Subscribe";
        }

        document.querySelector('.sticky-atc__price').classList.remove('is-active');
        setTimeout(function(){
            let currentPrice = document.querySelector('.current_price').innerText;
            document.querySelector('.sticky-atc__price').innerHTML = '&nbsp;— ' + currentPrice;
            document.querySelector('.sticky-atc__price').classList.add('is-active');
        }, 1500)
    })
})