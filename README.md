# wasm-fortune

Build the WASM library:

`cargo build --lib --target wasm32-unknown-unknown`

Generate JS wrapper files:

`wasm-bindgen --target deno ./target/wasm32-unknown-unknown/debug/getfortune.wasm --out-dir ./server`

Run it with deno:

```
cd server
deno run --allow-read --allow-net --allow-env ./main.ts
```

