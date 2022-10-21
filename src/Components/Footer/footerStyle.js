import styled from "styled-components";

export const SocialMediaDiv = styled.div`
  height: auto;
  overflow: hidden;
`;

export const Social = styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  background-color: ${prop =>
    prop.item === 1
      ? "#3b5998"
      : prop.item === 2 ? "#498cbf" : prop.item === 3 ? "#cc2127" : ""};
  @media (max-width: 991px) {
    .social-media .social {
      width: 100%;
      float: none;
    }
  }
`;

export const Icon = styled.i`
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  color: #888;
  float: left;
  margin-right: 10px;
`;

export const Pra = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
`;

export const Span1 = styled.span`
  display: block;
  margin-bottom: 8px;
`;

export const Span2 = styled.span`font-weight: normal;`;
