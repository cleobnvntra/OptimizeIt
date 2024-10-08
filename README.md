# OptimizeIt

OptimizeIt is a tool that is meant to help you Optimize your code. You simply run this command-line application and give it a source code file name which it then optimizes for peak performance and readability.

![ezgif-4-f1aeeea586](https://github.com/user-attachments/assets/b5385492-bcd8-4ba9-bc6a-ceef14c43e0c)

If you'd like to see more, here is a link to a thorough [Demo](https://www.youtube.com/watch?v=VFKODkI7xw4).

If you'd like to read more about how this project was approached, feel free to check out my [Blog Post](https://dev.to/majd_almnayer_2101/from-good-to-great-code-with-optimizeit-4p0n).

## How to run

Create a .env file, and provide your api key, i.e.:

```
GROQ_API_KEY=YOUR_API_KEY_HERE
```

Install dependencies:

```bash
npm install
```

Build:

```bash
npm run build
```

Link:

```bash
npm link
```

Run, you can use some of the examples that already exist:

```bash
optimizeit examples/main.cpp
optimizeit examples/main.cpp examples/main.py
```

Or you can run it using one of your own files placed in the root directory, or any other directory you might make:

```bash
optimizeit test.py
optimizeit test.py examples/main.cpp
```

or

```bash
optimizeit newDirectory/index.html
optimizeit newDirectory/index.html styles.css examples/main.py
```

## Different Flags

OptimizeIt supports several flags:

### Version info

This flag prints the current version of OptimizeIt and the name of the tool, usage:

```bash
optimizeit --version
optimizeit -v
```

### HTML

This is a great feature which generates a `changes.html` html file in the output directory, displaying side-by-side the before and after of each processed file, usage:

```bash
optimizeit file1 --html
optimizeit file1 file2 --html
```

### Markdown

This is a nifty feature, where optimizeit creates a `changes.md` file for you in the output directory, displaying the `before` and `after` of every file provided after execution, usage:

```bash
optimizeit file1 --markdown
optimizeit file1 file2 --markdown
optimizeit file1 -md
optimizeit file1 file2 -md
```

### Output

This creates a file in the output folder containing all the changes, you may provide more than 1 output file per file given, usage:

```bash
optimizeit file1 --output file1
optimizeit file1 file2 --output file1 file2
optimizeit file1 -o file1
optimizeit file1 file2 -o file1 file2
```

### Model

This specifies the model name that OptimizeIt uses, you may choose any model name from [groq](https://console.groq.com/docs/models), usage:

```bash
optimizeit file1 --model model_name
optimizeit file1 file2 --model model_name
optimizeit file1 -m model_name
optimizeit file1 file2 -m model_name
```

### Temperature

This specifies the temperature of the model that OptimizeIt is using, you may specify values from `0.1` to `2.0` although, the higher the temperature the more [hallucinations](https://www.iguazio.com/glossary/llm-hallucination/), usage:

```bash
optimizeit file1 --temperature 0.1
optimizeit file1 file2 --temperature 0.1
optimizeit file1 -t 0.1
optimizeit file1 file2 -t 0.1
```

### API Key

This allows you to set your own `groq api key` for OptimizeIt to use! This can be very helpful with pay-gated models that groq provides, usage:

```bash
optimizeit file1 --api-key your_api_key
optimizeit file1 file2 --api-key your_api_key
optimizeit file1 -a your_api_key
optimizeit file1 file2 -a your_api_key
```

### Help

This flag displays all of the details and configurations that OptimizeIt has, usage:

```bash
optimizeit --help
optimizeit -h
```

### Token Usage

This flag allows you print the completion token, prompt token, and total token that OptimizeIt is using from your prompt, usage:

```bash
optimizeit file1 --token-usage
optimizeit file1 file2 -tu
```

### Directory

This flag is very helpful if you want to optimize all files in a given directory, rather than specify them one by one. OptimizeIt will parse through every file that exists in the directory, and if the file can be `Optimized`, it will optimize it, usage:

```bash
optimizeit -d examples
optimizeit --dir ./examples
```

This can also be conveniently combined with other flags, i.e.:

```bash
optimizeit -d examples --html
```

## Notable Dependencies

### Groq

This [library](https://www.npmjs.com/package/groq-sdk) provides convenient and easy access to the Groq REST API from server-side TypeScript or JavaScript which allows using their LLM's for chat completion

### Marked

A [markdown parser](https://www.npmjs.com/package/marked) which converts markdown into HTML -- this was used for generating html pages after comparison. Marked is built for speed and super light-weight!

### Prettier

[Prettier](https://www.npmjs.com/package/prettier?activeTab=readme) is a code formatted which enforces consistent style by parsing the code and re-printing it with the rules set in `.prettierrc` file.

### Eslint

[Eslint](https://www.npmjs.com/package/eslint) is used to identify issues in and evaluate the code.
