import { styled } from "styled-components";

export const Wrap = styled.div`
  display: flex;
  gap: 3px;
  margin-top: 26px;
  align-items: center;
  justify-content: center;
`;
export const Number = styled.div<{ active: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  color: ${(props) => (props.active === "true" ? "#fff" : "#B0B0B0")};
  background: ${(props) => (props.active === "true" ? "#6138F8" : "#EBEEF2")};
`;
export const line = styled.div`
  width: 15px;
  height: 1px;
  background: #ebeef2;
`;
