import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([])


  return <main>
    <section className="menu section">
      <div className='title'>
        <h2>menu</h2>
        <div className="underline"></div>
      </div>
      <Categories />
      {
        menuItems.map((menuItem) => <Menu key={menuItem.id} menuItem={menuItem} />)
      }
    </section>
  </main>;
}

export default App;
