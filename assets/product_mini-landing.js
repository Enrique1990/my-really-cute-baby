$(document).ready(function() {
    $('.co-ord_selector').click(function(e) {
        e.stopPropagation();
        console.log('[CO-ORDS]');
        $('.co-ords_dropdown').toggle();
        $('.co-ord_selected_item').toggleClass('opened');
    });

    $('.co-ords_dropdown .co-ord-item').click(function(e) {
        e.stopPropagation();

        var productTitle = $(this).data('product-title');
        var productDesc = $(this).data('product-desc');
        var variantId = $(this).data('variant-id');
        var sellingPlanId = $(this).data('selling-plan');
        
        $('.co-ords_dropdown .co-ord-item').each(function() {
            $(this).removeClass('selected');
        });

        $('.co-ord_selected_content h5').text(productTitle);
        $('.co-ord_selected_content span').text(productDesc);
        $('#co-ord-product-id').val(variantId);
        $('#co-ord-selling-plan').val(sellingPlanId);
        
        $(this).addClass('selected');

        $('.co-ord_selected_item').removeClass('opened');
        $('.co-ords_dropdown').hide();
    });

    $('.button--add-to-cart').click(function() {
        var variantId = $('#co-ord-product-id').val();
        var sellingPlanId = $('#co-ord-selling-plan').val();
        bundle(variantId, sellingPlanId);

        setTimeout(function() {
            window.location = '/checkout';
        }, 1000);
    });

    function bundle(variantId, sellingPlanId) {
    //Ajax request to add special item to cart
        jQuery.ajax({
            type: "POST",
            url: '/cart/add.js',
            data: {
                quantity: 1,
                id: variantId,
                selling_plan: sellingPlanId
            },
            async: false
        })
    }

    $('body').click(function(e) {
        $('.co-ord_selected_item').removeClass('opened');
        $('.co-ords_dropdown').hide();
    })
});