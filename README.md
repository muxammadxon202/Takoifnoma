# Azamat & Shahzoda — wedding invitation

Public wedding invitation demo in Uzbek (default) and Russian.

**20 October 2026, 18:00 (Asia/Samarkand)**  
Fotima Sultan, Samarkand, Yangi Xayrobod.

Static HTML, CSS and JavaScript. No backend, API keys or build step.

Click the envelope to open the invitation and start music. Swipe to move through the video and the synchronized invitation text. The page includes a countdown, venue map and calendar download. Music can be switched off; reduced-motion preferences are respected.

## Preview

Serve this directory with any static web server, for example:

```sh
python -m http.server 8000
```

For accurate video scrubbing, use a server that supports HTTP byte-range requests (GitHub Pages does).

## Hosting

GitHub Pages serves the root of the `main` branch. All asset references are relative so the site also works at a repository subpath.

To connect a demo domain later, configure **Settings → Pages → Custom domain**, add the required DNS records and enable HTTPS after DNS verification.

The video and music are supplied for this invitation. Public source access does not grant a license to reuse those assets. The bundled Cormorant Garamond and Manrope fonts are distributed under their respective SIL Open Font Licenses.

## Demo domain

Planned domain: `taklifnoma.erpflow.uz`.

Add this record with the DNS provider for `erpflow.uz`:

| Type | Name | Target | TTL |
| --- | --- | --- | --- |
| CNAME | taklifnoma | muxammadxon202.github.io | Auto / 3600 |

The target contains no `https://` and no repository path. If the provider is Cloudflare, use **DNS only** while GitHub verifies DNS and issues HTTPS.

After DNS resolves, configure **Settings → Pages → Custom domain** to `taklifnoma.erpflow.uz`. Enable **Enforce HTTPS** once GitHub finishes issuing the certificate. Until then the demo remains available at `https://muxammadxon202.github.io/Takoifnoma/`.
