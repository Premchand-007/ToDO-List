# iTask - Manage Your ToDo's At One Place

A clean, responsive ToDo list app built with React. Add tasks, mark them complete, edit or delete them, and hide finished items. Your tasks are saved in the browser, so they are still there after a refresh.

## Features

- Add new ToDo's (minimum 4 characters)
- Mark tasks as completed (strikethrough styling)
- Edit and delete tasks
- Toggle "Show Completed ToDo's" to hide or show finished tasks
- Persistent storage using `localStorage`
- Responsive layout styled with Tailwind CSS

## Tech Stack

- [React](https://react.dev/) (hooks: `useState`, `useEffect`)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [uuid](https://www.npmjs.com/package/uuid) for unique task IDs

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Premchand-007/ToDO-List.git

# Go into the project folder
cd TODo-List

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   └── Navbar.jsx
├── App.jsx        # Main app logic and UI
├── App.css
└── main.jsx
```

## How It Works

- Tasks are stored as objects: `{ id, todo, isCompleted }`.
- On load, the app reads saved tasks from `localStorage`.
- Each add, edit, delete, or checkbox change updates the list and saves it back to `localStorage`.

## Future Improvements

- Due dates and priorities
- Categories and search
- Drag and drop reordering
- Dark mode

## Contributing

Contributions are welcome. Fork the repo, create a branch, and open a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
