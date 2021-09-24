const url = 'https://restcountries.com/v3/all'
const xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.responseType = 'json'
xhr.onload = () => {
    const countries = xhr.response
    console.log(countries)
    var name
    var region
    var subRegion
    for(var i = 0; i<countries.length; i++){
        name = countries[i].name.official
        region = countries[i].region
        subRegion = countries[i].subregion
        console.log(`Name: ${name}, Region: ${region}, Sub-region: ${subRegion}`)
    }
}
xhr.send()