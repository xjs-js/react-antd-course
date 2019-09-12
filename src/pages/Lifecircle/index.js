import { Card } from 'antd';
import React, { Component } from "react";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("called constructor");
        this.state = {
            'name': 'xjs',
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("called getDerivedStateFromProps");
        console.log("[getDerivedStateFromProps][props]", nextProps);
        console.log("[getDerivedStateFromProps][states]", prevState);
    }

    componentDidMount() {
        console.log('called componentDidMount');
    }

    render() {
        console.log('called render()');
        return (
            <Card hoverable={true}>
                <p>Hello, world!</p>
            </Card>
        ); 
    }
};