<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
$(document).ready(function(){
    var contentSection = $('.content-section');
    var navigation = $('nav');
    navigation. on('click', 'a', function(event){
        event.preventDefault(); //prevents previous event
        smoothscroll($(this.hash));
    });
    //update navigation on scroll.
    $(window). on('scroll', function(){
        updateNavigation();
    })
    //..and when the page starts
    updateNavigation();

    //11/FUNCTIONS
    function updateNavigation(){
        contentSection.each(function(){
            var sectionName=$(this).attr('id');
            var navigationMatch = $('nav alhref-"#' + sectionName + '"]');
            if( ($(this).offset().top - $(window).height()/2 < $(window).scrollTop()) && ($(this).offset().top + $ (this).height() - $(window).height()/2 > $(window).scrollTop())){
                navigationMatch.addClass('active-section');
            }
            else{
                navigationMatch.removeClass('active-section');
            }
        });
    }
    function smoothscroll(target){
        $('body,html').animate({
            scrollTop: target.offset().top
        }, 800);
    }
});