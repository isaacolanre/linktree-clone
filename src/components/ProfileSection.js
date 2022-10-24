import avatar from "../assets/isaac_pic.jpeg";
import { Avatar, NameTitle, ProfileSectionStyle } from "./ProfileSectionStyle";
const ProfileSection = () => {
  return (
    <ProfileSectionStyle>
      <Avatar>
        <img src={avatar} id="mainImg" alt="Logo" />
      </Avatar>
      <NameTitle>Isaac Olanrewaju</NameTitle>
    </ProfileSectionStyle>
  );
};

export default ProfileSection;
