import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const iconMap = {
  'Happy Customers': FaRegThumbsUp,
  'Registered Members': MdPeople,
  'Available Products': MdOutlineProductionQuantityLimits,
  'Saved Trees': GiTreeDoor,
};

const Statistics = ({ title, stats }) => {
  return (
    <section>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        {stats.map(({ id, title, total }) => {
          const Icon = iconMap[title];
          return (
            <li key={id} className={style.item}>
              <StatisticsItem title={title} total={total} icon={Icon} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
