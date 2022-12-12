/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            name: "Bart",
            food: "crustaceans",
            length: 3,
            species: "Lionfish",
            location: "Florida",
            image: "https://images.theconversation.com/files/417460/original/file-20210823-22-1pz2luo.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=200&h=200.0&fit=crop"
        },
        {
            id: 2,
            name: "Alan",
            food: "algae",
            length: 6,
            species: "Suckerfish",
            location: "Bahamas",
            image: "http://cdn.shopify.com/s/files/1/0877/8234/products/1_41d34065-9b8b-4ed1-ad9e-e7887a08ca45_grande.jpeg?v=1432696679"
        },
        {
            id: 3,
            name: "Finegan",
            food: "Other Fish",
            length: 9.8,
            species: "Snapper",
            location: "Florida",
            image: "https://img.freepik.com/premium-photo/red-snapper-fish-aquarium_113629-177.jpg"
        },
        {
            id: 4,
            name: "Dr. Octagon",
            food: "shrimp",
            length: 8,
            species: "Octopus",
            location: "South Africa",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQsbW7gTKaGYZJLIvYmIlazs8KQSW5hN9Gw&usqp=CAU"
        },
        {
            id: 5,
            name: "Matt",
            food: "chum",
            length: 2,
            species: "Mantis Shrimp",
            location: "Taiwan",
            image: "https://media.wired.com/photos/5b219772714d3b70d9ed7f0b/125:94/w_200,h_200,c_limit/mantisshrimp.jpg"
        },
        {
            id: 6,
            name: "Deathstar",
            food: "Plankton",
            length: 4,
            species: "Starfish",
            location: "Taiwan",
            image: "data:image/jpeg;base64,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"
        },
        {
            id: 7,
            name: "Jerry",
            food: "Plankton",
            length: 3.5,
            species: "Clownfish",
            location: "Hawaii",
            image: "https://www.reef2reef.com/data/avatars/h/177/177735.jpg?1652170561"
        },
        {
            id: 8,
            name: "Pharah",
            food: "Chum",
            length: 6,
            species: "Jellyfish",
            location: "South Africa",
            image: "https://editorial01.shutterstock.com/preview-440/7632508b/abc0c28d/Shutterstock_7632508b.jpg?tr=w-200,h-200"
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}