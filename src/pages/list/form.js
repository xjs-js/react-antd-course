import React, { Component } from 'react';
import { Table, Modal, Button, Form, Input } from 'antd';
import { connect } from 'dva';

export default class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    handleClick = () => {
        this.setState({
            visible: true,
        })
    }

    render() {
        return (
            <div>
                <Table />

                <Button onClick={this.handleClick}>新建</Button>
                <Modal 
                    title="新建记录"
                    visible={this.state.visible}
                >
                    ...
                </Modal>
            </div>
        );
    }
};