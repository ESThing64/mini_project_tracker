var currentTime = moment();
$("#current-time").text(currentTime.format("MMM Do, YYYY, h:mm:ss"));



// $(document).ready(function () {
//     var datetime = $('#datetime'),
//         date = moment(new Date()),
//         update = function(){
//             datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
//         };
//     update();
//     setInterval(update, 1000);
// });


var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
});