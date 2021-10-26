import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function Warning() {
  return (
  <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Button type="primary" ><Link to='/signup'>
        Try Again
        </Link>
      </Button>
    }
  />
  )
}
