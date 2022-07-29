import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['All',...new Set(items.map((item)=> item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(['all'])

  const filterItems = (category)=>{
    const newList = items.filter((item)=>{
      if(category===item.category){return true}
    })
    if(newList.length===0){
      setMenuItems(items)
    }else{
      setMenuItems(newList)
    }
  }

  return <main>
  <section className='menu section'>
    <div className="title">
      <h2>Our Menu</h2>
      <div className="underline"></div>
    </div>
    <Categories categories={allCategories} filterItems={filterItems}></Categories>
    <Menu items={menuItems}></Menu>
  </section>
  </main>;
}

export default App;
