Medicare - Hospital Management & Booking Portal
A modern, responsive Single Page Application (SPA) built with Vanilla JavaScript. This project serves as a comprehensive healthcare platform where patients can explore medical services, meet specialist doctors, and manage appointments.

🚀 Features
SPA Architecture: Smooth, no-refresh page transitions using a custom JavaScript Hash Router.

Responsive Design: Fully optimized for MacBook Pro, tablets, and mobile devices.

Service Exploration: Detailed grid of healthcare departments (Cardiology, Neurology, etc.).

Doctor Directory: Professional profiles of expert physicians with dedicated specialties.

Patient Portal: A secure-entry login system designed for future backend integration.

Interactive UI: Scroll-reveal animations and hover effects for an engaging user experience.

🛠️ Tech Stack
Frontend: Vanilla JavaScript (ES6+ Modules)

Styling: CSS3 (Flexbox, Grid, Glassmorphism)

Icons: Font Awesome & Boxicons

Routing: Client-side Hash Router

Development Tools: VS Code, Live Server

📂 Project Structure
Plaintext
├── assets/             # Images and local icons
├── css/                
│   └── style.css       # Global styles and animations
├── js/
│   ├── components/     # Reusable UI parts (Navbar)
│   ├── pages/          # Page modules (Home, Dashboard, Login)
│   ├── utils/          # Helper functions
│   └── main.js         # App entry point and Router
├── .env                # Environment variables
└── index.html          # Main entry point
⚙️ Setup Instructions
Clone the repository:

Bash
git clone https://github.com/yourusername/medicare-portal.git
Navigate to the project:

Bash
cd medicare-portal
Environment Variables:
Create a .env file in the root and add:

Code snippet
VITE_API_BASE_URL=http://localhost:5000/api
Run the project:
Open index.html using a local server (e.g., VS Code Live Server).

🛡️ Future Roadmap
[ ] Full integration with a Node.js/Express backend.

[ ] Live appointment booking database.

[ ] Real-time patient-doctor chat system.

Author: [Miracle]