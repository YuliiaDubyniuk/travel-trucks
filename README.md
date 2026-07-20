# TravelTracks - Campervan Rental Application ![alt text](public/favicon.png)

TravelTracks is a modern frontend web application designed for discovering,
filtering, and booking campervans. Users can browse an extensive catalog of
recreational vehicles, apply specific search parameters, view granular
specifications and reviews, and send booking requests.

## 🌟 Features

- **Home Page**: A welcoming landing page featuring a hero section and a
  prominent call-to-action button that routes directly to the catalog view.
- **Camper Catalog**: An interactive dashboard showing campervan preview cards
  with basic technical details, prices, and high-level specifications.
- **Load More**: Integrated server-side pagination allowing users to dynamically
  load more campervan results.
- **Advanced Sidebar Filters**: Fully integrated multi-criteria filter handling
  supporting:
  - Text-based search by location/city.
  - Radio filtering by vehicle format (Alcove, Panel Truck, Integrated,
    Semi-Integrated).
  - Radio filtering by engine type (Diesel, Petrol, Hybrid, Electric).
  - Radio filtering by transmission type (Automatic, Manual).
- **Camper Details Page**: A dedicated page rendering exhaustive technical
  parameters, comprehensive vehicle dimensions (length, width, height, tank
  capacity, consumption), a dynamic gallery layout, and user reviews.
- **Booking Form**: An inline user-friendly booking form. Submitting a
  reservation alerts the user via interactive, styled notifications.

## 🛠️ Tech Stack & Dependencies

- **Core**: React 18+, Vite (Build Tool), JavaScript (ES6+)
- **State Management**: Redux Toolkit, React-Redux
- **Routing**: React Router DOM
- **Forms & Validation**: Formik, Yup
- **Styling**: CSS Modules
- **Data Fetching**: Axios
- **Notifications**: React-Toastify

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have **Node.js** (v16.x or higher recommended) and **npm** installed.

### Installation 📥

1. **Clone the repository**
   ```bash
   git clone https://github.com/YuliiaDubyniuk/travel-trucks.git
   ```
2. **Navigate to the project directory**
   ```bash
   cd travel-trucks
   ```
3. **Install the dependencies**

   ```bash
   npm install
   ```

### Running the Application ▶️

**To launch the local development server:**

```bash
npm run dev
```

### Building for Production 📦

**To create a highly optimized production build**

```bash
npm run build
```

**To preview local production build**

```bash
npm run preview
```
