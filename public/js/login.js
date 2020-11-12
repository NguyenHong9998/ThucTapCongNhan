$(document).ready(function() {
    $("#sign_up").click(function(){
        document.location.href = "localhost:5000/login/signup";
      });
});
function xuly() {
  st1=document.f1.name.value;
	st2=document.f1.pass.value;
	if (st1==""||st2=="") 
	  alert("Tài khoản hoặc mật khẩu chưa nhập!");
	else {
    document.f1.action='#';
    document.f1.submit();
  }
}
function xuly2(){
  window.location.href="/login/signup";
}