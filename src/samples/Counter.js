import React, { useEffect, useState } from "react";

export default function Counter() {
  //let counter = 0; // field yani props ile componente gönderilmeyen component içerisinde bir işlem bir hesaplama yapmamızı sağlayan değişkenler
  // Not bu değişklerdeki değişimi jsx dosyası anlayamaz. bu değişken değerlerinin DOM'a yansıması için State kavramını kullanırız.
  // getter setter tanımı
  // getCounter değeri açılışta 0
  // hook componentlere özellik kazandıran yapılara denir.
  const [getCounter, setCounter] = useState(0);

  // state değişimini takip eden hookumuz
  useEffect(() => {
    // getCounter değişen state değerini aşağıdaki yazım şekli ile componente bağladık

    if (getCounter == 10) {
      alert("Değer eşik değerine ulaştı");
    }

    console.log("state-değişti", getCounter);
  }, [getCounter]);

  function Increment() {
    setCounter(getCounter + 1); // setter üzerinden getCounter değerini güncelle. uyarı getCounter = getCounter +1 direk nesnenin referansını değiştiremiyoruz. setter ile yapmak zorundayız.
  }

  return (
    <div>
      <button onClick={Increment}>Arttır</button>
      <p>Sayac:{getCounter}</p>
    </div>
  );
}
