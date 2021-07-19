import Image from "next/image";

import * as S from "./styles";

export type ProfileProps = {
  profileImg: string;
  name: string;
  state: string;
  city: string;
};

function Profile({ profileImg, name, state, city }: ProfileProps) {
  return (
    <S.Wrapper>
      <Image
        src={profileImg}
        width={40}
        height={40}
        alt={name}
        className="profile-image"
      />
      <S.Info>
        <S.ProfileName>{name}</S.ProfileName>
        <S.ProfileInfo>
          {state} • {city}
        </S.ProfileInfo>
      </S.Info>
    </S.Wrapper>
  );
}

export default Profile;
