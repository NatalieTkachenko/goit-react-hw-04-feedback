import PropTypes from 'prop-types';
import {Message} from './NotificationMessage.styled.js'


export default function NotificationMessage( { message = "There is no feedback at the moment 🧐" } )
{
    return ( <Message>{ message }</Message> );
}

NotificationMessage.propTypes = {
message: PropTypes.string,
}