import logo from "./logo.svg";
// css üzerinden import etmek için from keyword kullanıma gerek yok.
// cssName.uzantı şeklinde import ederiz.
// not jsx dosyasında class for gibi attribute kullanımı yazaktır bunun yerine className ve htmlFor kullanacağız
import "./App.css";

// birden fazla export dosyanı bir js dosyasına yazabiliriz.

// export function App2() {
//   return <></>;
// }

// React Function Component ve React Class Component
// Html olarak görüğümüz bu dosya içerisinde js kodları çalıştırabiliriz. O yüzden html benzeyen bu yazım formatına JSX dosya formatı diyoruz.
function App() {
  const number = 1;
  // jsx dosyası bir açılış kapanış taginden oluşmalı tüm arayüz bu açılış kapanı tag arasında olmalı
  // jsx dosyasında <></> arasında html kodlarımızı yazabiliriz. <> fragment ismi veriyoruz.
  // return View(); // JSX formatında
  // component içerisindeki arayüz tasarımlar js kodları hepsi component içerisinde tanımlanır. return kısmını component içerisinde en aşağı satıra yazamayı alışkanlık edinelim. return ile component  hangi arayüzü döndüreceğini belirtmiş olduk
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{number}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      {/* <div>
        <label htmlFor="id"></label>
        <button className="deneme1"></button>
      </div> */}
    </>
  );
}

export default App;
// sadece 1 tane js dosyasını dışarı çıkarmak istersek ise export default ile tanımlıyoruz.

// bu arayüzü başka bir sayfadan çağırabiliriz bu sebeple bu js dosyanı uygulama içerisinde başka bir yerden çağırmak için export kullanırız.
