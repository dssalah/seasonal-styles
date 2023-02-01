$(document).ready(function(){
    let myDate = new Date();
    let season = myDate.getMonth();
    let wear = "";
    let mySeason = "";

    //separate querystring parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if(urlParams.has("season")){//from querystring
        mySeason = urlParams.get("season");
    }else{//today's season
        switch(season){
            case 0:
                mySeason = "Winter";
                break;
            case 1:
                mySeason = "Winter";
                break;
            case 2:
                mySeason = "Spring";
                break;
            case 3:
                mySeason = "Spring";
                break;
            case 4:
                mySeason = "Spring";
                break;
            case 5:
                mySeason = "Summer";
                break;
            case 6:
                mySeason = "Summer";
                break;
            case 7:
                mySeason = "Summer";
                break;
            case 8:
                mySeason = "Fall";
                break;
            case 9:
                mySeason = "Fall";
                break;
            case 10:
                mySeason = "Fall";
                break;
            case 11:
                mySeason = "Winter";
                break;
            default:
                alert("Something went wrong!");
        }
    }

    switch(mySeason){
        case "Spring":
            wear = {
                color: "yellow",
                name: "Sun Hat",
                pic: "spring-wear.jpg",
                alt: "A picture of a sun hat",
                season: "Spring",
                desc: `A sun hat is perfect for the warm spring weather!`
            };
            break;
        case "Summer":
            wear = {
                color: "blue",
                name: "Sunglasses",
                pic: "summer-wear.jpg",
                alt: "A picture of sunglasses",
                season: "Summer",
                desc: `Sunglasses are a must-have on a hot summer day!`
            };
            break;
        case "Fall":
            wear = {
                color: "orange",
                name: "WindBreaker",
                pic: "fall.gif",
                alt: "A picture of a jacket",
                season: "Fall",
                desc: `A WindBreaker is perfect for chilly fall days!`
            };
            break;
        case "Winter":
            wear = {
                color: "blue",
                name: "Jacket",
                pic: "images/winter-wear.jpg",
                alt: "A picture of a scarf",
                season: "<b>Winter</b>",
                desc: "A Jacket is a great accessory to keep you warm during the winter!",
            };
            break;
        default:
            alert("Something went wrong!");
    }

    console.log(wear);
    $("#wear-template").html(wearTemplate(wear));

    //change the background color of the HTML element
    $("html").css("background-color", wear.color);
});

function wearTemplate(wear){
    return `<h1>${wear.name}</h1>
    <img src="${wear.pic}" alt="${wear.alt}">
    
    <p>Season: ${wear.season}</p>
    <p>${wear.desc}</p>`;
    }

   $(document).ready(function(){
    //separate querystring parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    let mySeason = "";
    if(urlParams.has("season")){
        mySeason = urlParams.get("season");
    }

    let imageSource = "defaultImage.jpg";
    switch(mySeason){
        case "spring":
            imageSource = "springImage.jpg";
            break;
        case "summer":
            imageSource = "summerImage.jpg";
            break;
        case "fall":
            imageSource = "fallImage.jpg";
            break;
        case "winter":
            imageSource = "winterImage.jpg";
            break;
    }

    $("#imageContainer img").attr("src", imageSource);
});

    
    
    
