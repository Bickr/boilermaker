const db = require('../server/db')
const { User } = require('../server/db/models')

const seedUsers = async function () {
    const users = await Promise.all([
        /********************** USERS **********************/
        User.create({ name: 'Mike Perry', userName: 'mikeyboy', email: 'mike@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'mike', admin: false }),
        User.create({ name: 'Harry Kane', userName: 'kaney69', email: 'harry@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'harry', admin: false }),
        User.create({ name: 'Max Valley', userName: 'maxipad', email: 'max@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'max', admin: false }),
        User.create({ name: 'Gary Snail', userName: 'garysnail', email: 'gary@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'gary', admin: false }),
        User.create({ name: 'Corey Hash', userName: 'hardcorey', email: 'corey@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'corey', admin: false }),
        User.create({ name: 'Dwight Schrute', userName: 'nerdboi', email: 'dwight@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'dwight', admin: false }),
        User.create({ name: 'Kelly Fair', userName: 'kellersmeller', email: 'kelly@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'kelly', admin: false }),
        User.create({ name: 'Hermoine Wizard', userName: 'elwizard', email: 'hermoine@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'hermoine', admin: false }),
        User.create({ name: 'Jesus Christ', userName: 'gogodgo', email: 'jesus@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'jesus', admin: false }),
        User.create({ name: 'Robin Hood', userName: 'theify', email: 'robin@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'robin', admin: false }),
        User.create({ name: 'Alex Aire', userName: 'wootwoot', email: 'alex@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'alex', admin: false }),
        User.create({ name: 'Mary Harder', userName: 'marybeary', email: 'mary@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'mary', admin: false }),
        User.create({ name: 'Richard Schmell', userName: 'smellydude', email: 'richard@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'richard', admin: false }),
        User.create({ name: 'Katelyn Robbo', userName: 'tweakergirl', email: 'katelyn@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'katelyn', admin: false }),
        User.create({ name: 'Julia Goolia', userName: 'ghoulie', email: 'julia@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'julia', admin: false }),
        User.create({ name: 'Rider Lame', userName: 'lamerider', email: 'rider@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'rider', admin: false }),
        User.create({ name: 'Jeff Sut', userName: 'sutterfutter', email: 'jeff@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'jeff', admin: false }),
        User.create({ name: 'Chris Wiggle', userName: 'picklewiggle', email: 'chris@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'chris', admin: false }),
        User.create({ name: 'Spock Trek', userName: 'kir4live', email: 'spock@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'spock', admin: false }),
        User.create({ name: 'Kylo Swolo', userName: 'soswoll', email: 'kylo@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'kylo', admin: false }),
        /********************** ADMINS **********************/
        User.create({ name: 'Luke Skywalker', userName: 'daddyissues', email: 'luke@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'luke', admin: true }),
        User.create({ name: 'Dwayne Rock', userName: 'hardo', email: 'dwayne@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'dwayne', admin: true }),
        User.create({ name: 'asdf asdf', userName: 'asdf', email: 'asdf@gmail.com', photoURL: 'https://image.flaticon.com/icons/svg/32/32438.svg', password: 'asdf', admin: true }),
    ])
    await console.log(`seeded ${users.length} users`)
}

module.exports = seedUsers;