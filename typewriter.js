const sentence = "Hello there from Lighthouse Labs";

let counter = 0;
for (let word of sentence) {
  setTimeout (() => {
    process.stdout.write(word);
  }, 1000 + counter);
  counter += 150;
}


