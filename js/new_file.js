function jgg(n){
	var i = 0;//索引
	var j = 32;//基础步数	
	var z = j+n;//总步数；
	var speed = 100;
	start();
	function start(){
		jgg.timer = setInterval(function(){
			i++;
			z--;
			if(i==8){
				speed*=1.2;
				clearInterval(jgg.timer);
				i=0;
				start();
			}
			if(z==3){
				speed = 600;
				clearInterval(jgg.timer);
				start();
			}
			$(".jiugong_2_1 li").eq(i).css("background","aqua");
			$(".jiugong_2_1 li").eq(i).siblings("li").css("background","white");
			if(z==0){
				clearInterval(jgg.timer);
			}
		},speed)
	}
}