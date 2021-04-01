use getfortune::get_wise_saying;

fn main() -> std::io::Result<()> {
    let mut str = get_fortune();
    println!("{}", str);
    Ok(())
}