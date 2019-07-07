import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Input,
  Button,
  Form,
  FormGroup,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid/v1";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemValue: "",
      items: [
        { id: uuid(), name: "Buy Eggs" },
        { id: uuid(), name: "Buy Milk" },
        { id: uuid(), name: "Buy Water" },
        { id: uuid(), name: "Buy Bread" },
      ],
    };
  }

  newItemValueHandler = event => {
    this.setState({
      newItemValue: event.target.value,
    });
  };

  addItemHandler = event => {
    event.preventDefault();
    if (this.state.newItemValue !== "") {
      let newItem = {
        id: uuid(),
        name: this.state.newItemValue,
      };
      this.setState({
        items: [...this.state.items, newItem],
        newItemValue: "",
      });
    } else {
      // console.log("please enter an item to add");
    }
  };

  deleteHandler = id => {
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id),
    }));
  };

  editHandler = (catchedID, index) => {
    // got index and id of item
    this.state.items.filter(item => {
      if (item.id === catchedID) {
        //console.log("ID found", catchedID);
        let oldName = item.name;
        //console.log("Old Name", oldName);
        let newName = "new item name";
        //this.setState({});
        //console.log(index);

        let itemCopy = this.state.items;
        itemCopy[index] = {
          id: catchedID,
          name: newName,
        };
        this.setState({
          items: itemCopy,
        });
      }
    });
  };

  render() {
    const { items } = this.state;
    return (
      <Container>
        <div className='lists-wrap text-center'>
          <div className='form-wrap'>
            <Form
              inline
              className='add-items-form'
              onSubmit={event => this.addItemHandler(event)}>
              <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                <Input
                  type='text'
                  name='newlistitem'
                  value={this.state.newItemValue}
                  onChange={this.newItemValueHandler}
                />
              </FormGroup>
              <Button color='success'>Add Item</Button>
            </Form>
          </div>
        </div>
        <div className='list-group-wrap'>
          <ListGroup>
            <TransitionGroup className='to-do-list'>
              {items.map((item, index) => (
                <CSSTransition key={item.id} timeout={500} classNames='fade'>
                  <ListGroupItem>
                    <Button
                      className='remove-btn'
                      color='danger'
                      size='sm'
                      onClick={() => this.deleteHandler(item.id)}>
                      Remove
                    </Button>
                    <Button
                      className='edit-btn'
                      color='primary'
                      size='sm'
                      onClick={() => this.editHandler(item.id, index)}>
                      Edit
                    </Button>
                    {item.name}
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
          {items.length > 0 ? "" : "To Do list is empty!"}
        </div>
      </Container>
    );
  }
}

export default ToDoList;
