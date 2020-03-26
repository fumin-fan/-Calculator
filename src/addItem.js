import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

class AddItem extends Component{
    render(){
        let {dispatch} = this.props;
        return (
          <div>
                <Button 
                    type="primary" 
                    shape="round" 
                    size='small'
                    className='addNumber'
                    onClick={
                        ()=>{
                            dispatch({
                                type:'ADD_ALL_NUMBER'
                            })
                        }
                    }
                >
                    +
                </Button>
                <Button
                    type="primary"
                    size='small'
                    icon={<PoweroffOutlined />}
                    onClick={
                        ()=>{
                            dispatch({
                                type:'ADD_iTEM',
                                data:{
                                    id:Math.random(),
                                    number:0,
                                }
                            })
                        }
                    }
                >
                    增加
                </Button>
        </div>
        );
    }
}

export default connect(state =>(state.deletes))(AddItem);