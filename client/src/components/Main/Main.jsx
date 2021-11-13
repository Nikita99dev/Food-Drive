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
  // console.log('pppppppppppppppppppp', [[1, 1], [1, 1]].flat().length)

  // points = [[55.751574, 37.573856],[55.751574, 37.573856]]
console.log('points', typeof(+points[0]) === 'number')

  const resolution = () => {
    if(points.flat().length < 3){
      return '300px'
    } else {
      return '400px'
    }
  }

  const resolution2 = () => {
    if(points.flat().length < 3){
      return '300px'
    } else {
      return '400px'
    }
  }



  if (!points?.length) points = mapState.center
  return (
    <div className="App">
      <YMaps>
        <Map
          state={mapState}
          width = {resolution()}

          height={resolution2()}
          modules={[]} >
          <GeolocationControl options={{ float: 'left' }} />
          <ZoomControl options={{ float: 'right' }}/>


        
          {typeof(+points[0]) === 'number' ?
            <Placemark
              // key={idx}
            geometry={ points }
            // properties={getPointData(points)}
            // options={getPointOptions()}
            />
            :
            <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
              clusterDisableClickZoom: true,
              clusterHideIconOnBalloonOpen: false,
              geoObjectHideIconOnBalloonOpen: false,
              showInAlphabeticalOrder: false,
            }}
          >
            {points.map((coordinates, idx) => (
                // {console.log('1111111111111', coordinates)}
                < Placemark 
                modules={['geoObject.addon.balloon','geoObject.addon.hint']}
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
