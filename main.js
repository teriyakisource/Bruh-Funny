window.postReqAmount = 3;

function getAll() {
    for (i = 1; i <= window.postReqAmount; i++) {
        console.log("running loop")
        firebase.database().ref("Post/" + i + "/Url").on('value', function (snapshot) {
            console.log(snapshot.val())
            document.getElementById("stream").innerHTML += 
            "<br><img src = '" + snapshot.val() + "' width = '70%'/><br>" 
        })
    }
}

getAll()