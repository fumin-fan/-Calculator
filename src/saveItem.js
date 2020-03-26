import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button } from 'antd';
class SaveItem extends Component{
    render(){
        let {data, dispatch} = this.props;
        return (
            <Button 
                type="primary" 
                ghost
                onClick={
                    () => {
                        dispatch({
                            type:"KEEP_STATUS",
                            data
                        })
                    }
                }
            >
            保存到localStorage
          </Button>
        );
    }
}

export default connect(state => (state.save))(SaveItem);