import style from './StatisticsItem.module.css';
import { IconContext } from 'react-icons';

const StatisticsItem = ({ icon: Icon, title, total }) => {
  return (
    <>
      <IconContext.Provider value={{ size: '32px' }}>
        <Icon />
      </IconContext.Provider>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
