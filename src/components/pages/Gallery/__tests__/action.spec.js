import {photos} from '../mock';
import {
    SET_FAVORITE,
    SET_PHOTOS,
    setFavoriteAction,
    setPhotosAction,
} from '../redux/actions';

test("check return  SET_PHOTOS action ", () => {
    expect(setPhotosAction(photos)).toEqual({
        type:SET_PHOTOS,
        photos,
    });
  });

  test("check return  SET_PHOTOS action ", () => {
    expect(setFavoriteAction(photos[0])).toEqual({
        type:SET_FAVORITE,
        photo:photos[0],
    });
  });
  
  