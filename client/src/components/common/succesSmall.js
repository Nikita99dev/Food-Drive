import { message} from 'antd';

 export const success = ({info}) => {
  message.success(info);
};

export const error = ({info}) => {
  message.error(info);
};

// export default function succesSmall() {
//   return (
//      <Space>
//       <Button onClick={success}>Success</Button>
//      </Space>
//   )
// }
