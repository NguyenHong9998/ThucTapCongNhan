//module.exports = {xoaIDNguoiDung };
function xoaIDnguoidung(id) {
    
    //var id =  $('.id').text().eq(i);
    console.log("Dang xoa id:"+id);
    document.f1.id.value=id;
    document.f1.action="./listDeleteAccount";
    document.f1.submit();
}
