import "dotenv/config";
import readline from "readline";
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage } from "langchain";

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Wrap rl.question in a Promise
function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer));
  });
}

// Initialize Mistral model
const model = new ChatMistralAI({
  model: "mistral-small-latest",
});

// Store conversation messages
const messages = [];

async function main() {
  while (true) {
    const userInput = await askQuestion("\x1b[32mYou:\x1b[0m ");
    if (userInput.toLowerCase() === "exit") break; // graceful exit

    messages.push(new HumanMessage(userInput));
    const response = await model.invoke(messages);
    messages.push(response);

    console.log(`\x1b[34m[AI]:\x1b[0m ${response.content}`);
  }

  rl.close();
}

main();


// const response = await model.invoke("what is the capital of India")

// console.log(response.content)

// rl.close()

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
