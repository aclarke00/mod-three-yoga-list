const posesList = document.querySelector("#poses-list")

fetch("http://localhost:3000/poses")
.then(resp => resp.json())
.then(poses => poses.forEach(slapItOnTheDOM))

function slapItOnTheDOM(pose) {
    const poseLi = document.createElement('li');
    
    poseLi.innerHTML = `
    <span>${pose.name} <br> 
    <img class="image" src="${pose.image_url}"></img> </span>`
    posesList.appendChild(poseLi);
}

//create
// form needs event listener 
// fetch to post

function createNewPose(pose) {
    const form = document.querySelector('#form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        // debugger
        let userInput = {
            name: form.name.value,
            image_url: form.image.value
        }

        fetch("http://localhost:3000/poses", {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
                }, 
                body: JSON.stringify(userInput)
        })
        .then(resp => resp.json())
        .then(slapItOnTheDOM)

    })
}

createNewPose()


//delete
// add button to pose titles 'x'
// event listener for x
// send fetch request for delete


//edit 
//user friendly way to select an instance to edit 
//add event listener to that . POST
