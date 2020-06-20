
//* this file contains a utility function 
const genRandom = (num) => {
    return Math.floor(Math.random() * Math.floor(num));
};

module.exports = genRandom;