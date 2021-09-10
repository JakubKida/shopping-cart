import { useLocation } from "react-router";

//custom hook to get the current path
const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }

export default usePathname;

