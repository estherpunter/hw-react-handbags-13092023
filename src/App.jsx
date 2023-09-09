import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";

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
                <section>
                    <img/>
                        <h2>title</h2>
                        <p>paragraaf</p>
                </section>
                <section>
                    <img/>
                    <h2>title</h2>
                    <p>paragraaf</p>
                </section>
                <section>
                    <img/>
                    <h2>title</h2>
                    <p>paragraaf</p>
                </section>
                <section>
                    <img/>
                    <h2>title</h2>
                    <p>paragraaf</p>
                </section>
            </footer>
        </>
    )
}

export default App
