import { Globe, Heart, ShieldEllipsis } from 'lucide-react';
import Banner from '../../Component/Banner/banner';
import './detail.css'
import { Button, Card, Col, Descriptions, Flex, Image, Rate, Row, Tabs } from 'antd'
import { useState } from 'react';

const data = [
  { label: 'Model', value: '#8786867' },
  { label: 'Style', value: 'Classic style' },
  { label: 'Certificate', value: 'ISO-898921212' },
  { label: 'Size', value: '34mm x 450mm x 19mm' },
  { label: 'Memory', value: '36GB RAM' },
];

const items = [
  {
    key: "1",
    label: "Description",
    children: (<div className='discription'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sapiente dolorem reiciendis incidunt officiis reprehenderit. Cum, molestiae. Sequi deleniti, quisquam sapiente quae voluptatibus itaque assumenda repellendus expedita totam iure tempora eligendi velit. Distinctio in voluptate vero placeat dolore, quod quo minima corrupti culpa perferendis porro, odit, corporis nemo blanditiis eius quia qui? Animi officia ad placeat sequi labore deleniti dignissimos possimus nostrum expedita fugiat quia non eius unde delectus voluptatem facilis vel ipsam alias, voluptatibus, nihil corrupti. Neque cumque quasi incidunt temporibus quisquam ut eos veritatis! Dolores voluptatem ipsam in molestiae aut dolor quam aliquam fugit, eaque, architecto, voluptas dolorum!</p>
      <div style={{ maxWidth: '600px' }}>
        <Descriptions
          bordered
          column={1}
          size="small"
          labelStyle={{ backgroundColor: '#f7f8f9', width: '150px' }}
        >
          {data.map((item, index) => (
            <Descriptions.Item key={index} label={item.label}>
              {item.value}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </div>
      <div className='some'>
        <p>✔️ Some great feature name here</p>
        <p>✔️ Lorem ipsum dolor sit amet, consectetur </p>
        <p>✔️ Duis aute irure dolor in reprehenderit </p>
        <p>✔️ High-performance processing power</p>
      </div>
    </div>),
  },
  {
    key: "2",
    label: "Reviews",
    children: (<div className='discription'>
      <p>The product description section provides complete details about the item including its features, material quality, size information, and usage instructions so customers clearly understand what they are purchasing. In the reviews section, buyers can read honest feedback and ratings shared by previous customers which helps in making a confident decision. The shipping tab explains delivery time, courier service, tracking availability, and possible shipping charges depending on location. Finally, the about seller area introduces the store, its reliability, response rate, and customer service behavior so the customer feels safe before placing the order. Together, these sections guide the user step-by-step and improve trust, clarity, and overall shopping experience.</p>
      <div style={{ maxWidth: '600px' }}>
        <Descriptions
          bordered
          column={1}
          size="small"
          labelStyle={{ backgroundColor: '#f7f8f9', width: '150px' }}
        >
          {data.map((item, index) => (
            <Descriptions.Item key={index} label={item.label}>
              {item.value}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </div>
      <div className='some'>
        <p>✔️ High-performance processing power</p>
        <p>✔️ Advanced security and data encryption </p>
        <p>✔️ Duis aute irure dolor in reprehenderit </p>
        <p>✔️ Seamless integration with existing tools </p>
      </div>
    </div>),
  },
  {
    key: "3",
    label: "Shipping",
    children: (<div className='discription'>
      <p>The specifications section provides detailed technical information about the product such as dimensions, weight, color options, material type, warranty period, and compatibility details so customers can compare it with other sub-products easily. The return policy tab clearly explains the conditions under which a product can be returned or exchanged, including the number of days allowed and refund processing time. The FAQs section answers common customer questions regarding usage, maintenance, payment methods, and order tracking to save time and avoid confusion. The related sub-products tab suggests similar or complementary items that customers may also like, helping them explore more options. The customer support section provides contact details, live chat options, and response timings to ensure buyers can quickly get assistance whenever needed.</p>
      <div style={{ maxWidth: '600px' }}>
        <Descriptions
          bordered
          column={1}
          size="small"
          labelStyle={{ backgroundColor: '#f7f8f9', width: '150px' }}
        >
          {data.map((item, index) => (
            <Descriptions.Item key={index} label={item.label}>
              {item.value}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </div>
      <div className='some'>
        <p>✔️ Reliable 24/7 customer support</p>
        <p>✔️ User-friendly interface and design</p>
        <p>✔️ Real-time data synchronization</p>
        <p>✔️ Customizable dashboard and reporting</p>
      </div>
    </div>),
  },
  {
    key: "4",
    label: "About seller",
    children: (<div className='discription'>
      <p>The payment information section explains all available payment methods including cash on delivery, debit or credit card, and online transfer options so customers can choose the most convenient method. The warranty and guarantee tab provides clarity about product coverage, repair services, and replacement terms in case of any manufacturing defect. The order tracking section allows customers to monitor their package status in real time after purchase, giving them confidence and transparency. The offers and discounts tab highlights special promotions, bundle deals, and seasonal sales that help buyers save money. Lastly, the customer feedback area encourages users to share their experience, helping future customers make informed decisions while also improving the seller’s service quality.</p>
      <div style={{ maxWidth: '600px' }}>
        <Descriptions
          bordered
          column={1}
          size="small"
          labelStyle={{ backgroundColor: '#f7f8f9', width: '150px' }}
        >
          {data.map((item, index) => (
            <Descriptions.Item key={index} label={item.label}>
              {item.value}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </div>
      <div className='some'>
        <p>✔️ Customizable dashboard and reporting</p>
        <p>✔️ Scalable infrastructure for growing teams</p>
        <p>✔️ Eco-friendly and sustainable materials</p>
        <p>✔️ Multi-language support for global reach</p>
      </div>
    </div>),
  },
];

const Mens = [
  {
    img: "Ecommerce-Web-Design/public/cloth/image 30.png",
    para: "Men Blazers Sets  Elegant Formal"
  },
  {
    img: "Ecommerce-Web-Design/public/cloth/Bitmap.png",
    para: "Men Shirt Sleeve Polo Contrast"
  },
  {
    img: "Ecommerce-Web-Design/public/cloth/2 1.png",
    para: "Apple Watch Series Space Gray"
  },
  {
    img: "Ecommerce-Web-Design/public/cloth/image 25.png",
    para: "Basketball Crew Socks Long Stuff"
  },
  {
    img: "Ecommerce-Web-Design/public/cloth/image 26.png",
    para: "New Summer Men's  castrol T-Shirts"
  },
];

const Related = [
  {
    img: "Ecommerce-Web-Design/public/cloth/image 24.png",
  },
  {
    img: "Ecommerce-Web-Design/public/8.png",
  },
  {
    img: "Ecommerce-Web-Design/public/image 86.png",
  },
  {
    img: "Ecommerce-Web-Design/public/cloth/Bitmap (2).png",
  },
  {
    img: "Ecommerce-Web-Design/public/image 85.png",
  },
  {
    img: "Ecommerce-Web-Design/public/7.png",
  },
];

const Detail = () => {
  const images = [
    "Ecommerce-Web-Design/public/cloth/image 001.jpg",
    "Ecommerce-Web-Design/public/cloth/image 002.jpg",
    "Ecommerce-Web-Design/public/cloth/image 003.jpg",
    "Ecommerce-Web-Design/public/cloth/image 004.jpg",
    "Ecommerce-Web-Design/public/cloth/image 005.jpg",
    "Ecommerce-Web-Design/public/cloth/image 006.jpg",
  ];
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <main>
      <section className='first-section-detail'>
        <div className="sub-container1">

            <Flex vertical gap={15}>
            <Card>
              <Image
                src={mainImage}
                width="100%"
                height={320}
                style={{ marginBottom: 15 }}
                preview={false}
              />
            </Card>

            <Row gutter={10} justify="center">
              {images.map((img, index) => (
                <Col key={index}>
                  <Image
                    src={img}
                    width={50}
                    height={50}
                    preview={false}
                    onClick={() => setMainImage(img)}
                    style={{
                      cursor: "pointer",
                      border:
                        mainImage === img
                          ? "2px solid #1677ff"
                          : "1px solid #ddd",
                      padding: 2,
                      borderRadius: 5,
                    }}
                  />
                </Col>
              ))}
            </Row>
            </Flex>

        </div>
        <div className="sub-container2">
          <Button type='link' style={{ color: '#00B517' }}>✔️ In stock</Button>
          <p className='Mens'>Mens Long Sleeve T-shirt Cotton Base <br /> Layer Slim Muscle</p>
          <div className='sold'>
            <span style={{ color: '#FF9017' }}><Rate style={{ fontSize: 12 }} />9.3</span>
            <span>32 reviews</span>
            <span>154 sold</span>
          </div>
          <Card style={{backgroundColor:'#FFF0DF'}}>
          <Flex justify='space-between'>
            <div className='Classic'>
              <p className='shoes'>$98.00</p>
              <p>50-100 pcs</p>
            </div>
            <div className='Classic' style={{borderLeft:'1px solid #BDC1C8', padding: '0 20px'}}>
              <p className='shoes'>$90.00</p>
              <p>100-700 pcs</p>
            </div>
            <div className='Classic' style={{borderLeft:'1px solid #BDC1C8', padding: '0 20px'}}>
              <p className='shoes'>$78.00</p>
              <p>700+ pcs</p>
            </div>
          </Flex>
          </Card>
          <div className="Price">
            <p className='Neg'>Price: </p>
            <p className='Negotiable'>Negotiable</p>
          </div>
          <div className="Type">
            <div className="Plastic">
              <p className='Mat'>Type: </p>
              <p className='Material'>Classic  shoes</p>
            </div>
            <div className="Plastic">
              <p className='Mat'>Material: </p>
              <p className='Material'>Plastic material</p>
            </div>
            <div className="Plastic">
              <p className='Mat'>Design: </p>
              <p className='Material'>Modern nice</p>
            </div>
          </div>
          <div className="Type">
            <div className="Plastic">
              <p className='Mat'>Customization: </p>
              <p className='Material'>Customized logo and <br /> design custom packages</p>
            </div>
            <div className="Plastic">
              <p className='Mat'>Protection: </p>
              <p className='Material'>Refund Policy</p>
            </div>
            <div className="Plastic">
              <p className='Mat'>Warranty: </p>
              <p className='Material'>2 years full warranty </p>
            </div>
          </div>
        </div>
        <div className="sub-container3">
          <Card>
            <div className="right-sub-container3">
              <p className='Supplier'>R</p>
              <p>Supplier <br /> Guanjoi Trading LLC</p>
            </div>
            <hr />
            <div className='Berlin'>
              <p><img src="Ecommerce-Web-Design/public/flags/DE@2x.png" alt="" />Germany, Berlin</p>
              <p><ShieldEllipsis /> Verified Seller</p>
              <p><Globe /> Worldwide shipping</p>
            </div>
            <div className='Berli'>
              <Button type='primary'>Send inquiry</Button>
              <Button style={{ color: '#0D6EFD' }}>Seller’s profile</Button>
            </div>
          </Card>
          <Button type='link'><Heart />Save for later</Button>
        </div>
      </section>
      <section className='second-section-detail'>
        <Card className='left-second-section-detail'>
          <Tabs
            defaultActiveKey="1"
            items={items}
            type="line"
          />
        </Card>
        <div className='right-second-section-detail'>
          <p className='you'>You may like</p>
          <div></div>
          {Mens.map((men) => (<Card className='men'>
            <Flex gap={12} align='center'>
              <div className="men-img">
                <img src={men.img} alt="" />
              </div>
              <div>
                <p>{men.para}</p>
                <p className='Blazers'>$7.00 - $99.50</p>
              </div>
            </Flex>
          </Card>))}
        </div>
      </section>
      <section className="third-section-detail">
        <Card>
          <div className="related-product">
            <p className="Related">Related products</p>
            <div className='products'>
              {Related.map((rel) => (<div className="sub-products">
                <img src={rel.img} alt="" />
                <div>
                  <p>Xiaomi Redmi 8 <br /> Original </p>
                  <p className='Xiaomi'>$32.00-$40.00</p>
                </div>
              </div>))}
            </div>
          </div>
        </Card>
      </section>
      <section>
        <Banner />
      </section>
    </main>
  )
}

export default Detail