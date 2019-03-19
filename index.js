window.onload = function(){
	setTimeout(function(){
		$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
		return false;
		}); 
	}, 500);
	
	//document.getElementById('main-bar').height = window.innerHeight;
	if(!mmmb) $('.window.up_height').css('height', (window.innerHeight + 50) + 'px');
	$('.poster').css('max-height', (window.innerHeight - 100) + 'px');
	console.log('dddd');
	
	if(mmmb) {
		$('#mob-ll').addClass('true');
	}
}

var open_answer_kk = -1;
function open_answer(this_, id){
	

	$('.isarmini .answers ul.ans li').removeClass('true');
	$('.sam_ans').hide(300);
	
	
	if(id == open_answer_kk){
		open_answer_kk = -1;
		return;
	}
	open_answer_kk = id;
	
	$('#ulans_li_' + id).show(300, function(){});
	$(this_).addClass('true');

}

function open_whyme_table(this_, id){
	$('.whyone').removeClass('true');
	$('.leftposter').removeClass('true');
	$('.whyone').find('.text').hide(300);
	
	$('#whyone_' + id).find('.text').show(300, function(){});
	$('#whyone_' + id).addClass('true');
	$('#leftposter_' + id).addClass('true');
}

function open_infa_bloks_ten(){
	$('#infa-bloks-ten').addClass('true');	
}
function close_infa_bloks_ten(){
	$('#infa-bloks-ten').removeClass('true');	
}