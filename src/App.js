import React from 'react';
import './App.css';
import { Button, Row, Col, Container, Form } from 'react-bootstrap';

class App extends React.Component {
  state = {
    Items: ["a", "b", "c", "d"],
    selected: [],
    display: [],
    show: false,
  }
  handleSelect = (e) => {
    const { selected } = this.state;
    let objected = Object.values(e.target.options);
    for (let i = 0; i < objected.length; i++) {
      if (objected[i].selected) {
        selected.push(objected[i].value);
      }
    }
    this.setState({
      selected: selected
    })
  }
  handleAdd = () => {
    const { display, selected, Items } = this.state;
    let a = display.concat(selected);
    let b = Items.filter((val) => {
      if (!selected.includes(val)) {
        return val
      }
    })
    this.setState({
      Items: b,
      display: a,
      selected: [],
      show: true
    })
  }
  handleSelectDisplay = (e) => {
    const { selected } = this.state;
    let objected = Object.values(e.target.options);
    console.log(objected)
    for (let i = 0; i < objected.length; i++) {
      if (objected[i].selected) {
        selected.push(objected[i].value);
      }
    }
    this.setState({
      selected: selected
    })
  }
  handleRemove = () => {
    const { display, selected, Items } = this.state;
    let a = Items.concat(selected);
    let b = display.filter((val) => !selected.includes(val));
    this.setState({
      Items: a,
      display: b,
      selected: [],
      show: true
    })
  }
  render() {
    const { display, show, Items } = this.state;
    return (<Container>
      <div className="demo">
        <Form.Group>
          <Row>
            <Col md={4}>
              <select className="selectpicker form-control" data-style="btn-default" onChange={this.handleSelect} multiple  >
                {Items.map((item) => { return (<option value={item}>{item}</option>) })}
              </select>
            </Col>
            <Col md={2} >
              <Row><Button variant="light" type="submit" onClick={this.handleAdd}>></Button></Row>
              <Row><Button variant="light" onClick={this.handleRemove}>{"<"}</Button></Row>
            </Col>
            <Col md={4}>
              <select className="selectpicker form-control" data-style="btn-default" onChange={this.handleSelectDisplay} multiple>
                {show ? display.map((item) => { return (<option value={item} >{item}</option>) }) : ''}
              </select>
            </Col>
            <Col md={2} >
              <Row><Button variant="light" type="submit" >up</Button></Row>
              <Row><Button variant="light" >down</Button></Row>
            </Col>
          </Row>

        </Form.Group>
      </div>
    </Container>
    )
  }
}

export default App;
