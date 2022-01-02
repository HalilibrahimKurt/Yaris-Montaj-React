import React from "react";
import styled from "styled-components";
import ProductTable from "./ProductTable";

//import firebase from "firebase";
//import ProductList from "./ProductList";
export default function Products() {
  return (
    <Container>
      <Wrap>
        <input
          name="itemId"
          onBlur="getVal()"
          placeholder="ITEM ID"
          type="text"
          id="item"
        />
      </Wrap>
      <Wrap>
        <input
          name="ProdId"
          onBlur="getProd()"
          placeholder="PRODUCT ID"
          type="text"
          id="prodId"
        />
      </Wrap>
      <Wrap>
        <input name="oprId" placeholder="OPERATOR İSMİ" type="text" id="opr" />
      </Wrap>
      <div>
        <Button id="myBtn" onclick="myFunction()">
          GETİR
        </Button>
      </div>
      <Wrapper>
        <Text id="durumId">DURUM</Text>
      </Wrapper>

      <ProductTable></ProductTable>
      <table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>NO</th>
            <th>OPR ISMI</th>
            <th>ITEM ID</th>
            <th>PRODUCT ID</th>
            <th>DURUM NO</th>
            <th>ZAMAN</th>
          </tr>
        </thead>
        <tbody id="tbody1"></tbody>
      </table>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-gap: 5px;
  text-align: center;
  
    &:before {
        background: url("images/home-background.png") center center / cover;
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;

const Wrap = styled.div`
  display: none;
  img {
    width: 100%;
    //height: 100%;
    object-fit: cover;
  }

  input {
    font-size: 25px;
    border-radius: 15px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    text-align: center;
    margin-top: 1px;
    color: turquoise;
    background: url("images/home-background.png") center center / cover;
    padding: 40px;
    padding-left: 0px;
    padding-right: 0px;

    &:hover {
      box-shadow: rgba(60 210 300 / 100%) 0px 40px 58px -16px,
        rgba(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.02);
      border-color: rgba(2, 249, 249, 0.8);
    }
  }
`;

const Wrapper = styled.div`
  display: none;
  border-radius: 20px;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  text-align: center;
  img {
    width: 100%;
    //height: 100%;
    object-fit: cover;
  }

  // &:hover {
  //   box-shadow: rgba(1 210 60 / 100%) 0px 40px 58px -16px,
  //     rgba(0 0 0 / 72%) 0px 30px 22px -10px;
  //   transform: scale(1.02);
  //   border-color: rgba(1,210, 60, 0.8);
  // }
  // box-shadow: rgba(60 210 300 / 100%) 0px 40px 58px -16px,
  //         rgba(0 0 0 / 72%) 0px 30px 22px -10px;
  //       transform: scale(1.02);
  //       border-color: rgba(0, 249, 249, 0.8);
`;
const Text = styled.div`
  display: none;
  font-size: 35px;
  color: turquoise;
  padding: 0px 65px 26px;
  margin-top: 29px;
  text-align: center;
`;

const Button = styled.button`
display: none;
  /* Adapt the colors based on primary prop */
  background: "gray" : "black";
  color: "black" : "turquoise";
  border: 3px solid rgba(249,249,249,0.1);
  font-size: 2.5em;
  margin-left: 0px;
  margin-top: 0.1em;
  padding: 0.350em 2em;
  border-radius: 15px;
  text-align: center;
  &:hover {
    box-shadow: rgba(60 210 300 / 100%) 0px 40px 58px -16px,
    rgba(0 0 0 / 100%) 0px 5px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(2,249,249,0.8);
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    }
  text: Başarılı
  {
    box-shadow: rgba(60 210 300 / 100%) 0px 40px 58px -16px,
    rgba(0 0 0 / 100%) 0px 5px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(2,249,249,0.8);
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
  }  
`;

// const Input = styled.input`
// border-radius: 15px;
// cursor: pointer;
// border: 3px solid rgba(249, 249, 249, 0.1);
// box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
//   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
// transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
// text-align: center;
// `;
