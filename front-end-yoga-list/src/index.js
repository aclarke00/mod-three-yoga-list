const posesList = document.querySelector("#poses-list") // parent is div. the ul contains a pose list element


// Initial fetch
fetch("http://localhost:3000/poses")
.then(resp => resp.json()) // have all poses
.then(poses => poses.forEach(slapItOnTheDOM)) //array of pose objects

// Render each item
function slapItOnTheDOM(pose) {
    
    const poseLi = document.createElement('li');
    
    poseLi.innerHTML = 
    `<span>
            <h3 class="pose-name">${pose.name}</h3> <input id="button" type="button" value="X"> <br> 
            <img class="image" src="${pose.image_url}"></img>
        <form data-id="${pose.id}" id="edit-form">
            <label for="name">Edit Pose</label>
            <input type="text" name="name" placeholder="Edit Pose Name">
            <input type="submit" value="Edit">
        </form>

    </span>`

    posesList.appendChild(poseLi); // appending to DOM


    // DELETE
    // add button to pose titles 'x'
    // event listener for x
    // send fetch request for delete

    const deleteBtn = poseLi.querySelector("#button") // searching each li for the delete button

    deleteBtn.addEventListener("click", () => {
        fetch(`http://localhost:3000/poses/${pose.id}`, {
        method: 'DELETE'
            })
        .then((response) => response.json())
        .then((data) => {
            poseLi.remove() // at this point we are deleting from the front end
        })
    })

    // EDIT
    // user friendly way to select an instance to edit 
    // add event listener to that . PATCH
    // update place on page
    const editForm = document.querySelector(`#edit-form[data-id="${pose.id}"`)
    const editPoseName = poseLi.querySelector(".pose-name")
    

    editForm.addEventListener('submit', (event) => {
        
        event.preventDefault() //does not refresh upon submission
        let editInput = {
            name: editForm.name.value }
        editPoseName.textContent = editForm.name.value //strong params
        fetch(`http://localhost:3000/poses/${pose.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editInput)
        })
        .then(resp => resp.json())
        .then()
    
    })
}//END FUNCTION
// show user on front end 


// CREATE
// form needs event listener 
// fetch to post

function createNewPose(pose) {
    const form = document.querySelector('#form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
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







// find the element on the DOM
// save element to a variable 
// call the event listener 
// inside of the event listener i would console.log('whatever') 

