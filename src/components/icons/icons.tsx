import { FiUsers } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExpandLess } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";
interface IconProps {
    size?: number;
    color?: string;

  }
  
  export const IconUsers = (props: IconProps) => {
    return <FiUsers {...props} />;
  };
  export const SearchIcon = (props: IconProps) => {
    return <IoIosSearch {...props} />;
  };

  export const ExpandLessIcon = (props: IconProps) => {
    return <MdOutlineExpandLess {...props} />;
  };
  export const ExpandMoreIcon = (props: IconProps) => {
    return <MdOutlineExpandMore {...props} />;
  };