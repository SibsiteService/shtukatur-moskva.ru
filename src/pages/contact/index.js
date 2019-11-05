import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';

const Contact = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Наш график работы</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Call button={false} />
        </div>
        <div className="col-8">
          <h4 className="mt-4">Выезжаем к Вам по</h4>
          <table className="table table-sm opening-hours-table">
            <tbody>
              <tr>
                <td className="day font-weight-bold">Понедельникам</td>
                <td className="opens">9:00</td>
                <td>-</td>
                <td className="closes">21:00</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Вторникам</td>
                <td className="opens">9:00</td>
                <td>-</td>
                <td className="closes">21:00</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Средам</td>
                <td className="opens">9:00</td>
                <td>-</td>
                <td className="closes">21:00</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Четвергам</td>
                <td className="opens">9:00</td>
                <td>-</td>
                <td className="closes">21:00</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Пятницам</td>
                <td className="opens">9:00</td>
                <td>-</td>
                <td className="closes">21:00</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Субботам</td>
                <td className="opens">9:00</td>
                <td>-</td>
                <td className="closes">21:00</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Воскресенье</td>
                <td className="opens">Отдыхаем</td>
                <td />
                <td className="closes" />
              </tr>
            </tbody>
          </table>
          
        
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
