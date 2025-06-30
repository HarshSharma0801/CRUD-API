# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## E2E Testing with Playwright & Keploy

1. **Start your backend with Keploy enabled** (see backend README or Keploy docs).
2. In a new terminal, start the frontend:
   ```sh
   npm run dev
   ```
3. In another terminal, run Playwright tests:
   ```sh
   npm run test:e2e
   ```
4. Keploy will record all API calls made by the frontend to the backend during these tests.

- Playwright tests are located in the `e2e/` directory.
- To update Playwright snapshots: `npx playwright test --update-snapshots`
