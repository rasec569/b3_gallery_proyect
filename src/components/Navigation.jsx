import { Link } from "react-router-dom"
import { Constructions1 } from "./Constructions1";
import { Constructions2 } from "./Constructions2";
import { Constructions3 } from "./Constructions3";
import { Constructions4 } from "./Constructions4";

export const Navigation = () => {
  return (
    <div className="container thumbnail-container mt2">
        <Link to='/Construction1'className="links">
        <figure className="thumbnail-image-size">
            <Constructions1/>
            <figcaption>Construcción 1</figcaption>
        </figure>
        </Link>
        <Link to='/Construction2'className="links">
        <figure className="thumbnail-image-size">
            <Constructions2/>
            <figcaption>Construcción 2</figcaption>
        </figure>
        </Link>
        <Link to='/Construction3'className="links">
        <figure className="thumbnail-image-size">
            <Constructions3/>
            <figcaption>Construcción 3</figcaption>
        </figure>
        </Link>
        <Link to='/Construction4'className="links">
        <figure className="thumbnail-image-size">
            <Constructions4/>
            <figcaption>Construcción 4</figcaption>
        </figure>
        </Link>
    </div>
  )
}
