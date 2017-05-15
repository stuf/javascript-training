
# JavaScript Training

## Getting started

```sh
git clone https://github.com/stuf/javascript-training.git
cd javascript-training
npm install
```

Now you should be set to go.

To get started with the tasks, run

```sh
npm start
```

## Now what?

You should be seeing a big bunch of errors now, along the lines of

```
1) 01-strings.spec.js concatenateStrings:
     Error: Not implemented
      at Object.concatenateStrings (src/tasks/01-strings.js:13:9)
      at run (test/01-strings.spec.js:13:20)
      at Array.forEach (native)
      at run (test/common.js:1:96)
      at Context.it (test/01-strings.spec.js:9:5)
```

Your task is to implement all of the features.

The tasks are located within `src/tasks/`. Every task file will contain a set of functions that you will need to implement. The functions are documented, with examples on the input and the expected output.

>**Do not change the `module.exports` in the tasks**

## About the implementations

>**Bookmark the [MDN JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)** — it's a very comprehensive JavaScript reference for all things related to JavaScript.

Most of the tasks in the start are fairly simple, and they can usually be implemented in one to two lines of code. Look up the appropriate section in the documentation if you're lost; e.g. the [`String` section](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) when working on the `strings` tasks.

## Protips

It's a good idea to keep the tests running when you're writing your implementation. The default `npm start` task will run the tests in "watch mode", meaning the tests will be re-run every time you save. Failing tests will output useful information on why it failed:

```diff
  1) 01-strings.spec.js concatenateStrings:

      AssertionError: expected 'foobar' to equal 'foob'
      + expected - actual

      -foobar
      +foob
```

If you're using [Visual Studio Code](https://code.visualstudio.com/) as your editor, the project contains a set of recommended extensions that are worth installing.
