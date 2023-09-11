import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    buttonType="button"
                    buttonText="to the collection"
                    isDisabled={false}
                />
                <Button
                    buttonType="button"
                    buttonText="shop all bags"
                    isDisabled={false}
                />
                <Button
                    buttonType="button"
                    buttonText="pre-orders"
                    isDisabled={true}
                />
            </nav>
            <main>
                <Product
                    redLabel="Best seller"
                    nameOfBag="The handy bag"
                    priceOfBag="€400,-"
                    imageSource="src/assets/bag_1.png"
                    imageAlt="bag 1"
                />
                <Product
                    redLabel="Best seller"
                    nameOfBag="The stylish bag"
                    priceOfBag="€250,-"
                    imageSource="src/assets/bag_2.png"
                    imageAlt="bag 2"
                />
                <Product
                    redLabel="New collection"
                    nameOfBag="The simple bag"
                    priceOfBag="€300,-"
                    imageSource="src/assets/bag_3.png"
                    imageAlt="bag 3"
                />
                <Product
                    redLabel="New collection"
                    nameOfBag="The trendy bag"
                    priceOfBag="€150,-"
                    imageSource="src/assets/bag_4.png"
                    imageAlt="bag 4"
                />
            </main>
            <footer>
                <Tile>
                    <img/>
                    <h2>the brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aspernatur assumenda autem delectus deleniti dignissimos dolores exercitationem explicabo in. Ab adipisci, assumenda dolor eaque eius excepturi expedita, fugiat molestias nesciunt nisi optio praesentium provident quaerat quod similique soluta, tempore.</p>
                </Tile>
                <Tile>
                    <img src="src/assets/brand.png" alt="brand picture"/>
                </Tile>
                <Tile>
                    <img src="src/assets/our_story.png"/>
                </Tile>
                <Tile>
                    <h2>our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto, cupiditate dolorum eius eveniet explicabo illum ipsum iure, laboriosam maiores molestias nobis porro quae quaerat saepe sed temporibus tenetur veritatis?</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
