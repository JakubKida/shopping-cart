import { useLocation } from "react-router";

const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }

export default usePathname;

