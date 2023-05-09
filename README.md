# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Setting up local development
If you're on macOS follow [this guide](https://www.storyblok.com/faq/setup-dev-server-https-proxy) or if you're on windows follow [this guide](https://www.storyblok.com/faq/setup-dev-server-https-windows).

With Storyblok v2, your app must be served in HTTPS the above links will help with setting this up.<br>

You should now have a `localhost-key.pem` and `localhost.pem`<br>

Login to your storyblok CMS to get your api key and set up your .env file with the key `STORYBLOK_API_KEY`<br>
While inside the CMS ensure that `settings > Visual editor` has `Location (default environment) *` set to `https://localhost:3000/`<br>

Additionally I needed `NODE_TLS_REJECT_UNAUTHORIZED=0` for windows and it doesn't seem to brake anything on macOS<br>

Lastly run `npm run dev:https` and check `https://localhost:3000` and your Storyblok CMS visual editor to ensure everything works.

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

Start the development server on https
```bash
npm run dev:https
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
