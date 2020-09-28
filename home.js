window.postReqAmount = 30;

function getAll() {
    for (i = 1; i < window.postReqAmount; i++) {
        firebase.database().ref("Post/" + window.postReqAmount + "/imgurl").on('value', function (snapshot) {
            document.getElementById("stream").innerHTML += 
            "<br><img src = '" + snapshot.val() + "'/>" 
        })
    }
}

function getMegaBruh() {

}

function getBruhMoment() {

}

