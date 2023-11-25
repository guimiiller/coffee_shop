import * as X from './styles'
import { Link } from 'react-router-dom'
import iconTwitterXGold from '../../assets/icon_X_gold.png'
import iconFacebookGold from '../../assets/icon_facebook_gold.png'
import iconInstagramGold from '../../assets/icon_instagram_gold.png'
import iconCoffee from '../../assets/icon_coffee.png'
import iconStore from '../../assets/icon_store.png'
import coffeeStoreImg from '../../assets/coffee_store.jpg'
import iconCoffeeCard from '../../assets/icon_coffecard.png'
import iconCakeCard from '../../assets/icon_cakecard.png'
import iconDrinkCard from '../../assets/icon_drinkcard.png'
import { CoffeeFlavors } from '../../data/Coffees'
import { useEffect, useState } from 'react'
import { Coffees } from '../../types/Coffee'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GalleryHome } from '../../data/Gallery'
import {Pagination, A11y, EffectFade} from 'swiper/modules';

export interface ShopCoffeeItem {
    product: Coffees
    quantity: number
}

export const Home = () =>{
    const [coffeeItem, setCoffeeItem] = useState<ShopCoffeeItem[]>([])
    const [slider, setSlider] = useState(false)

    const addFlavour = (id: number) =>{
        const CoffeeFlavor = CoffeeFlavors.find((CoffeeFlavour) => CoffeeFlavour.id === id)
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
            product: CoffeeFlavor!,
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

    useEffect(()=>{
        function handleResize(){
            if(window.innerWidth < 768){
                setSlider(true)
            }else{
                setSlider(false)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return() =>{
            window.removeEventListener("resize", handleResize)
        }

    }, [])

    return(
        <>
            <X.BannerContainer>
                <X.BannerText>
                    <img src={iconCoffee} alt="coffee icon" />
                    <h1>Coffee Shop</h1>
                    <h2>The best coffee in the world</h2>
                    <a href='#reserve'>Book your table</a>
                </X.BannerText>
            </X.BannerContainer>
            <X.StoreContainer>
                <X.StoreText>
                    <h3>Enjoy</h3>
                    <h2>Our Store</h2>
                    <img src={iconStore} alt="" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                    <Link to='/about'>About Us</Link>
                    <h4>Russell Stephens</h4>
                    <h6>CEO</h6>
                </X.StoreText>
                <X.StoreImage>
                    <img src={coffeeStoreImg} alt="" />
                </X.StoreImage>
            </X.StoreContainer>
            <X.ServicesContainer>
                <X.ServicesText>
                    <h3>Discover</h3>
                    <h2>Our Services</h2>
                </X.ServicesText>
                <X.ServicesContent>
                    <div className='card_container'>
                        <div className='geometric'><img src={iconCoffeeCard} alt="" /></div>
                        <div className='service_card'>
                            <h3>Coffee</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                        </div>
                    </div>
                    <div className='card_container'>
                        <div className='geometric' ><img src={iconCakeCard} alt="" /></div>
                        <div className='service_card'>
                            <h3>Cake</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                        </div>
                    </div>
                    <div className='card_container'>
                        <div className='geometric' ><img src={iconDrinkCard} alt="" /></div>
                        <div className='service_card'>
                            <h3>Drinks</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                        </div>
                    </div>
                </X.ServicesContent>
            </X.ServicesContainer>
            <X.ReservationContainer id='reserve'>
                <X.ReservationContent>
                    <div className='reserve1'>
                        <h3>Time</h3>
                        <h2>Open</h2>
                        <h4>Monday - Friday</h4>
                        <p>7AM - 8AM (Breakfast)</p>
                        <p>11AM - 10PM (Lunch/Dinner)</p>
                        <h4>Saturday / Sunday</h4>
                        <p>8AM - 3PM (Brunch)</p>
                        <p>1PM - 9PM (Lunch/Dinner)</p>

                        <h5>+15 892 378 25 52</h5>
                    </div>
                    <div className='reserve2'>
                        <h3>Reservation</h3>
                        <h2>Online Booking</h2>

                        <form>
                            <div>
                                <input type="text" placeholder='4 people'/>
                                <input type="date" placeholder='Date' />
                                <input type="time" placeholder='Time' />
                            </div>
                            <div>
                                <input type="text" placeholder='Name'/>
                                <input type="number" placeholder='Phone' />
                                <input type="email" placeholder='Email'/>
                            </div>
                        </form>
                    </div>
                </X.ReservationContent>
            </X.ReservationContainer>

            <X.FlavorContainer>
                <X.FlavorText>
                    <h3>Flavor</h3>
                    <h2>Collections</h2>
                </X.FlavorText>
                <X.FlavorContent>
                {slider  === true && 
                    <X.FlavorCards>

                            <Swiper
                                modules={[Pagination, A11y]}
                                slidesPerView={1}
                                pagination={{clickable: true}}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                {CoffeeFlavors.map(item =>(
                                    <SwiperSlide key={item.id} className='flavour_container'>
                                        <img src={item.url} alt="" />
                                        <h4>{item.name}</h4>
                                        <p>{item.price}$</p>
                                        <button onClick={() => addFlavour(item.id)}>Add</button>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                    </X.FlavorCards>
                }

                {slider === false &&
                
                    <X.FlavorCardsP2>
                        {CoffeeFlavors.map(item =>(
                            <div key={item.id}>
                                <img src={item.url} alt="" />
                                <h4>{item.name}</h4>
                                <p>{item.price}$</p>
                                <button onClick={() => addFlavour(item.id)}>Add</button>
                            </div>
                        ))}
                    </X.FlavorCardsP2>
                }

                    
                    <X.FlavorOrder>
                        <h2>Order</h2>
                        {totalCart === 0 && <div className='choice_text'>Choose a flavor</div>}
                            <div>
                                {coffeeItem.map(item =>(
                                    <div className='order_container' key={item.product.id}>
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
                    </X.FlavorOrder>
                </X.FlavorContent>
            </X.FlavorContainer>

            <X.SlideContainer>
                <Swiper
                    modules={[Pagination, A11y, EffectFade]}
                    effect='fade'
                    slidesPerView={1}
                    pagination={{clickable: true}}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {GalleryHome.map(item =>(
                        <SwiperSlide key={item.id}>
                            <img src={item.url} alt="Slide" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </X.SlideContainer>

            <X.ContactContainer>
                <X.ContactP1>
                    <h3>Resto</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                </X.ContactP1>
                <X.ContactP2>
                    <h4>NewsLetter:</h4>
                    <input type="text" placeholder='Your email address'/>
                    <div className='follow_icons'>
                        <h4>Follow Us:</h4>
                        <Link to=''><img src={iconFacebookGold} alt="Icon Facebook" /></Link>
                        <Link to=''><img src={iconTwitterXGold} alt="Icon Facebook" /></Link>
                        <Link to=''><img src={iconInstagramGold} alt="Icon Facebook" /></Link>
                    </div>
                </X.ContactP2>
            </X.ContactContainer>
        </>
    )
}