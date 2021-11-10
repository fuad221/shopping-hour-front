
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
import './Styles.css'

function Home() {
    const { state: { products } } = CartState();
    const transformProducts = () => {
        let sortedProducts = products;
        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        }

        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }

        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
        }

        if (byRating) {
            sortedProducts = sortedProducts.filter(
                (prod) => prod.ratings >= byRating
            );
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuery)
            );
        }

        return sortedProducts;

    }
    // i will do the Filters 
    return (
        <div className="home">
            <div className="ProductContainer">
                {products.map((prod) => {
                    return <SingleProduct prod={prod} key={prod.id} />
                })}
            </div>
        </div>


    )
}

export default Home

