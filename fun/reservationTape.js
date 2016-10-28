/**
 *预约带看
 *@author li
 *@version 1.0.0 2016/09/21
 *@since js
 */
(function(){
  function Instrfun(ele){
  	this.ele=ele;
  	this.parerEle();
  }
  Instrfun.prototype={
  	parerEle:function(){
  		if(typeof this.ele=='string'){
  			alert('string')
  		}
  	},
  	getClass:function(){
  		return document.getElementsByClassName(this.ele)
  	},
  	getId:function(){
  		return document.getElementById(this.ele)
  	},
  	getTag:function(){
  		return document.getElementsByTagName(this.ele)
  	},
  	extendInfo:function(p,o){//p,o is object
  		for(var i in o){
  			p[i]=o[i]
  		}
  		return p;
  	},
  	tabFun:function(){
        console.log(this.getClass())
        var tabEle=this.getClass();
        for(var i=0;i<tabEle.length;i++){
        	tabEle[i].index=i;
        	this.instrEvent(tabEle[i],function(val,index){
            
        	})
           
        }
  		
  	},
  	instrEvent:function(ele,fun){

        ele.addEventListener('click',function(){
  			fun(this,ele.index);
  		    },false) 
  	}
  }
  var a=new Instrfun('reserright-li');
   
  var c=a.extendInfo({},{'name':"wo",'sex':'nan'})
  console.log(c)
  a.tabFun();
})()