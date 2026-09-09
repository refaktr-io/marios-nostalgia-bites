# Mario's Nostalgia Bites

A sample [Lovable](https://lovable.dev) project used as the reference site for [Prodify](https://refaktr.io/prodify/), which turns a Lovable export into a CloudFormation stack hosted on S3 + CloudFront in your own AWS account.

Mario's Italian Restaurant is **fictional** — the address, phone number, history, and menu are invented for this demo.

## What's in here

An **unmodified Lovable export** — the current `tanstack_start_ts` template (TanStack Start, React 19, Tailwind 4, shadcn/ui, built with Vite + Nitro). The only edits are cosmetic: a license, this README, and a fictional address.

Lovable's template builds a Cloudflare Worker by default. Prodify's deployer enables TanStack Start prerendering in its own build copy, so `bun run build` also writes a complete static site to `.output/public/` — nothing in this repo needs to change for that. The site has no backend, so every page can be rendered at build time.

## Deploy it with Prodify

1. Download this repository as a zip (**Code → Download ZIP**).
2. Upload the zip at [refaktr.io/prodify](https://refaktr.io/prodify/).
3. Open the **Deploy to AWS** link in the region your AWS account uses (new AWS accounts are assigned one region — usually Ohio `us-east-2`, Stockholm, or Sydney) and create the stack.
4. The `SiteURL` output is your site on CloudFront.

The stack's `ContentDeployer` Lambda runs `bun install && bun run build` in your account and syncs `.output/public/` to a private S3 bucket behind CloudFront.

## Run locally

```sh
bun install
bun run dev      # http://localhost:8080
bun run build    # writes .output/public (static) and .output/server (worker)
```

## License

MIT — see [LICENSE](LICENSE). Built with Lovable.
