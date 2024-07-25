const newSchoolName = document.querySelector('#schoolCard')
let newStudentImg = document.querySelector('#oldImg')  // Card
const newStudentName = document.querySelector('#studentNameCard')
const newDob = document.querySelector('#dobCard')
const newClass = document.querySelector('#classCard')
const newRollNo = document.querySelector('#rollNoCard')
const newContact = document.querySelector('#contactCard')
const oldStudentImg = document.querySelector('#newImg')  //Form
const form = document.querySelector('form')

function studentData(){
    newSchoolName.innerText = document.querySelector('#schoolName').value
    newStudentName.innerText = document.querySelector('#studentName').value
    newDob.innerText = document.querySelector('#dob').value
    newClass.innerText = document.querySelector('#class').value
    newRollNo.innerText = document.querySelector('#roll').value
    newContact.innerText = document.querySelector('#contact').value

    if(oldStudentImg.files && oldStudentImg.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            newStudentImg.src = e.target.result
        }
        reader.readAsDataURL(oldStudentImg.files[0])
    }else{
        alert('Please select a file first.')
    }
    form.reset()

}


function generateCard(){
    window.print()
}
















// function studentData(){
//     document.querySelector('#schoolCard').innerText= document.querySelector('#schoolName').value
//     document.querySelector('#studentNameCard').innerText= document.querySelector('#studentName').value
//     document.querySelector('#dobCard').innerText= document.querySelector('#dob').value
//     document.querySelector('#classCard').innerText= document.querySelector('#class').value
//     document.querySelector('#rollNoCard').innerText= document.querySelector('#roll').value
//     document.querySelector('#contactCard').innerText= document.querySelector('#contact').value
//     let fileInput = document.querySelector('#newImg')
//     let imgElement = document.querySelector('#oldImg')

//     if (fileInput.files && fileInput.files[0]) {
//         const reader = new FileReader();

//         reader.onload = function(e) {
//             imgElement.src = e.target.result;
//         };

//         reader.readAsDataURL(fileInput.files[0]);
//     } else {
//         alert('Please select a file first.');
//     }
// }




    // document.getElementById('my').src= document.querySelector('#img').value
    // oldImg.setAttribute('src',`${newImg}` )
    // newImg.setAttribute('alt', 'newalt')
    // oldImg.src='profile-pic-2.png'
    // console.log(document.querySelector('#img').value)
    // console.log(oldImg)
    // console.log(document.querySelector('#img').value)