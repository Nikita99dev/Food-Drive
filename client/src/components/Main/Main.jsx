import { YMaps, Map, Clusterer, Placemark, GeolocationControl, ZoomControl } from "react-yandex-maps";



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


export default function Main({ points }) {
  console.log('pppppppppppppppppppp', [[1, 1], [1, 1]].flat().length)

  // points = [[55.751574, 37.573856],[55.751574, 37.573856]]
console.log('points', points)

  const resolution = () => {
    if(points.flat().length < 3){
      return '300px'
    } else {
      return '600px'
    }
  }

  const resolution2 = () => {
    if(points.flat().length < 3){
      return '300px'
    } else {
      return '600px'
    }
  }



  if (!points?.length) points = mapState.center
  return (
    <div className="App">
      <YMaps query={{ apikey: '5af5e7e3-5a13-4cf9-a295-273c77328f6b' }}>
        <Map
          state={{
            center: mapState.center,
            zoom: 9,
            behaviors: ["default", "scrollZoom"]
          }}
          width = {resolution()}

          height={resolution2()}
          modules={[]}>
          <GeolocationControl options={{ float: 'left' }} />
          <ZoomControl options={{ float: 'right' }} />


        
          {points.flat().length < 3 ?
            <Placemark
              // key={idx}
              geometry={ points }
            // properties={getPointData(idx)}
            // options={getPointOptions()}
            />
            :
            <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
              clusterDisableClickZoom: true,
              clusterHideIconOnBalloonOpen: false,
              geoObjectHideIconOnBalloonOpen: false
            }}
          >
            {points.map((coordinates, idx) => (
                // {console.log('1111111111111', coordinates)}
                < Placemark 
                modules={['geoObject.addon.balloon']}
                key = { idx }
                geometry = {[coordinates.longitude, coordinates.latitude]}
                properties = { getPointData(coordinates.name) }
                options = { getPointOptions() }
                />
            ))}
            
            </Clusterer>
}
        </Map>
      </YMaps>
    </div>
  )
}
