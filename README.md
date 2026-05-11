# 🎬 Movie Finder
 
A React application to search and explore movies using the TMDB API — featuring dynamic routing, real-time search, and detailed movie pages.
 
🔗 **[Live Demo](https://raect-movie-finder.netlify.app/)** | 📂 **[GitHub](https://github.com/BannyVardhanReddy/movie-finder)**
 
---
 
## ✨ Features
 
- **Real-time movie search** — search any movie using the TMDB API
- **Movie detail pages** — view poster, overview, rating, genres, and runtime for each movie
- **Dynamic routing** — each movie has its own URL (`/movie/:id`)
- **Persistent search** — search bar available on all pages via the Navbar
- **Loading & error states** — user friendly feedback during API calls
- **Fallback handling** — graceful alt text for movies without posters
---
 
## 🛠️ Tech Stack
 
- **React** — component based UI
- **React Router v6** — client side routing and navigation
- **TMDB API** — movie data, posters, and details
- **async/await + fetch** — API calls with try/catch/finally error handling
- **Netlify** — deployment with `_redirects` configured for React Router
---
 
## 📂 Project Structure
 
```
src/
├── pages/
│   ├── HomePage.jsx          → search bar + movie results grid
│   └── MovieDetailPage.jsx   → full movie details fetched by id
├── components/
│   ├── Navbar.jsx            → persistent search bar across all pages
│   ├── SearchBar.jsx         → controlled input with search handler
│   ├── MovieList.jsx         → maps results into MovieCard grid
│   └── MovieCard.jsx         → poster, title, rating for one movie
├── App.jsx                   → BrowserRouter, Routes, search state
└── main.jsx                  → BrowserRouter entry point
```
 
---
 
## 🚀 Getting Started
 
```bash
# Clone the repository
git clone https://github.com/BannyVardhanReddy/movie-finder.git
 
# Navigate into the project
cd movie-finder
 
# Install dependencies
npm install
 
# Create a .env file in the root
VITE_TMDB_API_KEY=your_tmdb_api_key_here
 
# Start the development server
npm run dev
```
 
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
 
> Get a free TMDB API key at [themoviedb.org](https://www.themoviedb.org/settings/api)
 
---
 
## 💡 Key Concepts Demonstrated
 
- **React Router v6** — `BrowserRouter`, `Routes`, `Route`, `Link`, and `useParams` for dynamic movie detail pages
- **useEffect + async/await** — data fetching with proper loading, error, and success state handling using try/catch/finally
- **Lifting state up** — search query and movie results state live in `App.jsx` and flow down as props to Navbar and HomePage
- **Dynamic routing** — clicking a movie card navigates to `/movie/:id` where `useParams` reads the id to fetch that movie's full details
- **TMDB image URLs** — constructed from partial `poster_path` responses using `https://image.tmdb.org/t/p/w500`
- **Environment variables** — API key stored securely in `.env` using Vite's `import.meta.env`
- **Netlify deployment** — `_redirects` file configured to handle React Router client side routing on page refresh
---
 
## 🔮 Future Improvements
 
- [ ] Add a watchlist feature using localStorage
- [ ] Filter movies by genre, year, or rating
- [ ] Infinite scroll or pagination for search results
- [ ] Similar movies section on the detail page
- [ ] Convert to full stack with a Node.js + Express backend for saved watchlists
---
 
## 📸 Screenshot
 
> _Add a screenshot of your app here_
> `![Movie Finder Screenshot](./screenshot.png)`
 
---
 
## 👨‍💻 Author
 
**Banny Vardhan Reddy**
- GitHub: [@BannyVardhanReddy](https://github.com/BannyVardhanReddy)
