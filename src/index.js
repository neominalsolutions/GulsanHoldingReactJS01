// ES module import özelliğ
// using System.Text
// herhangi bir js deki kod blogunu çağırmak için import kullanırız.
// export olarak dışarı çıkılan herşey import edilebilir.
import React, { useState, useEffect } from "react";
// React Core bileşenler, Event,State,Props,Component,JSX
import ReactDOM from "react-dom/client";
// React Componentlerin DOM render etmek için kullanılan paket.
// js kodunun HTML DOM ile haberleşmesini bu paket sağlar
// React Native kısmında bu paket yok.
import "./index.css";
// js dosyasında birden fazla export edilen değeri import etmek için aşağıdaki tekniği kullanırız
// import { App,App2 } from "./App";
// eğer tek bir component export edildiyse bu durumda aşağıdaki formatta import yazabiliriz.
import App from "./App";
// app Dosya dizininde ne kadar export edilmiş function class varsa hepsini MyApp namespace ile dışarı çıkar. Takma isim ile js dosyasında export edilen class functiona bağlan.
// import * as MyApp from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import Counter from "./samples/Counter";
import List from "./samples/List";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* uygulamayı index.js üzerinden App Component içinde çalıştırıyoruz. */}
    {/* <App /> */}
    {/* <MyApp.App2></MyApp.App2> */}
    {/* <App2 /> */}
    {/* homeModel h = new HomeModel(); 
        h.title = "home page";
        h.description = "anasayfa";
        return view(h);
    */}
    {/* <counter /> */}
    {/* <Counter /> */}
    <List />
    {/* <Home title="title1" />
    <Home title={"home02"} description={"anasayfa 2"} />
    <Home title={"home 3"} description={"anasayfa 3"} /> */}
  </React.StrictMode>
);

// uygulama ilk açılışta main dosyamız burası index.js üzerinden çalışır.
reportWebVitals();
