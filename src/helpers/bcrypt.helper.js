const bcrypt = require('bcrypt')
const saltRounds = 10

const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
// Store hash in your password DB.