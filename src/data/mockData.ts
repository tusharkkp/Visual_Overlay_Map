import { Category, Friend, Item } from '../types';

// Categories
export const categories: Category[] = [
  { id: 'movies', name: 'Movies' },
  { id: 'books', name: 'Books' },
  { id: 'music', name: 'Music' },
  { id: 'games', name: 'Games' },
  { id: 'places', name: 'Places' },
  { id: 'food', name: 'Food' }
];

// Friends
export const friends: Friend[] = [
  { id: 'alex', name: 'Alex' },
  { id: 'jordan', name: 'Jordan' },
  { id: 'casey', name: 'Casey' },
  { id: 'taylor', name: 'Taylor' }
];

// Mock data
const mockItems: Record<string, Item[]> = {
  // User's recommendations
  'user-movies': [
    {
      id: 'm1',
      title: 'Inception',
      category: 'Movies',
      rating: 5,
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      tags: ['sci-fi', 'thriller', 'mind-bending']
    },
    {
      id: 'm2',
      title: 'The Shawshank Redemption',
      category: 'Movies',
      rating: 5,
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      tags: ['drama', 'prison', 'friendship']
    },
    {
      id: 'm3',
      title: 'Parasite',
      category: 'Movies',
      rating: 4,
      description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
      tags: ['thriller', 'drama', 'social commentary']
    },
    {
      id: 'm4',
      title: 'Interstellar',
      category: 'Movies',
      rating: 5,
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      tags: ['sci-fi', 'space', 'time']
    },
    {
      id: 'm5',
      title: 'The Dark Knight',
      category: 'Movies',
      rating: 5,
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      tags: ['superhero', 'action', 'thriller']
    }
  ],
  'user-books': [
    {
      id: 'b1',
      title: '1984',
      category: 'Books',
      rating: 5,
      description: 'A dystopian novel by George Orwell published in 1949 about the dangers of totalitarianism.',
      tags: ['dystopian', 'classic', 'political']
    },
    {
      id: 'b2',
      title: 'The Great Gatsby',
      category: 'Books',
      rating: 4,
      description: 'F. Scott Fitzgerald\'s novel of the Jazz Age that follows Jay Gatsby\'s pursuit of Daisy Buchanan.',
      tags: ['classic', 'fiction', 'american']
    },
    {
      id: 'b3',
      title: 'Sapiens',
      category: 'Books',
      rating: 5,
      description: 'A brief history of humankind by Yuval Noah Harari that explores the development of Homo sapiens.',
      tags: ['non-fiction', 'history', 'anthropology']
    },
    {
      id: 'b4',
      title: 'Dune',
      category: 'Books',
      rating: 5,
      description: 'Frank Herbert\'s epic science fiction novel set in the distant future amidst a feudal interstellar society.',
      tags: ['sci-fi', 'epic', 'political']
    },
    {
      id: 'b5',
      title: 'The Hobbit',
      category: 'Books',
      rating: 4,
      description: 'J.R.R. Tolkien\'s fantasy novel about the adventures of Bilbo Baggins, who is convinced by the wizard Gandalf to join a quest to reclaim the Lonely Mountain from the dragon Smaug.',
      tags: ['fantasy', 'adventure', 'classic']
    }
  ],
  'user-music': [
    {
      id: 'mu1',
      title: 'Bohemian Rhapsody',
      category: 'Music',
      rating: 5,
      description: 'A song by the British rock band Queen from their album "A Night at the Opera" (1975).',
      tags: ['rock', 'classic', 'operatic']
    },
    {
      id: 'mu2',
      title: 'Hotel California',
      category: 'Music',
      rating: 4,
      description: 'A song by the Eagles from their album of the same name (1976), known for its allegorical lyrics and extended guitar solo.',
      tags: ['rock', 'classic rock', '70s']
    },
    {
      id: 'mu3',
      title: 'Stairway to Heaven',
      category: 'Music',
      rating: 5,
      description: 'A song by the English rock band Led Zeppelin, released in late 1971 on their fourth album.',
      tags: ['rock', 'classic rock', 'guitar']
    },
    {
      id: 'mu4',
      title: 'Kendrick Lamar - To Pimp a Butterfly',
      category: 'Music',
      rating: 5,
      description: 'A studio album by American rapper Kendrick Lamar released in 2015, exploring themes of African-American culture, racial inequality, depression, and institutional discrimination.',
      tags: ['rap', 'hip-hop', 'jazz influences']
    },
    {
      id: 'mu5',
      title: 'Radiohead - OK Computer',
      category: 'Music',
      rating: 5,
      description: 'The third studio album by English rock band Radiohead, released in 1997, known for its themes of consumerism, social alienation, and political malaise.',
      tags: ['alternative rock', 'experimental', '90s']
    }
  ],
  'user-games': [
    {
      id: 'g1',
      title: 'The Legend of Zelda: Breath of the Wild',
      category: 'Games',
      rating: 5,
      description: 'An action-adventure game developed by Nintendo for the Nintendo Switch and Wii U consoles, featuring an open world environment.',
      tags: ['adventure', 'open-world', 'nintendo']
    },
    {
      id: 'g2',
      title: 'The Witcher 3: Wild Hunt',
      category: 'Games',
      rating: 5,
      description: 'An action role-playing game developed by CD Projekt Red, based on The Witcher series of fantasy novels by Polish author Andrzej Sapkowski.',
      tags: ['rpg', 'fantasy', 'action']
    },
    {
      id: 'g3',
      title: 'Red Dead Redemption 2',
      category: 'Games',
      rating: 5,
      description: 'An action-adventure game developed by Rockstar Games, set in an open world in a fictionalized version of the American West in 1899.',
      tags: ['open-world', 'western', 'action']
    },
    {
      id: 'g4',
      title: 'Portal 2',
      category: 'Games',
      rating: 5,
      description: 'A puzzle-platform game developed by Valve Corporation, featuring single and cooperative play modes with challenging spatial puzzles.',
      tags: ['puzzle', 'first-person', 'physics']
    },
    {
      id: 'g5',
      title: 'Minecraft',
      category: 'Games',
      rating: 4,
      description: 'A sandbox video game created by Mojang, allowing players to build with a variety of different blocks in a 3D procedurally generated world.',
      tags: ['sandbox', 'creative', 'building']
    }
  ],
  'user-places': [
    {
      id: 'p1',
      title: 'Tokyo, Japan',
      category: 'Places',
      rating: 5,
      description: 'The capital city of Japan, known for its blend of traditional culture and cutting-edge technology.',
      tags: ['city', 'asia', 'cultural']
    },
    {
      id: 'p2',
      title: 'Santorini, Greece',
      category: 'Places',
      rating: 5,
      description: 'A Greek island known for its stunning white-washed buildings with blue domes, dramatic views, and sunsets.',
      tags: ['island', 'europe', 'scenic']
    },
    {
      id: 'p3',
      title: 'New York City, USA',
      category: 'Places',
      rating: 4,
      description: 'The most populous city in the United States, known for its iconic skyline, cultural diversity, and landmarks.',
      tags: ['city', 'north america', 'urban']
    },
    {
      id: 'p4',
      title: 'Kyoto, Japan',
      category: 'Places',
      rating: 5,
      description: 'A city on the island of Honshu in Japan, famous for its numerous classical Buddhist temples, gardens, imperial palaces, Shinto shrines, and traditional wooden houses.',
      tags: ['historical', 'cultural', 'temples']
    },
    {
      id: 'p5',
      title: 'Machu Picchu, Peru',
      category: 'Places',
      rating: 5,
      description: 'A 15th-century Inca citadel situated on a mountain ridge above the Sacred Valley in Peru, known for its sophisticated dry-stone walls and panoramic views.',
      tags: ['historical', 'ruins', 'mountains']
    }
  ],
  'user-food': [
    {
      id: 'f1',
      title: 'Sushi',
      category: 'Food',
      rating: 5,
      description: 'A Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanied by a variety of ingredients such as seafood and vegetables.',
      tags: ['japanese', 'seafood', 'rice']
    },
    {
      id: 'f2',
      title: 'Pizza',
      category: 'Food',
      rating: 4,
      description: 'A savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with various ingredients.',
      tags: ['italian', 'cheese', 'bread']
    },
    {
      id: 'f3',
      title: 'Tacos',
      category: 'Food',
      rating: 5,
      description: 'A traditional Mexican dish consisting of a corn or wheat tortilla folded or rolled around a filling.',
      tags: ['mexican', 'corn', 'spicy']
    },
    {
      id: 'f4',
      title: 'Pho',
      category: 'Food',
      rating: 5,
      description: 'A Vietnamese soup consisting of bone broth, rice noodles, herbs, and meat (usually beef).',
      tags: ['vietnamese', 'soup', 'noodles']
    },
    {
      id: 'f5',
      title: 'Curry',
      category: 'Food',
      rating: 4,
      description: 'A variety of dishes originating in the Indian subcontinent that use a complex combination of spices or herbs.',
      tags: ['indian', 'spicy', 'aromatic']
    }
  ],
  
  // Alex's recommendations
  'alex-movies': [
    {
      id: 'am1',
      title: 'Inception',
      category: 'Movies',
      rating: 5,
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      tags: ['sci-fi', 'thriller', 'mind-bending']
    },
    {
      id: 'am2',
      title: 'Pulp Fiction',
      category: 'Movies',
      rating: 5,
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      tags: ['crime', 'drama', 'non-linear']
    },
    {
      id: 'am3',
      title: 'The Matrix',
      category: 'Movies',
      rating: 5,
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      tags: ['sci-fi', 'action', 'cyberpunk']
    },
    {
      id: 'am4',
      title: 'The Godfather',
      category: 'Movies',
      rating: 5,
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      tags: ['crime', 'drama', 'mafia']
    },
    {
      id: 'am5',
      title: 'Interstellar',
      category: 'Movies',
      rating: 4,
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      tags: ['sci-fi', 'space', 'time']
    }
  ],
  'alex-books': [
    {
      id: 'ab1',
      title: '1984',
      category: 'Books',
      rating: 5,
      description: 'A dystopian novel by George Orwell published in 1949 about the dangers of totalitarianism.',
      tags: ['dystopian', 'classic', 'political']
    },
    {
      id: 'ab2',
      title: 'Brave New World',
      category: 'Books',
      rating: 4,
      description: 'Aldous Huxley\'s novel set in a futuristic World State of genetically modified citizens and an intelligence-based social hierarchy.',
      tags: ['dystopian', 'sci-fi', 'classic']
    },
    {
      id: 'ab3',
      title: 'The Catcher in the Rye',
      category: 'Books',
      rating: 4,
      description: 'J.D. Salinger\'s novel about a teenager named Holden Caulfield and his experiences in New York City.',
      tags: ['coming-of-age', 'classic', 'fiction']
    },
    {
      id: 'ab4',
      title: 'To Kill a Mockingbird',
      category: 'Books',
      rating: 5,
      description: 'Harper Lee\'s novel about racial inequality and moral growth in the American South during the 1930s.',
      tags: ['classic', 'coming-of-age', 'legal']
    },
    {
      id: 'ab5',
      title: 'The Hobbit',
      category: 'Books',
      rating: 4,
      description: 'J.R.R. Tolkien\'s fantasy novel about the adventures of Bilbo Baggins, who is convinced by the wizard Gandalf to join a quest.',
      tags: ['fantasy', 'adventure', 'classic']
    }
  ],
  'alex-music': [
    {
      id: 'amu1',
      title: 'Pink Floyd - Dark Side of the Moon',
      category: 'Music',
      rating: 5,
      description: 'A concept album by English rock band Pink Floyd, released in 1973, exploring themes of conflict, greed, time, and mental illness.',
      tags: ['rock', 'progressive rock', 'concept album']
    },
    {
      id: 'amu2',
      title: 'Radiohead - OK Computer',
      category: 'Music',
      rating: 5,
      description: 'The third studio album by English rock band Radiohead, released in 1997, known for its themes of consumerism and alienation.',
      tags: ['alternative rock', 'experimental', '90s']
    },
    {
      id: 'amu3',
      title: 'The Beatles - Abbey Road',
      category: 'Music',
      rating: 5,
      description: 'The eleventh studio album by the English rock band the Beatles, released in 1969, featuring their final recording sessions together.',
      tags: ['rock', 'pop', '60s']
    },
    {
      id: 'amu4',
      title: 'Queen - A Night at the Opera',
      category: 'Music',
      rating: 5,
      description: 'The fourth studio album by the British rock band Queen, released in 1975, featuring the hit single "Bohemian Rhapsody".',
      tags: ['rock', 'classic rock', '70s']
    },
    {
      id: 'amu5',
      title: 'Kendrick Lamar - To Pimp a Butterfly',
      category: 'Music',
      rating: 5,
      description: 'A studio album by American rapper Kendrick Lamar released in 2015, exploring themes of racial inequality and discrimination.',
      tags: ['rap', 'hip-hop', 'jazz influences']
    }
  ],
  
  // Jordan's recommendations
  'jordan-movies': [
    {
      id: 'jm1',
      title: 'The Dark Knight',
      category: 'Movies',
      rating: 5,
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      tags: ['superhero', 'action', 'thriller']
    },
    {
      id: 'jm2',
      title: 'Fight Club',
      category: 'Movies',
      rating: 4,
      description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      tags: ['drama', 'thriller', 'psychological']
    },
    {
      id: 'jm3',
      title: 'Parasite',
      category: 'Movies',
      rating: 5,
      description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
      tags: ['thriller', 'drama', 'social commentary']
    },
    {
      id: 'jm4',
      title: 'Spirited Away',
      category: 'Movies',
      rating: 5,
      description: 'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
      tags: ['animation', 'fantasy', 'japanese']
    },
    {
      id: 'jm5',
      title: 'Whiplash',
      category: 'Movies',
      rating: 5,
      description: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.',
      tags: ['drama', 'music', 'psychological']
    }
  ],
  'jordan-books': [
    {
      id: 'jb1',
      title: 'Dune',
      category: 'Books',
      rating: 5,
      description: 'Frank Herbert\'s epic science fiction novel set in the distant future amidst a feudal interstellar society.',
      tags: ['sci-fi', 'epic', 'political']
    },
    {
      id: 'jb2',
      title: 'Sapiens',
      category: 'Books',
      rating: 5,
      description: 'A brief history of humankind by Yuval Noah Harari that explores the development of Homo sapiens.',
      tags: ['non-fiction', 'history', 'anthropology']
    },
    {
      id: 'jb3',
      title: 'Neuromancer',
      category: 'Books',
      rating: 4,
      description: 'William Gibson\'s groundbreaking cyberpunk novel about a washed-up computer hacker hired for one last job.',
      tags: ['sci-fi', 'cyberpunk', 'dystopian']
    },
    {
      id: 'jb4',
      title: 'The Road',
      category: 'Books',
      rating: 4,
      description: 'Cormac McCarthy\'s post-apocalyptic novel following a father and son journey through a desolate America.',
      tags: ['post-apocalyptic', 'fiction', 'survival']
    },
    {
      id: 'jb5',
      title: 'The Name of the Wind',
      category: 'Books',
      rating: 5,
      description: 'Patrick Rothfuss\'s fantasy novel about a young man who grows to become a notorious wizard.',
      tags: ['fantasy', 'magic', 'adventure']
    }
  ],
  'jordan-games': [
    {
      id: 'jg1',
      title: 'Dark Souls',
      category: 'Games',
      rating: 5,
      description: 'An action role-playing game developed by FromSoftware, known for its difficulty, world design, and combat.',
      tags: ['action-rpg', 'dark fantasy', 'challenging']
    },
    {
      id: 'jg2',
      title: 'The Witcher 3: Wild Hunt',
      category: 'Games',
      rating: 5,
      description: 'An action role-playing game developed by CD Projekt Red, based on The Witcher series of fantasy novels.',
      tags: ['rpg', 'fantasy', 'action']
    },
    {
      id: 'jg3',
      title: 'Hollow Knight',
      category: 'Games',
      rating: 5,
      description: 'A 2D Metroidvania action-adventure game with a focus on challenging combat, exploration, and discovery.',
      tags: ['metroidvania', 'indie', 'challenging']
    },
    {
      id: 'jg4',
      title: 'Disco Elysium',
      category: 'Games',
      rating: 5,
      description: 'A role-playing game developed by ZA/UM, with a focus on narrative, dialogue, and character development.',
      tags: ['rpg', 'detective', 'narrative']
    },
    {
      id: 'jg5',
      title: 'Elden Ring',
      category: 'Games',
      rating: 5,
      description: 'An action RPG developed by FromSoftware and published by Bandai Namco Entertainment, created in collaboration with fantasy novelist George R. R. Martin.',
      tags: ['open-world', 'action-rpg', 'challenging']
    }
  ],
  
  // Casey's recommendations
  'casey-books': [
    {
      id: 'cb1',
      title: 'The Great Gatsby',
      category: 'Books',
      rating: 5,
      description: 'F. Scott Fitzgerald\'s novel of the Jazz Age that follows Jay Gatsby\'s pursuit of Daisy Buchanan.',
      tags: ['classic', 'fiction', 'american']
    },
    {
      id: 'cb2',
      title: 'Pride and Prejudice',
      category: 'Books',
      rating: 5,
      description: 'Jane Austen\'s romantic novel about the Bennet sisters and their encounters with the wealthy Mr. Darcy and Mr. Bingley.',
      tags: ['romance', 'classic', 'social commentary']
    },
    {
      id: 'cb3',
      title: 'The Alchemist',
      category: 'Books',
      rating: 4,
      description: 'Paulo Coelho\'s novel about an Andalusian shepherd boy who yearns to travel in search of a worldly treasure.',
      tags: ['philosophy', 'adventure', 'spiritual']
    },
    {
      id: 'cb4',
      title: 'The Kite Runner',
      category: 'Books',
      rating: 5,
      description: 'Khaled Hosseini\'s novel about a young boy from Kabul and his journey of redemption.',
      tags: ['historical', 'drama', 'coming-of-age']
    },
    {
      id: 'cb5',
      title: 'Little Women',
      category: 'Books',
      rating: 4,
      description: 'Louisa May Alcott\'s novel about the lives of the four March sisters during the American Civil War.',
      tags: ['classic', 'coming-of-age', 'family']
    }
  ],
  'casey-music': [
    {
      id: 'cmu1',
      title: 'Taylor Swift - Folklore',
      category: 'Music',
      rating: 5,
      description: 'The eighth studio album by American singer-songwriter Taylor Swift, released in 2020, featuring indie folk, alternative rock, and electro-folk styles.',
      tags: ['indie folk', 'pop', 'singer-songwriter']
    },
    {
      id: 'cmu2',
      title: 'Fleetwood Mac - Rumours',
      category: 'Music',
      rating: 5,
      description: 'The eleventh studio album by British-American rock band Fleetwood Mac, released in 1977, one of the best-selling albums of all time.',
      tags: ['rock', 'pop rock', '70s']
    },
    {
      id: 'cmu3',
      title: 'Adele - 21',
      category: 'Music',
      rating: 4,
      description: 'The second studio album by English singer-songwriter Adele, released in 2011, featuring soul, pop, and R&B influences.',
      tags: ['soul', 'pop', 'ballad']
    },
    {
      id: 'cmu4',
      title: 'Lorde - Melodrama',
      category: 'Music',
      rating: 5,
      description: 'The second studio album by New Zealand singer-songwriter Lorde, released in 2017, a concept album following the protagonist through a house party.',
      tags: ['electropop', 'art pop', 'conceptual']
    },
    {
      id: 'cmu5',
      title: 'Radiohead - OK Computer',
      category: 'Music',
      rating: 4,
      description: 'The third studio album by English rock band Radiohead, released in 1997, known for its themes of consumerism and alienation.',
      tags: ['alternative rock', 'experimental', '90s']
    }
  ],
  'casey-food': [
    {
      id: 'cf1',
      title: 'Pasta Carbonara',
      category: 'Food',
      rating: 5,
      description: 'An Italian pasta dish from Rome made with eggs, hard cheese, cured pork, and black pepper.',
      tags: ['italian', 'pasta', 'creamy']
    },
    {
      id: 'cf2',
      title: 'Sushi',
      category: 'Food',
      rating: 5,
      description: 'A Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanied by a variety of ingredients such as seafood and vegetables.',
      tags: ['japanese', 'seafood', 'rice']
    },
    {
      id: 'cf3',
      title: 'Avocado Toast',
      category: 'Food',
      rating: 4,
      description: 'A dish consisting of toasted bread with mashed avocado, often with additional ingredients such as salt, pepper, olive oil, and citrus juice.',
      tags: ['breakfast', 'healthy', 'simple']
    },
    {
      id: 'cf4',
      title: 'Thai Green Curry',
      category: 'Food',
      rating: 5,
      description: 'A Thai curry that is based on coconut milk and fresh green chillies, flavored with Thai basil, and containing various vegetables and meat or fish.',
      tags: ['thai', 'spicy', 'coconut']
    },
    {
      id: 'cf5',
      title: 'Chocolate Lava Cake',
      category: 'Food',
      rating: 5,
      description: 'A popular dessert that combines the elements of a chocolate cake and a soufflé, with a liquid chocolate center.',
      tags: ['dessert', 'chocolate', 'indulgent']
    }
  ],
  
  // Taylor's recommendations
  'taylor-movies': [
    {
      id: 'tm1',
      title: 'The Shawshank Redemption',
      category: 'Movies',
      rating: 5,
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      tags: ['drama', 'prison', 'friendship']
    },
    {
      id: 'tm2',
      title: 'La La Land',
      category: 'Movies',
      rating: 5,
      description: 'A jazz pianist falls for an aspiring actress in Los Angeles as they struggle to reconcile their aspirations for the future.',
      tags: ['musical', 'romance', 'drama']
    },
    {
      id: 'tm3',
      title: 'The Grand Budapest Hotel',
      category: 'Movies',
      rating: 5,
      description: 'A concierge works at a famous European hotel between the wars and becomes involved in the theft and recovery of a priceless Renaissance painting.',
      tags: ['comedy', 'adventure', 'wes anderson']
    },
    {
      id: 'tm4',
      title: 'Eternal Sunshine of the Spotless Mind',
      category: 'Movies',
      rating: 5,
      description: 'When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.',
      tags: ['sci-fi', 'romance', 'drama']
    },
    {
      id: 'tm5',
      title: 'Get Out',
      category: 'Movies',
      rating: 4,
      description: 'A young African-American visits his white girlfriend\'s parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.',
      tags: ['horror', 'thriller', 'social commentary']
    }
  ],
  'taylor-games': [
    {
      id: 'tg1',
      title: 'Journey',
      category: 'Games',
      rating: 5,
      description: 'An indie adventure game developed by Thatgamecompany, featuring a robed figure traveling toward a mountain in the distance.',
      tags: ['adventure', 'artistic', 'atmospheric']
    },
    {
      id: 'tg2',
      title: 'The Legend of Zelda: Breath of the Wild',
      category: 'Games',
      rating: 5,
      description: 'An action-adventure game developed by Nintendo for the Nintendo Switch and Wii U consoles, featuring an open world environment.',
      tags: ['adventure', 'open-world', 'nintendo']
    },
    {
      id: 'tg3',
      title: 'Portal 2',
      category: 'Games',
      rating: 5,
      description: 'A puzzle-platform game developed by Valve Corporation, featuring single and cooperative play modes with challenging spatial puzzles.',
      tags: ['puzzle', 'first-person', 'physics']
    },
    {
      id: 'tg4',
      title: 'Stardew Valley',
      category: 'Games',
      rating: 5,
      description: 'A simulation role-playing game developed by Eric Barone, in which players take the role of a character who manages their deceased grandfather\'s farm.',
      tags: ['simulation', 'farming', 'life sim']
    },
    {
      id: 'tg5',
      title: 'Celeste',
      category: 'Games',
      rating: 5,
      description: 'A platform game developed by Maddy Makes Games, following a young woman named Madeline as she climbs Celeste Mountain, dealing with her mental health issues.',
      tags: ['platformer', 'indie', 'challenging']
    }
  ],
  'taylor-places': [
    {
      id: 'tp1',
      title: 'Kyoto, Japan',
      category: 'Places',
      rating: 5,
      description: 'A city on the island of Honshu in Japan, famous for its numerous classical Buddhist temples, gardens, imperial palaces, Shinto shrines, and traditional wooden houses.',
      tags: ['historical', 'cultural', 'temples']
    },
    {
      id: 'tp2',
      title: 'Paris, France',
      category: 'Places',
      rating: 5,
      description: 'The capital and most populous city of France, known for its art, fashion, gastronomy, and culture.',
      tags: ['city', 'europe', 'romantic']
    },
    {
      id: 'tp3',
      title: 'Banff National Park, Canada',
      category: 'Places',
      rating: 5,
      description: 'Canada\'s oldest national park, featuring mountain scenery, alpine landscapes, glaciers, ice fields, dense coniferous forest, and alpine landscapes.',
      tags: ['nature', 'mountains', 'outdoor']
    },
    {
      id: 'tp4',
      title: 'Santorini, Greece',
      category: 'Places',
      rating: 5,
      description: 'A Greek island known for its stunning white-washed buildings with blue domes, dramatic views, and sunsets.',
      tags: ['island', 'europe', 'scenic']
    },
    {
      id: 'tp5',
      title: 'New York City, USA',
      category: 'Places',
      rating: 4,
      description: 'The most populous city in the United States, known for its iconic skyline, cultural diversity, and landmarks.',
      tags: ['city', 'north america', 'urban']
    }
  ]
};

// Function to get items for a specific category and person
export const getItems = (categoryId: string, personId: string): Item[] => {
  const key = `${personId}-${categoryId}`;
  return mockItems[key] || [];
};