/**
 * Created by cui on 2018/9/10.
 */
var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
http.createServer((req,res)=>{
    var pathname = url.parse(req.url).pathname;
    //判断在地址栏里面输入的是文件地址还是文件夹
    if(pathname.indexOf(".") == -1){
       // 127.0.0.1:3000/index.html
       pathname +="index.html"
    }
    //取到文件路径 logo.png  http://127.0.0.1:3000/static/index.html
    var fileurl ="./"+path.normalize("./static"+pathname);
    console.log(fileurl);
    var extname = path.extname(pathname);
    fs.readFile(fileurl,(err,data)=>{
        if(err){
                res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
                res.end("404,页面未找到");
        }else {
            getmine(extname,(mime)=>{
                res.writeHead(200,{"Content-type":mime});
                res.end(data);
            })
        }
    })
}).listen(3000,"127.0.0.1");
function getmine(extname,callback){
    fs.readFile("./mime.json",(err,data)=>{
        var mimeJson = JSON.parse(data);
        var mime = mimeJson[extname] || "text/plain";
        callback(mime)
    })
}