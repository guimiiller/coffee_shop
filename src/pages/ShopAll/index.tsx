import * as X from './styles'
import { CoffeeFlavors } from '../../data/Coffees'
import {useState} from 'react'
import { ShopCoffeeItem } from '../Home'

export const Shop = () =>{
    const [inputValue, setInputValue] = useState('')
    const [coffeeItem, setCoffeeItem] = useState<ShopCoffeeItem[]>([])

    const lowerBusca = inputValue.toLowerCase()
    const coffeeFiltered = CoffeeFlavors.filter(item => item.name.toLowerCase().includes(lowerBusca))

    const addFlavour = (id: number) =>{
        const CoffeeFlavour = CoffeeFlavors.find((CoffeeFlavour) => CoffeeFlavour.id === id)
        const alreadyInShoppingCart = coffeeItem.find((item) => item.product.id === id)
        // if coffee is in the shopping cart
        if(alreadyInShoppingCart){
            const newShoppingCart: ShopCoffeeItem[] = coffeeItem.map(item =>{
                if(item.product.id === id)({
                    ...item,
                    quantity: item.quantity++
                })
                return item
            })
            setCoffeeItem(newShoppingCart)
            return
        }

        // if coffee is not already in the shopping cart
        const coffee: ShopCoffeeItem = {
            product: CoffeeFlavour!,
            quantity: 1,
        }
        const newShoppingCoffee: ShopCoffeeItem[] = [...coffeeItem, coffee]
        setCoffeeItem(newShoppingCoffee)
    }



    const removeFlavour = (id: number) =>{
        const alreadyInShoppingCart = coffeeItem.find((item) => item.product.id === id)
        if(alreadyInShoppingCart!.quantity > 1){
            const newShoppingCart: ShopCoffeeItem[] = coffeeItem.map(item =>{
                if(item.product.id === id)({
                    ...item,
                    quantity: item.quantity--
                })
                return item
            })
            setCoffeeItem(newShoppingCart)
            return
        }
        // if there is only one item with the id in the cart
        const newShoppingCoffee: ShopCoffeeItem[] = coffeeItem.filter(item => item.product.id !== id)
        setCoffeeItem(newShoppingCoffee)
    }

    const totalCart = coffeeItem.reduce((total, current) =>{
        return total + (parseFloat(`${current.product.price.toFixed(2)}`) * parseFloat(`${current.quantity.toFixed(2)}`))
    }, 0)




    return(
        <X.ShopContainer>
            <X.SearchContainer>
                <input 
                type="search"  
                placeholder='Look for a flavor'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
            </X.SearchContainer>

            <X.ShopContent>
                {coffeeFiltered.map(item =>(
                    <div key={item.id}>
                        <img src={item.url} alt="" />
                        <h4>{item.name}</h4>
                        <p>{item.price}$</p>
                        <button onClick={() => addFlavour(item.id)}>Add</button>
                    </div>
                ))}
            </X.ShopContent>

            <X.FlavourOrder>
                <h2>Order</h2>
                    {totalCart === 0 && <div className='choice_text'>Choose a flavor</div>}
                        <div>
                            {coffeeItem.map(item =>(
                                <div key={item.product.id}>
                                    <h3>Flavour: {item.product.name}</h3>
                                    <p>Price: {item.product.price}$</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Total: {parseFloat(`${item.quantity.toFixed(2)}`) * parseFloat(`${item.product.price.toFixed(2)}`)}$</p>
                                    <button onClick={() => removeFlavour(item.product.id)} className='btn_remove' >Remove</button>
                                </div>
                            ))}
                        </div>
                        <h4> Total Order: ({(totalCart.toFixed(2))}$)</h4>
                    {totalCart > 0 && <button className='buy_button'>Buy</button>}
            </X.FlavourOrder>
        </X.ShopContainer>
    )
}