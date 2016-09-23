/**
 *区域 地铁 下拉 组织
 *@author li
 *@version 1.0.0 2016/08/17
 *@since js
 *param ele 目标元素
 *param fun 自定义函数
 */

 (function(){


    function Infopullselect(ele,fun){
     this.ele=$(ele);//目标元素
     this.type=$(ele).attr('type');
     this.initElement();//初始化标签
     this.initEvent();//初始化事件
      }
    Infopullselect.prototype={
     initElement:function(){
     this.txtEle=$("<div></div>");
     this.ele.append(this.txtEle);
     this.loadData();
       
     },
     initEvent:function(){
        var that=this;
     this.txtEle.delegate('li','click',function(){
        alert(1)
        that.loadElementli();
     })

     },
     createElementul:function(){
        return  '<ul></ul>'
     },
     createElementli:function(){
        return  '<li></li>'
     },
     loadData:function(){
        var  that=this;
        var  tradingArea=['1','2','3'];
        var  subwayLines=['1','2','3'];
        var  buisnessFormat=['1','2','3'];
        this.loadElementli(buisnessFormat[0])
        

     },
     loadElementli:function(){//ajax求取数据
         
         var that=this;
         var arr=[0,1,2,3,4,5,6];
         if(!this.loadAjax()){
           return;
         }
         var ul=$(this.createElementul());
         arr.forEach(function(i,v){
             var li=$(that.createElementli())
                 li.html(v);
                 ul.append(li);       
         })                          
         this.txtEle.append(ul)
     }, 
     loadAjax:function(){
         var date=[1,2,3]
         return date;
     }

   }
    window.Infopullselect=Infopullselect;
})()
