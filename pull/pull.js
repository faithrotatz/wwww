/**
 *下拉区间
 *@author li
 *@version 1.0.0 2016/08/16
 *@since js
 *param ele //需要下拉框的标签
 *param cl//类名控制样式
*/
(function(){

   function Pullselect(ele,cl){
   	this.ele=$(ele);
   	this.body=$('body');
   	this.type=this.ele.attr('data');//下拉区间是面积还是金额  业务需求
   	this.initElement();
   	this.initEvent();
    this.cl=cl;
   }
   Pullselect.prototype={

   	initElement:function(){
    this.txtEle=$('<ul class="list list1 selectLabel"></ul>');//业务
    this.textEle=$('<li></li>');
    this.inputEle=$('<input type="text"><span>m²</span><input type="text"><span>m²</span>');
    this.saveEle=$('</br><input type="button"value="保存">');
    this.cancleEle=$('<input type="button"value="取消">');
    this.textEle.append(this.inputEle).append(this.saveEle).append(this.cancleEle);
    this.ele.append(this.txtEle);
    this.loadDate();
    this.txtEle.append(this.textEle)
    },
    loadDate:function(){
    var that=this;
    var unitprice=['0-50','50-100','100-150','150-200','200-300','300-500','500-1000','>1000'];//单价区间
    var totalprice=['0-10000','10000-20000','20000-30000'];//总价区间
    var area=['0-50m²','50-100m²','100-200m²','200-300m²','300-500m²','500-1000m²','>100m²'];//面积区间
        
        if(this.type=='unitprice'){
           this.inSideDate(unitprice)
        }else if(this.type=='totalprice'){
           this.inSideDate(totalprice)
        }else{
            this.inSideDate(area)
        }
   },
   initEvent:function(){
   var that=this;

   this.ele.find('li').click(function(event){
        event.stopPropagation();
   	    if($(this).find('input').length){
   	       
   	    	return;
   	    }
   	    that.getHtml($(this))
   })

   this.ele.find(this.saveEle).click(function(event){
   	    
   	    event.stopPropagation();
        that.getHtml(that.getInputDate());
        // console.log(that.getInputDate())
   	  
   	})

   this.ele.find(this.cancleEle).click(function(event){
   	    event.stopPropagation()
        that.cancleHtml();
   })

   this.ele.click(function(event){
   	    event.stopPropagation();
        // that.pullshow();
   })

   this.body.click(function(){
   	    that.cancleHtml();
   })

   },
   getHtml:function(val){//获取li的值
   	      // console.log(typeof val)
   	    if(typeof val== 'string'){
   	            this.ele.find('input').first().val(val)
   	      }else{
                this.ele.find('input').first().val(val.html())
   	      }
        this.cancleHtml();
   },
   cancleHtml:function(){
        this.txtEle.fadeOut('fast')
   },
   pullshow:function(event){
        
   	    this.txtEle.fadeIn('fast')
   },
   getInputDate:function(){
        var $val=this.txtEle.find('input[type="text"]');
        var arr=[];
        $val.each(function(i,n){
        	arr[i]=n.value;
        	
        })
        return arr.join('-');
   },
   inSideDate:function(i){
   	   var str='';
       $.each(i,function(i,n){
       str=str+'<li>'+n+'</li>'
    
       })
       this.txtEle.html(str);
   }
   

   }
   window.Pullselect=Pullselect;
})()