var api = new XMLHttpRequest()
api.open("GET","https://api.publicapis.org/entries")
api.responseType = "json"
api.send();
api.onLoad = function(){
    var responseObject = api.response
    for (var i =0;i<responseObject.entries.length;i++){
        console.log(responseObject)
    }
}


// var friends =  ["jo", "john","mary", "suji","dennis"]
// var data = friends.slice(0,3)
// console.log(data)
// for(i=0;i<data.length;i++){
//     console.log(friends[i])
// }