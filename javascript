const joke=document.querySelector('.joke')
const btn=document.getElementById('btn')

const generateJokes = async () => {
        try {
            const setHeader = {
                headers: {
                    Accept: "application/json"
                }
            }
    //fetching api with async await
    const url = "https://icanhazdadjoke.com";
            const res = await fetch(url, setHeader);
            const data = await res.json();
            console.log(data);
            joke.innerHTML = data.joke;
}
catch(Error){
    console.log(`the error is ${Error}`)
}
}
btn.addEventListener('click',generateJokes)
generateJokes();

