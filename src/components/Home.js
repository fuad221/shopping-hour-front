
import { CardState } from '../context/Context'
import SingleProduct from './SingleProduct';
import './Styles.css'

function Home() {
    const { state: { products } } = CardState();
    // i will do the Filters 
    return (
        <div className="home">
            <div className="ProductContainer">
                {products.map((prod) => {
                   return <SingleProduct  prod={prod} key={prod.id}/>
                })}
            </div>
        </div>


    )
}

export default Home

