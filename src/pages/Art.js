import '../App.scss';
import '../Art.scss';

const images = require.context('../filmfoto', true);
const imageList = images.keys().map(image => images(image));



function Art() {
  return (
    <div className='Art'>
      {imageList.map((image, index) => (
        <img key={index} src={image} alt={`${index}`} />
      ))}
    </div>
  );
}

export default Art;