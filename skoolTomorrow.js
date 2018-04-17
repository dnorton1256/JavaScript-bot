module.exports ={
getPercent :function(message){
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });
nightmare
  .goto('https://snowdaypredictor.com/result.html?q=E1V%206V4')
  .evaluate(
    function ()
    {
      return  $('#result-percent').text(); //Get Heading
    }
)
.run(
    function (err, nightmare)
    {
        if (err) return console.log(err);
        message.channel.send(nightmare + '% chance of no skoo tomow');
    }
);
}
}
