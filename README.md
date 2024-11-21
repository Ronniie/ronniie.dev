# Ronniie.dev

A fully interactive, terminal-style web application built with **Next.js**. This project features dynamic social links, self-hosted tools, command history navigation, and a stylish welcome message.

---

## Features

- **Interactive Terminal:**
    - Accepts user input commands like `help` and `socials`.
    - Supports command history navigation with `↑` and `↓` arrow keys.

- **Dynamic MOTD (Message of the Day):**
    - Includes a welcome message with styled text.
    - Highlights developer information and self-hosted services.

- **Command List:**
    - `help`: Displays a list of available commands.
    - `socials`: Displays links to GitHub, YouTube, Discord, Reddit, and BlueSky profiles.
    - More coming soon! 

- **Tech Stack:**
    - **Next.js** for SSR and frontend.
    - **React Icons** for elegant icons.
    - **TailwindCSS** for modern styling.

---

## Installation

Follow these steps to set up and run the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository

```bash
git clone https://github.com/Ronniie/ronniie.dev.git
cd ronniie.dev
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

---

## Usage

### Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Styling

This project uses **TailwindCSS** for styling. The terminal has a dark theme with highlighted text elements to provide a sleek and modern appearance.

### Tailwind Configuration
To customize the styles, edit the `tailwind.config.js` file.

---

## Dynamic Icons

Dynamic importing of icons from `react-icons` ensures minimal client-side overhead. The following icons are used:

- **Socials:**
    - GitHub, BlueSky, Discord, YouTube, Reddit
- **Self-Hosted Services:**
    - Docker, Plex, Proxmox, Home Assistant, Paperless-ng

---

## Contributing

If you'd like to contribute:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Enjoy using the terminal and let me know how it works for you! 🚀