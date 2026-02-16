import { Button, Layout, Space } from 'antd'
import { Header } from 'antd/es/layout/layout'
import "./header.css"
import Search from 'antd/es/transfer/search'
import { DownOutlined, HeartOutlined, MenuUnfoldOutlined, MessageOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'

const Headers = () => {
    return (
        <>
                <header>
                    <div className="demo-logo">
                        <img src="public\image.png" alt="" />
                        <h1>Brand</h1>
                    </div>
                    <div className="search-bar-navbar">
                    <Space.Compact size='large' style={{border: "2px solid #0D6EFD", borderRadius:"10px"}}>
                    <Search 
                    placeholder="Search" 
                    enterButton 
                    />
                    <Button>All category <DownOutlined /></Button>
                    <Button type='primary'>Search</Button>
                    </Space.Compact>
                    </div>
                    <div className="leftside-navbar">
                        <div className="card-leftside">
                        <UserOutlined/>
                        <span>profile</span>
                        </div>
                        <div className="card-leftside">
                        <MessageOutlined/>
                        <span>Message</span>
                        </div>
                        <div className="card-leftside">
                        <HeartOutlined/>
                        <span>Order</span>
                        </div>
                        <div className="card-leftside">
                        <ShoppingCartOutlined/>
                        <span>My Card</span>
                        </div>
                    </div>
                </header>
                <nav>
                    <div className="right-nav">
                        <p><MenuUnfoldOutlined /> All category</p>
                        <p>Hot offers</p>
                        <p>Gift boxes</p>
                        <p>Projects</p>
                        <p>Menu item</p>
                        <p>Help <DownOutlined /></p>
                    </div>
                    <div className="left-nav">
                        <p>English, USD <DownOutlined /></p>
                        <p>Ship to <DownOutlined /></p>
                    </div>
                </nav>
        </>
    )
}

export default Headers