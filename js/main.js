let quotes = [
    {
        'quote': "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        'name': "― J.K. Rowling, Harry Potter and the Goblet of Fire",
        'keySearch': 'J.K._Rowling, Harry Potter and the Goblet of Fire',
        'source': 'https://en.wikipedia.org/wiki/'
    },
    {
        'quote': "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        'name': "― Ralph Waldo Emerson",
        'keySearch': 'Ralph_Waldo_Emerson',
        'source': 'https://en.wikipedia.org/wiki/'

    },
    {
        'quote': "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
        'name': "― Maya Angelou",
        'keySearch': 'Maya Angelou',
        'source': 'https://en.wikipedia.org/wiki/'

    },

    {
        'quote': "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        'name': "― Mahatma Gandhi",
        'keySearch': 'Mahatma Gandhi',
        'source': 'https://en.wikipedia.org/wiki/'
    },


]


let lIndax = 0;

generateQute(0);


function displayQuote() {
    let index = (Math.floor(Math.random() * quotes.length));
    for (; lIndax === index;) index = Math.floor(Math.random() * quotes.length)
    lIndax = index;
    generateQute(index)
}


function generateQute(index) {
    cartona = `
    <div class="col-2"></div>
    <div class="col-lg-8  col-md-12 text-center">
    <div class="caption pt-2">
      <p class="px-5 fs-3 ">${quotes[index].quote}</p>
      <h6 class="px-5 fs-4">${quotes[index].name}</h6>
      <a href=${quotes[index].source + quotes[index].keySearch} target='_blank'>About ${quotes[index].name}</a>
    </div>
  </div>
  <div class="col-2 "></div>
    `
    document.getElementById('demo').innerHTML = cartona
}


