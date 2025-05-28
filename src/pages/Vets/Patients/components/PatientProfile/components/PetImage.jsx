import { getImageUrl, placeholderImage } from '../../../../../../utils/imageUtils';

const PetImage = ({ imageName, petName }) => (
  <div className="w-[200px] h-[200px] flex-shrink-0 rounded-lg overflow-hidden bg-lighter-grey">
    <img 
      src={getImageUrl(imageName)} 
      alt={petName}
      onError={(e) => { e.target.src = placeholderImage }}
      className="w-full h-full object-cover"
    />
  </div>
);

export default PetImage; 