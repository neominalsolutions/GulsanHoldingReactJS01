import React from "react";
import PropTypes from "prop-types";

// componentler dışarıdan değer alabilirler bu yöntem props yöntemi diyoruz.

/* public class HomeModel { 
  
  public Home(string title,string description) {}

  // method
  public showMessage() {

  }
}

*/

export default function Home({ title, description }) {
  //@model HomeModel

  const props = { title, description };
  // props keyword mvc deki Model değerine denk gelir.

  // c# method aynısı
  // parametre almayan function çağırma
  // default function yöntemi
  function showMessage() {
    // backtick syntax
    // $"{this.title} a tıklandı"; // interpolation syntax
    alert(`${props.title} a tıklandı`);
    // js de string ifadeler için tek tırnak kullanalım
    // alert( props.title + 'a tıklandı');
  }

  // let a = 5;
  // a = 10;
  // let ile değişken  refransında değişiklik yaparız.

  // const pi = 3.14;
  // pi = 3.15;
  // const ile değişkenin referansında bir değişiklik yapamayız

  // arrow function yöntemi ile yazıldı ve içerisine parametre gönderiliyor
  const showTitle = (message) => {
    alert(message);
  };

  return (
    <div>
      {/* <h1>@Model.title</h1> */}
      <h1>{props.title}</h1>
      {/* <p>@Model.description</p> */}
      <p>{props.description}</p>
      {/* event binding */}
      <button onClick={showMessage}>Click Me</button>
      {/* () ananonim bir function showMessage callback yapar. */}
      <button onClick={() => showTitle("Mesaj")}>show Title</button>
    </div>
  );
}

// componentlerin propertylerine default değer tanımlama

// import PropTypes from 'prop-types'

Home.defaultProps = {
  title: "",
  description: "desc",
};

// JS primative types ilkel veri tipleri Boolean,string,number
// object veri tipi function,array,object
// undefined,any,null (referance type)

var a; // a değer ataması olmadığından undefined

Home.propTypes = {
  title: PropTypes.string.isRequired, // required
  describe: PropTypes.string, // optional
};
