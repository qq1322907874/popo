//cookie
const setCookie = function setCookie(name,value){//封装设置cookie操作
	document.cookie = name + '=' + value +';';
}
const getCookie = function getCookie(name){//获取cookie的value
	var names = document.cookie;
	var arr = names.split('; ');
	for(var i=0;i<arr.length;i++){
		var iarr = arr[i].split('=');
		if(name == iarr[0]){
			return iarr[1];
		}
	}
}
const delCookie = function(name){
      setCookie(name,'', -1);
};
//使用cookie的函数
const addTogwc = function addTogwc(i,color,size){
  if(getCookie("count") && getCookie("count") >= 12){
    alert("购物车已满！");
    return;
  }
  //是否购物车中已经存在该商品
  if(getCookie("spName")){
    // let sel = JSON.parse(getCookie("spName"));
    let sel = JSON.parse(getCookie("spName"));
    let s = {checked:i.checked,selCount:i.selCount,name:i.name,img:i.img,
    price:i.price,id:i.id,desc:i.desc,col:color,size:size,xiaoji:i.price}

   for(var j=0;j<sel.length;j++){
      if(JSON.stringify(sel[j]) === JSON.stringify(s)){
        return;
      }
    }
  }
  //如果已经进行过加入购物车操作
  if(getCookie("spName")){
    let s = {checked:i.checked,selCount:i.selCount,name:i.name,img:i.img,
    price:i.price,id:i.id,desc:i.desc,col:color,size:size,xiaoji:i.price}
    let cat = JSON.parse(getCookie("spName"));
    cat = [...cat,s];
    let str = JSON.stringify(cat);//转为字符串
    let clickcount = 0;
    setCookie("spName",str)
    clickcount = getCookie('count')
    clickcount++;
    setCookie("count",clickcount)
    return clickcount;
  }else{//如果是第一次加入购物车
      let s = {};
      s = {checked:i.checked,selCount:i.selCount,name:i.name,img:i.img,
      price:i.price,id:i.id,desc:i.desc,col:color,size:size,xiaoji:i.price}
      let one = [s];
      let str = JSON.stringify(one);//转为字符串
      setCookie("spName",str)
      setCookie("count",1)
      return 1;
    }
}

//sessionStorage
var setSession = function(data){
    if(sessionStorage["userData"]){
      let old = JSON.parse(sessionStorage["userData"]);
      for(var i=0;i<old.length;i++){
        if(old[i].user === data.user){
          alert("该手机号已注册！");
          return false;
        }
      }
    }
    if(sessionStorage["userData"]){
      let old = JSON.parse(sessionStorage["userData"])
      let s = [...old,data];
      let str = JSON.stringify(s)
      sessionStorage.setItem("userData",str)
      console.log(old)
    }else{
      let s = [data];
      let str = JSON.stringify(s)
      sessionStorage.setItem("userData",str)
    }
    return true;
}

export{
  getCookie,
  setCookie,
  addTogwc,
  delCookie,
  setSession,
}
