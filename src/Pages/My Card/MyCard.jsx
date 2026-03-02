import { Button, Card, Flex, Select } from 'antd'
import './MyCard.css'
import { LockKeyhole, MessageSquareText, ShoppingCart, Truck } from 'lucide-react'
import Banner from '../../Component/Banner/banner';

const carts = [
    {img:"Ecommerce-Web-Design/public/image 32.png"},
    {img:"Ecommerce-Web-Design/public/image22.png"},
    {img:"Ecommerce-Web-Design/public/8.png"},
    {img:"Ecommerce-Web-Design/public/image 34.png"},
];

const MyCard = () => {
    return (
        <>
            <main>
                <p className='my-card'>My cart (3)</p>
                <div className='Market'>
                    <Card className='Seller'>
                        <Flex justify='space-between'>
                            <div className='shirts'>
                                <img src="Ecommerce-Web-Design/public/cloth/Bitmap.png" alt="" />
                                <div className='T-shirts'>
                                    <p className='with'>T-shirts with multiple colors, for men and lady</p>
                                    <p>Size: medium, Color: blue,  Material: Plastic <br /> Seller: Artel Market</p>
                                    <Flex gap={12}>
                                        <Button style={{ color: '#FA3434' }}>Remove</Button>
                                        <Button style={{ color: '#0D6EFD' }}>Save for later</Button>
                                    </Flex>
                                </div>
                            </div>
                            <div className='Qty'>
                                <p>$78.99</p>
                                <Select
                                    defaultValue="Qty: 9"
                                    style={{ width: 120 }}
                                    options={[
                                        { value: 'Qty: 9', label: 'Qty: 9' },
                                        { value: 'Qty: 8', label: 'Qty: 8' },
                                        { value: 'Qty: 7', label: 'Qty: 7' },
                                        { value: 'Qty: 6', label: 'Qty: 6', disabled: true },
                                    ]}
                                />
                            </div>
                        </Flex>
                        <hr />
                        <Flex justify='space-between'>
                            <div className='shirts'>
                                <img src="Ecommerce-Web-Design/public/cloth/image 26.png" alt="" />
                                <div className='T-shirts'>
                                    <p className='with'>T-shirts with multiple colors, for men and lady</p>
                                    <p>Size: medium, Color: blue,  Material: Plastic <br /> Seller: Artel Market</p>
                                    <Flex gap={12}>
                                        <Button style={{ color: '#FA3434' }}>Remove</Button>
                                        <Button style={{ color: '#0D6EFD' }}>Save for later</Button>
                                    </Flex>
                                </div>
                            </div>
                            <div className='Qty'>
                                <p>$39.00</p>
                                <Select
                                    defaultValue="Qty: 3"
                                    style={{ width: 120 }}
                                    options={[
                                        { value: 'Qty: 3', label: 'Qty: 3' },
                                        { value: 'Qty: 4', label: 'Qty: 4' },
                                        { value: 'Qty: 5', label: 'Qty: 5' },
                                        { value: 'Qty: 6', label: 'Qty: 6', disabled: true },
                                    ]}
                                />
                            </div>
                        </Flex>
                        <hr />
                        <Flex justify='space-between'>
                            <div className='shirts'>
                                <img src="Ecommerce-Web-Design/public/06.png" alt="" />
                                <div className='T-shirts'>
                                    <p className='with'>T-shirts with multiple colors, for men and lady</p>
                                    <p>Size: medium, Color: blue,  Material: Plastic <br /> Seller: Artel Market</p>
                                    <Flex gap={12}>
                                        <Button style={{ color: '#FA3434' }}>Remove</Button>
                                        <Button style={{ color: '#0D6EFD' }}>Save for later</Button>
                                    </Flex>
                                </div>
                            </div>
                            <div className='Qty'>
                                <p>$78.99</p>
                                <Select
                                    defaultValue="Qty: 1"
                                    style={{ width: 120 }}
                                    options={[
                                        { value: 'Qty: 1', label: 'Qty: 1' },
                                        { value: 'Qty: 2', label: 'Qty: 2' },
                                        { value: 'Qty: 3', label: 'Qty: 3' },
                                        { value: 'Qty: 4', label: 'Qty: 4', disabled: true },
                                    ]}
                                />
                            </div>
                        </Flex>
                        <hr />
                    </Card>
                    <div className='coupon'>
                        <Card>
                            <div className='Have'>
                                <p>Have a coupon?</p>
                                <Button.Group >
                                    <Button>Add coupon</Button>
                                    <Button style={{ color: '#0D6EFD' }}>Apply</Button>
                                </Button.Group>
                            </div>
                        </Card>
                        <Card>
                            <div style={{ marginBottom: '12px' }}>
                                <Flex justify='space-between'>
                                    <p>Subtotal:</p>
                                    <p>$1403.97</p>
                                </Flex>
                                <Flex justify='space-between'>
                                    <p>Discount:</p>
                                    <p style={{ color: '#FA3434' }}>- $60.00</p>
                                </Flex>
                                <Flex justify='space-between'>
                                    <p>Tax:</p>
                                    <p style={{ color: '#00B517' }}>+ $14.00</p>
                                </Flex>
                            </div>
                            <hr />
                            <Flex justify='space-between' className='total'>
                                <p>Total:</p>
                                <p>$1357.97</p>
                            </Flex>
                            <Button className='Checkout'>Checkout</Button>
                        </Card>
                    </div>
                </div>
                <div className='section-2'>
                    <div className="sub-section-2-1">
                        <Flex gap={12} align='center'>
                            <span className='lock-icon'><LockKeyhole /></span>
                            <div>
                                <p>Secure payment</p>
                                <p className='Have'>Have you ever finally just </p>
                            </div>
                        </Flex>
                    </div>
                    <div className="sub-section-2-1">
                        <Flex gap={12} align='center'>
                            <span className='lock-icon'><MessageSquareText /></span>
                            <div>
                                <p>Customer support</p>
                                <p className='Have'>Have you ever finally just </p>
                            </div>
                        </Flex>
                    </div>
                    <div className="sub-section-2-1">
                        <Flex gap={12} align='center'>
                            <span className='lock-icon'><Truck /></span>
                            <div>
                                <p>Free delivery</p>
                                <p className='Have'>Have you ever finally just </p>
                            </div>
                        </Flex>
                    </div>
                </div>
                <div className="section-3">
                    <Card>
                        <p className='Saved'>Saved for later</p>
                        <div className="later">
                            {carts.map((car) => (<div className="sub-later">
                                <img src={car.img} alt="" />
                                <p className='GoPro'>$99.50</p>
                                <p>GoPro HERO6 4K Action <br /> Camera - Black</p>
                                <Button style={{color:'#0D6EFD', fontWeight:'500'}}><ShoppingCart /> Move to cart</Button>
                            </div>))}
                        </div>
                    </Card>
                </div>
                <Banner/>
            </main>
        </>
    )
}

export default MyCard