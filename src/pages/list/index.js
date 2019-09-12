import React, { Component } from 'react';
import { Table, Modal, Button, Form, Input, Card, Row } from 'antd';
import { connect } from 'dva';
import { SampleChart } from '../SampleChart';

const mapStateToProps = state => {
    console.log('mapStateToProps', state['cards'].cardList);
    console.log('statistic', state['cards'].statistic);
    return ({
        cardList: state['cards'].cardList,
        statistic: state['cards'].statistic,
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        onDidMount: () => {
            console.log('ondidmonut');
            const action = {
                type: 'cards/queryList',
            };
            dispatch(action);
        }
    });
};

@connect(mapStateToProps, mapDispatchToProps)
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            statisticCisible: false,
            id: null,
        }
        this.columns = [
            {
                title: '名称',
                dataIndex: 'name',
            },
            {
                title: '描述',
                dataIndex: 'desc',
            },
            {
                title: '链接',
                dataIndex: 'url',
                render: value => <a href={value}>{value}</a>,
            },
            {
                title: '',
                dataIndex: '_',
                render: (_, { id }) => {
                  return (
                    <Button onClick={() => { this.showStatistic(id); }}>图表</Button>
                  );
                },
            },
        ];
    }

    showStatistic = (id) => {
        console.log('id', id);
        console.log('dispatch-show', this.props.dispatch);
        this.props.dispatch({
          type: 'cards/getStatistic',
          payload: id,
        });
        // 更新 state，弹出包含图表的对话框
        this.setState({ id, statisticVisible: true });
      };

    handleClick = () => {
        this.setState({
            visible: true,
        })
    }

    componentDidMount() {
        this.props.onDidMount();
     }

     handleModalCancel = () => {
         this.setState({
            visible: false,
         });
     }

    handleModalOk = () => {
        console.log('handle.ok');
        const { dispatch, form: { validateFields } } = this.props;
        validateFields((err, values) => {
            if (!err) {
              dispatch({
                type: 'cards/addOne',
                payload: values,
              });
              // 重置 `visible` 属性为 false 以关闭对话框
              this.setState({ visible: false });
            }
          });
    }

    render() {
        const { form: { getFieldDecorator }, statisticVisible, id } = this.props;
        const { statistic } = this.props;
        console.log('render', this.props.statistic);
        console.log('statistic[0]', statistic[0]);
        return (
            <div>
                <Card>
                    <Table columns={this.columns} dataSource={this.props.cardList} rowKey="id" />
                    <Button onClick={this.handleClick}>新建</Button>
                    <Modal 
                        title="新建记录"
                        visible={this.state.visible}
                        onCancel={this.handleModalCancel}
                        onOk={this.handleModalOk}
                    >
                        <Form>
                                <Form.Item label="名称">
                                    {getFieldDecorator('name', {rules: [{required: true }]})(<Input />)}
                                </Form.Item>
                                <Form.Item label="描述">
                                    {getFieldDecorator('desc', {rules: []})(<Input />)}
                                </Form.Item>
                                <Form.Item label="链接">
                                    {getFieldDecorator('url', {rules: [{type: 'url'}]})(<Input />)}
                                </Form.Item>
                        </Form>
                    </Modal>
                    <Modal visible={statisticVisible} footer={null} onCancel={this.handleStatisticCancel}>
                        <SampleChart data={statistic[0]} />
                    </Modal>
                </Card>         
            </div>
        );
    }
};

export default connect(mapStateToProps)(Form.create()(List));