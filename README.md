# apple-tree
A quick animation inspired by the gloomy weather today: https://sravyab36.github.io/apple-tree/

const JohnnyAppleseed = {
    greeting: "Hi! My name is Johnny Appleseed.",
    occupation: 'apple tree planting',
    location: Pennsylania,
    direction: 'South',
    waterSoil: () => {
        location.soil == "fertile";
    },
    plantSeed: (seed) => {
        if (location.soil == "fertile") {
            location.soil == "occupied";
        } else if (location.soil == "dry") {
            waterSoil();
        }
    },
    goal: "I want to plant apple trees on all the open land!",
    goal_achieved: False 
}
