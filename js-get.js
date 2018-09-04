/**
 * Created by cui on 2018/9/4.
 */
const http =require("http");
var sever = http.createServer(function(req,res){
//    自定义切割
/*    var get = {};
    if(req.url.indexOf("?")!= -1){
        var arr =  req.url.split("?");
        var arr2 = arr[1].split("&");
        var url = arr [0];
        for (var i = 0; i < arr2.length; i++) {
            var arr3 = arr2[i].split("=");
            get[arr3[0]] = arr3[1]
        }
    }else {
        var url = req.url
    }*/
    res.write("aaaa");
    res.end();
    console.log(url, get);
}).listen(8080);
