import React from 'react'
import { List, Avatar } from 'antd';

function Message(props) {

     

    return (
        <List.Item style={{ listStyleType: "none", padding: '1rem'}}>
            <List.Item.Meta
                description={props.text}
            />
        </List.Item>
    )
}

export default Message