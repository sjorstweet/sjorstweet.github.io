let container = document.getElementById('container')

let tweetDiv
let tweetImage
let tweetText

for(let i = 1; i < 35; i++){
    tweetDiv = document.createElement('div')
    tweetDiv.className = 'tweet'

    tweetImage = document.createElement('img')
    tweetImage.src = `${i}.png`

    tweetText = document.createElement('div')
    tweetText.id = i;
    tweetText.innerHTML = `${i}`
    switch(i){
        case 4:
            tweetText.innerHTML = 'They aint gonna catch me slipping'
            break;
        case 7:
            tweetText.innerHTML = 'Eerlijk was dik spel op de iPod'
            break;
        case 8:
        tweetText.innerHTML = 'Begrijp je'
        break;
        case 9:
            tweetText.innerHTML = 'Enige wat ik heb onthouden is dat Ouagadougou de hoofdstad van Burkina Faso is. En ja ik heb de spelling opgezocht op google.'
        break;
        case 12:
            tweetText.innerHTML = 'Ga ik nu wel steady op'
        break;
        case 14:
            tweetText.innerHTML = 'Geen leugens hier'
        break;
        case 15:
            tweetText.innerHTML = 'Nog steeds mood'
        break;
        case 18:
            tweetText.innerHTML = 'Blijkbaar kende ik geen Engelse namen'
        break;
        case 23:
            tweetText.innerHTML = 'Toen deze term nog maar 1 betekenis had'
        break;
        case 30:
            tweetText.innerHTML = 'Geen idee wat hier mis ging'
        break;
        default:
            tweetText.innerHTML = null
    }



    tweetDiv.append(tweetImage)
    tweetDiv.append(tweetText)
    container.append(tweetDiv)
}