const bookRecommendations = {
    mystery: [
            {
              title: "The Curious Incident of the Dog in the Night-Time",
              author: "Mark Haddon",
              series: "Standalone",
            },
            {
              title: "The Girl with the Dragon Tattoo",
              author: "Stieg Larsson",
              series: "Millennium Series",
            },
            {
              title: "Gone Girl",
              author: "Gillian Flynn",
              series: "Standalone",
            },
            {
              title: "The Silent Patient",
              author: "Alex Michaelides",
              series: "Standalone",
            },
            {
              title: "The Thursday Murder Club",
              author: "Richard Osman",
              series: "Thursday Murder Club Series",
            },
            {
                title: "The Guest List",
                author: "Lucy Foley",
                series: "Standalone",
            },
    ],
    sciencefiction: 
    [
        {
            title: "Project Hail Mary",
            author: "Andy Weir",
            series: "Standalone",
        },
        {
            title: "The Martian",
            author: "Andy Weir",
            series: "Standalone",
        },
        {
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            series: "Standalone",
        },
        {
            title: "Cosmos",
            author: "Carl Sagan",
            series: "Standalone",
        },
        {
            title: "The Hitchhiker's Guide to the Galaxy",
            author: "Douglas Adams",
            series: "Hitchhiker's Guide Series",
        },
        {
            title: "The Three-Body Problem",
            author: "Cixin Liu",
            series: "Remembrance of Earth's Past Series",
        },
        {
            title: "The Martian Chronicles",
            author: "Ray Bradbury",
            series: "Standalone",
        },
        {
            title: "Dune",
            author: "Frank Herbert",
            series: "Dune Series",
        },
        {
            title: "Fahrenheit 451",
            author: "Ray Bradbury",
            series: "Standalone",
        },
        {
            title: "Neuromancer",
            author: "William Gibson",
            series: "Sprawl Trilogy",
        },
        {
            title: "The Left Hand of Darkness",
            author: "Ursula K. Le Guin",
            series: "Hainish Cycle",
        },
        {
            title: "Ender's Game",
            author: "Orson Scott Card",
            series: "Ender's Game Series",
        },
    ],
    romance: [
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            series: "Standalone",
        },
        {
            title: "The Notebook",
            author: "Nicholas Sparks",
            series: "Standalone",
        },
        {
            title: "Outlander",
            author: "Diana Gabaldon",
            series: "Outlander Series",
        },
        {
            title: "Me Before You",
            author: "Jojo Moyes",
            series: "Me Before You Series",
        },
        {
            title: "Red, White & Royal Blue",
            author: "Casey McQuiston",
            series: "Standalone",
        },
        {
            title: "Book Lovers",
            author: "Emily Henry",
            series: "Standalone",
        },
        {
            title: "Beach Read",
            author: "Emily Henry",
            series: "Standalone",
        },
    ],
    fantasy: [
        {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            series: "The Lord of the Rings Series",
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            series: "Standalone",
        },
        {
            title: "The Harry Potter series",
            author: "J.K. Rowling",
            series: "Harry Potter Series",
        },
        {
            title: "The Chronicles of Narnia",
            author: "C.S. Lewis",
            series: "The Chronicles of Narnia Series",
        },
        {
            title: "The Earthsea Cycle",
            author: "Ursula K. Le Guin",
            series: "Earthsea Cycle Series",
        },
        {
            title: "The Wheel of Time series",
            author: "Robert Jordan",
            series: "The Wheel of Time Series",
        },
        {
            title: "The Song of Ice and Fire series",
            author: "George R.R. Martin",
            series: "A Song of Ice and Fire Series",
        },
        {
            title: "The Stormlight Archive series",
            author: "Brandon Sanderson",
            series: "The Stormlight Archive Series",
        },
        {
            title: "The Discworld series",
            author: "Terry Pratchett",
            series: "Discworld Series",
        },
        {
            title: "The Kingkiller Chronicle series",
            author: "Patrick Rothfuss",
            series: "The Kingkiller Chronicle Series",
        },
        {
            title: "The Cosmere",
            author: "Brandon Sanderson",
            series: "Cosmere Universe",
        },
        {
            title: "The Dark Tower series",
            author: "Stephen King",
            series: "The Dark Tower Series",
        },
        {
            title: "The Mistborn series",
            author: "Brandon Sanderson",
            series: "Mistborn Series",
        },
        {
            title: "The First Law trilogy",
            author: "Joe Abercrombie",
            series: "The First Law Series",
        },
        {
            title: "The Stormlight Archive series",
            author: "Brandon Sanderson",
            series: "The Stormlight Archive Series",
        },
        {
            title: "The Broken Earth trilogy",
            author: "N.K. Jemisin",
            series: "The Broken Earth Series",
        },
        {
            title: "The Inheritance Cycle",
            author: "Christopher Paolini",
            series: "The Inheritance Cycle Series",
        },
        {
            title: "The His Dark Materials trilogy",
            author: "Philip Pullman",
            series: "His Dark Materials Series",
        },
        {
            title: "The Percy Jackson and the Olympians series",
            author: "Rick Riordan",
            series: "Percy Jackson and the Olympians Series",
        },
        {
            title: "The Artemis Fowl series",
            author: "Eoin Colfer",
            series: "Artemis Fowl Series",
        },
        {
            title: "The Chronicles of Amber",
            author: "Roger Zelazny",
            series: "The Chronicles of Amber Series",
        },
        {
            title: "The Earthsea Cycle",
            author: "Ursula K. Le Guin",
            series: "Earthsea Cycle Series",
        },
        {
            title: "The Magicians trilogy",
            author: "Lev Grossman",
            series: "The Magicians Series",
        },
        {
            title: "The Riftwar Cycle",
            author: "Raymond E. Feist",
            series: "The Riftwar Cycle Series",
        },
        {
            title: "The Dragonlance Chronicles",
            author: "Margaret Weis and Tracy Hickman",
            series: "Dragonlance Chronicles Series",
        },
        {
            title: "The Shannara Chronicles",
            author: "Terry Brooks",
            series: "Shannara Chronicles Series",
        },
        {
            title: "The Malazan Book of the Fallen series",
            author: "Steven Erikson",
            series: "Malazan Book of the Fallen Series",
        },
        ],
        thriller: [
            {
                title: "The Da Vinci Code",
                author: "Dan Brown",
                series: "Robert Langdon Series",
            },
            {
                title: "Gone Girl",
                author: "Gillian Flynn",
                series: "Standalone",
            },
            {
                title: "The Girl on the Train",
                author: "Paula Hawkins",
                series: "Standalone",
            },
            {
                title: "The Silence of the Lambs",
                author: "Thomas Harris",
                series: "Hannibal Lecter Series",
            },
            {
                title: "The Girl with the Dragon Tattoo",
                author: "Stieg Larsson",
                series: "Millennium Series",
            },
            {
                title: "The Shining",
                author: "Stephen King",
                series: "Standalone",
            },
            {
                title: "The Bourne Identity",
                author: "Robert Ludlum",
                series: "Jason Bourne Series",
            },
            {
                title: "The Hunt for Red October",
                author: "Tom Clancy",
                series: "Jack Ryan Series",
            },
            {
                title: "Gone",
                author: "James Patterson and Michael Ledwidge",
                series: "Michael Bennett Series",
            },
            {
                title: "The Reversal",
                author: "Michael Connelly",
                series: "Mickey Haller Series",
            },
        ],
        danmei: [
            {
                title: "The Husky and His White Cat Shizun",
                author: "Meatbun Doesn't Eat Meat",
                series: "Standalone",
            },
            {
                title: "Grandmaster of Demonic Cultivation",
                author: "Mo Xiang Tong Xiu(MXTX)",
                series: "Standalone",
            },
            {
                title: "Heaven's Official Blessing",
                author: "Mo Xiang Tong Xiu(MXTX)",
                series: "Standalone",
            },
            {
                title: "Global University Entrance Examination",
                author: "Mu Su Li",
                series: "Standalone",
            },
            {
                title: "Kaleidoscope of Death",
                author: "Xī Zǐxù",
                series: "Standalone",
            },
            {
                title: "Mist Unlimited",
                author: "Wei Feng Ji Xu",
                series: "Standalone",
            },
            {
                title: "I Can Do It",
                author: "Jiàng Zi Bèi",
                series: "Standalone",
            },
            {
                title: "First-Class Lawyer",
                author: "Mu Su Li",
                series: "Standalone",
            },
             ],
  };
  

document.getElementById("get-recommendations-button").addEventListener("click", () => {
    // Get the user's preferences.
    const genre = document.getElementById("genre").value;
    const authors = document.getElementById("authors").value;
    const series = document.querySelector('input[name="series"]:checked').value;
    const themes = document.getElementById("themes").value;
    const avoidGenres = document.getElementById("avoid-genres").value;
  
    // Generate book recommendations.
    const recommendations = generateRecommendations(genre, authors, series, themes, avoidGenres, bookRecommendations);
  
    // Display recommendations on the page.
    displayRecommendations(recommendations);
  });
  

  function generateRecommendations(genre, authors, series, themes, avoidGenres, bookRecommendations) {
    // Get the recommendations for the selected genre.
    const filteredRecommendations = bookRecommendations[genre] || [];

    const filteredBooks = filteredRecommendations.filter(book => {
        if (
            (!authors || authors === "" || book.author.toLowerCase().includes(authors.toLowerCase())) &&
            (series !== "standalone" || book.series === "Standalone") &&
            (series !== "series" || book.series !== "Standalone") &&
            (!themes || themes === "" || book.title.toLowerCase().includes(themes.toLowerCase())) &&
            (!avoidGenres || avoidGenres === "" || !book.title.toLowerCase().includes(avoidGenres.toLowerCase()))
        ) {
            return true;
        }

        return false;
    });

    return filteredBooks;
}

  
function displayRecommendations(recommendations) {
    const recommendationsList = document.getElementById("recommendations");
    recommendationsList.innerHTML = "";

    if (recommendations.length > 0) {
        recommendations.forEach((book) => {
            const listItem = document.createElement("li");
            listItem.textContent = book.title; 
            recommendationsList.appendChild(listItem);
        });
    } else {
        recommendationsList.innerHTML = "No recommendations available based on your preferences.";
    }
}
