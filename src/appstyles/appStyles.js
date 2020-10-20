import React from "react";
import "./appStyles.css";
import { Link} from "react-router-dom";
import { FaHome, FaArrowRight, FaFilter } from "react-icons/fa";



export function BottomPageDecoration(props) {
  return (
    <div className="parent-links">
      <Link className="links-3" to="./Landing">
        <FaHome size="50px" />
      </Link>

      <Link className="links-3" to="./preview">
        <FaArrowRight size="50px" />
      </Link>

      <Link className="links-2" to="./Filter">
        <FaFilter size="40px" />
      </Link>
    </div>
    
  );
}
