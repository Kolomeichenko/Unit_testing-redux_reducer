import React from 'react';
import Photo from './Photo';

function List(props) {

  const { photos, setFavorite } = props;

  return (
    <div className="gallery-list">
      {
          photos.map(photo => <Photo key={photo.id} data={photo} setFavorite={setFavorite} /> )
      }
    </div>
  );
}

export default List;
