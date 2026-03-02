import { Avatar, Button, Card, Flex, Form, Input, Menu, Select } from 'antd';
import './home.css'
import { SearchOutlined, SendOutlined, UserOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { Archive, Shield } from 'lucide-react';

const items = [
    {
        key: 'sub1',
        label: 'Automobiles',
    },
    {
        key: 'sub2',
        label: 'Clothes and wear',
    },
    {
        key: 'sub3',
        label: 'Home interiors',
    },
    {
        key: 'sub4',
        label: 'Computer and tech',
    },
    {
        key: 'sub5',
        label: 'Tools, equipments',
    },
    {
        key: 'sub6',
        label: 'Sports and outdoor',
    },
    {
        key: 'sub7',
        label: 'Animal and pets',
    },
    {
        key: 'sub8',
        label: 'Machinery tools',
    },
    {
        key: 'sub9',
        label: 'More category',
    },

];

const cardsHeroSecond = [
    {
        img: "Ecommerce-Web-Design/public/8.png",
        name: "Smart watches",
        discount: "-25%",
    },
    {
        img: "Ecommerce-Web-Design/public/image 34.png",
        name: "Laptops",
        discount: "-15%",
    },
    {
        img: "Ecommerce-Web-Design/public/6.png",
        name: "GoPro cameras",
        discount: "-40%",
    },
    {
        img: "Ecommerce-Web-Design/public/image 29.png",
        name: "Headphones",
        discount: "-25%",
    },
    {
        img: "Ecommerce-Web-Design/public/image 23.png",
        name: "Canon camreras",
        discount: "-25%",
    },
];

const cardsHeroThird = [
    {
        img: "Ecommerce-Web-Design/public/1.png",
        name: "Soft chairs",
        first_discrption: "From",
        second_discrption: "USD 19",
    },
    {
        img: "Ecommerce-Web-Design/public/06.png",
        name: "Sofa & chair",
        first_discrption: "From",
        second_discrption: "USD 19",
    },
    {
        img: "Ecommerce-Web-Design/public/image 93.png",
        name: "Kitchen dishes",
        first_discrption: "From",
        second_discrption: "USD 19",
    },
    {
        img: "Ecommerce-Web-Design/public/3.png",
        name: "Smart watches",
        first_discrption: "From",
        second_discrption: "USD 19",
    },
    {
        img: "Ecommerce-Web-Design/public/9.png",
        name: "Kitchen mixer",
        first_discrption: "From",
        second_discrption: "USD 100",
    },
    {
        img: "Ecommerce-Web-Design/public/08.png",
        name: "Blenders",
        first_discrption: "From",
        second_discrption: "USD 39",
    },
    {
        img: "Ecommerce-Web-Design/public/7.png",
        name: "Home appliance",
        first_discrption: "From",
        second_discrption: "USD 19",
    },
    {
        img: "Ecommerce-Web-Design/public/image 89.png",
        name: "Coffee maker",
        first_discrption: "From",
        second_discrption: "USD 10",
    },
];

const consumersHeroThird = [
    {
        img: "Ecommerce-Web-Design/public/8.png",
        name: "Smart watches",
        first_discrption: "From",
        second_discrption: "USD 19",
    },
    {
        img: "Ecommerce-Web-Design/public/6.png",
        name: "Cameras",
        first_discrption: "From",
        second_discrption: "USD 89",
    },
    {
        img: "Ecommerce-Web-Design/public/image 86.png",
        name: "Headphones",
        first_discrption: "From",
        second_discrption: "USD 10",
    },
    {
        img: "Ecommerce-Web-Design/public/image 85.png",
        name: "Smart watches",
        first_discrption: "From",
        second_discrption: "USD 90",
    },
    {
        img: "Ecommerce-Web-Design/public/image 29.png",
        name: "Gaming set",
        first_discrption: "From",
        second_discrption: "USD 35",
    },
    {
        img: "Ecommerce-Web-Design/public/image 34.png",
        name: "Laptops & PC",
        first_discrption: "From",
        second_discrption: "USD 340",
    },
    {
        img: "Ecommerce-Web-Design/public/image 32.png",
        name: "Smartphones",
        first_discrption: "From",
        second_discrption: "USD 19",
    },
    {
        img: "Ecommerce-Web-Design/public/image 33.png",
        name: "Electric kattle",
        first_discrption: "From",
        second_discrption: "USD 240",
    },
];

const Recommendeds = [
    {
        img1: "Ecommerce-Web-Design/public/cloth/Bitmap.png",
        name1: "$10.30",
        first_discrption1: "T-shirts with multiple",
        second_discrption1: "colors, for men",
    },
    {
        img1: "Ecommerce-Web-Design/public/cloth/2 1.png",
        name1: "$10.30",
        first_discrption1: "Jeans shorts for men",
        second_discrption1: "blue color",
    },
    {
        img1: "Ecommerce-Web-Design/public/cloth/image 30.png",
        name1: "$12.50",
        first_discrption1: "Brown winter coat",
        second_discrption1: "medium size",
    },
    {
        img1: "Ecommerce-Web-Design/public/cloth/image 24.png",
        name1: "$34.00",
        first_discrption1: "Jeans shorts for men",
        second_discrption1: "blue color",
    },
    {
        img1: "Ecommerce-Web-Design/public/cloth/image 26.png",
        name1: "$99.00",
        first_discrption1: "Leather wallet",
        second_discrption1: "",
    },
    {
        img1: "Ecommerce-Web-Design/public/cloth/Bitmap (2).png",
        name1: "$9.99",
        first_discrption1: "Canon camera ",
        second_discrption1: "black, 100x zoom",
    },
    {
        img1: "Ecommerce-Web-Design/public/image 86.png",
        name1: "$8.99",
        first_discrption1: "Headset for gaming",
        second_discrption1: "with mic",
    },
    {
        img1: "Ecommerce-Web-Design/public/cloth/image 26.png",
        name1: "$10.30",
        first_discrption1: "Smartwatch",
        second_discrption1: "silver color modern",
    },
    {
        img1: "Ecommerce-Web-Design/public/3.png",
        name1: "$10.30",
        first_discrption1: "Blue wallet for men",
        second_discrption1: "leather metarfial",
    },
    {
        img1: "Ecommerce-Web-Design/public/image 85.png",
        name1: "$80.95",
        first_discrption1: "Jeans bag for travel",
        second_discrption1: "for men",
    },
];

const Fasts = [
    {
        img2: 'Ecommerce-Web-Design/public/Mask group.png',
        description2: 'Source from',
        description_2: 'Industry Hubs',
        icon2: <SearchOutlined />,
    },
    {
        img2: 'Ecommerce-Web-Design/public/Mask group (1).png',
        description2: 'Customize Your',
        description_2: 'Products',
        icon2: <Archive />,
    },
    {
        img2: 'Ecommerce-Web-Design/public/image 106.png',
        description2: 'Fast, reliable shipping',
        description_2: 'by ocean or air',
        icon2: <SendOutlined />,
    },
    {
        img2: 'Ecommerce-Web-Design/public/image 107.png',
        description2: 'Product monitoring',
        description_2: 'and inspection',
        icon2: <Shield />,
    },
];

const Country =[
    {
      img:'Ecommerce-Web-Design/public/flags/AE@2x.png',
      name:'Arabic Emirates',
      product:'shopname.ae',
    },
    {
      img:'Ecommerce-Web-Design/public/flags/icon.png',
      name:'Australia',
      product:'shopname.ae',
    },
    {
      img:'Ecommerce-Web-Design/public/flags/US@2x.png',
      name:'United States',
      product:'shopname.ae',
    },
    {
      img:'Ecommerce-Web-Design/public/flags/RU@2x.png',
      name:'Russia',
      product:'shopname.ru',
    },
    {
      img:'Ecommerce-Web-Design/public/flags/IT@2x.png',
      name:'Italy',
      product:'shopname.it',
    },
    {
      img:'Ecommerce-Web-Design/public/flags/DK@2x.png',
      name:'Denmark',
      product:'denmark.com.dk',
    },
    {
      img:'Ecommerce-Web-Design/public/flags/FR@2x.png',
      name:'France',
      product:'shopname.com.fr',
    },
    {
      img:'Ecommerce-Web-Design/public/flags/AE@2x.png',
      name:'Arabic Emirates',
      product:'shopname.ae',
    },
    {
      img:'Ecommerce-Web-Design/public/flags/CN@2x.png',
      name:'China',
      product:'shopname.ae',
    },
    {
      img:'Ecommerce-Web-Design/public/flags/GB@2x.png',
      name:'Great Britain',
      product:'shopname.co.uk',
    },
];

const Home = () => {

    return (
        <main>
            <section className='hero-first'>
                <div className='left-hero-first'>
                    <Menu
                        items={items}
                    />
                </div>
                <div className="center-hero-first">
                    <div>
                        <p>Latest trending</p>
                        <p className='items'>Electronic items</p>
                    </div>
                    <Button>Learn more</Button>
                </div>
                <div className="right-hero-first">
                    <div className='top-right-hero-first'>
                        <div className='contant-top-right-hero-first'>
                            <Avatar
                                size={32}
                                icon={<UserOutlined />}
                                style={{ background: '#91B1E7' }}
                            />
                            <div>
                                <p>Hi, user</p>
                                <p>let’s get stated</p>
                            </div>
                        </div>
                        <div className='btn-top-right-hero-first'>
                            <Button type='primary'>Join now</Button>
                            <Button>Log in</Button>
                        </div>
                    </div>
                    <div className='bottom-right-hero-first'>
                        <p>Get US $10 off</p>
                        <p>with a new</p>
                        <p> supplier</p>
                    </div>
                    <div className='bottom-right-hero-first' style={{ background: '#55BDC3' }}>
                        <p>Send quotes with</p>
                        <p>supplier</p>
                        <p>preferences</p>
                    </div>
                </div>
            </section>

            <section className="hero-second">
                <Card className='left-card-hero-second'>
                    <div>
                        <p className='Deals'>Deals and offers</p>
                        <p>Hygiene equipments</p>
                    </div>
                    <div className='down-right-card-hero-second'>
                        <div className='sub-card'>
                            <p className='date'>04</p>
                            <p>Days</p>
                        </div>
                        <div className='sub-card'>
                            <p className='date'>13</p>
                            <p>Hour</p>
                        </div>
                        <div className='sub-card'>
                            <p className='date'>34</p>
                            <p>Min</p>
                        </div>
                        <div className='sub-card'>
                            <p className='date'>56</p>
                            <p>Sec</p>
                        </div>
                    </div>
                </Card>

                {cardsHeroSecond.map((card) => (<Card className='right-card-hero-second'>
                    <img src = {card.img}  />
                    <div>
                        <p>{card.name}</p>
                        <p className='per'>{card.discount}</p>
                    </div>
                </Card>))}

            </section>

            <section className="hero-third">
                <Card className='left-card-hero-third'>
                    <div>
                        <p>Home and</p>
                        <p>outdoor</p>
                    </div>
                    <Button>Source now</Button>
                </Card>

                <div className='right-card-hero-third'>
                    {cardsHeroThird.map((elem) => (<Card className='sub-card-right-card-hero-third'>
                        <p>{elem.name}</p>
                        <div className='form'>
                            <div>
                                <p>{elem.first_discrption}</p>
                                <p>{elem.second_discrption}</p>
                            </div>
                            <img src={elem.img}/>
                        </div>
                    </Card>))}

                </div>
            </section>

            <section className="hero-third">
                <Card className='left-card-hero-third' id='hero-fourth'>
                    <div>
                        <p>Consumer</p>
                        <p> electronics and</p>
                        <p>gadgets</p>
                    </div>
                    <Button>Source now</Button>
                </Card>

                <div className='right-card-hero-third'>
                    {consumersHeroThird.map((consumer) => (<Card className='sub-card-right-card-hero-third'>
                        <p>{consumer.name}</p>
                        <div className='form'>
                            <div>
                                <p>{consumer.first_discrption}</p>
                                <p>{consumer.second_discrption}</p>
                            </div>
                            <img src={consumer.img} />
                        </div>
                    </Card>))}

                </div>
            </section>

            <section className="hero-fifth">
                <div className="left-hero-fifth">
                    <div className="up-left-hero-fifth">
                        <p>An easy way to send</p>
                        <p>requests to all suppliers</p>
                    </div>
                    <div className="down-left-hero-fifth">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        <p>elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <div className="right-hero-fifth">
                    <Card
                        title='Send quote to suppliers'
                    >
                        <Form>
                            <Form.Item
                                name="item"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input placeholder='What item you need?' />
                            </Form.Item>

                            <Form.Item >
                                <TextArea rows={2} placeholder='Type more details' />
                            </Form.Item>

                            <Flex gap={'middle'}>
                                <Form.Item
                                    name="quantity"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input placeholder='Quantity' />
                                </Form.Item>
                                <Form.Item >
                                    <Select options={[{ label: 'Demo', value: 'demo' }]} placeholder='Pcs' style={{width:100}} />
                                </Form.Item>
                            </Flex>

                            <Form.Item label={null}>
                                <Button type="primary" htmlType="submit">
                                    Send inquiry
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </section>

            <section className="hero-sixth">
                <p>Recommended items</p>
                <div className="card-hero-sixth">
                    {Recommendeds.map((rec) => (
                        <Card className='sub-card-hero-sixth'>
                            <img src={rec.img1} alt="" />
                            <p className="rate">{rec.name1}</p>
                            <p>{rec.first_discrption1}</p>
                            <p>{rec.second_discrption1}</p>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="hero-seventh">
                <p>Our extra services</p>
                <div className="card-hero-seventh">
                    {Fasts.map((fast) => (<div className='sub-card-hero-seventh'>
                        <div className="img">
                            <img src={fast.img2} alt="" />
                        </div>
                        <div className='but-sub-card-hero-seventh'>
                            <div>
                                <p>{fast.description2}</p>
                                <p>{fast.description_2}</p>
                            </div>
                            <Avatar
                                size={42}
                                icon={fast.icon2}
                                style={{ background: '#91B1E7', marginTop: '-18px', border: '2px solid #FFFFFF', color: 'black' }}
                            />
                        </div>
                    </div>))}
                </div>
            </section>

            <section className="hero-eight">
                <p>Suppliers by region</p>
                <div className="card-hero-eight">
                    {Country.map((con) => (<div className="sub-card-hero-eight">
                        <img src={con.img}  />
                        <div className="right">
                            <span className='up'>{con.name}</span>
                            <span className='down'>{con.product}</span>
                        </div>
                    </div>))}
                </div>
            </section>
        </main>
    )
}

export default Home