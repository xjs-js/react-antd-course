import { Card, Input } from 'antd';

export default () => {
    const [value, setValue] = React.useState(localStorage.getItem('place') || '');

    React.useEffect(() => {
        localStorage.setItem('place', value);
    }, [value]);

    const onChange = event => {
        setValue(event.target.value);
    };

    const style = {
        width: '100',
        margin: '30px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        border: '1px solid #e8e8e8',
    };
    return (
        <Card style={style} hoverable={true}>
            <Input value={value} type="text" onChange={onChange} />
            <p style={{marginTop: '10px'}}>{value}</p>
        </Card>
    );
}