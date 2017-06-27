var app=angular.module("myapp",[]);
app.controller("cont",function ($scope) {


	$scope.data1=[
     {"isId":"1","img":"images/shi@2x.png","mingcheng":"皮蛋瘦肉粥","leibie":"咸粥","price":"24","yuanjia":"28","num":"0"},
     {"isId":"2","img":"images/shi@2x.png","mingcheng":"皮蛋瘦肉粥","leibie":"咸粥","price":"24","yuanjia":"28","num":"0"},
    {"isId":"3","img":"images/shi@2x.png","mingcheng":"皮蛋瘦肉粥","leibie":"咸粥","price":"24","yuanjia":"28","num":"0"},

	
	

	],
	$scope.data2=[
	{"isId":"24","img":"images/lianzi@2x.png","mingcheng":"莲子核桃黑米粥","num":0,"price":"12"},
	{"isId":"wawr4","img":"images/lianzi@2x.png","mingcheng":"莲子核桃黑米粥","num":0,"price":"12"},
	{"isId":"2wqr4","img":"images/lianzi@2x.png","mingcheng":"莲子核桃黑米粥","num":0,"price":"12"},
	

	],
	$scope.data3=[
	{"isId":"2wqe4","img":"images/nangua@2x.png","mingcheng":"南瓜粥","num":0,"price":"8"},
	{"isId":"waasdwr4","img":"images/nangua@2x.png","mingcheng":"南瓜粥","num":0,"price":"8"},
	{"isId":"2asdwqr4","img":"images/nangua@2x.png","mingcheng":"南瓜粥","num":0,"price":"8"},
	

	],
	$scope.data4=[
	{"isId":"2wqewre4","img":"images/youtiao.webp","mingcheng":"油条","num":0,"price":"2"},
	{"isId":"waawersdwr4","img":"images/youtiao.webp","mingcheng":"油条","num":0,"price":"2"},
	{"isId":"waawersdwr4","img":"images/youtiao.webp","mingcheng":"油条","num":0,"price":"2"},

	],
  
	$scope.cart=[];
	$scope.set=function (isId,bool) {
		angular.forEach($scope.data2,function(val2,index) {
			
	       if (isId==val2.isId) {

	       	if (bool) {
	       		
	       		if (val2.num==0) {
	       			val2.num=1;
	       			$scope.cart.push(val2);
	       		}else{
	       			val2.num++;

	       		}
	       	}else{
	       	    val2.num--;
	       	    val2.num=val2.num<=0?0:val2.num;
	       	}

	       }
		})


     angular.forEach($scope.data1,function (val1,index) {
     	 if (isId==val1.isId) {
     	if (true) {
     		
     		if (val1.num==0) {
     			val1.num=1;
     			$scope.cart.push(val1);
     		}else{
     			
     			val1.num++;
     		}
     	}else{
                   val1.num--;
                   val1.num=val1.num<=0?0:val1.num;
               }

     }
     });

     angular.forEach($scope.data3,function (val3,index) {
     	 if (isId==val3.isId) {
     	if (bool) {
     		
     		if (val3.num==0) {
     			val3.num=1;
     			$scope.cart.push(val3);
     		}else{
     			
     			val3.num++;
     		}
     	}else{
     		 val3.num--;
	       	    val3.num=val3.num<=0?0:val3.num;
     	}
     }
     })




     

     angular.forEach($scope.data4,function (val4,index) {
     	 if (isId==val4.isId) {
     	if (bool) {
     		
     		if (val4.num==0) {
     			val4.num=1;
     			$scope.cart.push(val4);
     		}else{
     			
     			val4.num++;
     		}
     	}else{
     		 val4.num--;
	       	    val4.num=val4.num<=0?0:val4.num;
     	}
     }
     })


         
	}


     
     $scope.st=function (isId,bool) {
          angular.forEach($scope.cart,function(item,index) {
               
            if (isId==item.isId) {

               if (bool) {
                    
                    if (item.num==0) {
                         item.num=1;
                         
                    }else{
                         item.num++;

                    }
               }else{
                   item.num--;
                   item.num=item.num<=0?0:item.num;
               }

            }
          })
     }
  

      $scope.$watch("cart",function () {
                $scope.allPrice=0;
                $scope.allNum=0;
                angular.forEach($scope.cart,function (item,index) {
                   
                    $scope.allNum+=item.num;
                    $scope.allPrice+=item.num*item.price;
                    if (item.num<=0) {
                        $scope.cart.splice(index,1);}
                })
            },true); 

})


 function setIco(event) {

            // 变量区,当前按钮,当前图片
            // var oImg=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/9.jpg','images/10.jpg','images/11.jpg','images/12.jpg'];
          var ospan=document.querySelector(".car>.pic>.shuzi");

            var odaohang=document.querySelector(".daohanglan");
           ospan.style.display="block";
          var opic=document.querySelector(".car>.pic");
          opic.style.background="#00a0dc";


            var flyer = $('<div class="u-flyer"></div>');
           
            
            //鼠标在页面点击开始位置计算.
            var top = $(window).scrollTop();
            
            var dh = event.pageY;

            var newh = dh - top;


            // 鼠标结束位置计算 
            var oDiv = $('#end').offset();
            var newdh = oDiv.top - top;

            flyer.fly({
                start: {
                    left: event.pageX,
                    top: newh
                },
                end: {
                    left: oDiv.left,
                    top: newdh,
                    width: 0,
                    height: 0
                }
            });
            var osp2=document.querySelector(".car>.peisong>.sp2");

            var osp1=document.querySelector(".car>.peisong>.sp1");
            osp1.style.display="none";
            osp2.style.display="block";
;
        }

         
       