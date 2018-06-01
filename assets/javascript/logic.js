// Set the date we're counting down to
var countDownDate = new Date("Jun 14, 2018 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
// 

// ================================================================ //

var data = {
    "groupName":"Group A",

    // Russia
    "teamInfo":{
        "flag":"flag",
        "teamName":"Russia",
        "aganest":{
            "flag": ["flag", "flag", "flag"],
            "teamName": ["Saudi Arabia", "Egypt", "Uruguay"],
            "playingTim": ["Jun 14, 2018 11:00:00", "Jun 19, 2018 14:00:00", "Jun 25, 2018 10:00:00"]
        }
    },

    // Saudi Arabia
    "teamInfo":{
        "flag":"flag",
        "teamName":"Russia",
        "aganest":{
            "flag": ["flag", "flag", "flag"],
            "teamName": ["Saudi Arabia", "Egypt", "Uruguay"],
            "playingTim": ["Jun 14, 2018 11:00:00", "Jun 19, 2018 14:00:00", "Jun 25, 2018 10:00:00"]
        }

    // Egypt
    },
    "teamInfo":{
        "flag":"flag",
        "teamName":"Russia",
        "aganest":{
            "flag": ["flag", "flag", "flag"],
            "teamName": ["Saudi Arabia", "Egypt", "Uruguay"],
            "playingTim": ["Jun 14, 2018 11:00:00", "Jun 19, 2018 14:00:00", "Jun 25, 2018 10:00:00"]
        }

    // Uruguay
    },
    "teamInfo":{
        "flag":"flag",
        "teamName":"Russia",
        "aganest":{
            "flag": ["flag", "flag", "flag"],
            "teamName": ["Saudi Arabia", "Egypt", "Uruguay"],
            "playingTim": ["Jun 14, 2018 11:00:00", "Jun 19, 2018 14:00:00", "Jun 25, 2018 10:00:00"]
        }
    }


}


var abcd = [data.teamInfo.teamName + data.teamInfo.aganest.teamName[0] + data.teamInfo.aganest.playingTim[0], 
            data.teamInfo.teamName + data.teamInfo.aganest.teamName[1] + data.teamInfo.aganest.playingTim[1],
            data.teamInfo.teamName + data.teamInfo.aganest.teamName[2] + data.teamInfo.aganest.playingTim[2]
            ];
        $("#data").append(data.groupName + "<br>");
    for (var i = 0; i < abcd.length; i++) {
        $("#data").append(abcd[i] + "<br>");
    }
        

console.log(data);



/*
GroupName, {flag, teamName, [flag, otherTeam, playingTim,]}

Group A
    Egypt
    Russia
    Saudi Arabia
    Uruguay

Group B
    Iran
    Morocco
    Portugal
    Spain

Group C
    Australia
    Denmark
    France
    Peru

Group D
    Argentina
    Croatia
    Iceland
    Nigeria

Group E
    Brazil
    Costa Rica
    Serbia
    Switzerland

Group F
    Germany
    South Korea
    Mexico
    Sweden

Group G
    Belgium
    England
    Panama
    Tunisia

Group H
    Colombia
    Japan
    Poland
    Senegal 
    */
