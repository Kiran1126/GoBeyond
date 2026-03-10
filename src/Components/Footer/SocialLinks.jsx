import { SocialIcon } from 'react-social-icons';

const SocialLinks = () => {
  return (
    <SocialIcon 
      url={urls} 
      network={networks} 
      label="social-media-icons" 
      bgColor="#353353" 
      fgColor="#fff"
    />
  )
};

export default SocialLinks;