import { Navigate } from "react-router-dom";
import { useUsername } from "../components/Context"


const ProtectedRoute = ({children})=>{
    const {username} = useUsername();

    if(!username){
      return  <Navigate to='/login' replace/>;
    }

    return children;
}

export default ProtectedRoute;