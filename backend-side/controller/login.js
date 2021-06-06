const { json } = require('express');
var fs = require('fs')
var data = fs.readFileSync('users.json','utf8');
var parsed = JSON.parse(data)
var login =function(username,password){
    console.log('0');
    for (i in parsed)
    {
        if (parsed[i]["username"] == username && parsed[i]["password"] == password) {
            return true;
        }
    }
    return false;
}
                    
module.exports=login;