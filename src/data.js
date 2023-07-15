const data = [
    {
        quote: "Frankly, my dear, I don't give a damn.", 
        character: "Rhett Butler",
        actor: "Clark Gable", 
        title: ["Gone with the Wind"], 
        year: 1939
    },
    {
        quote: "I'm going to make him an offer he can't refuse.", 
        character: "Vito Corleogne", 
        actor: "Marlon Brando", 
        title: ["The Godfather", "Godfather"], 
        year: 1972
    },
    {
        quote: "Toto, I've a feeling we're not in Kansas anymore.", character: "Dorothy Gale", actor: "Judy Garland", title: ["The Wizard of Oz", "Wizard of Oz"], year: 1939
    },
    {
        quote: "Here's looking at you, kid.", character: "Rick Blaine", actor: "Humphrey Bogart", title: ["Casablanca"], year: 1942
    },
    {
        quote: "Go ahead, make my day.", character: "Harry Callahan", actor: "Clint Eastwood", title: ["Sudden Impact"], year: 1983
    },
    {
        quote: "All right, Mr. DeMille, I'm ready for my close-up.", character: "Norma Desmond", actor: "Gloria Swanson", title: ["Sunset Boulevard", "Sunset Blvd"], year: 1950
    },
    {
        quote: "May the Force be with you.", character: "Han Solo", actor: "Harrison Ford", title: ["Star Wars", "Star Wars A New Hope", "Star Wars Episode IV: A New Hope", "Star Wars Episode 4: A New Hope"], year: 1977
    },
    {
        quote: "Fasten your seatbelts. It's going to be a bumpy night.", character: "Margo Channing", actor: "Bette Davis", title: ["All About Eve"], year: 1950
    },
    {
        quote: "You talkin' to me?", character: "Travis Bickle", actor: "Robert De Niro", title: ["Taxi Driver"], year: 1976
    },
    {
        quote: "What we've got here is failure to communicate.", character: "Captain", actor: "Strother Martin", title: ["Cool Hand Luke"], year: 1967
    },
    {
        quote: "I love the smell of napalm in the morning.", character: "Lt. Col. Bill Kilgore", actor: "Robert Duvall", title: ["Apocalypse Now"], year: 197
    },
    {
        quote: "Love means never having to say you're sorry.", character: "Jennifer Cavalleri", actor: "Ali MacGraw", title: ["Love Story"], year: 1970
    },
    {
        quote: "The stuff that dreams are made of.", character: "Sam Spade", actor: "Humphrey Bogart", title: ["The Maltese Falcon", "Maltese Falcon"], year: 1941
    },
    {
        quote: "E.T. phone home.", character: "E.T.", actor: "Pat Welsh", title: ["E.T. the Extra-Terrestrial", "ET", "E.T.", "ET the Extra-Terrestrial", "E.T. the Extra Terrestrial", "ET the Extra Terrestrial"], year: 198
    },
    {
        quote: "They call me Mister Tibbs!", character: "Virgil Tibbs", actor: "Sidney Poitier", title: ["In the Heat of the Night"], year: 1967
    },
    {
        quote: "Rosebud.", character: "Charles Foster Kane", actor: "Orson Welles", title: ["Citizen Kane"], year: 1941
    },
    {
        quote: "Made it, Ma! Top of the world!", character: "Arthur 'Cody' Jarrett", actor: "James Cagney", title: ["White Heat"], year: 1949
    },
    {
        quote: "I'm as mad as hell, and I'm not going to take this anymore!", character: "Howard Beale", actor: "Peter Finch", title: ["Network"], year: 1976
    },
    {
        quote: "Louis, I think this is the beginning of a beautiful friendship.", character: "Rick Blaine", actor: "Humphrey Bogart", title: ["Casablanca"], year: 1942
    },
    {
        quote: "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.", character: "Hannibal Lecter", actor: "Anthony Hopkins", title: ["The Silence of the Lambs", "Silence of the Lambs"], year: 1991
    },
    {
        quote: "Bond. James Bond.", character: "James Bond", actor: "Sean Connery", title: ["Dr. No", "Dr No", "Doctor No"], year: 1962
    },
    {
        quote: "There's no place like home.", character: "Dorothy Gale", actor: "Judy Garland", title: ["The Wizard of Oz", "Wizard of Oz"], year: 1939
    },
    {
        quote: "I am big! It's the pictures that got small.", character: "Norma Desmond", actor: "Gloria Swanson", title: ["Sunset Boulevard"], year: 1950
    },
    {
        quote: "Show me the money!", character: "Rod Tidwell", actor: "Cuba Gooding Jr.", title: ["Jerry Maguire"], year: 1996
    },
    {
        quote: "Why don't you come up sometime and see me?", character: "Lady Lou", actor: "Mae West", title: ["She Done Him Wrong"], year: 1933
    },
    {
        quote: "I'm walkin' here! I'm walkin' here!", character: "'Ratso' Rizzo", actor: "Dustin Hoffman", title: ["Midnight Cowboy"], year: 1969
    },
    {
        quote: "Play it, Sam. Play 'As Time Goes By.'", character: "Ilsa Lund", actor: "Ingrid Bergman", title: ["Casablanca"], year: 1942
    },
    {
        quote: "You can't handle the truth!", character: "Col. Nathan R. Jessup", actor: "Jack Nicholson", title: ["A Few Good Men"], year: 1992
    },
    {
        quote: "I want to be alone.", character: "Grusinskaya", actor: "Greta Garbo", title: ["Grand Hotel"], year: 1932
    },
    {
        quote: "After all, tomorrow is another day!", character: "Scarlett O'Hara", actor: "Vivien Leigh", title: ["Gone with the Wind"], year: 1939
    },
    {
        quote: "Round up the usual suspects.", character: "Capt. Louis Renault", actor: "Claude Rains", title: ["Casablanca"], year: 1942
    },
    {
        quote: "I'll have what she's having.", character: "Customer", actor: "Estelle Reiner", title: ["When Harry Met Sally...", "When Harry Met Sally"], year: 1989
    },
    {
        quote: "You know how to whistle, don't you, Steve? You just put your lips together and blow.", character: "Marie 'Slim' Browning", actor: "Lauren Bacall", title: ["To Have and Have Not"], year: 1944
    },
    {
        quote: "You're gonna need a bigger boat.", character: "Martin Brody", actor: "Roy Scheider", title: ["Jaws"], year: 1975
    },
    {
        quote: "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!", character: "Gold Hat", actor: "Alfonso Bedoya", title: ["The Treasure of the Sierra Madre", "Treasure of the Sierra Madre"], year: 1948
    },
    {
        quote: "I'll be back", character: "The Terminator", actor: "Arnold Schwarzenegger", title: ["The Terminator", "Terminator"], year: 1984
    },
    {
        quote: "Today, I consider myself the luckiest man on the face of the Earth.", character: "Lou Gehrig", actor: "Gary Cooper", title: ["The Pride of the Yankees", "Pride of the Yankees"], year: 1942
    },
    {
        quote: "If you build it, he will come.", character: "Shoeless Joe Jackson", actor: "Ray Liotta (voice)", title: ["Field of Dreams"], year: 1989
    },
    {
        quote: "Mama always said life was like a box of chocolates. You never know what you're gonna get.", character: "Forrest Gump", actor: "Tom Hanks", title: ["Forrest Gump"], year: 1994
    },
    {
        quote: "We rob banks.", character: "Clyde Barrow", actor: "Warren Beatty", title: ["Bonnie and Clyde"], year: 1967
    },
    {
        quote: "Plastics.", character: "Mr. Maguire", actor: "Walter Brooke", title: ["The Graduate", "Graduate"], year: 1967
    },
    {
        quote: "We'll always have Paris.", character: "Rick Blaine", actor: "Humphrey Bogart", title: ["Casablanca"], year: 1942
    },
    {
        quote: "I see dead people.", character: "Cole Sear", actor: "Haley Joel Osment", title: ["The Sixth Sense", "Sixth Sense", "The 6th Sense", "6th Sense"], year: 1999
    },
    {
        quote: "Stella! Hey, Stella!", character: "Stanley Kowalski", actor: "Marlon Brando", title: ["A Streetcar Named Desire", "Streetcar Named Desire", "The Streetcar Named Desire"], year: 1951
    },
    {
        quote: "Oh, Jerry, don't let's ask for the moon. We have the stars.", character: "Charlotte Vale", actor: "Bette Davis", title: ["Now, Voyager", "Now Voyager"], year: 1942
    },
    {
        quote: "Shane. Shane. Come back!", character: "Joey Starrett", actor: "Brandon De Wilde", title: ["Shane"], year: 1953
    },
    {
        quote: "Well, nobody's perfect.", character: "Osgood Fielding III", actor: "Joe E. Brown", title: ["Some Like It Hot"], year: 1959
    },
    {
        quote: "It's alive! It's alive!", character: "Henry Frankenstein", actor: "Colin Clive", title: ["Frankenstein"], year: 1931
    },
    {
        quote: "Houston, we have a problem.", character: "Jim Lovell", actor: "Tom Hanks", title: ["Apollo 13"], year: 1995
    },
    {
        quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?", character: "Harry Callahan", actor: "Clint Eastwood", title: ["Dirty Harry"], year: 1971
    },
    {
        quote: "You had me at 'hello.'", character: "Dorothy Boyd", actor: "Renée Zellweger", title: ["Jerry Maguire"], year: 1996
    },
    {
        quote: "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.", character: "Capt. Geoffrey T. Spaulding", actor: "Groucho Marx", title: ["Animal Crackers"], year: 1930
    },
    {
        quote: "There's no crying in baseball!", character: "Jimmy Dugan", actor: "Tom Hanks", title: ["A League of Their Own", "League of Their Own", "The League of Their Own"], year: 1992
    },
    {
        quote: "La-dee-da, la-dee-da.", character: "Annie Hall", actor: "Diane Keaton", title: ["Annie Hall"], year: 1977
    },
    {
        quote: "A boy's best friend is his mother.", character: "Norman Bates", actor: "Anthony Perkins", title: ["Psycho"], year: 1960
    },
    {
        quote: "Greed, for lack of a better word, is good.", character: "Gordon Gekko", actor: "Michael Douglas", title: ["Wall Street"], year: 1987
    },
    {
        quote: "Keep your friends close, but your enemies closer.", character: "Michael Corleone", actor: "Al Pacino", title: ["The Godfather Part II", "The Godfather Part 2", "Godfather Part II", "Godfather Part 2", "The Godfather 2", "Godfather 2"], year: 1974
    },
    {
        quote: "As God is my witness, I'll never be hungry again.", character: "Scarlett O'Hara", actor: "Vivien Leigh", title: ["Gone with the Wind"], year: 1939
    },
    {
        quote: "Well, here's another nice mess you've gotten me into!", character: "Oliver", actor: "Oliver Hardy", title: ["Sons of the Desert"], year: 1933
    },
    {
        quote: "Say 'hello' to my little friend!", character: "Tony Montana", actor: "Al Pacino", title: ["Scarface"], year: 1983
    },
    {
        quote: "What a dump.", character: "Rosa Moline", actor: "Bette Davis", title: ["Beyond the Forest"], year: 1949
    },
    {
        quote: "Mrs. Robinson, you're trying to seduce me. Aren't you?", character: "Benjamin Braddock", actor: "Dustin Hoffman", title: ["The Graduate"], year: 1967
    },
    {
        quote: "Gentlemen, you can't fight in here! This is the War Room!", character: "President Merkin Muffley", actor: "Peter Sellers", title: ["Dr. Strangelove", "Doctor Strangelove", "Dr Strangelove"], year: 1964
    },
    {
        quote: "Elementary, my dear Watson.", character: "Sherlock Holmes", actor: "Basil Rathbone", title: ["The Adventures of Sherlock Holmes", "Adventures of Sherlock Holmes"], year: 1939
    },
    {
        quote: "Take your stinking paws off me, you damned dirty ape.", character: "George Taylor", actor: "Charlton Heston", title: ["Planet of the Apes", "The Planet of the Apes"], year: 1968
    },
    {
        quote: "Of all the gin joints in all the towns in all the world, she walks into mine.", character: "Rick Blaine", actor: "Humphrey Bogart", title: ["Casablanca"], year: 1942
    },
    {
        quote: "Here's Johnny!", character:"Jack Torrance", actor: "Jack Nicholson", title: ["The Shining", "Shining"], year: 1980
    },
    {
        quote: "They're here!", character: "Carol Anne Freeling", actor: "Heather O'Rourke", title: ["Poltergeist"], year: 1982
    },
    {
        quote: "Is it safe?", character: "Dr. Christian Szell", actor: "Laurence Olivier", title: ["Marathon Man"], year: 1976
    },
    {
        quote: "Wait a minute, wait a minute. You ain't heard nothin' yet!", character: "Jakie Rabinowitz/Jack Robin", actor: "Al Jolson", title: ["The Jazz Singer", "Jazz Singer"], year: 1927
    },
    {
        quote: "No wire hangers, ever!", character: "Joan Crawford", actor: "Faye Dunaway", title: ["Mommie Dearest"], year: 1981
    },
    {
        quote: "Mother of mercy, is this the end of Rico?", character: "Rico Bandello", actor: "Edward G. Robinson", title: ["Little Caesar"], year: 1931
    },
    {
        quote: "Forget it, Jake, it's Chinatown.", character: "Lawrence Walsh", actor: "Joe Mantell", title: ["Chinatown"], year: 1974
    },
    {
        quote: "I have always depended on the kindness of strangers.", character: "Blanche DuBois", actor: "Vivien Leigh", title: ["A Streetcar Named Desire", "Streetcar Named Desire", "The Streetcar Named Desire"], year: 1951
    },
    {
        quote: "Hasta la vista, baby.", character: "The Terminator", actor: "Arnold Schwarzenegger", title: ["Terminator 2: Judgment Day", "Terminator 2 Judgment Day", "Terminator 2"], year: 1991
    },
    {
        quote: "Soylent Green is people!", character: "Det. Robert Thorn", actor: "Charlton Heston", title: ["Soylent Green"], year: 1973
    },
    {
        quote: "Open the pod bay doors, HAL.", character: "Dave Bowman", actor: "Keir Dullea", title: ["2001: A Space Odyssey", "2001", "2001 A Space Odyssey"], year: 1968
    },
    {
        quote: "Striker: 'Surely you can\'t be serious.' Rumack: 'I am serious … and don\'t call me Shirley.'", character: "Ted Striker and Dr. Rumack", actor: "Robert Hays and Leslie Nielsen", title: ["Airplane!", "Airplane"], year: 1980
    },
    {
        quote: "Yo, Adrian!", character: "Rocky Balboa", actor: "Sylvester Stallone", title: ["Rocky"], year: 1976
    },
    {
        quote: "Hello, gorgeous.", character: "Fanny Brice", actor: "Barbra Streisand", title: ["Funny Girl"], year: 1968
    },
    {
        quote: "Toga! Toga!", character: "John 'Bluto' Blutarsky", actor: "John Belushi", title: ["National Lampoon's Animal House", "Animal House"], year: 1978
    },
    {
        quote: "Listen to them. Children of the night. What music they make.", character: "Count Dracula", actor: "Bela Lugosi", title: ["Dracula"], year: 1931
    },
    {
        quote: "Oh, no, it wasn't the airplanes. It was Beauty killed the Beast.", character: "Carl Denham", actor: "Robert Armstrong", title: ["King Kong"], year: 1933
    },
    {
        quote: "My precious.", character: "Gollum", actor: "Andy Serkis", title: ["The Lord of the Rings: The Two Towers", "The Two Towers", "Lord of the Rings The Two Towers", "The Lord of the Rings The Two Towers"], year: 2002
    },
    {
        quote: "Attica! Attica!", character: "Sonny Wortzik", actor: "Al Pacino", title: ["Dog Day Afternoon"], year: 1975
    },
    {
        quote: "Sawyer, you're going out a youngster, but you've got to come back a star!", character: "Julian Marsh", actor: "Warner Baxter", title: ["42nd Street"], year: 1933
    },
    {
        quote: "Listen to me, mister. You're my knight in shining armor. Don't you forget it. You're going to get back on that horse, and I'm going to be right behind you, holding on tight, and away we're gonna go, go, go!", character: "Ethel Thayer", actor: "Katharine Hepburn", title: ["On Golden Pond"], year: 1981
    },
    {
        quote: "Tell 'em to go out there with all they got and win just one for the Gipper.", character: "George Gipp", actor: "Ronald Reagan", title: ["Knute Rockne, All American"], year: 1940
    },
    {
        quote: "A martini. Shaken, not stirred.", character: "James Bond", actor: "Sean Connery", title: ["Goldfinger"], year: 1964
    },
    {
        quote: "Who's on first.", character: "Dexter", actor: "Bud Abbott", title: ["The Naughty Nineties"], year: 1945
    },
    {
        quote: "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a mirac...It's in the hole! It's in the hole! It's in the hole!", character: "Carl Spackler", actor: "Bill Murray", title: ["Caddyshack"], year: 1980
    },
    {
        quote: "Life is a banquet, and most poor suckers are starving to death!", character: "Mame Dennis", actor: "Rosalind Russell", title: ["Auntie Mame"], year: 1958
    },
    {
        quote: "I feel the need—the need for speed!", character: "Pete Mitchell and Nick Bradshaw", actor: "Tom Cruise and Anthony Edwards", title: ["Top Gun"], year: 1986
    },
    {
        quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.", character: "John Keating", actor: "Robin Williams", title: ["Dead Poets Society"], year: 1989
    },
    {
        quote: "Snap out of it!", character: "Loretta Castorini", actor: "Cher", title: ["Moonstruck"], year: 1987
    },
    {
        quote: "My mother thanks you. My father thanks you. My sister thanks you. And I thank you.", character: "George M. Cohan", actor: "James Cagney", title: ["Yankee Doodle Dandy"], year: 1942
    },
    {
        quote: "Nobody puts Baby in a corner.", character: "Johnny Castle", actor: "Patrick Swayze", title: ["Dirty Dancing"], year: 1987
    },
    {
        quote: "I'll get you, my pretty, and your little dog too!", character: "Wicked Witch of the West", actor: "Margaret Hamilton", title: ["The Wizard of Oz", "Wizard of Oz"], year: 1939
    },
    {
        quote: "I'm the king of the world!", character: "Jack Dawson", actor: "Leonardo DiCaprio", title: ["Titanic"], year: 1997
    }
]

export default data