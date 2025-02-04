import style from './CryptoHistory.module.css';
import { format } from 'date-fns';

const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, price, amount, date }) => {
          const result = format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
          return (
            <tr className={style.tr} key={id}>
              <td className={style.td}>{id}</td>
              <td className={style.td}>{price}</td>
              <td className={style.td}>0.{amount}</td>
              <td className={style.td}>{result}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
