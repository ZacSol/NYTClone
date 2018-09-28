let searchTerm=$("#searchTerm");
let startYear=$("#startYear");
let endYear=$("#endYear");
let myContent=$(".content");
let myParam={'api-key': "896f03c63d0346cf8662446f75e726cc",'q': ""}

const refreshParam= function(){
myParam={'api-key': "896f03c63d0346cf8662446f75e726cc",
'q': "",
// 'begin_date': `${year}0101`,
// 'begin_date':"20180101",
// 'sort':"newest",
// 'page':"1"
};}

const makeCall=function(){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param(
    myParam
);
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
//   console.log(url);
  console.log(result);
//   $(".content").text(JSON.stringify(result));
}).fail(function(err) {
  throw err;
});
}


const clearThings=function(){
    searchTerm.val("");
    startYear.val("");
    endYear.val("");
    myContent.empty();
}

$("#clearStuff").on('click',function(){
    // console.log("clear click");
    clearThings();
})
$("#searchStuff").on('click', function () {
    // console.log("search click");
    myParam.q=searchTerm.val().trim();
    console.log(myParam.q);
    console.log(startYear.val().trim(),endYear.val().trim());
    // year is optional so make an if statement
    if(startYear.val().trim()&&endYear.val().trim()){
        myParam.begin_date=`${startYear.val().trim()}0101`;
        myParam.end_date=`${endYear.val().trim()}1231`;
    }
    else if(startYear.val()){
        myParam.begin_date=`${startYear.val().trim()}0101`;
    }
    else if(endYear.val()){
        myParam.end_date=`${endYear.val().trim()}1231`;
    }
    // console.log(myParam);
    refreshParam();
    // console.log(myParam);
    makeCall();
})
