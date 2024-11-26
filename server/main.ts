import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";
import routeStaticFilesFrom from "./util/routeStaticFilesFrom.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

export const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(routeStaticFilesFrom([`/client/dist`, `/client/public`]));
app.use(
  oakCors({
    origin: "http://localhost:3000",
  })
);
router.get("/fetcher", (ctx) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.body = "Deno says hello!";
});

if (import.meta.main) {
  console.log("Server listening on port http://localhost:8000");
  await app.listen({ port: 8000 });
}
