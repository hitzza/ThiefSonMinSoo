import React from "react";
import * as S from "./style/SignUpHeader.style";

const SignUpHeader1 = () => {
  return (
    <S.Wrap>
      <S.Number active={"true"}>1</S.Number>
      <S.line></S.line>
      <S.Number active={"false"}>2</S.Number>
      <S.line></S.line>
      <S.Number active={"false"}>3</S.Number>
    </S.Wrap>
  );
};

export default SignUpHeader1;
