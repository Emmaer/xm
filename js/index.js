window.onload=function(){
	var windows=getClass("window")[0];

	var imgs=windows.getElementsByTagName("img");

	var anniu=windows.getElementsByTagName("span");
        var index=0;
         console.log(index);
		setInterval(function(){ 
			imgs[index].style.zIndex=0;
			anniu[index].style.background="";
			index++;
			if(index>4){
				index=0;
			}
	 
	  anniu[index].style.background="yellow";
      imgs[index].style.zIndex=2;
      
       // console.log(index);
},500)




var sixuanxiang1=document.getElementById('sixuanxiang1');
	var a=sixuanxiang1.getElementsByTagName('a');
	var znyjR=document.getElementsByClassName('znyjR')[0];
	var znyjRight=znyjR.getElementsByClassName('znyjRight');
	
	
	//  console.log(a);
 // console.log(znyjR)
	 console.log(znyjRight)
 for(var i=0;i<a.length;i++){
 	a[i].index=i;
 	a[i].onmouseover=function(){

 		for(var j=0;j<znyjRight.length;j++){
        znyjRight[j].style.display="none"
        
 		}
 		 znyjRight[this.index].style.display="block";
 		
 	}		

}


var wuxuanxiang=getClass('wuxuanxiang')[0];	
var aa=wuxuanxiang.getElementsByTagName("a"); 
	var pjR=getClass('pjR')[0];
	var pjRight=getClass('pjRight');
	

 for(var i=0;i<aa.length;i++){
 	aa[i].index=i;
 	aa[i].onmouseover=function(){

 		for(var j=0;j<pjRight.length;j++){
        pjRight[j].style.display="none"
        
 		}
 		 pjRight[this.index].style.display="block";
 		
 	}		

}



var wuxuanxiang1=getClass('wuxuanxiang1')[0];	
var aaa=wuxuanxiang1.getElementsByTagName("a"); 
	var zbR=getClass('zbR')[0];
	var zbRight=getClass('zbRight');
	
	

 for(var i=0;i<aaa.length;i++){
 	aaa[i].index=i;
 	aaa[i].onmouseover=function(){

 		for(var j=0;j<zbRight.length;j++){
        zbRight[j].style.display="none"
        
 		}
 		 zbRight[this.index].style.display="block";
 		
 	}		

}
//照片按需加载

	var boxx=$('.boxx');

	var docH=document.documentElement.clientHeight;
	var imgaa=$('img');


	var newarr=[];
	for(var i=0;i<boxx.length;i++){
		newarr.push(boxx[i].offsetTop);		
	}

	console.log(newarr)
	window.onscroll=function(){
	var doc=document.body.scrollTop?document.body:document.documentElement;
	
		for(var i=0;i<boxx.length;i++){
			if(doc.scrollTop+docH>=newarr[i]){
			 for(var k=0;k<imgaa.length;k++){
			imgaa[k].src=imgaa[k].getAttribute('asrc');
			
		}
		}
		}		
	}
		window.onscroll();
}

