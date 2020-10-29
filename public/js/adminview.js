var num = $('.content').toArray().length;
for(let i = 0;i<num;i++){
    let con = $('.content').eq(i);
    let user = con.find('.ct-name').text();
    let date = con.find('.ct-date').text();
    let school = con.find('.ct-school').text();
    con.find('.editing').click(function(){
        let data = con.find('.data').text();
        con.find('.data').remove();
        let be = con.find('.before-data');
        be.append('<textarea rows="7" class="form-control data">'+data+'</textarea>');
        let bu = con.find('.action-but');
        bu.append('<button type="button" class="btn btn-success ml-2 save-edit">SAVE</button>');
        bu.find('.save-edit').click(function(){
            let data2 = con.find('.data').val();
            let be2 = con.find('.before-data');
            be2.empty();
            be2.append('<p class="data">'+data2+'<p>');
            //
            //add post module to update data content later
            //
            this.remove();
        });
    });
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