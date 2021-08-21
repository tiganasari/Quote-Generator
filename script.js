function generate() {
    let quotes = {
        "Joe Klaas, Twelve Steps to Happiness" :   '“The truth will set you free, but first it will piss you off.”',
        "Charlotte Brontë, Jane Eyre" : '"I am no bird; and no net ensnares me: I am a free human being with an independent will.”',
        "Virginia Woolf, A Room of One's Own" : '"Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.”', 
        "Coco Chanel" : '“The most courageous act is still to think for yourself. Aloud.”',
        "John Green, The Fault in Our Stars" : '“Some tourists think Amsterdam is a city of sin, but in truth it is a city of freedom. And in freedom, most people find sin.”',
        "Oscar Wilde" : '“Be yourself; everyone else is already taken.”',
        "Marilyn Monroe" : '“I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.”',
        "Martin Luther King Jr" : '“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”',
        "Ralph Waldo Emerson" : '"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
        "Andre Gide, Autumn Leaves" : '“It is better to be hated for what you are than to be loved for what you are not.”',
    }

    let authors = Object.keys(quotes);
    
    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];
    
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
    
}