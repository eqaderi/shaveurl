## Example Usage

```typescript
shortenUrl('https://en.wikipedia.org/wiki/List_of_HTTP_status_codes', 'isgd')
  .then((shortUrl) => {
    console.log("Shortened URL:", shortUrl);
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });
