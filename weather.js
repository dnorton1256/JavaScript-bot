module.exports ={
getweather :function(message){
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });
nightmare
  .goto('https://weather.gc.ca/city/pages/nb-25_metric_e.html')
  .scrollTo(225,0)
  .evaluate(() => {
    const body = document.querySelector('body');

    return {
      height: body.scrollHeight,
      width: body.scrollWidth
    };
  })
  .then(function(dimensions) {
    return nightmare
      .viewport(1000, 1500)
      .wait(1000)
      .screenshot('weather.png')
  })
  .then(function() {
    nightmare.end(function() {
    	message.channel.send("Weather for Miramichi" , {
		    file: "weather.png" 
		});
//    	message.channel.send('https://weather.gc.ca/city/pages/nb-25_metric_e.html');
    });
 });
}
}