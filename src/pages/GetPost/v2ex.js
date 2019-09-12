import React, { Component } from "react";
import { Card, Button, Form, Input, Row, Col } from "antd";
import { connect } from "dva";

const namespace = "puzzlecards";

const mapStateToProps = state => {
  const cardList = state[namespace].data;
  return {
    cardList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDidMount: () => {
      const action = {
        type: `${namespace}/queryInitCards`,
        payload: "hello"
      };
      dispatch(action);
    },
    onButtonClick: (event) => {
      event.preventDefault();
      console.log('called onButtonClick')
      const action = {
        type: `${namespace}/buttonPost`,
        payload: ""
      };
      dispatch(action);
    }
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class PuzzleCardPage extends Component {
  constructor(props) {
    super(props);
    console.log("----------constructor--------------");
  }

  componentDidMount() {
    console.log("onDidMount");
  }


  render() {
    return (
      <div>
        {/* 帖子展示区域 */}
        {this.props.cardList.map(card => {
          console.log("card", card);
          return (
            <Card key={card.id} style={{ marginTop: 10 }} hoverable={true}>
              <div>Q: {card.title} </div>
              <div>
                <strong>A: {card.content}</strong>
              </div>
            </Card>
          );
        })}
        {/* 添加区域 */}
        <div style={{ marginTop: "10px" }}>
          <Form layout="inline" onSubmit={this.props.onButtonClick}>
            
            <Form.Item>
              <Input placeholder="id" />
            </Form.Item>
            
            <Form.Item>
              <Button type="primary" htmlType="submit">Add</Button>
            </Form.Item>
         
          </Form>
        </div>

        <hr style={{ marginTop: "10px" }}></hr>
      </div>
    );
  }
}
