import {notify} from 'react-notify-toast';

const ToastMessage = (message, type) =>{
    notify.show(message, type);
}


export default ToastMessage;
