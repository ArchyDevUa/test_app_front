import { Avatar } from "antd";
import avatarImage from '../../img/Avatar.png';

const StyledAvatar = () =>{
    return(
        <Avatar
            src={avatarImage}
            style={{width: "64px",
            height: "64px",
            marginTop: "12px",
            marginLeft: "15px"}}
          />)}

export default StyledAvatar;