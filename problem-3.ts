function countWordOccurrences(sentence: string, word: string): number {
   
    const sentenceLower = sentence.toLowerCase();
    const wordLower = word.toLowerCase();
  
   
    const words = sentenceLower.split(' ');
  
   
    const count = words.filter(w => w === wordLower).length;
  
    return count;
  }
  