import { YMaps, Map, Placemark, GeolocationControl, ZoomControl } from "react-yandex-maps";



const mapState = {
  center: [55.751574, 37.573856],
  zoom: 9,
  behaviors: ["default", "scrollZoom"]
};

// const getPointData = index => {
//   return {
//     balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
//     clusterCaption: "placemark <strong>" + index + "</strong>"
//   };
// };

// const getPointOptions = () => {
//   return {
//     preset: "islands#violetIcon"
//   };
// };


export default function Main({points}){

 console.log(points, 'fro  ')
  if(!points?.length) points = mapState.center
  return (
    <div className="App">
      <YMaps query={{ apikey: '5af5e7e3-5a13-4cf9-a295-273c77328f6b' }}>
        <Map 
        state={{
  center: points,
  zoom: 9,
  behaviors: ["default", "scrollZoom"]
}}
modules={[]}>
  <GeolocationControl options={{ float: 'left' }} />
  <ZoomControl options={{ float: 'right' }} />
          {/* <Clusterer
            options={{
              groupByCoordinates: false,
              clusterDisableClickZoom: true,
              clusterHideIconOnBalloonOpen: false,
              geoObjectHideIconOnBalloonOpen: false
            }}
          > */}
            {/* {points.map((coordinates, idx) => (
              console.log('1111111111111',coordinates) */}
               <Placemark
                // key={idx}
                geometry={ points }
                // properties={getPointData(idx)}
                // options={getPointOptions()}
              />
        {/* //     ))} */}
          {/* </Clusterer>  */}
        </Map>
      </YMaps>
    </div>
  )
}
