const boek1 = require('./bookCovers/Boek1.svg');
const boek2 = require('./bookCovers/Boek2.svg');
const boek3 = require('./bookCovers/Boek3.svg');
const boek4 = require('./bookCovers/Boek4.svg');

const mockData = [
    {
        id: 1,
        category: 6,
        titel: "Beer is sip",
        description: "Leerzaam boek over veschillende mentale toestanden in het leven",
        cover: { boek1 }
    },
    {
        id: 2,
        category: 2,
        titel: "Witte kerst",
        description: "Leerzaam boek over veschillende mentale toestanden in het leven",
        cover: { boek2 }
    },
    {
        id: 3,
        category: 4,
        titel: "Jip en Jop op avontuur",
        description: "Leerzaam boek over veschillende mentale toestanden in het leven",
        cover: { boek3 }
    },
    {
        id: 4,
        category: 2,
        titel: "Vogeltje nooit genoeg",
        description: "Leerzaam boek over veschillende mentale toestanden in het leven",
        cover: { boek4 }
    },
]

module.exports = {
    mockData,
}
