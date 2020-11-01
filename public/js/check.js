var num = $('.list-user').length;
var light = $('.lightbox');
for(let i = 0;i<num;i++){
    let dis = $('.list-user').eq(i);
    let data = {};
    data.id = dis.find('.id').text();
    data.name = dis.find('.name').text();
    data.mail = dis.find('.mail').text();
    data.job = dis.find('.job').text();
    data.office = dis.find('.office').text();
    data.name_acc = dis.find('.name_acc').text();

    dis.find('.user-ho').hover(function(){
        light.removeClass('animate__slideOutRight');
        light.find('.id').html(data.id);
        light.find('.name').html(data.name);
        light.find('.mail').html(data.mail);
        light.find('.job').html(data.job);
        light.find('.office').html(data.office);
        light.find('.name_acc').html(data.name_acc);
        light.show();
        light.addClass('animate__slideInRight');
    },function(){
        light.removeClass('animate__slideInRight');
        light.addClass('animate__slideOutRight');
    });
}