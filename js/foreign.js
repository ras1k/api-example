const loadUser = async () => {
    try {
        const res = await fetch('https://randomuser.me/api/?gender=female')
        const data = await res.json()
        displayUser(data);
    }
    catch(error){
        console.log(error);
    }
}

// const loadUser = () =>{
//     fetch('https://randomuser.me/api/?gender=female')
//     .then(res => res.json())
//     .then(data => displayUser(data))
// }

const displayUser = user => {
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;
    // console.log(user.results[0].gender);

    const name = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name;

    const email = user.results[0].email;
    document.getElementById('email').innerHTML = email;

    // console.log(user.results[0].name.title);
}

loadUser()