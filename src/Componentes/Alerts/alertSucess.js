import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function alertSucess(message) {

    toast.success(message, { autoClose: 1000 });

}