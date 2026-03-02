import './grid.css'
import { Button, Card, Checkbox, Collapse, Flex, Input, Pagination, Radio, Rate, Select, Slider } from 'antd';
import { Grid2x2Icon, List, X } from 'lucide-react';
import { HeartOutlined } from '@ant-design/icons';

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

const Products = [
  { img: 'Ecommerce-Web-Design/public/image 33.png' },
  { img: 'Ecommerce-Web-Design/public/image22.png' },
  { img: 'Ecommerce-Web-Design/public/image 23.png' },
  { img: 'Ecommerce-Web-Design/public/image 32.png' },
  { img: 'Ecommerce-Web-Design/public/6.png' },
  { img: 'Ecommerce-Web-Design/public/image22.png' },
  { img: 'Ecommerce-Web-Design/public/image 34.png' },
  { img: 'Ecommerce-Web-Design/public/8.png' },
  { img: 'Ecommerce-Web-Design/public/image 33.png' },
];

const Grid = () => {
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
            <div className="center-rightside">
              <Flex gap={12}>
                <Button>Samsung <X size={13} /></Button>
                <Button>Apple <X size={13} /></Button>
                <Button>Poco <X size={13} /></Button>
                <Button>Metallic <X size={13} /></Button>
                <Button>4 Star <X size={13} /></Button>
                <Button>3 Star <X size={13} /></Button>
                <Button type='link'>Clear all filter</Button>
              </Flex>
            </div>
            <div className="down-right">
              {Products.map((pro) => (<Card className='card'>
                <div className="up-card">
                  <img src={pro.img} alt="" />
                </div>
                <div className="down-card">
                  <div className="right-down-card">
                    <p className='rate-right'>$99.50 <span>$1128.00</span></p>
                    <p className='rating-card'><Rate style={{ fontSize: 14 }} />7.5</p>
                    <p>GoPro HERO6 4K Action </p>
                    <p>Camera - Black</p>
                  </div>
                  <div className="left-down-card">
                    <Button><HeartOutlined style={{ color: '#0D6EFD' }} /></Button>
                  </div>
                </div>
              </Card>))}
            </div>
          </div>
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
      </main>
    </>
  )
}

export default Grid