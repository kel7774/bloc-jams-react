import styled from "styled-components";

export const LandingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 30px;
    color: #f5e1eb;
  }
`;

export const SellingPointsSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  .point {
    width: 300px;
    .point-title {
      color: #f5e1eb;
    }
    .point-description {
      color: #fff;
    }
  }
`;
