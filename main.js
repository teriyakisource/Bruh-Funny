window.postReqAmount = 3;

function getAll() {
    for (i = 1; i <= window.postReqAmount; i++) {
        console.log("running loop")
        
        firebase.database().ref("Post/" + i).on('value', function (snapshot) {
            snapshot.val()["Name"]

            document.getElementById("stream").innerHTML += 
            "<br><br><div class = 'post'><h3>" + snapshot.val()["Name"] + "</h3></div><br><img src = '" + snapshot.val()["Url"] + "' width = 30%/><br>"
            
        })

        
    }
}

getAll()