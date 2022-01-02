import axios from "axios";
import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database
import "firebase/storage"; // If using Firebase storage
//import { StatisticValue } from "semantic-ui-react";
//import React, { useState, useEffect } from 'react'
//import { Table } from "semantic-ui-react";
let arrays = [];

let details = {
  grant_type: "password",
  userName: "TermUser",
  password: "TermPass",
};
let formBody = [];
for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

const config1 = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
};

axios
  .post("http://192.168.5.90:8081/token", formBody, config1)
  .then(function (body) {
    let token = JSON.parse(JSON.stringify(body.data.access_token));
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const button = document.querySelector("Button");
    button.addEventListener("click", (event) => {
      let bodyParameters = {
        ProdId: "",
        //InventBatchId: "11497695",
        InventBatchId: getProd().toString(),
      };
      axios
        .post(
          "http://192.168.5.90:8081/api/TerminalListServices/getYrsCOProdBomList",
          bodyParameters,
          config
        )
        .then((json) => donustur(json.data.resultData));
    });
    function getVal() {
      let val = document.querySelector("input").value;
      let searchTerm = "_";
      let indexOfFirst = val.indexOf(searchTerm);
      if (indexOfFirst > 0) {
        val = val.slice(0, indexOfFirst);
      }

      return val;
    }
    function getProd() {
      let prodVal = document.getElementById("prodId").value;
      prodVal = prodVal.toString();
      prodVal = prodVal.substring(1);
      return prodVal;
    }
    function donustur(resultData1) {
      //let array =[1,5]
      //let i=0
      //array=Array( resultData1)
      const obj = JSON.parse(resultData1);
      // array.forEach(element => {

      //   console.log( obj.YrsCOProdBomLst[i].ItemId)
      //   i=i+1
      // });

      for (let index = 0; index < 1000; index++) {
        if (obj.YrsCOProdBomLst[index] == null) {
          break;
        }
        arrays[index] = obj.YrsCOProdBomLst[index].ItemId;
        console.log(obj.YrsCOProdBomLst[index].ItemId);
        //  document.getElementById("1").innerHTML = (obj.YrsCOProdBomLst[index].ItemId)
        if (obj.YrsCOProdBomLst[index].ItemId === getVal()) {
          document.getElementById("durumId").innerHTML = "BAŞARILI";
          document.getElementById("durumId").style.color = "rgba(0,128,0)";
          document.getElementById("durumId").style.boxShadow =
            "rgba(1 210 60 / 100%) 0px 40px 58px -16px";
          document.getElementById("durumId").style.borderColor =
            "rgba(0,128,0 , 0.8)";
          break;
        } else {
          document.getElementById("durumId").innerHTML = "BAŞARISIZ";
          document.getElementById("durumId").style.color = "rgba(255, 0, 0)";
          document.getElementById("durumId").style.boxShadow =
            "rgba(255 0 0 / 100%) 0px 40px 58px -16px";
          document.getElementById("durumId").style.borderColor =
            "rgba(255, 0, 0 , 0.8)";
        }
      }
    }

    // axios.post(
    // 'http://192.168.5.90:8081/api/TerminalListServices/getYrsCOProdBomList',
    // bodyParameters,
    // config

    // ).then( json => donustur(json.data.resultData))
  });

export default class ProductService {
  getToken() {
    return;
  }
  getData() {
    window.onload = function () {
      const firebaseConfig = {
        apiKey: "AIzaSyD8x9jTou16nrIZgG1haY6izPxr4ijWPhM",
        authDomain: "web-picktodark.firebaseapp.com",
        databaseURL:
          "https://web-picktodark-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "web-picktodark",
        storageBucket: "web-picktodark.appspot.com",
        messagingSenderId: "909867660075",
        appId: "1:909867660075:web:9d011874579434a11d4b6e",
        measurementId: "G-01CWD4QKLV",
      };

      firebase.initializeApp(firebaseConfig);
      //let database = firebase.database();

      let opr, item, durum, prod;
      function Ready() {
        opr = document.getElementById("opr").value;
        item = document.getElementById("item").value;
        prod = document.getElementById("prodId").value;
        durum = document.getElementById("durumId").innerHTML;
      }
      document.getElementById("myBtn").onclick = function () {
        let dateString = new Date().toLocaleString("TR", {
          timeZone: "Europe/Istanbul",
        });

        let formattedString = dateString.replaceAll(".", "");
        console.log(formattedString);
        console.log(document.getElementById("prodId").innerHTML);
        setTimeout(function () {
          Ready();
          firebase
            .database()
            .ref("users/" + formattedString)
            .set({
              OprId: opr,
              ItemNo: item,
              ProdNo: prod,
              DurumNo: durum,
              ZamanDurum: formattedString,
            });
          document.getElementById("opr").value = "";
          document.getElementById("item").value = "";
          document.getElementById("prodId").value = "";
          document.getElementById("durumId").innerText = "DURUM";
          document.getElementById("durumId").style.color = "turquoise";
          document.getElementById("durumId").style.boxShadow =
            "rgba(60 210 300 / 100%) 0px 40px 58px -16px";
          //READ DATA
        }, 11000);
      };
      firebase
        .database()
        .ref("users")
        .on("value", (snap) => {});
      firebase
        .database()
        .ref("users")
        .once("value", function (AllRecords) {
          AllRecords.forEach(function (CurrentRecord) {
            let durum = CurrentRecord.val().DurumNo;
            let opr1 = CurrentRecord.val().OprId;
            let items1 = CurrentRecord.val().ItemNo;
            let prod1 = CurrentRecord.val().ProdNo;
            let zaman = CurrentRecord.val().ZamanDurum;
            AddItemsToTable(durum, opr1, items1, prod1, zaman);
          });
        });
      let strNo = 0;
      function AddItemsToTable(durum, opr1, items1, prod1, zaman) {
        let tbody = document.getElementById("tbody1");
        let trow = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        td1.innerHTML = ++strNo;
        td2.innerHTML = opr1;
        td3.innerHTML = items1;
        td4.innerHTML = prod1;
        td5.innerHTML = durum;
        td6.innerHTML = zaman;
        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4);
        trow.appendChild(td5);
        trow.appendChild(td6);
        tbody.appendChild(trow);
      }
      //READ DATA
    };
  }
}
