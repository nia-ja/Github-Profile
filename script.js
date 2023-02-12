const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);
        console.log(data);
        // createUserCard(data)
        // getRepos(username)
    } catch(err) {
        if(err.response.status == 404) {
            console.log(err.response.data)
            // createErrorCard("No profile with this username");
        }
    }
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const user = search.value;

    if(user) {
        getUser(user);

        search.value = "";
    }
})