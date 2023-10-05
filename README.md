<div align="center">
  <img src="assets/logo.PNG" alt="shaveurl Logo" width="200" style="border-radius: 25px; box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);" />
</div>

# shaveurl: URL Shortener Services

shaveurl is an npm package that provides easy integration with four URL shortener services that don't require API access tokens. You can easily shorten URLs using CleanUri, IsGd, 1pt, or shrtcode. Additionally, shaveurl comes with a command-line interface, enabling users to shorten URLs directly from the command line.

### Quick try

You can use shaveurl directly from the command line using npx:

```bash
npx shaveurl 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes'
```


## Table of Contents

1. [Getting Started](#getting-started)
2. [Services Included](#services-included)
3. [Usage](#usage)
   - [Library Usage](#library-usage)
   - [Command Line Usage](#command-line-usage)
4. [Custom Shortlink](#custom-shortlink)
5. [Contribution](#contribution)
6. [License](#license)

## Getting Started

### Installation

You can install shaveurl locally for use in your project:

npm:
```bash
npm install shaveurl
```

yarn:
```bash
yarn add shaveurl
```

pnpm:
```bash
pnpm install shaveurl
```

## Services Included

1. **[CleanUri](https://cleanuri.com)**
2. **[IsGd](https://is.gd)**
3. **[1pt](https://1pt.co)**
4. **[shrtcode](https://shrtco.de)**

## Usage

### Library Usage

Import the \`shortenUrl\` function from the package and specify one of the four shortening services: `cleanuri`, `isgd`, `1pt`, or `shrtcode`. If no service is specified, the default service is `isgd`.

#### Example

```typescript
import { shortenUrl } from 'shaveurl';

const longUrl = "https://en.wikipedia.org/wiki/List_of_HTTP_status_codes";
shortenUrl(longUrl).then(shortUrl => console.log(shortUrl));
```

with custom service:

```typescript
import { shortenUrl } from 'shaveurl';
const longUrl = "https://en.wikipedia.org/wiki/List_of_HTTP_status_codes";
shortenUrl(longUrl, "cleanuri").then(shortUrl => console.log(shortUrl));
```

### Command Line Usage

You can use shaveurl directly from the command line using npx:

```bash
npx shaveurl 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes'
```

Alternatively, you can install shaveurl globally for faster command line usage:

```bash
npm install -g shaveurl
```

#### Example with default service:

```bash
shaveurl 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes'
```

#### Example with specified service:

```bash
shaveurl 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes' cleanuri
```

For help with command line options, run:

```bash
shaveurl --help
```

## Custom Shortlink

Specify a custom shortlink with isgd or 1pt:

```typescript
const customShort = 'myshrinklink';
const url = 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes';

shortenUrl(longUrl, "isgd", customShort).then(shortUrl => console.log(shortUrl));
```

## Contribution

Feel free to contribute to the [shaveurl GitHub repository](https://github.com/eqaderi/shaveurl).

## License

shaveurl is licensed under the MIT License - see the [LICENSE](https://github.com/eqaderi/shaveurl/blob/main/LICENSE) file for details.
