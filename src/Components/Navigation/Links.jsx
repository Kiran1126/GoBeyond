import { NavLink } from "react-router-dom";

const Links = ({ Title, Icon, Url}) => {
  return (
    <div className="flex items-center">
      <span className="material-symbols-outlined">
        {Icon}
      </span>
      <NavLink to={Url}>
        {Title}
      </NavLink>
    </div>
  );
};

export default Links;