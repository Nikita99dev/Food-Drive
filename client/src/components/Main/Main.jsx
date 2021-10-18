import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";

const points = [
  [
    55.831903,
    37.411961
  ],
  [
    55.763338,
    37.565466
  ],
]


const mapState = {
  center: [55.751574, 37.573856],
  zoom: 9,
  behaviors: ["default", "scrollZoom"]
};

const getPointData = index => {
  return {
    balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
    clusterCaption: "placemark <strong>" + index + "</strong>"
  };
};

const getPointOptions = () => {
  return {
    preset: "islands#violetIcon"
  };
};


export default function Main(){

  
  return (
    <div className="App">
      <YMaps query={{ apikey: '5af5e7e3-5a13-4cf9-a295-273c77328f6b' }}>
        <Map state={mapState}>
          <Clusterer
            options={{
              groupByCoordinates: false,
              clusterDisableClickZoom: true,
              clusterHideIconOnBalloonOpen: false,
              geoObjectHideIconOnBalloonOpen: false
            }}
          >
            {points.map((coordinates, idx) => (
              <Placemark
                key={idx}
                geometry={ coordinates }
                properties={getPointData(idx)}
                options={getPointOptions()}
              />
            ))}
          </Clusterer>
        </Map>
      </YMaps>
    </div>
  )
}
