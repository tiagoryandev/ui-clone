import React from "react";

import {
  Container,
  Topside,
  MenuButtom,
  Logo,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon
} from "./styles";
import Button from "../Button";

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButtom>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButtom>

        <MenuButtom>
          <BellIcon />
          <span>Notificações</span>
        </MenuButtom>

        <MenuButtom>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButtom>

        <MenuButtom>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButtom>

        <MenuButtom className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButtom>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Tiago Ryan</strong>
          <span>@tiagoryandev</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;