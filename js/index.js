onload = function(){
	var header = document.querySelector(".header");
	var dian = document.querySelector(".dian");
	var jiugong = document.querySelector(".jiugong");
	var guize = document.querySelector(".guize");
	var you = document.querySelector(".you");
	var guize_2 = document.querySelector(".guize_2");
	var jiugong_3_1 = document.querySelector(".jiugong_3_1");
	var input_box = document.querySelector(".input_box");
	var input_qd_1 = document.querySelector(".input_qd_1");
	var input_qd_2 = document.querySelector(".input_qd_2");
	var $input_box = $(".input_box");//整个个人信息弹窗盒子
	var $mz = $(".mz");//名字输入框
	var $sj = $(".sj");//手机输入框
	var $input_qd_1 = $(".input_qd_1");//确定按钮
	var $input_qd_2 = $(".input_qd_2");//取消按钮
	var $input_pd = $(".input_pd");//提示字符
	var p_qd = document.querySelector(".p_qd");
	var zj = document.querySelector(".zj");
	var zj2 = document.querySelector(".zj2");
	var zj3 = document.querySelector(".zj3");
	var zj4 = document.querySelector(".zj4");
	var zj5 = document.querySelector(".zj5");
	var zj6 = document.querySelector(".zj6");
	var zj7 = document.querySelector(".zj7");
	var zj8 = document.querySelector(".zj8");
	var footer_3_1 = document.querySelector(".footer_3_1");
	var footer = document.querySelector(".footer");
	footer_3_1.onclick = function(){
		footer.style.display = "none";
		jiugong.style.display = "block";
		jiugong.style.opacity = "1";
	}
	
	
	
	dian.onclick = function(){
		header.style.display = "none";
		jiugong.style.display = "block";
	}
	you.onclick = function(){
		jiugong.style.opacity = "0.2";
		guize.style.display = "block";
	}
	guize_2.onclick = function(){
		jiugong.style.opacity = "1";
		guize.style.display = "none";
	}
	jiugong_3_1.onclick = function(){
		jiugong.style.opacity = "0.2";
		input_box.style.display = "block";
	}
	
	input_qd_2.onclick = function(){
		jiugong.style.opacity = "1";
		input_box.style.display = "none";
	}
	
				var a1 = document.querySelector(".a1");
				var a2 = document.querySelector(".a2");
				var a3 = document.querySelector(".a3");
				var a4 = document.querySelector(".a4");
				var a5 = document.querySelector(".a5");
				var a6 = document.querySelector(".a6");
				var a7 = document.querySelector(".a7");
				
				
				var n1 = document.querySelector(".n1");
				var n2 = document.querySelector(".n2");
				var n3 = document.querySelector(".n3");
				var n4 = document.querySelector(".n4");
				var n5 = document.querySelector(".n5");
				var n6 = document.querySelector(".n6");
				var n7 = document.querySelector(".n7");
	a1.onclick = function(){
		zj2.style.display = "none";
	}
	a2.onclick = function(){
		zj3.style.display = "none";
	}
	a3.onclick = function(){
		zj4.style.display = "none";
	}
	a4.onclick = function(){
		zj5.style.display = "none";
	}
	a5.onclick = function(){
		zj6.style.display = "none";
	}
	a6.onclick = function(){
		zj7.style.display = "none";
	}
	a7.onclick = function(){
		zj8.style.display = "none";
	}

//$jiangpin_btn = $(".jiangpin_btn");
//								$jiangpin_btn.on("click",function(){
//									q = $jiangpin_btn.index(this);
//									duijiang_mima();
//
//									
//								})
			$mz.on("blur",function(){//名字输入框判断
				if($mz.val()==""){
					$input_pd.eq(0).show().find("span").css("color","red");
				}else{
					$input_pd.eq(0).hide();
				}
			})
			$sj.on("blur",function(){//手机输入框判断
				if($sj.val()==""){
					$input_pd.eq(1).show().find("span").css("color","red").html("手机号不能为空");
				}else{
					var $sjval = $sj.val();
				//	var inp00= /^.{6,20}$/.test(inp0);
				    var $sjval2 =/^1[34578][\d]{9}$/.test($sjval);
					if($sjval2){					
						$input_pd.eq(1).hide();
					}else{
						$input_pd.eq(1).show().find("span").css("color","red").html("手机号不合法");
					}
					
				}
			})
			$input_qd_1.on("click",function(){//点击确定按钮
				var $sjval = $sj.val();
				//	var inp00= /^.{6,20}$/.test(inp0);
				var $sjval2 =/^1[34578][\d]{9}$/.test($sjval);
				if($sjval2 &&$mz.val()!=""){
//					$zhezhao.css("display","none");
					$input_box.css("display","none");
					$(".jiugong").hide();
					$(".footer").show();
				
				}else if($mz.val()==""){
					$input_pd.eq(0).show().css("color","red");
				}else if($sj.val()==""){
					$input_pd.eq(1).show().html("手机号不能为空").css("color","red");
				}else if($sj.val()!="" && !$sjval2){
					$input_pd.eq(1).show().find("span").css("color","red").html("手机号不合法");
				}
				else{
					$zhezhao.show();
					$input_box.show();
				}
//				$footer.css("display","footer");				
			})
			$input_qd_2.on("click",function(){//点击取消按钮
//				$zhezhao.hide();
				$input_box.hide();
				$mz.val("");
				$sj.val("");
				$input_pd.eq(0).hide();
				$input_pd.eq(1).hide();
			
			})
	
	
	
	
	
	
	var dang= document.querySelector(".dang");
	var cs = document.querySelector(".cs");
	var p_qdd = document.querySelector(".p_qdd");
	var wan = document.querySelector(".wan");
	var zj = document.querySelector(".zj");
				var arr = [0,7,1,2,3,4,5,6,7]
				$("#btn").on("click",function(){
//					console.log(arr.length);
					var a = parseInt(Math.random()*9);
//					console.log(a);
					jgg(arr[a]);
					dang.style.display = "block";
					var ci=cs.innerHTML;
					ci--;
					cs.innerHTML = ci;
					if(ci<0){
						cs.innerHTML = 0;
				clearInterval(jgg.timer);
				wan.style.display ="block";
				dang.style.display = "none";
				jiugong.style.opacity = "0.2";
				}
					p_qd.onclick = function(){
						wan.style.display ="none";
						jiugong.style.opacity = "1";
					}

				})
			


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
				speed = 300;
				clearInterval(jgg.timer);
				start();
			}
			$("#box img").eq(i).css("border","solid 4px aqua");
			$("#box img").eq(i).siblings("img").css("border","solid 4px white");
			if(z==0){
				clearInterval(jgg.timer);
				p_qdd.onclick = function(){
						zj.style.display ="none";
						jiugong.style.opacity = "1";
					}
				dang.style.display = "none";
		
				if(i == 7){
					zj8.style.display = "block";
				}else if(i == 6){
					zj7.style.display = "block";
					n7.style.display = "block";
				}else if(i == 5){
					zj6.style.display = "block";
					n6.style.display = "block";
				}else if(i == 4){
					zj5.style.display = "block";
					n5.style.display = "block";
				}else if(i == 3){
					zj4.style.display = "block";
					n4.style.display = "block";
				}else if(i == 2){
				    zj3.style.display = "block";
				    n3.style.display = "block";
				}else if(i == 1){
					zj2.style.display = "block";
					n2.style.display = "block";
				}else if(i == 0){
					zj.style.display = "block";
					n1.style.display = "block";
				}
				//z中奖是把奖励放到到奖品
				
				
				
				
				
				
				
				
				
				
				
				
				
			}
			
			
		},speed)
	}
}

















}
