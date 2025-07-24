# Linkstack

**Linkstack** is a self-hosted, customizable "link in bio" solution inspired by Linktree. Organize and share all your important links—portfolio, social profiles, donation pages, and more—on a single, beautifully designed landing page using your own domain.

This project is built with **vanilla TypeScript** and **TailwindCSS** for maximum simplicity, speed, and flexibility. No frameworks, no dependencies—just modern web standards.

## Features

- 🚀 **Self-hosted:** Run entirely on your own infrastructure—no third-party limitations.
- 🔗 **Unlimited Links:** Add as many links as you need.
- 🎨 **Customizable Design:** Personalize the look and branding to match your style.
- 🌐 **Custom Domain:** Use your own domain or subdomain (like `links.yourdomain.com`).
- ⚡ **Fast & Lightweight:** Loads instantly, with no ads or tracking.
- 🛡️ **Privacy-first:** You control your data, with no analytics or profiling unless you add it.
- 🛠️ **Built with:** Vanilla TypeScript & TailwindCSS

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muhammad-fiaz/linkstack.git
   cd linkstack
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build Tailwind CSS and TypeScript:**
   ```bash
   npm run build
   ```
   > This will compile your TypeScript and process your CSS using Tailwind.

4. **Customize your links:**
   - Edit `src/data/links.ts` or wherever your links data is stored.
   - Customize the design in the main HTML/TS files as needed.

5. **Preview locally:**
   ```bash
   npm run preview
   ```
   Or simply open `dist/index.html` in your browser after the build.

## Usage

- **Deploy the `dist/` folder** to any static host (Cloudflare Pages, Vercel, Netlify, GitHub Pages, etc.).
- Point your custom domain or subdomain (e.g., `links.yourdomain.com`) to your deployment.
- Update your social media bios with your custom Linkstack URL!

## Why use Linkstack?

Unlike commercial link-in-bio services, Linkstack gives you:
- **Full control** over your landing page and data
- **No monthly fees**
- **No ads or external branding**
- **Open source flexibility**—extend and adapt as you wish

## License

This project is licensed under the MIT License.
For more details, see the [LICENSE](LICENSE) file.
