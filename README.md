# Daniel-Hoskin-HTML-CSS

My assignment for AS91878 and AS91880 - Design a Digital Outcome

## Introduction

A website showing my design and outcome, with the theme of NZ Sports Culture.

## Technical Description

I have built a multi-page website using HTML, CSS and Javascript.

In addition, I have used the following frameworks:

- [NodeJS](https://nodejs.org/en) - an open-source, cross-platform JavaScript runtime environment
- [NPM](https://www.npmjs.com/) - The package registry and dependency manager for JavaScript projects
- [ArrowJS](https://www.arrow-js.com/) - a very lightweight reactive JS library for creating a dynamic quiz user-interface
- [Vite](https://vitejs.dev/) - a lightweight Javascript build and authoring tool for local development and static site generation

## Getting started

Install [NodeJS](https://nodejs.org/en) and [NPM](https://www.npmjs.com/)

Install the package dependencies

```bash
npm install
```

### Running for local development

Run the application locally, using vite:

```bash
npm run dev
```

This will start the vite live development server on port 5173. You can visit the site at: [http://localhost:5173](http://localhost:5173)

Note: The development server will auto-reload any changes that are made to the source files, and will auto-refresh the current browser page.

### Building and deploying to the live website

To build the website for deployment, using vite

```bash
npm run build
```

This will compile all the pages and assets (images, CSS, JS) into the `dist/` directory in the project.

The files in the `dist/` directory can then be copied to the live webserver using SFTP or another file copying tool.

To preview the contents of the `dist/` directory, you can use vite:

```bash
npm run preview
```

This will start the vite static site preview server on port 4173. You can visit the site at: [http://localhost:4173](http://localhost:4173)

Note: The static preview site will not auto-update if the project source files are changed. In this case, the whole project will need to be rebuilt again using `npm run build`.
