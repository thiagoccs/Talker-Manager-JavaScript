const rand = () => Math.random(0).toString(36).substr(2);
// console.log(rand());
const token = (length) => (rand() + rand() + rand() + rand()).substr(0, length);

module.exports = { token };
