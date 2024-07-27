
import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
  

  return (
    <div style = {{height: '100vh'}}>
      <PrettyChatWindow
      projectId='5c079c2f-87bd-4f12-bb1e-327651d3973f'
      username={props.user.username}
      secret={props.user.secret}
      style={{height: '100%'}}/>
    </div>
  );
};

export default ChatsPage;
