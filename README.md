<div align="center">
  <img src="assets/logo.PNG" alt="Shrinkly Logo" width="200" style="margin-bottom: 20px;"/>
</div>

# Shrinkly: URL Shortener Services

Shrinkly is an npm package that provides easy integration with four URL shortener services that don't require API access tokens. You can easily shorten URLs using CleanUri, IsGd, 1pt, or shrtcode. Additionally, Shrinkly comes with a command-line interface, enabling users to shorten URLs directly from the command line.

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

npm:
```bash
npm install shrinkly
```

yarn:
```bash
yarn add shrinkly
```

pnpm:
```bash
pnpm install shrinkly
```

## Services Included

1. **[CleanUri](https://cleanuri.com)**
2. **[IsGd](https://is.gd)**
3. **[1pt](https://1pt.co)**
4. **[shrtcode](https://shrtco.de)**

## Usage

### Library Usage

Import the \`shortenUrl\` function from the package and specify one of the four shortening services.

#### Example

```typescript
import { shortenUrl } from 'shrinkly';

const longUrl = "https://en.wikipedia.org/wiki/List_of_HTTP_status_codes";
shortenUrl(longUrl, "cleanuri").then(shortUrl => console.log(shortUrl));
```

### Command Line Usage

After installing Shrinkly, you can shorten URLs directly from the command line:

```bash
shrinkly 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes' cleanuri
```

For help with command line options, run:

```bash
shrinkly --help
```

## Custom Shortlink

Specify a custom shortlink with isgd or 1pt:

```typescript
const customShort = 'myshrinklink';
const url = 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes';

shortenUrl(longUrl, "isgd", customShort).then(shortUrl => console.log(shortUrl));
```

## Contribution

Feel free to contribute to the [Shrinkly GitHub repository](https://github.com/eqaderi/shrinkly).

## License

Shrinkly is licensed under the MIT License - see the [LICENSE](https://github.com/eqaderi/shrinkly/blob/main/LICENSE) file for details.
