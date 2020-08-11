import React, { Component } from 'react'
import Form from './components/Form.js'
// import DatePicker from './components/DatePicker.js'



class Report2 extends Component {
  render() {
    return (
      <div>
        <h3><a href="https://github.com/knasenn/jsramverk">Github link</a></h3>
        <p>Jag plockade inspiration från lite olika platser. Jag försökte följa
        top 10 rekommenderationerna till viss del. Sen använde jag mig av kunskap som
        vi lärt oss i tidigare kurser. Vad gäller datepickern gjorde jag
        en som jag själv ansåg vad enkel att både förstå och använda. Jag var inne på
        att dela upp formuläret i olika mindre komponenter men det vart enklare att
        lägga hela formuläret i en stor komponent istället. Så fick bli så denna gång.</p>
        <Form />
      </div>
    );
  }
}

export default Report2
