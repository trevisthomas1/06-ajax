//API KEY: 1eae46edb7c74f1c9986b58e307dc5df
//API URL: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + param + "&api-key=" + key

var term = $("#term").val();
var numRec = 0;
var startYear = $("#startYear").val();
var endYear = $("#endYear").val();
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var apiKey = "&api-key=1eae46edb7c74f1c9986b58e307dc5df"
var param = ""
var queryURL = url + param + apiKey


function buildURL() {

    if ($("#startYear").val() != "") {
        startYear = $("#startYear").val();
    };

    if ($("#endYear").val() != "") {
        endYear = $("#endYear").val();
    };
    if (term = $("#term").val() != "") {
        term = $("#term").val();
    };

    param = term + "?begin_date=" + startYear + "?end_date=" + endYear;

    queryURL = url + param + apiKey;

    numRec = $("#numberOfRecords").val();
};


$("#target").click(function () {

    function search() {

        buildURL();

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            //creating Cards here. Possibly move to displayResults function
            for (let i = 0; i < numRec; index++) {
                displayResults(response[i]);
            }
        });

    }
});

function clear() {

};

function displayResults() {
    var card = $("<div>");
    var cardBody = $("<div>")
    card.attr("class", "card");
    cardBody.attr("class", "card-body");
    // cardBody.text($(this));
    console.log(this);
    $("***HTML****probably section").append(card);
    $(card).append(cardBody);
    // displayResults(response);

};