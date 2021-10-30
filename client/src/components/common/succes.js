import 'antd/dist/antd.css';
// import './index.css';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import {
  Link
} from "react-router-dom";


export default function SubmitSeccus(){

return(
  <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary"><Link  to="/login">Next</Link></Button>}
  />
 )
}

