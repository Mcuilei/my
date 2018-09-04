/**
 * Created by cui on 2018/9/4.
 */
const http = require("http"),
    fs = require("fs");

    var server = http.createServer(function(req,res){
        var file_name = "./haha"+req.url;
        fs.readFile(file_name,function(err,data){
            if(err){
                res.write("404")
            }else {
                res.write(data)
            }
            res.end();
        })
    });
server.listen(8080);