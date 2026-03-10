import SocialLinks from "./SocialLinks";

const Footer = ({ icons }) => {
  return (
    <div className="h-screen w-screen bg-amber-950 overflow-x-hidden">
      <div>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis molestiae cupiditate illum itaque repellat eius, reiciendis quia voluptates accusamus maxime vel animi veritatis. Vero eos aut laboriosam, doloremque nihil natus.
        </p>
      </div>
      <SocialLinkList icons={icons} />
    </div>
  )
};

const SocialLinkList = ({ icons }) => (
  <ul className="flex">
    {
      icons & icons.map((icon, idx) => 
        <SocialLinks key={idx} urls={icon.url} networks={icon.network}></SocialLinks>
      )
    }
  </ul>
)

export default Footer;