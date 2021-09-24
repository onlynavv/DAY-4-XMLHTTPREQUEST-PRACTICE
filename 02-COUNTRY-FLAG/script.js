const url = 'https://restcountries.com/v3/all'
const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.responseType = 'json'
xhr.onload = () => {
    const countries = xhr.response
    for(let i = 0 ; i<countries.length; i++){
        console.log(countries[i].flag)
    }
}
xhr.send()