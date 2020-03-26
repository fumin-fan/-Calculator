import React, {Component} from 'react';
import { Button } from 'antd';
import {connect} from 'react-redux';

class DeleteItem extends Component{
    render(){
        let {id, num, dispatch} = this.props;
        return (
           <div>
                <Button 
                    type="primary"
                    size='small'
                >
                    {num}
                </Button>
                <Button 
                        type="primary" 
                        shape="round" 
                        size='small'
                        className='addNumber'
                        onClick={
                            ()=>{
                                dispatch({
                                    type:'ADD_NUMBER',
                                    id
                                });
                            }
                        }
                    >
                        +
                </Button>
                <Button 
                        type="primary" 
                        size='small'
                        danger
                        onClick={
                            ()=>{
                                dispatch({
                                    type:'DELETE_iTEM',
                                    id
                                });
                
                            }
                        }
                    >
                        删除
                </Button>
           </div>
        );
    }
}

export default connect(state =>(state.deletes))(DeleteItem);