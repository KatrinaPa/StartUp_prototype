export const placeholderImage = 'https://placehold.co/200x200/FAFAFA/A3A3A3?text=Pet';

export const getImageUrl = (imageName) => {
  return imageName ? `/pet-profiles/${imageName}` : placeholderImage;
}; 