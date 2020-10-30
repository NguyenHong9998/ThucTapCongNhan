function xuly() {
    fullname=document.f1.fullname.value;
    mail=document.f1.mail.value;
    phone=document.f1.phone.value;
    job=document.f1.job.value;
    office=document.f1.office.value;
    name=document.f1.name.value;
    pass=document.f1.pass.value;
    retype=document.f1.retype_pass.value;
    if (fullname==""||mail==""||phone==""||job==""||office==""||name==""||pass==""||retype=="") 
        alert("Bạn phải nhập đủ thông tin để đăng kí tài khoản!");
    else if (pass!=retype) alert("Mật khẩu không khớp, mời nhập lại!");
            else {
                document.f1.action='#';
                document.f1.submit();
            }
  }