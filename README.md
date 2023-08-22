## Example Usage

```typescript
shortenUrl("https://www.example.com", "hoolakh")
  .then((shortUrl) => {
    console.log("Shortened URL:", shortUrl);
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });
