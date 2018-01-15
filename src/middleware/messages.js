// get a random array member
function getRandom(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

// generate a warning message
function generateWarning() {
    const victim = getRandom(['Earth', 'The Government', 'Humanity']);
    const verb = getRandom(['Invaded', 'Destroyed', 'Infected', 'Crushed', 'Wiped Out']);
    const adjective = getRandom(['Giant', 'Mutant', 'Radioactive', 'Undead', 'Demonic']);
    const monster = getRandom(['Aliens', 'Werewolves', 'Spiders', 'Mansplainers']);
        
    return `${victim} has been ${verb} by ${adjective} ${monster}!!!`;
}

export default generateWarning;