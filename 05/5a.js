let getUserData = function(obj){
    let data;
    let log =""
    for(let prop in obj) {
        data = obj[prop];
        log += prop + " - " + data + " (" + typeof(data) + ")\n"
    }
    return log;
}

module.exports = {
    get: getUserData
  };