const fs = require("fs");
const path = require("path");


module.exports = {
    route : "/api/:auth/shellexec",
    reqAuth : true,
    method : "get",
    perms:"shell",
    run : async (req,res,data)=> {
        if(!req.query.execute){
            return res.status(401).json({"error":"execute code not provided!"})
        }
        const exec = require('child_process')
        try {
            result = await exec.execSync(req.query.execute).toString().replace(/\n/g, '<br>')
        }
        catch (e) {
            result = e
        }
        const dataa = require('util').inspect(result, { depth: 0 }).replace(/\n/g, '<br>')
        res.json({"data":dataa.replace(/'/g, "")})
    }
}