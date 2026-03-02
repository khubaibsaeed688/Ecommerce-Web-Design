import { Button, Input } from "antd"
import "./footer.css"
import { AppleOutlined, FacebookOutlined, InstagramFilled, InstagramOutlined, LinkedinOutlined, MailOutlined, TwitterOutlined } from "@ant-design/icons"
import { Play } from "lucide-react"

const apps = [
  {
    icon : <AppleOutlined/>,
    discription : "Download on the",
    name : "App Store",
  },
  {
    icon : <Play />,
    discription : "GET IT ON",
    name : "Google Play",
  },
]

const abouts = [
  {
    first : "About",
    second : "About Us",
    third : "Find store",
    fourth : "Categories",
    fifth : "Blogs",
  },
  {
    first : "AboPartnership",
    second : "About Us",
    third : "Find store",
    fourth : "Categories",
    fifth : "Blogsut",
  },
  {
    first : "Information",
    second : "Help Center",
    third : "Money Refund",
    fourth : "Shipping",
    fifth : "Contact us",
  },
  {
    first : "For users",
    second : "Login",
    third : "Register",
    fourth : "Settings",
    fifth : "My Orders",
  },
]

const Footer = () => {
  return (
    <>
      <footer>
        <div className="first-footer">
          <div className="card-first-footer">
            <p className="newsletter">Subscribe on our newsletter</p>
            <p className="Get">Get daily news on upcoming offers from many suppliers all over the world</p>
          </div>
          <div className="lastcard-first-footer">
            <Input prefix={<MailOutlined />} placeholder="Email" />
            <Button type="primary">Subscribe</Button>
          </div>
        </div>
      </footer>
      <div className="second-footer">
        <div className="top-second-footer">
          <div className="first-top-second-footer">
            <div className="demo-footer">
              <img src="Ecommerce-Web-Design/public/image.png" alt="" />
              <p>Brand</p>
            </div>
            <p>Best information about the company gies here but now lorem ipsum is</p>
            <div className="social-logo">
              <span><FacebookOutlined /></span>
              <span><TwitterOutlined /></span>
              <span><LinkedinOutlined /></span>
              <span><InstagramOutlined /></span>
            </div>
          </div>
          <div className="second-top-second-footer">
            {abouts.map((about) => (<div>
              <p className="heading">{about.first}</p>
              <p>{about.second}</p>
              <p>{about.third}</p>
              <p>{about.fourth}</p>
              <p>{about.fifth}</p>
            </div>))}
          </div>
          <div className="third-top-second-footer">
            <p>Get app</p>
            {apps.map((app) => (
              <div className="app-store">
              <>{app.icon} </>
              <div>
                <p className="download">{app.discription}</p>
                <p>{app.name}</p>
              </div>
            </div>))}
          </div>
        </div>
        <div className="buttom-second-footer">
          <p>© 2023 Ecommerce. </p>
          <p><img src="Ecommerce-Web-Design/public/flags\US@2x.png" alt="" />English</p>
        </div>
      </div>
    </>
  )
}

export default Footer