import React from 'react';
import {Icon} from 'semantic-ui-react';

export default function IconDisplay(props) {
  const dataValue = props.dataValue;
    switch (dataValue) {
    case 'Raised':
            return <Icon name='blue circle outline' size='large'/>
    case 'Completed':
            return <Icon name='green circle' size='large'/>
    case 'Raised and Assigned':
            return <Icon name='blue circle'size='large'/>
    case 'On Hold':
           return <Icon name='red circle'size='large'/>
    case 'In Progress':
           return <Icon name='orange circle'size='large'/>
    case 'Low':
           return <Icon name='angle down'size='large'/>
    case 'High':
            return <Icon name='red angle double up'size='large'/>
    case 'Normal':
            return <Icon name='blue angle up'size='large'/>
    case 'Safety':
           return <Icon name='orange exclamation triangle'size='large'/>
               
             
        
}
}
