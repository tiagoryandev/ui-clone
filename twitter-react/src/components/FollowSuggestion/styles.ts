import styled from "styled-components";

import Bottom from "../Button";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;

  background-color: var(--gray);
  border-radius: 50%;
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;

  > span {
    color: var(--gray);
  }
`;

export const FollowButton = styled(Bottom)`
  padding: 6px 17px;
  
`;