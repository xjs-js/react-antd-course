import { Card } from 'antd';
import myStyles from './hello.css'
export default () => {

    return (
        <Card>
            <div className={myStyles.hello}>Hello, world!</div>
        </Card>
    );
}