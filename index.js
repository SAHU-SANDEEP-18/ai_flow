import "dotenv/config"
import readline from "readline";
import { ChatMistralAI } from "@langchain/mistralai";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatMistralAI({
    model: "mistral-small-latest"
})

const response = await model.invoke("what is the capital of India")

console.log(response.content)


rl.close()


























// function askQuestion(question) {
//   return new Promise((resolve) => {
//     rl.question(question, (answer) => {
//       resolve(answer);
//     });
//   });
// }

// async function main() {
//   const name = await askQuestion("Enter Your Name :");
//   console.log(`Hello ${name}`);
//   rl.close();
// }

// main();

// rl.question("What is your name ? ", (name) => {
//   console.log(`Hello ${name}!`);
//   rl.close();
// });

