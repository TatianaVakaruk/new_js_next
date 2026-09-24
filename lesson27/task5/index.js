const getFibonacciUpTo = (limit) => {
  if (limit < 0) return [];
  if (limit === 0) return;

  const sequence = [0, 1]; 

  while (true) {
   const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    
    if (nextValue > limit) {
        break;
    }
   
    sequence.push(nextValue);
    }
let result = Math.max(...sequence);
return result;
};

// Пример использования:
const limit = 15; 
const result = getFibonacciUpTo(15);
console.log(result); 