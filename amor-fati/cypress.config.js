import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '574f1k',
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
