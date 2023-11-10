import tourImg1 from './images/explore-nis/tvrdjava-696x392-small.jpg';
import tourImg2 from './images/explore-nis/kazandzijsko-sokace-696x392-small.jpg';
import tourImg3 from './images/explore-nis/bubanj-696x392-small.jpg';
import tourImg4 from './images/explore-nis/medija-696x392-small.jpg';
import tourImg5 from './images/explore-nis/cele-kula-2-696x392-small.jpg';
import tourImg6 from './images/natural-attractions/niska-banja-696x392-small.jpg';
import tourImg7 from './images/natural-attractions/sicevacka-klisura-696x392-small.jpg';
import tourImg8 from './images/natural-attractions/jelasnicka-klisura-696x392-small.jpg';
import tourImg9 from './images/natural-attractions/suva-planina-696x392-small.jpg';
import tourImg10 from './images/natural-attractions/kamenicki-vis-696x392-small.jpg';
import tourImg11 from './images/natural-attractions/cerjanska-pecina-696x392-small.jpg';
import tourImg12 from './images/food-and-drink/aleksic-696x392-small.jpg';
import tourImg13 from './images/food-and-drink/galija-696x392-small.jpg';
import tourImg14 from './images/food-and-drink/mehana-696x392-small.jpg';
import tourImg15 from './images/food-and-drink/mali-podrum-696x392-small.jpg';

export const pageLinks = [
    {id:1, href: '#home', text: 'home'},
    {id:2, href: '#about', text: 'about'},
    {id:3, href: '#offer', text: 'offer'},
    {id:4, href: '#tours', text: 'tours'}
];

export const socialLinks = [
    {id:1, href: 'https://github.com/Sasa-Djordjevic/devsasa-reactive-nis.git', icon: 'fab fa-github'},
    {id:2, href: 'https://www.linkedin.com/in/devsasa/', icon: 'fab fa-linkedin'}
];

export const ouroffer = [
    {id: 1, icon: 'fas fa-city fa-fw', title: 'Explore Niš', text: "Immerse in the history and culture, from ancient ruins to modern wonders."},
    {id: 2, icon: 'fas fa-tree fa-fw', title: 'Natural Attractions', text: "Discover natural landscapes, including parks, rivers, and hiking trails."},
    {id: 3, icon: 'fas fa-utensils fa-fw', title: 'Food and Drink', text: "Savor culinary treasures, from traditional Serbian dishes to local specialties."}
];

export const categories = [
    {
        categorie: "explore",
        title: "Explore Niš"
    },
    {
        categorie: "natural",
        title: "Natural Attractions"
    },
    {
        categorie: "food",
        title: "Food And Drink"
    }
];

export const tours = [
    {
        id: 1,
        categorie: "explore",
        image: tourImg1, 
        date: 'all year', 
        title: 'The Fortress',
        text: 'The Niš Fortress is counted as one of the most beautiful and best-preserved fortresses in the Central Balkans. The history of the fortification in this location began in the 1st century AD.',
        location: 'niš',
        days: '1 day',
        price: 'from $10'
    },
    {
        id: 2,
        categorie: "explore",
        image: tourImg2, 
        date: 'all year', 
        title: 'Tinkers Alley',
        text: "Tinkers Alley, known as Kazandžijsko sokače, is a charming historic street in Niš. This cobblestone alleyway, with its picturesque old buildings and artisan shops, offers a glimpse into Niš's rich past.",
        location: 'niš',
        days: '3 hours',
        price: 'from $20'
    },
    {
        id: 3,
        categorie: "explore",
        image: tourImg3, 
        date: 'summer', 
        title: 'Bubanj Memorial Site',
        text: 'Located on Bubanj Hill, 3 km away from the city, it is a memorial park, with a monument in the shape of three clenched fists, symbolizing the resistance of men, women, and children who died at the location.',
        location: 'Bubanj Hill',
        days: '6 hours',
        price: 'from $10'
    },
    {
        id: 4,
        categorie: "explore",
        image: tourImg4, 
        date: 'all year', 
        title: 'Mediana',
        text: 'Mediana is one of the most important Serbian late antique archaeological sites, built between the 3rd and 4th centuries. It was built during the reign of Emperor Constantine the Great and his successors.',
        location: 'niš',
        days: '6 hours',
        price: 'from $20'
    },
    {
        id: 5,
        categorie: "explore",
        image: tourImg5, 
        date: 'all year', 
        title: 'The Skull Tower',
        text: 'The Skull Tower (Ćele Kula) is a monument unique in the world, visited by more than 30.000 people each year. It is a tower made of human skulls, built after the battle for the liberation of Nis in 1809.',
        location: 'niš',
        days: '3 hours',
        price: 'from $10'
    },
    {
        id: 6,
        categorie: "natural",
        image: tourImg6, 
        date: 'all year', 
        title: 'Niška Banja',
        text: 'Niška Banja is a renowned spa town near the city of Niš. Surrounded by picturesque landscapes and pristine parks, Niška Banja is an ideal destination for those seeking physical and mental renewal.',
        location: 'niška banja',
        days: '6 hours',
        price: 'from $20'
    },
    {
        id: 7,
        categorie: "natural",
        image: tourImg7, 
        date: 'all year', 
        title: 'Sićevačka gorge',
        text: 'The gorge is an impressive part of the Nišava canyon and is 17 km long. It is located on the important highway route Nis-Sofia, between the Suva Mountain and the southern slopes of the Svrlji Mountains.',
        location: 'Nišava canyon',
        days: '1 day',
        price: 'from $40'
    },
    {
        id: 8,
        categorie: "natural",
        image: tourImg8, 
        date: 'summer', 
        title: 'Jelašnička gorge',
        text: 'The gorge is located in the southwestern part of Suva Mountain and is 15 km from the center of Nis. Because of its unique flora and fauna, it was declared a Special Nature Reserve of the 1st category.',
        location: 'Nišava canyon',
        days: '1 day',
        price: 'from $30'
    },
    {
        id: 9,
        categorie: "natural",
        image: tourImg9, 
        date: 'all year', 
        title: 'Suva Mountain',
        text: 'Suva Mountain is located at a distance of 20 kilometers from the center of Niš. The mountain is a paradise for adventurers, extreme athletes, alpinists, mountaineers, and all lovers of untouched nature.',
        location: 'niš',
        days: '1 day',
        price: 'from $30'
    },
    {
        id: 10,
        categorie: "natural",
        image: tourImg10, 
        date: 'summer', 
        title: 'Kamenički vis',
        text: 'Kamenički vis is a favorite picnic spot in Niš, which is 14 km from the city. It is located on the branches of the Svrljiške mountains, above the village of Kamenica, at an altitude of 750-800 m.',
        location: 'niš',
        days: '6 hours',
        price: 'from $10'
    },
    {
        id: 11,
        categorie: "natural",
        image: tourImg11, 
        date: 'summer', 
        title: 'Cerjanska Cave',
        text: 'The natural monument Cerjanska pećina consists of erosive tectonic karst speleological objects located about 14 km from the center of Niš,  near Kamenica height, and the villages of Cerja and Kravlja.',
        location: 'Cerja',
        days: '6 hours',
        price: 'from $50'
    },
    {
        id: 12,
        categorie: "food",
        image: tourImg12, 
        date: 'summer', 
        title: 'Aleksića Tvrdjava',
        text: 'Restaurant Aleksića Tvrdjava is located on the boulevard Nikola Tesla and is located next to the Niš fortress. The spirit of old Nis gives it a special romance and charm. Enjoy an oasis made just for you.',
        location: 'niš',
        days: '4 hours',
        price: 'from $20'
    },
    {
        id: 13,
        categorie: "food",
        image: tourImg13, 
        date: 'all year', 
        title: 'The Galija tavern',
        text: "The Galija tavern is one of the old taverns in the city with a very long tradition. It changes neither time nor place. We won't even talk about the quality of food, it's best to come and see for yourself.",
        location: 'niš',
        days: '5 hours',
        price: 'from $40'
    },
    {
        id: 14,
        categorie: "food",
        image: tourImg14, 
        date: 'all year', 
        title: 'Nišlijska Mehana',
        text: 'The tavern "Nišlijska Mehana" is located in the center of Niš. It is one of the most visited taverns in Nis. In addition to the usual cuisine, roasting under the stove and old Serbian dishes, are prepared.',
        location: 'niš',
        days: '4 hours',
        price: 'from $30'
    },
    {
        id: 15,
        categorie: "food",
        image: tourImg15, 
        date: 'all year', 
        title: 'Mali Podrum',
        text: 'Excellent food, excellent service, pleasant ambiance, a long-standing tradition, and quality. The tavern Mali Podrum is a place to visit, whether you have an occasion or not, celebrating something or not.',
        location: 'niš',
        days: '3 hours',
        price: 'from $20'
    },
];



