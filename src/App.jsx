import BlogCard from './components/BlogCard/BlogCard';
import Container from './components/Container/Container';
import CryptoHistory from './components/CryptoHistory/CryptoHistory';
import ForbesList from './components/ForbesList/ForbesList';
import Heading from './components/Heading/Heading';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

import article from './data/article.json';
import list from './data/forbes.json';
import stats from './data/stats.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          avatar={article.avatar}
          description={article.description}
          name={article.name}
          postedAt={article.postedAt}
          poster={article.poster}
          tag={article.tag}
          title={article.title}
        />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={stats} />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={list} />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory items={transactions} />
      </Container>
    </Section>
  );
};
