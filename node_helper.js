const path = require("path")
const fs=require("fs");

var NodeHelper = require('node_helper')

module.exports = NodeHelper.create({

  start: function() {
  
  },

  stop: function() {
  },

  socketNotificationReceived: function (noti, payload) {
    if(noti==="INIT")
    {
      console.log("in Init")
      var data = fs.readFileSync(path.resolve(__dirname + "/index.json"));
			data = JSON.parse(data.toString());
      this.sendSocketNotification("INITA",data);
    }

    if(noti==="INDEX")
    {
      console.log("in Index");
      console.log(payload.index);
      fs.writeFileSync(path.resolve(__dirname + "/index.json"), JSON.stringify(payload));
    }

    if(noti==="CAROUSEL_GOTO")
    {
      this.sendSocketNotification(noti,payload);
    }

    if(noti==="CAROUSEL_NEXT")
    {
      this.sendSocketNotification(noti,payload);
    }

    if(noti==="CAROUSEL_PREVIOUS")
    {
      this.sendSocketNotification(noti,payload);
    }

    if(noti==="CAROUSEL_SYNC")
    {
      this.sendSocketNotification(noti,payload);
    }
  },
})
