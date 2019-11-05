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
          <h2 className="major" color="#000000">Свяжитесь с нами</h2>
        <p>
          Чтобы оставить заявку, кратко сфомируйте свою идею и воспользуйтесь формой снизу. 
          <br />
          Мы свяжемся с Вами в ближайшее время.
        </p>
        <form action="https://formcarry.com/s/16cIN7iss6i" method="post">
          <div className="fields">
            <div className="field">
              <label htmlFor="name" required="">Ваше Имя</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
            <fieldset id="select">
              <label htmlFor="service">Какой услугой Вы хотите воспользоваться?</label>
                <select name="service" id="service" required="">
                  <option value="">-</option>
                  <option value="Сайт в аренду">Взять сайт в аренду</option>
                  <option value="Сайт-визитка">Создание Сайта-Визитки</option>
                  <option value="Интернет-магазин">Разработка Интернет-Магазина</option>
                  <option value="SEO">Поисковая оптимизация для Yandex | Google</option>
                  <option value="Hosting">Хостинг вашего сайта в облаке</option>
                </select>
            </fieldset>
            </div>
            <div className="field">
            <fieldset id="select-budget">
              <label htmlFor="service">Какой у Вас бюджет?</label>
                <select name="service" id="service" required="">
                  <option value="">-</option>
                  <option value="Бюджет: 5 т.р."> 5 000 р.</option>
                  <option value="Бюджет: до 10 т.р.">до 10 000 р.</option>
                  <option value="Бюджет: до 20 т.р.">до 20 000 р.</option>
                  <option value="Бюджет: больше 20 т.р.">более 20 000 р.</option>
                </select>
            </fieldset>
            </div>
            <div className="field">
              <label htmlFor="email">Адрес электронной почты</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="tel">Номер Телефона</label>
              <input type="tel" name="tel" id="tel" />
            </div>
            <div className="field">
              <label htmlFor="message">Описание</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Отправить заявку" />
            </li>
          </ul>
        </form>
        <ul className="contact"></ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
