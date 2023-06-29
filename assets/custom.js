
   $( document ).ready(function() {
            
            function VariantChanged(){
                var activeVariant = $('select[name="id"]').val();
                var faqWrap = $('.FAQ-wrap[data-id="'+activeVariant+'"]');

                $('.variant-info, .FAQ-wrap').hide().removeClass('active');


                $('.variant-info[daata-id="'+activeVariant+'"]').fadeIn().addClass('active');

                if ( faqWrap.hasClass('no-faq')) {
                    faqWrap.hide().removeClass('active');
                    $('.Faq--section').hide();
                } else {
                    faqWrap.fadeIn().addClass('active');
                    $('.Faq--section').show();
                }
            }


            $('.variant-input').on('change', function(){
              //  console.log('tested');
                VariantChanged();
            });

            VariantChanged();

            $(".Product__accordion_head").click(function() {
              if ($('.Product__accordion_body').is(':visible')) {
                $(".Product__accordion_body").slideUp(300);
                $(".plusminus").text('+'); 
              }
              if ($(this).next(".Product__accordion_body").is(':visible')) {
                $(this).next(".Product__accordion_body").slideUp(300);
                $(this).children(".plusminus").text('+');
              } else {
                $(this).next(".Product__accordion_body").slideDown(300);
                $(this).children(".plusminus").text('-');
              }
            });

            // $(window).scroll(function(e){ 
            //   var $el = $('.product__photos'); 
            //   var isPositionFixed = ($el.css('position') == 'fixed');
            //   if ($(this).scrollTop() > 200 && !isPositionFixed){ 
            //     $el.css({'position': 'fixed', 'top': '0px'}); 
            //   }
            //   if ($(this).scrollTop() < 200 && isPositionFixed){
            //     $el.css({'position': 'static', 'top': '0px'}); 
            //   } 
            // });
            var Tabs = $('.PageTabs--Head--item');
            Tabs.on('click', function(){
              var $self = $(this),
                  Tab = $self.data('tab-id'),
                  $tabBody = $('#' + Tab);
          
              Tabs.removeClass('active');
              $self.addClass('active');
          
              $('.PageTabs--Body--item').removeClass('active').hide();
              $tabBody.addClass('active').show();
            });
    });
 