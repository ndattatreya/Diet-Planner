# Diet Planner Backend

This project is a Node.js Express backend for a Diet Planner application using Google Generative AI.

## Prerequisites

- Node.js (v18 or above recommended)
- npm

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/ndattatreya/Diet-Planner.git
   cd Diet-Planner
   ```

2. **Install dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Create a `.env` file**

   - In the `server` folder, create a file named `.env`.
   - Add your Google Generative AI API key:
     ```
     GEMINI_API_KEY=your_actual_api_key_here
     ```

4. **Run the server**
   ```bash
   node server.js
   ```
   The server will start at [http://localhost:4000](http://localhost:4000).

## Notes

- The `.env` file is ignored by git (see `.gitignore`), so your API key stays private.
- Make sure your API key is valid and has access to the Gemini model.

## API Endpoints

- `GET /` — Health check endpoint.
- `POST /api/ask` — Send a question to the Gemini model.

## Troubleshooting

- If you get an "API key not valid" error, double-check your `.env` file and restart the server.
- Ensure you are in the `server` folder when running
