function Tile(props) {
    console.log(props)
    return (
    <section>
        {props.children}
    </section>
    )
}

export default Tile;