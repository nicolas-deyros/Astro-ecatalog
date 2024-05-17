# Astro Carrefour eCatalogs Project

This project is a modern, performant web application built using [Astro](https://astro.build/), a front-end framework for building faster, optimized websites with less client-side JavaScript. The application fetches and displays eCatalogs data based on the selected state.

## Technologies Used

- [Astro](https://astro.build/): A front-end framework for building fast, optimized websites.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom user interfaces.
- [Node.js](https://nodejs.org/): A JavaScript runtime for server-side execution.

## Project Structure

- `index.astro`: This is the main entry point of the project. It includes a `Header` component and a `States` component. It also contains a script that fetches the eCatalog data when the state changes and displays the valid eCatalogs in a grid.

- `components/Header.astro`: This component displays the header of the website.

- `components/States.astro`: This component displays a dropdown list of states. When a state is selected, it triggers a change event that is handled in the `index.astro` file.

## How It Works

When a state is selected from the dropdown list, the script in the `index.astro` file fetches the eCatalogs data from the `/api/ecatalogs.json` endpoint. It then filters the eCatalogs for the selected state to get the eCatalogs that are valid for the current date. The valid eCatalogs are displayed in a grid.

Each eCatalog is displayed in a card that includes the title of the eCatalog and an image. The image is displayed using the `<picture>` element to provide different images for different screen sizes.

## Running the Project

To run the project, you need to have Node.js and npm installed on your machine. Then, you can run the following commands:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```
