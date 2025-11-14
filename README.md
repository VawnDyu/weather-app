# ☀️ Weather App

A clean and minimalist weather application built with React, TypeScript, and Vite. Get real-time weather information for any city worldwide with an intuitive and user-friendly interface.

![Weather App Screenshot](./public/screenshot.png)

## ✨ Features

- 🌍 **Worldwide Weather Search** - Search weather for any city globally
- 🌡️ **Current Weather Display** - Temperature, conditions, and detailed metrics
- 📅 **5-Day Forecast** - Plan ahead with weather predictions
- 🌓 **Dark Mode** - Easy on the eyes with automatic theme persistence
- 📏 **Unit Toggle** - Switch between Celsius and Fahrenheit
- 💾 **Persistent Settings** - Your preferences are saved automatically
- 📱 **Responsive Design** - Works perfectly on mobile and desktop
- 🎨 **Minimalist UI** - Clean and modern interface
- 📖 **User-Friendly Descriptions** - Easy-to-understand weather explanations

## 🚀 Demo

[Live Demo](https://vawndyu.github.io/weather-app/)

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Lucide React** - Icons
- **OpenWeatherMap API** - Weather data
- **CSS3** - Styling
- **LocalStorage** - Settings persistence

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- An OpenWeatherMap API key ([Get it here](https://openweathermap.org/api))

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VawnDyu/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

   Open `.env` and add your OpenWeatherMap API key:
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173`

## 🔑 Getting Your API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/)
2. Create a free account
3. Verify your email address (important!)
4. Navigate to **API Keys** section in your account
5. Generate a new API key
6. Wait 10-15 minutes for activation
7. Copy and paste it into your `.env` file

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🎯 Usage

### Search for a City
- Type any city name in the search bar
- Press Enter or click the search button
- View current weather and 5-day forecast

### Toggle Temperature Unit
- Click **°C** for Celsius
- Click **°F** for Fahrenheit
- Your preference is saved automatically

### Switch Theme
- Click the moon icon (☾) for dark mode
- Click the sun icon (☀) for light mode
- Theme preference persists across sessions

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── App.tsx          # Main component
│   ├── App.css          # Styles
│   ├── main.tsx         # Entry point
│   └── vite-env.d.ts    # TypeScript declarations
├── public/              # Static assets
├── .env                 # Environment variables (create this)
├── .env.example         # Environment template
├── .gitignore          # Git ignore rules
├── index.html          # HTML template
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
├── vite.config.ts      # Vite configuration
└── README.md           # This file
```

## 🎨 Features Explained

### Weather Metrics with Descriptions

The app provides user-friendly descriptions for all weather data:

- **Wind Speed**: Calm, Light breeze, Moderate breeze, Strong breeze, Very strong wind
- **Humidity**: Dry, Comfortable, Humid, Very humid
- **Visibility**: Poor, Moderate, Good, Excellent
- **Pressure**: Low, Normal, High

### Weather Icons

Each weather condition has a corresponding icon:
- ☀️ Clear skies
- ☁️ Cloudy
- 🌧️ Rain
- 🌦️ Drizzle
- ⚡ Thunderstorm
- ❄️ Snow
- 🌫️ Fog/Mist

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Vite](https://vitejs.dev/) for the amazing build tool

## 📧 Contact

Project Link: [https://github.com/VawnDyu/weather-app](https://github.com/VawnDyu/weather-app)

## 🐛 Known Issues

- API key must be activated (wait 10-15 minutes after creation)
- Email verification required for OpenWeatherMap account

## 🔮 Future Enhancements

- [ ] Geolocation support
- [ ] Hourly forecast
- [ ] Weather alerts
- [ ] Multiple city comparison
- [ ] Weather maps
- [ ] Historical data

---
⭐ If you found this app inspiring, consider giving it a star!

Made with ❤️ by [VawnDyu](https://github.com/VawnDyu)