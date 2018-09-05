/**
 * Created by cui on 2018/9/4.
 */
const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
const urlLib = require("url");
http.createServer((req,res)=>{
//get
    var obj = urlLib.parse(req.url,true);
    var url = obj.pathname;
    const get = obj.query;
    //post
    var str = '';
    req.on("data",(data)=>{
        str += data;
    });
    req.on("end",()=>{
        const POST = queryString.parse(str);
        //文件请求
        var file_name = "./black"+url;
        fs.readFile(file_name,function(err,data){
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            if(err){
                res.write("404")
            }else {
                res.write(data);
            }
            res.end()
        })
    });
}).listen(8080);