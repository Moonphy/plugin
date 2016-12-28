/**
 * Created by Moonphy on 16/12/27.
 */
window.onload = function () {
    var list = document.getElementById('list');
    var lis = list.children;

    for(var i = 0;i < lis.length; i++){
        lis[i].onclick = function (e) {
            e = e || window.event;
            var el = e.srcElement;

            switch (el.className){
                case 'btn-close':
                    removeNode(el.parentNode);
                    break;
                case 'btn-praise':
                    
            }
        }
    }

    function removeNode(node){
        node.parentNode.removeChild(node);
    }
    function getTime(){
        var t = new Date();
        var y = t.getFullYear(),
            m = t.getMonth() + 1,
            d = t.getDay();
        m = m < 10 ? '0' + m : m;
        d = d < 10 ? '0' + d : d;
        return y + '-' + m + '-' + d;
    }
};