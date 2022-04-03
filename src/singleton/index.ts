import { ChatSingleton } from './ChatSingleton';

const chat1 = ChatSingleton.getInstance();
const chat2 = ChatSingleton.getInstance();
const chat3 = ChatSingleton.getInstance();
const chat4 = ChatSingleton.getInstance();

console.log(`Chat was created at ${chat1.getLaunchedAt().getTime()}ms`);
console.log(`Chat was created at ${chat2.getLaunchedAt().getTime()}ms`);
console.log(`Chat was created at ${chat3.getLaunchedAt().getTime()}ms`);
console.log(`Chat was created at ${chat4.getLaunchedAt().getTime()}ms`);
