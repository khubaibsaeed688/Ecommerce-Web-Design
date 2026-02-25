import { Button, Card, Checkbox, Collapse, Flex, Input, Pagination, Radio, Rate, Select, Slider } from 'antd'
import './category.css'
import { Grid2x2Icon, Key, List } from 'lucide-react'
import { HeartOutlined } from '@ant-design/icons'

const Categorys = [
    {
        img: 'public/image 33.png',
        name: 'Canon Cmera EOS 2000, Black 10x zoom'
    },
    {
        img: 'public/image 23.png',
        name: 'GoPro HERO6 4K Action Camera - Black'
    },
    {
        img: 'public/image 32.png',
        name: 'GoPro HERO6 4K Action Camera - Black'
    },
    {
        img: 'public/image 34.png',
        name: 'GoPro HERO6 4K Action Camera - Black'
    },
    {
        img: 'public/8.png',
        name: 'GoPro HERO6 4K Action Camera - Black'
    },
    {
        img: 'public/image 86.png',
        name: 'GoPro HERO6 4K Action Camera - Black'
    },
];

const items = [
    {
        key: '1',
        label: (<p className='product'>Category</p>),
        children: (
            <div id='container-item'>
                <p>Mobile accessory</p>
                <p>Electronics</p>
                <p>Smartphones </p>
                <p>Modern tech</p>
                <button id='btn-see-all'>See all</button>
            </div>
        ),
    },
    {
        key: '2',
        label: (<p className='product'>Brands</p>),
        children: (
            <div id='container-item'>
                <p><Checkbox /> Samsung</p>
                <p><Checkbox /> Apple</p>
                <p><Checkbox /> Huawei </p>
                <p><Checkbox /> Pocco</p>
                <p><Checkbox /> Lenovo</p>
                <button id='btn-see-all'>See all</button>
            </div>
        ),
    },
    {
        key: '3',
        label: (<p className='product'>Features</p>),
        children: (
            <div id='container-item'>
                <p><Checkbox /> Metallic</p>
                <p><Checkbox /> Plastic cover</p>
                <p><Checkbox /> 8GB Ram </p>
                <p><Checkbox /> Super power</p>
                <p><Checkbox /> Large Memory</p>
                <button id='btn-see-all'>See all</button>
            </div>
        ),
    },
    {
        key: '4',
        label: (<p className='product'>Price range</p>),
        children: (
            <div id='container-item'>
                <p><Slider range defaultValue={[20, 50]} /></p>
                <Flex gap={4}>
                    <div>
                        <p>Mn</p>
                        <Input placeholder='0' />
                    </div>
                    <div>
                        <p>Max</p>
                        <Input placeholder='999999' />
                    </div>
                </Flex>
                <Button>Apply</Button>
            </div>
        ),
    },
    {
        key: '5',
        label: (<p className='product'>Condition</p>),
        children: (
            <div id='container-item'>
                <p><Radio /> Any</p>
                <p><Radio /> Refurbished</p>
                <p><Radio /> Brand new </p>
                <p><Radio /> Old items</p>
            </div>
        ),
    },
    {
        key: '6',
        label: (<p className='product'>Ratings</p>),
        children: (
            <div id='container-item'>
                <p><Checkbox /> <Rate /></p>
                <p><Checkbox /> <Rate /></p>
                <p><Checkbox /> <Rate /></p>
                <p><Checkbox /> <Rate /></p>
            </div>
        ),
    },
];

const Category = () => {
    return (
        <>
            <main>
                <div className='main-hero'>
                    <div className="leftside">
                        <Collapse items={items} />
                    </div>
                    <div className="rightside">
                        <div className="up-rightside">
                            <p>12,911 items in <span>Mobile accessory</span></p>
                            <div className="left-up-rightside">
                                <p><Checkbox />  Verified only</p>
                                <Select placeholder='Featured' style={{ width: 120, }} options={[
                                    { value: 'men', label: 'Men' },
                                    { value: 'women', label: 'Women' },
                                    { value: 'kids', label: 'Kids' },
                                ]} />
                                <Button.Group>
                                    <Button><Grid2x2Icon size={16} strokeWidth={3} /></Button>
                                    <Button><List size={16} strokeWidth={3} /></Button>
                                </Button.Group>
                            </div>
                        </div>
                        <div className="down-rightside">
                            {Categorys.map((cat) => (<Card className='card-down-rightside'>
                                <Flex justify='space-between'>
                                    <img src={cat.img} alt="" />
                                    <div className="contant-card--down-rightside">
                                        <p id='up-up-contant'>{cat.name}</p>
                                        <div>
                                            <p id='up-contant'>$998.00 <span>$1128.00</span></p>
                                            <p id='center-contant'><Rate /><span id='span-center'>7.5</span> ● 154 orders ● <Button type='link' style={{ color: '#00B517' }}>Free Shipping</Button></p>
                                            <div id='down-contant'>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                                                <p>tempor incididunt ut labore et dolore magna aliqua</p>
                                                <Button type='link'>View details</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <Button><HeartOutlined style={{ color: '#0D6EFD' }} /></Button>
                                </Flex>
                            </Card>))}
                        </div>
                        <Flex justify='end'>
                            <Select
                                defaultValue="Show 1"
                                style={{ width: 120 }}
                                options={[
                                    { value: 'Show 1', label: 'Show 1' },
                                    { value: 'Show 2', label: 'Show 2' },
                                    { value: 'Show 3', label: 'Show 3' },
                                    { value: 'Show 4', label: 'Show 4', disabled: true },
                                ]}
                            />
                            <Pagination defaultCurrent={1} total={50} />
                        </Flex>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Category