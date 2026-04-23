let messages = [
    "Riddhi… gussa ho kya ya bas mujhe miss kar rahi ho? 😏",
    "Sach bolu to meri galti thi… thodi si… okay thodi zyada 🥺",
    "Par itni bhi badi nahi thi ki tum mujhse baat hi na karo 😭",
    "Chalo deal karte hain 🤝",
    "Main tumhe ice cream + chocolate + long call dunga 🍦🍫📞",
    "Aur haan… game bhi khelenge tumhari marzi ka 🎮",
    "Bas tum ek baar smile kar do 😊",
    "Varna main roz aise hi manaata rahunga 😂",
    "Please maan jao na… warna main aur zyada cute ho jaunga 😌",
    "Aur phir tum bach nahi paogi 😏❤️",
    "Final bol raha hoon… I really miss you 💖",
    "Ab to maan jao Ridhi… warna main aa raha hoon personally 😤❤️"
];

let index = 0;

function nextMessage() {
    index++;
    
    if(index < messages.length){
        document.getElementById("message").innerText = messages[index];
    } else {
        document.getElementById("message").innerText = "Yayyy! Meri Ridhi maan gayi 😍❤️";
    }
}