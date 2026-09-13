# Corporate Ride Tracker

A 2-screen React Native (Expo) app for viewing scheduled rides and tracking a live ride with real-time status updates.

## Tech Stack
- Expo (Managed Workflow) + TypeScript
- React Navigation (Native Stack)
- Local mock data + simulated async service (setTimeout + Promise)

## Features
- **My Rides** — list of rides with pull-to-refresh, filter tabs (All / Upcoming / Completed), loading skeleton, error + retry, and empty states
- **Live Ride Tracking** — driver info with call/message actions, an interactive trip status stepper (auto-advances every 5s or via button), pickup/drop route display, and an SOS confirmation flow

## Project Structure

src/
├── screens/        # App screens: MyRidesScreen, RideDetailScreen
├── components/     # Reusable UI components: RideCard, StatusBadge, FilterTabs, etc.
├── types/          # Shared TypeScript types: Ride, Driver, RideStatus, TripStep
├── services/       # Simulated async service for fetching ride data
├── data/            # Mock ride and driver data
├── navigation/      # Typed navigation setup: RootNavigator
└── theme/           # Shared design tokens: colors, spacing, and styles



## How to Run

1. Clone the repo and install dependencies:
```bash
   git clone <your-repo-url>
   cd RideTracker
   npm install
```

2. Start the development server:
```bash
   npx expo start
```

3. Scan the QR code with the **Expo Go** app (Android/iOS) to run on a physical device, or press `a` / `i` in the terminal for an emulator/simulator.

## Notes
- The mock service randomly fails ~15% of the time to allow the error/retry state to be tested.
