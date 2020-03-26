import React, {Component} from 'react';
import AddItem from './addItem';
import SaveItem from './saveItem';
import DeleteItem from './deleteItem';
import {connect} from 'react-redux';
import './style.css';
class App extends Component {
  render(){
    return (
      <div className="wrap">
          <AddItem/>
          {
           this.props.total.map(item =>{
              return <DeleteItem 
                  num={item.number}
                  id={item.id}
                  key={item.id}
              />;
            })
          }
          <SaveItem 
            data={this.props.total}
          />
      </div>
    );
  }
}

export default connect(state =>state.deletes)(App);
