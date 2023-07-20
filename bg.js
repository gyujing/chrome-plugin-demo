window.onload = function () {
  var main = document.createElement("div");
  main.id = "main_div";

  var closeBtn =  document.createElement("div");
  closeBtn.id = "close_Div";
  closeBtn.innerHTML = "x"

 
  var txt = document.createElement("div")
  txt.id = "txtDIv"
  txt.innerHTML = "是否启用服务"


  var btnDiv = document.createElement("div")
  btnDiv.id = "btn_div";

  var button1 = document.createElement("button");
  button1.id = "btn1"
  button1.innerHTML = "取消";


  var button2 = document.createElement("button");
  button2.id = "btn2"
  button2.innerHTML = "确认";

  btnDiv.appendChild(button1);
  btnDiv.appendChild(button2);


  main.appendChild(closeBtn);
  main.appendChild(txt);
  main.appendChild(btnDiv);


    //视频信息
  var title = document.getElementById("viewbox_report").childNodes[0].textContent

  closeBtn.onclick=function(){
    document.body.removeChild(main);
  }

  button1.onclick=function(){
    document.body.removeChild(main);
  }

  button2.onclick = function () {
    document.getElementsByTagName('video')[0].pause();
    window.open("xcodev://name="+title)
  }

  main.onmousedown = function (ev) {
    var event = window.event || ev;
    // 获取屏幕中可视化的宽高的坐标
    var dx = event.clientX - main.offsetLeft;
    var dy = event.clientY - main.offsetTop;
    // console.log(event);
    // console.log(dy)
    //实时改变目标元素main的位置
    document.onmousemove = function (ev) {
      var event = window.event || ev;
      main.style.left = event.clientX - dx + 'px';
      main.style.top = event.clientY - dy + 'px';
    }

    //抬起停止拖动
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;

    }
  }

  document.body.appendChild(main);

}
