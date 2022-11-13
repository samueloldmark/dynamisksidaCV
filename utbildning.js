let url = "/utbildning.json"


const ul = document.getElementById('educationList');

async function getSomething() {

    let response = await fetch(url);

    if (response.ok) {
        let data = await response.json()
        console.log(data.education);
        console.log(getSomething.response);

        let education = data.education;

        for (let i = 0; i < education.length; i++) {

            const li = document.createElement("li");
            li.innerHTML = education[i];
            console.log(education[i])
            ul.appendChild(li);
        }
    }

}

getSomething();

let educationReadMore = document.querySelector('.educationReadMore');
let isShow = true;
function showHideReadMore() {
    if (isShow) {
        educationReadMore.style.display = 'none';
        isShow = false;
    } else {
        educationReadMore.style.display = 'block';
        isShow = true;
    }
}
