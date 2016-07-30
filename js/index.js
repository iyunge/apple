$(function(){

    //选项卡不完善
    var $btn=$('.btn');
    var ch=$(window).height();
    var list=$('.list');
        $btn.click(function(){
            var ids=$(".btn").attr('id')
            if(ids=="active") {
                $('.btn').removeAttr("id")
                list.removeAttr("id")
            } else if(ids==undefined){
                $('.btn').attr('id','active')
                 list.attr("id",'anm')
            }
        });
    //底部链接选项
    var $title=$('.lianjie p');
    var $ul=$('.lianjie ul');
    $title.click(function(){
        var $link=$(this).attr("id");
        $index=$(this).index('.lianjie p')
        if($link=="active"){
            $title.removeAttr("id");
            $ul.eq($index).removeAttr("class");
        }else if($link==undefined){
            $title.removeAttr("id")
            $ul.removeAttr('class');
            $link=$(this).attr('id','active');
            $ul.eq($index).attr('class','active');
        }

    })
})