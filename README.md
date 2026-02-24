It's me, Jon Milley!

# Usage

```
npx jonmilley
```

# Development

## Building

```
npm run build
```

Running the build will:

1. Render the card and compare it to the previously built output
2. Display the card in the terminal
3. If the output has changed, the patch version in `package.json` is automatically incremented
4. If the version was bumped, you'll be prompted to publish to npm

## Publishing to npm

Publishing is handled interactively as part of the build. When the card output changes, the build will ask:

```
Publish v1.0.x to npm? (y/N)
```

Type `y` to publish, or anything else to skip. You can always publish manually with `npm publish`.

> **Note:** Requires Node.js >= 18.

## Attributions

Idea from @BitAndBang
```
npx bitandbang
```

Borrowed Elements from @reverentgeek
```
npx reverentgeek
```

Not including how to use it globally because I'm not sure why you'd want this as a global command. That'd be creepy.
