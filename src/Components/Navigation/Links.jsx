import { NavLink } from "react-router-dom";

const Links = ({ Title, Icon, Url}) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:text-amber-300 hover:delay-200">
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