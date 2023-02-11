import React from 'react';

const items =[
    {
        id: 1,
        tpo: 'Manit Bhopal',
        score: '89.0',
      },
      {
        id: 2,
        tpo: 'vnit nagpur',
        score: '78.5',
      },
      {
        id: 3,
        tpo: 'LPU',
        score: '75.0',
      },
]

const Acceptedlist = () => {
  return (
    <div className='section-center-people-search'>
      {items.map((listitem) => {
        const { id, tpo, score} = listitem;
        return (
          <article key={id} className='menu-item'>
            <img src='https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg' alt={tpo} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{tpo}</h4>
                <h4 className='price'>{score}</h4>
              </header>
            </div>

          </article>
        );
      })}
    </div>
  );
};

export default Acceptedlist;