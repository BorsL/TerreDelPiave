import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "Chi Siamo" },
    { href: "#products", label: "Prodotti" },
    { href: "#contact-us", label: "Contattaci" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Asparagi Bianchi in Pinzimono",
        price: "5 €",
    },
    {
        imgURL: shoe5,
        name: "Cesta Asparagi",
        price: "5 €",
    },
    {
        imgURL: shoe6,
        name: "Cesta Radicchi",
        price: "5 €",
    },
    {
        imgURL: shoe7,
        name: "TRIS Asparagi Bianchi in Pinzimono",
        price: "5 €",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Spedizione Gratuita",
        subtext: "Goditi un’esperienza di acquisto senza pensieri grazie alla nostra spedizione gratuita."

    },
    {
        imgURL: shieldTick,
        label: "Pagamento Sicuro",
        subtext: "Acquista in tutta serenità con le nostre opzioni di pagamento sicure."
    },
    {
        imgURL: support,
        label: "Sempre Pronti ad Aiutarti",
        subtext: "Il nostro team dedicato è qui per assisterti in ogni fase del tuo acquisto."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Bepi',
        rating: 4.5,
        feedback: "L'attenzione ai dettagli e la qualità dei prodotti hanno superato le mie aspettative. Altamente consigliato!"
    },
    {
        imgURL: customer2,
        customerName: 'Toni',
        rating: 4.5,
        feedback: "Il prodotto non solo ha soddisfatto, ma ha superato le mie aspettative. Sarò sicuramente un cliente abituale!"
    }
];


export const footerLinks = [
    {
        title: "Prodotti",
        links: [
            { name: "Radicchio di stagione", link: "/" },
            { name: "Asparago di stagione", link: "/" },
            { name: "Fragole Rosse", link: "/" },
            { name: "Fragole Bianche", link: "/" },
            { name: "Patate", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@terredelpiave.it", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
