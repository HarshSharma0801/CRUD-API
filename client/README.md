# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## E2E Testing with Playwright & Keploy

### For Recording Frontend API Calls:

1. **Start Keploy recording the frontend:**
   ```sh
   sudo keploy record -c "npm run dev" --proxyPort 16789 --dnsPort 26789 --appPort 5173
   ```
2. **In another terminal, run Playwright tests:**
   ```sh
   npm run test:e2e
   ```

### For Recording Backend API Calls:

1. **Start your backend with Keploy enabled** on port 5001:
   ```sh
   sudo keploy record -c "npm run dev" --proxyPort 16789 --dnsPort 26789 --appPort 5001
   ```
2. **In another terminal, start the frontend:**
   ```sh
   npm run dev
   ```
   (Frontend will be available at http://192.168.5.15:5173)
3. **In a third terminal, run Playwright tests:**
   ```sh
   npm run test:e2e
   ```

### Notes:

- Frontend runs on `192.168.5.15:5173` (accessible from outside container/VM)
- Backend API calls are proxied to `localhost:5001`
- Keploy will record all API calls made by the frontend to the backend during tests
- Playwright tests are located in the `e2e/` directory
- To update Playwright snapshots: `npx playwright test --update-snapshots`
