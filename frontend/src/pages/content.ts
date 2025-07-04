export const pictures = [
  { src: 'https://imgur.com/nmAIdYR.jpeg', alt: "Close-up of a dragonfly (animation)", title: "A Dragonfly", description: "This close-up captures the intricate details of a dragonfly's wings and body." },
  { src: 'https://imgur.com/TiLjDyz.jpeg', alt: "View of the sea with cliffs (animation)", title: "Cliffs and Sea", description: "A breathtaking view of the sea with rugged cliffs under a clear blue sky." },
  { src: 'https://i.imgur.com/D9BRq8M.jpeg', alt: "Shadow on grass (animation)", title: "Shadow on grass", description: "A shadow cast on lush green grass, evoking a sense of mystery and calm." },
]

export const poems = [
  { title: "Poems", description: "Some poems I have written" },
  { title: "The Beetle", description: "The beetle wanders slowly past, inspecting leaves lying in the low grass, iridescent shell shines in the sun, the beetle isn't one to run, on an instant it releases its wings, to see what nature elsewhere brings, it zips off into the air and out of sight, the next adventure is only a short flight." },
  { title: "Sunlight", description: "A morning's darkness broken by the distant star's power, onto the cold earth its rays shower, plants lean towards its light and warmth, gradually moving into its path, the heat is welcome and gladly received, and fresh air on this dewy morning breathed." },
  { title: "Why am I here", description: "Why is anyone here?,  There is not a purpose to existence I fear, how are we meant to our lives steer, hold onto what to you is dear, and don't be afraid to shed a tear, what we're meant to do in life is not clear." },
];

export const techBlogs = [
  { title: "Promises", description: "Some info on promises", body: "Promises are representations of successful or failed async tasks and are returned from the `fetch()` function. Promises can have callbacks joined onto them with dot syntax e.g. `.then` or `.catch` which run code when the promise successfully resolves or to catch rejected promise errors. A promise will return data from the API asynchronously after the synchronous code has run and the async opertions placed on the microtask queue (which run after the call stack is emptied) have completed." },
  { title: "Asynchronous JavaScript", description: "A summary of async JavaScript", body: "Synchronous code is the priority and runs first. Synchronous tasks are added to the call stack.  When the synchronous tasks have completed, the callbacks associated with `fetch()` specifically `.then()` and `.catch()` are placed onto the micro task queue for execution first after the synchronous code has completed.  Async tasks such as setTimeout, setInterval and event callbacks are placed onto the macro task queue and executed after the micro task queue.  The event loop constantly checks if call stack is empty and if so it runs the tasks in the micro task queue and when the micro task queue is empty it runs the tasks in the macro task queue." },
  { title: "Closure", description: "Some info on closures", body: "In JavaScript closures are created when a function is defined.  Closures allow functions to have access to the outer scope so that variables and functions in the outer scope are accessible within the function.  If a variable is used within the function JavaScript will try to find that variable in the function's scope first and if it is not found JavaScript will search up through the scope chain." },
  { title: "Callbacks", description: "Some info on callbacks", body: "Callbacks are functions which are passed to other functions.  Callbacks can be used for both synchronous and async tasks that are meant to run when another operation has completed." },
  { title: "Higher Order Functions", description: "Some info on HOFs", body: "HOFs take a function as an argument or return a function.  Examples of ES6 HOFs are .map, .reduce, .filter." },
  { title: "Pure Functions", description: "Some info on pure functions", body: "Pure functions will always return the same output given the same input and will not create any side effects." },
  { title: "Hoisting", description: "Some info on hoisting", body: "Hoisting relates to the order variables and functions are loaded into memory.  For example, a function declaration (function someFunction() {})will be hoisted and can be accessed in code before the function is declared but a function expression (const something = anotherFunction() {}) is not hoisted and therefore is not accessible before it is defined." },
  { title: "Let vs Const vs Var", description: "Some info on variables", body: "Let is block scoped and can be reassigned. Const is block scoped and cannot be reassigned or redeclared. Var is function/globally scoped and can be reassigned or redeclared." },
];

export const profileInfo = {
  name: "David Millen",
  title: "Software Engineer",
  summaryOne: "Over 3 years experience developing production-ready event-driven features.",
  summaryTwo: "Motivated by working in diverse teams to solve user problems.",
  summaryThree: "Experience using Ruby on Rails, PostgreSQL, AWS and Svelte, Elm and Vue.js.",
  summaryFour: "Focused on encouraging a knowledge sharing culture within teams.", 
  summaryFive: "Past experience with change management, finance systems and data analysis.",
  languages: "Ruby, Elm, JavaScript (ES6+), TypeScript, SQL, Semantic HTML5, Responsive CSS3.",
  libraries: "Svelte, Rails, Vue.js, ReactJS, Sinatra.",
  testingFrameworks: "Vitest, Playwright, MiniTest, Capybara, Jest, React Testing Library, RSpec, Jasmine, Cypress.",
  databases: "PostgreSQL.",
  otherTechnologies: "Sidekiq, Elasticsearch, Kibana, GraphQL, Hasura"
};