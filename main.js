window.postReqAmount = 3;

function getAll() {
    for (i = 1; i <= window.postReqAmount; i++) {
        console.log("running loop")
        var returnval = []
        firebase.database().ref("Post/" + i).on('value', function (snapshot) {
            returnval += snapshot.val() 
            console.log(snapshot.val()["Name"])

            
        })

        
    }
}

getAll()