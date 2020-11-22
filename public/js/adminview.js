var num = $('.content').toArray().length;
let light = $('.lightbox');
light.find('.com-exit').click(function(){
    light.removeClass('animate__rotateInDownLeft');
    light.addClass('animate__rotateOutDownLeft');            
});
for(let i = 0;i<num;i++){
    let con = $('.content').eq(i);
    let user = con.find('.ct-name').text();
    let date = con.find('.ct-date').text();
    let school = con.find('.ct-school').text();
    let id = con.find('.ct-id').text();
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
        light.find('.post-com').click(function(){
            let text = light.find('.text-com').val();
            if(text){
                axios.post('/comment/post',{data:text,_id:id}).then(function(res) {
                    let element = res.data;
                    light.find('.text-res').append('<div class="card">'+
                        ' <div class="card-body"> <p class="card-title font-italic font-weight-light">'+element.name+
                        '</p><h5 class="font-weight-light" style="font-family: Helvetica,Arial, sans-serif;">'+element.content_comment+
                        '</h5><footer class="blockquote-footer mt-1">'+element.time+'</footer>'+
                        '</div> </div>');
                });
                light.find('.text-com').attr("value","");
                text=null;
            }
        });
        light.find('.text-res').empty();
        light.find('.com-name').html(user);
        light.find('.com-date').html(date);
        light.find('.com-school').html(school);
        light.show();
        light.removeClass('animate__rotateOutDownLeft');
        light.addClass('animate__rotateInDownLeft');
        axios.get('/comment/'+id).then(function(res) {
            let data = res.data;
            data.forEach(element => {
                light.find('.text-res').append('<div class="card">'+
                ' <div class="card-body"> <p class="card-title font-italic font-weight-light">'+element.name+
                '</p><h5 class="font-weight-light" style="font-family: Helvetica,Arial, sans-serif;">'+element.content_comment+
                '</h5><footer class="blockquote-footer mt-1">'+element.time+'</footer>'+
                '</div> </div>');
            });
        });
    });
}