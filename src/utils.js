export const range = (start, end, step = 1) => {
  let output = [];
  
  // Check if end is not specified
  if (end === undefined) {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};