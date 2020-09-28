window.postReqAmount = 3;

function getAll() {
    for (i = 1; i <= window.postReqAmount; i++) {
        console.log("running loop")
        var content = []
        firebase.database().ref("Post/" + i).on('value', function (snapshot) {
            content += snapshot.val();
            console.log(snapshot.val())
            
        })
        document.getElementById("stream").innerHTML += 
            "<br><br><p>" + content[0] + "<br><img src = '" + content[1] + "' width = '200'/>" 
    }
}

function getMegaBruh() {

}

function getBruhMoment() {

}


getAll()