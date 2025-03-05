function checkIfTheFirstLetterIsUppercase(word: string): boolean {
    if (!word || word.length === 0) return false; 
    return /^[A-Z]/.test(word); 
  }
  
  module.exports = checkIfTheFirstLetterIsUppercase;