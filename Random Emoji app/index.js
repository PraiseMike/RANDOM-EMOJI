const btnEl = document.getElementById('btn')
const emojiNameEl = document.getElementById('emoji-name')


const emoji = [];

async function getEmoji() {
    let response = await fetch('https://emoji-api.com/emojis?access_key=f8be041e723aa7348fab1ac0be58f8b6743e0832')

    data = await response.json() 

    for (let i=0; i<1420; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName
        });
    }
} 

getEmoji()



btnEl.addEventListener('click', ()=> {
    const randomNum = Math.floor(Math.random()*emoji.length)
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode; 
});