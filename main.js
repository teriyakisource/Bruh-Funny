window.postReqAmount = 2;

function getAll() {
    for (i = 0; i < window.postReqAmount; i++) {
        console.log("running loop")
        firebase.database().ref("Post/" + i + "/Url").on('value', function (snapshot) {
            console.log(snapshot.val())
            document.getElementById("stream").innerHTML += 
            "<br><img src = '" + snapshot.val() + "' width = '200'/>" 
        })
    }
}

function getMegaBruh() {

}

function getBruhMoment() {

}


getAll()