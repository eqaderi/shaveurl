# Shrinkly: URL Shortener Services

Shrinkly is an npm package that provides easy integration with four URL shortener services that don't require API access tokens. You can easily shorten URLs using CleanUri, IsGd, 1pt, or shrtcode.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Services Included](#services-included)
3. [Usage](#usage)
4. [Custom Shortlink](#custom-shortlink)
6. [Contribution](#contribution)
7. [License](#license)

## Getting Started

### Installation

npm:
```bash
npm install shrinkly
```

yarn:
```bash
yarn add shirnkly
````

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

Import the `shortenUrl` function from the package and specify one of the four shortening services.

### Example

```typescript
import { shortenUrl } from 'shrinkly';

const longUrl = "https://example.com/long-url";
shortenUrl(longUrl, "cleanuri").then(shortUrl => console.log(shortUrl));
```

longUrl can be one of these values: `1pt` | `cleanuri` | `isgd` | `shrtcode`;

## Custom Shortlink

Specify a custom shortlink with CleanUri or 1pt:

```typescript
const customShort = "mylink";
shortenUrl(longUrl, "cleanuri", customShort).then(shortUrl => console.log(shortUrl));
```

## Contribution

Feel free to contribute to the [Shrinkly GitHub repository](https://github.com/eqaderi/shrinkly).

## License

Shrinkly is licensed under the MIT License - see the [LICENSE](https://github.com/eqaderi/shrinkly/blob/main/LICENSE) file for details.

