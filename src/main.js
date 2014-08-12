$(document).ready(function() {

    //--------------------------------------------------Start D3.JS MAP

    var width = 960,
        height = 600;

    var projection = d3.geo.albersUsa()
        .scale(1330)
        .translate([width / 2, height / 2]);

    var path = d3.geo.path()
        .projection(projection);

    var svg = d3.select("#map").append("svg")
        .attr("width", width)
        .attr("height", height);

    queue()
        .defer(d3.json, "http://localhost:8888/data/map.json")
    .await(ready);

    function ready(error, us) {
        svg.append("g")
            .attr("class", "counties")
            .selectAll("path")
            .data(topojson.feature(us, us.objects.counties).features)
            .enter().append("path")
            .attr("d", path);
            //.attr("class", selectedCounties)

        svg.append("path")
            .datum(topojson.mesh(us, us.objects.states, function(a, b) {
                return a !== b;
            }))
            .attr("class", "states")
            .attr("d", path);
    }

    /*function selectedCounties (json) {
        data = json;
        var value = d.properties.CountyID

        if (CountyID) {
            return "blue";
        } else {
            return "white"
        }
    });*/



    //-------------------------------------------------- END D3.JS MAP

    //--------------------Start of JQuery Accordion for the drop down menus
    var parentDivs = $('#dropDownMenusAccordion div'),
        childDivs = $('#dropDownMenusAccordion h6').siblings('div');

    $('#dropDownMenusAccordion h5').click(function() {
        parentDivs.slideUp();
        if ($(this).next().is(':hidden')) {
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
        }
    });

    $('#dropDownMenusAccordion h6').click(function() {
        childDivs.slideUp();
        if ($(this).next().is(':hidden')) {
            $(this).next().slideDown();
        } else {
            $(this).next().slideUp();
        }
    });


    //----------------Start of API calls
    
    //function to format JSON Array that is returned from API Call
    function formatCountyData(json) {

        countyData = [];

        for (var i = 1; i < json.length; i++) {
            var statistic = json[i][0];
            var countyNameAndState = json[i][1];
            var stateID = json[i][2];
            var countyID = json[i][3];
            countyData.push({
                Statistic: +statistic,
                CountyNameAndState: countyNameAndState,
                CountyID: stateID + countyID
            });
        }
        return countyData
    }


    //--------------------------------------------------INCOME-----------------------------------------------------
    //Male Income

    parsedData = new Array();

    $("#MaleIncome").click(function() {
        $.getJSON("http://api.census.gov/data/2012/acs5?get=B20002_002E,NAME&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
            function(json) {
                var countyDataFormated = formatCountyData(json) //THIS METHOD WILL SET THE DATA INTO ARRAYS 
                $("#0-19999PerYearIncomeMale").click(function() {
                    $("#appendedList").append("<li>Male Income Distribution: 0-19,999</li>");
                    $.each(countyDataFormated, function(index, value) {
                        if (value.Statistic < 20000) {
                            parsedData.push({
                                Statistic: value.Statistic,
                                CountyNameAndState: value.CountyNameAndState,
                                CountyID: value.CountyID
                                });
                        }
                    return parsedData
                    });
                });
            });
    });


    $("#20-24999PerYearIncomeMale").click(function() {
        $("#appendedList").append("<li>Male Income Distribution: 20,000-24,999</li>");
        //run code to parse the the data to return what we want   
        //this function will take one of the API call variables as a parameter
        //it will then have to call the d3 JS to render the map      
    });

    $("#25-29999PerYearIncomeMale").click(function() {
        $("#appendedList").append("<li>Male Income Distribution: 25,999-29,999</li>");
        //run code to parse the the data to return what we want   
        //this function will take one of the API call variables as a parameter
        //it will then have to call the d3 JS to render the map      
    });

    $("#30-34999PerIncomeMale").click(function() {
        $("#appendedList").append("<li>Male Income Distribution: 30,000-34,999</li>");
        //run code to parse the the data to return what we want   
        //this function will take one of the API call variables as a parameter
        //it will then have to call the d3 JS to render the map      
    });
    $("#35-39999PerIncomeMale").click(function() {
        $("#appendedList").append("<li>Male Income Distribution: 35,000-39,999</li>");
        //run code to parse the the data to return what we want   
        //this function will take one of the API call variables as a parameter
        //it will then have to call the d3 JS to render the map      
    });
    $("#40-44999PerIncomeMale").click(function() {
        $("#appendedList").append("<li>Male Income Distribution: 40,000-44,999</li>");
        //run code to parse the the data to return what we want   
        //this function will take one of the API call variables as a parameter
        //it will then have to call the d3 JS to render the map      
    });
    $("#45-49999PerIncomeMale").click(function() {
        $("#appendedList").append("<li>Male Income Distribution: 45,000-49,999</li>");
        //run code to parse the the data to return what we want   
        //this function will take one of the API call variables as a parameter
        //it will then have to call the d3 JS to render the map      
    });
    $("#50AndUpPerIncomeMale").click(function() {
        $("#appendedList").append("<li>Male Income Distribution: 50,000 and up</li>");
        //run code to parse the the data to return what we want   
        //this function will take one of the API call variables as a parameter
        //it will then have to call the d3 JS to render the map      
    });




    //Female Income ---------------------------------------------------------------------------------------------------------- 
    var FemaleIncome = $("#FemaleIncome").click(function() {
        $.getJSON("http://api.census.gov/data/2012/acs5?get=B20002_003E&for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
            function(jsonData) {
                var countyData = getCountyData(jsonData) //THIS METHOD WILL SET THE DATA INTO ARRAYS 
                return countyData
            });
    });

    $("#0-19999PerYearIncomeFemale").click(function() {
        $("#appendedList").append("<li>Female Income Distribution: 0-19,999</li>");
        //run code to parse the the data to return what we want   
        //this function will take one of the API call variables as a parameter
        //it will then have to call the d3 JS to render the map      
    });

    $("#20-24999PerYearIncomeFemale").click(function() {
        $("#appendedList").append("<li>Female Income Distribution: 20,000-24,999</li>");
        //run code to parse the the data to return what we want   
        //this function will take one of the API call variables as a parameter
        //it will then have to call the d3 JS to render the map      
    });

    $("#25-29999PerYearIncomeFemale").click(function() {
        $("#appendedList").append("<li>Female Income Distribution: 25,000-29,999</li>");
        //run code to parse the the data to return what we want   
        //this function will take one of the API call variables as a parameter
        //it will then have to call the d3 JS to render the map      
    });

    $("#30-34999PerIncomeFemale").click(function() {
        $("#appendedList").append("<li>Female Income Distribution: 30,000-34,999</li>");
        //run code to parse the the data to return what we want   
        //this function will take one of the API call variables as a parameter
        //it will then have to call the d3 JS to render the map      
    });

    $("#35-39999PerIncomeFemale").click(function() {
        $("#appendedList").append("<li>Female Income Distribution: 35,000-39,999</li>");
        //run code to parse the the data to return what we want   
        //this function will take one of the API call variables as a parameter
        //it will then have to call the d3 JS to render the map      
    });

    $("#40-44999PerIncomeFemale").click(function() {
        $("#appendedList").append("<li>Female Income Distribution: 40,000-44,999</li>");
        //run code to parse the the data to return what we want   
        //this function will take one of the API call variables as a parameter
        //it will then have to call the d3 JS to render the map      
    });
    $("#45-49999PerIncomeFemale").click(function() {
        $("#appendedList").append("<li>Female Income Distribution: 45,000-49,999</li>");
        //run code to parse the the data to return what we want   
        //this function will take one of the API call variables as a parameter
        //it will then have to call the d3 JS to render the map      
    });
    $("#50AndUpPerIncomeFemale").click(function() {
        $("#appendedList").append("<li>Female Income Distribution: 50,000 and up</li>");
        //run code to parse the the data to return what we want   
        //this function will take one of the API call variables as a parameter
        //it will then have to call the d3 JS to render the map      
    });




    /*
//----------------------------------RACE-----------------------------------------------------
//White Non-Hispanic------------------------------------------------------------------------- 
var WhiteNonHispanic = $("#WhiteNonHispanic").click(function() {    
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            var countyData = getCountyData(jsonData)//THIS METHOD WILL SET THE DATA INTO ARRAYS 
            return countyData
        });
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});

//Black------------------------------------------------------------------------------------------------
var Black = $("#Black").click(function() {     
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            var countyData = getCountyData(jsonData)//THIS METHOD WILL SET THE DATA INTO ARRAYS 
            return countyData
        });
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});

//Asian------------------------------------------------------------------------------------------------------------  
var Asian = $("#Asian").click(function() {     
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            var countyData = getCountyData(jsonData)//THIS METHOD WILL SET THE DATA INTO ARRAYS 
            return countyData
        });
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});

//Hispanic----------------------------------------------------------------------------------------------------------
var Hispanic = $("#Hispanic").click(function() {     
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            var countyData = getCountyData(jsonData)//THIS METHOD WILL SET THE DATA INTO ARRAYS 
            return countyData
        });
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});

$("#0-30PerYearIncomeMale").click(function() {
    //run code to parse the the data to return what we want   
    //this function will take one of the API call variables as a parameter
    //it will then have to call the d3 JS to render the map      
});


//--------------------------------------EDUCATION-----------------------------------------------------
//Less Than High School
$("#LessThanHighSchool").click(function() {     
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            console.log(jsonData);
        });
});

//High School
$("#highSchool").click(function() {
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            console.log(jsonData);
        });
});

//Bachelors 
$("#Bachelors").click(function() {
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            console.log(jsonData);
        });
});

//Masters 
$("#Graduate").click(function() {
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            console.log(jsonData);
        });
});

//----------------------------------AGE DISTRIBUTION-----------------------------------------------------
//Nine years and under  
$("#9AndUnderage").click(function() {
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            console.log(jsonData);
        });
});

//Ten to Nineteen
$("#tenTo19age").click(function() {
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            console.log(jsonData);
        });
});

//Twenty to Twentyfour
$("#twentyToTwentyfour").click(function() {  
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            console.log(jsonData);
        });
});

//Twentyfive to Thirtyfour
$("#twentyfiveToThirtyfour").click(function() {    
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            console.log(jsonData);
        });
});

//Thirtyfive to Fortyfour  
$("#ThirtyfiveToFortyfour").click(function() {  
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            console.log(jsonData);
        });
});

//Fortyfive to Fiftyfour
$("#FortyfiveToFiftyfour").click(function() {    
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            console.log(jsonData);
        });
});

//Fiftyfive to Sixtyfour  
$("#FiftyfiveToSixtyfour").click(function() {  
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            console.log(jsonData);
        });
});

//Sixtyfive and older  
$("#sixtyfiveAndOlder").click(function() {   
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            console.log(jsonData);
        });
});


//--------------------------------------SEX DISTRIBUTION---------------------------------------------------
//Male Sex Ratio  
$("#MaleRatio").click(function() {  
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            getCountyData(jsonData);
        });
});

//Female Sex Ratio
$("#FemaleRatio").click(function() {     
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            getCountyData(jsonData);
        });
});

//----------------------------------Marital Status-----------------------------------------------------
//Male Marital Status
$("#MaleMaritalStatus").click(function() {      
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            getCountyData(jsonData);
        });
});

//Female Marital Status    
$("#FemaleMaritalStatus").click(function() {  
    $.getJSON("http://api.census.gov/data/2012/acs5?get=     &for=county:*&key=a6289b55b0db4264a8ede6caccf142ddd38de55f",
        function(jsonData) {
            getCountyData(jsonData);
        });
});


//---------------------end of API calls       


*/
});