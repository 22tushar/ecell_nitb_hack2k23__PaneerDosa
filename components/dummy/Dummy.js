import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './Data';
import './people.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function Dummy() {
  const [searchItems, setSearchItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setSearchItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setSearchItems(newItems);
  };

  return (
    <main>
      <section className="menu search_section">
        <div className="title-people">
          <h2>Company profiles and requirements</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <div className="underline"></div>
        <Menu items={searchItems} />
      </section>
    </main>
  );
}

export default Dummy;