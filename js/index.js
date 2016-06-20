$(function(){

	$('.nr_xx .xx_tab li').each(function(i){
		$(this).click(function(){
			$('.nr_xx .xx_tab li').css({'backgroundColor':' #FFE6C0'})
			$(this).css({backgroundColor:'#FFD493'})
		})
	})

	$('section .left .bottom .bold').each(function(i){
          if(!$(this).html()==''){
          	$('section .left .bottom li:eq('+i+')').css({fontWeight:'bold'})
          }
	})
	$('section .left .bottom li').each(function(i){
			$(this).hover(function(){
			     $('section .left .bottom li:eq('+i+')').css({backgroundColor:'#FFE6C0'})
			      $('section .left .bottom #ll').css({backgroundColor:'rgba(255,255,255,0)'})

		      },function(){
			      $('section .left .bottom li:eq('+i+')').css({backgroundColor:'rgba(255,255,255,0)'})

					})
	})
	
	$('header .right input').click(function(){
		$('header .right .search .jt').css({'background-position':' -77px 0'})
	   
	})
	 var i=0;
	    $('header  .left .manager .name').click(function(){
	    	i++;
	    	if(i%2==1){
	    	   $('header .left .manager .yc').show();  
	    	}else{
	    	   $('header .left .manager .yc').hide();

	    	}
	    })
	$('section .left .top li a').each(function(i){
		$(this).hover(function(){
           $('section .left .top li:eq('+i+')').css({backgroundColor:'#FFE6C0'})
		
		},function(){
           $('section .left .top li:eq('+i+')').css({backgroundColor:'rgba(255,255,255,0)'})

		})
		
	})
	$('section .right .nr .you .bottom .tabs li').each(function(i){
          $(this).click(function(){
          	$('section .right .nr .you .bottom .tabs li').css({'border-bottom':'1px solid #FFAC30','backgroundColor':'#FFF2DE'})
          	$(this).css({backgroundColor:'white','border-bottom':'1px solid white'})
            $('section .right .nr .you .bottom .ders >ul>li').fadeOut()

            $('section .right .nr .you .bottom .ders >ul>li:eq('+i+')').fadeIn()
          })
     })


})