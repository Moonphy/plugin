/**
 * Created by Administrator on 2016-12-7.
 */

require.config({
    paths: {
        jquery: 'jquery.min'
    }
});

require(['jquery', 'window'], function ($, w) {
    $('#a').click(function () {
        new w.Window().alert({
            content: "welcome",
            handler: function () {
                $('body').css('background','#ff6666')
            },
            width: 200,
            height: 150,
            y: 30
        });
        console.log(w===Window);
        console.log(w.Window()===Window);
    });
    $('#b').click(function () {
        var b = new w.Window();
        b.alert({
            content: "welcome",
            handler: function () {
                $('body').css('background','#ff6666')
            },
            width: 200,
            height: 150,
            y: 30
        });
        console.log(b===window)
    })
});