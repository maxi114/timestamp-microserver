//standard inports 
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


//link everything together using app variable

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//GET code to run the code
app.get('/dateValues/: dateVal', function(req, res, next) {
    //get the datalu from the request
    var dateVal = req.params.dateVal;
    //format the date
    var dateFormattingOptions = {
        year: "numeric",
        month: 'long',
        day: "numeric"
    };

    if (isNaN(dateVal)) {
        var naturalDate = new Date(dateVal);
        naturalDate = naturalDate.toLocaleDateString('en-us', dateFormattingOptions);
        var unixDate = new Date(dateVal).getTime() / 1000;
    } else {
        var unixDate = dateVal;

        var naturalDate = new Date(dateVal * 1000);
        naturalDate = naturalDate.toLocaleDateString('en-us', dateFormattingOptions);
    }

    res.json({ unix: unixDate, natural: naturalDate });


});


//listening port
app.listen(200, function() {
    console.log("it works");
})