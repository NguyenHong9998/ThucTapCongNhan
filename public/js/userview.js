var num = $('.content').toArray().length;
console.log(num);
for(let i = 0;i<num;i++){
    let con = $('.content').eq(i);
    let user = con.find('.ct-name').text();
    let date = con.find('.ct-date').text();
    let school = con.find('.ct-school').text();
    con.find('.com-but').click(function(){
        let light = $('.lightbox');
        light.find('.com-name').html(user);
        light.find('.com-date').html(date);
        light.find('.com-school').html(school);
        light.find('.com-exit').click(function(){
            light.removeClass('animate__animated animate__rotateInDownLeft');
            light.addClass('animate__animated animate__rotateOutDownLeft');            
        });
        light.show();
        light.removeClass('animate__animated animate__rotateOutDownLeft');
        light.addClass('animate__animated animate__rotateInDownLeft');
    });
}