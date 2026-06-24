import { defineConfig, env } from "prisma";

export default defineConfig({
  datasources: {
    db: {
      url: env("DATABASE_URL"),
      directUrl: env("DIRECT_URL"),
    },
  },
});
