module.exports = function(length) {
 const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
 let token = '';

 for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  token += characters.charAt(randomIndex);
 }

 return token;
}