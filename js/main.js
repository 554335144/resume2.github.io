$(document).ready(function(){

// function screenIf(){
// 	var screenWidth = $(window).width();
// 	if( screenWidth <690 ){
// 		alert(1);
// 		$('.text-self').css('display','none');

// 	}
// }
// screenIf();


	$('.main-about .question-btn').click(function(){
		$(this).fadeOut();  //点我小按钮隐藏

		$('.question-list').animate({
			left:'30px',
		},500,function(){

		});  //问题清单向左移动

		$('.question-box').animate({
			top:'100px',
			left:'400px',
			width:'340px',
			height:'400px',
		},1000,function(){

		}) //盒子向右移动变大

	
		//问题清单点击切换内容

		$('.question-list li').click(function(){
			$('.text').eq($(this).index()).fadeIn(0).siblings().fadeOut(0);
			$('.text').eq($(this).index()).animate({
				top:'0',
			},500,function(){
				$('.text').eq($(this).index()).animate({
					top:'30px',
				},300);
			}).siblings().css('top','400px');

		});

	})

	//导航切换

	var mainHome = $('.main-home').offset().top; //获取内容区域到页面顶部距离
	var mainAbout =$('.main-about').offset().top;
	var mainWork =$('.main-work').offset().top;
	var demoA2 =$('.main-work .a-2').offset().top;

	$('.menu-home .menu-link').click(function(){ //鼠标点击滑到相应区域
		 $('html,body').animate({scrollTop:mainHome},500);
	});
	$('.menu-about .menu-link').click(function(){
		 $('html,body').animate({scrollTop:mainAbout},500);
	});
	$('.menu-work .menu-link').click(function(){
		 $('html,body').animate({scrollTop:mainWork},500);
	});
	$('.demo .menu-link').click(function(){
		 $('html,body').animate({scrollTop:demoA2},500);
	});




})