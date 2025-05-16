import React from 'react';
import Card from '../components/Card/Card';
import Details from '../components/Details/Details';

const Poems: React.FC = () => {
  return (
    <main>
      <h1 className="text-center">Tech Blog</h1>
      <div className="d-flex flex-column gap-5">
        <Card>
          <Details title="Promises" description="Some info on promises" />
          <p>Promises are representations of successful or failed async tasks and are returned from the `fetch()` function. Promises can have callbacks joined onto them with dot syntax e.g. `.then` or `.catch` which run code when the promise successfully resolves or to catch rejected promise errors. A promise will return data from the API asynchronously after the synchronous code has run and the async opertions placed on the microtask queue (which run after the call stack is emptied) have completed.</p>
        </Card>
        <Card>
          <Details title="Asynchronous JavaScript" description="A summary of async JavaScript" />
          <p>Synchronous code is the priority and runs first. Synchronous tasks are added to the call stack.  When the synchronous tasks have completed, the callbacks associated with `fetch()` specifically `.then()` and `.catch()` are placed onto the micro task queue for execution first after the synchronous code has completed.  Async tasks such as setTimeout, setInterval and event callbacks are placed onto the macro task queue and executed after the micro task queue.  The event loop constantly checks if call stack is empty and if so it runs the tasks in the micro task queue and when the micro task queue is empty it runs the tasks in the macro task queue.</p>
        </Card>
        <Card>
          <Details title="Closure" description="Some info on closures" />
          <p>In JavaScript closures are created when a function is defined.  Closures allow functions to have access to the outer scope so that variables and functions in the outer scope are accessible within the function.  If a variable is used within the function JavaScript will try to find that variable in the function's scope first and if it is not found JavaScript will search up through the scope chain.</p>
        </Card>
        <Card>
          <Details title="Callbacks" description="Some info on callbacks" />
          <p>Callbacks are functions which are passed to other functions.  Callbacks can be used for both synchronous and async tasks that are meant to run when another operation has completed.</p>
        </Card>
        <Card>
          <Details title="Higher Order Functions" description="Some info on HOFs" />
          <p>HOFs take a function as an argument or return a function.  Examples of ES6 HOFs are .map, .reduce, .filter.</p>
        </Card>
        <Card>
          <Details title="Pure Functions" description="Some info on pure functions" />
          <p>Pure functions will always return the same output given the same input and will not create any side effects.</p>
        </Card>
        <Card>
          <Details title="Hoisting" description="Some info on hoisting" />
          <p>Hoisting relates to the order variables and functions are loaded into memory.  For example, a function declaration (function someFunction() {})will be hoisted and can be accessed in code before the function is declared but a function expression (const something = anotherFunction() {}) is not hoisted and therefore is not accessible before it is defined.</p>
        </Card>
        <Card>
          <Details title="Let vs Const vs Var" description="Some info on variables" />
          <p>Let is block scoped and can be reassigned</p>
          <p>Const is block scoped and cannot be reassigned or redeclared</p>
          <p>Var is function/globally scoped and can be reassigned or redeclared</p>
        </Card>
      </div>
    </main>
  );
};

export default Poems;