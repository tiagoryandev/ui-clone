import React from "react";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from "./styles";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Tiago Ryan</h1>
        <h2>@tiagoryandev</h2>

        <p>BackEnd Developer at <a href="#">BusqueDevs</a></p>

        <ul>
          <li><LocationIcon /> Pará, Brasil</li>
          <li><CakeIcon /> Nascido(a) em 21 de junho de 2001</li>
        </ul>

        <Followage>
          <span>seguindo <strong>100</strong></span>
          <span><strong>100</strong> seguidores</span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
