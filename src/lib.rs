use rand::seq::IteratorRandom;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn get_fortune() -> String {
    let str = include_str!("fortune.txt");
    let lines = str.lines();

    let line = lines
        .choose(&mut rand::thread_rng())
        .expect("File had no lines");

    return line.to_string();
}
