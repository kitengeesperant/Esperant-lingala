function showWord() {
    const words = ["Mbote", "Nzambe", "Lobi", "Esengo", "Moto"];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("word").textContent = `Mot Lingala : ${randomWord}`;
}
