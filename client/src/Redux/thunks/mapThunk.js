import { map_init_fulfilled, map_init_pending, map_init_rejected } from "../actions/map";

export const initMap = (payload) => async (dispatch) => {
    dispatch(map_init_pending())

    try {
      fetch(
        `https://geocode-maps.yandex.ru/1.x/?apikey=5af5e7e3-5a13-4cf9-a295-273c77328f6b&format=json&geocode=${payload.address}&lang=en-US`
      )
        .then((res) => res.json())
        .then((resp) => {
          const { featureMember } = resp?.response?.GeoObjectCollection;
          const coords = [
            featureMember[0]?.GeoObject?.Point?.pos.split(" ").map((el) => +el),
          ];
          console.log(coords)
          const coordinates = [coords[0][1], coords[0][0]];
          dispatch(map_init_fulfilled(coordinates));
        })
    } catch (error) {
      dispatch(map_init_rejected(error))
    }
};

