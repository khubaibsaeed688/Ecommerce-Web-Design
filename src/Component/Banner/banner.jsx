import { Button, Card, Flex } from 'antd'
import './banner.css'

const Banner = () => {
    return (
        <>
            <Card className='banner'>
                <Flex justify='space-between'>
                    <div style={{ color: '#FFFFFF' }}>
                        <p style={{ fontWeight: '600' }}>Super discount on more than 100 USD</p>
                        <p>Have you ever finally just write dummy info</p>
                    </div>
                    <Button style={{ background: '#FF9017', color: 'white' }}>Shop now</Button>
                </Flex>
            </Card>
        </>
    )
}

export default Banner