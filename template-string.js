const firstName = 'Kamruzzaman';
const lastName = "Shuvo";

const aboutMe = `My name is ${firstName}`;
console.log(aboutMe);

const giveMe = `Give me money ${(10+20)*2+500}`;
console.log(giveMe);

function getCardHTML(name, description, price){
    const div = `
    <div> 
        <h2>${name.toUpperCase()}</h2>
        <p>Price: $${price}</p>
        <p>${description}</p>
    </div>
    `;
    console.log(div);
}

getCardHTML('iPhone 12', 'This is the latest iPhone model', 999);