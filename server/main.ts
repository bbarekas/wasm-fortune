import { serve } from "https://deno.land/std@0.86.0/http/server.ts";
import { get_fortune } from "./getfortune.js";

const env = Deno.env.toObject();

let port = 4040;
if(env.WISESAYING_PORT){
    port = Number(env.WISESAYING_PORT);
};

const server = serve({ hostname: "0.0.0.0", port});
console.log(`HTTP webserver running at ${new Date()}.  Access it at:  http://localhost:${port}/`);

for await (const request of server) {
    const saying = get_fortune();
    request.respond({ status: 200, body: saying });
}
