import { Html,useProgress } from "@react-three/drei"
import { FrontSide } from "three/src/constants.js";
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="cnavas-load"></span>
      <p style={{
        fontSize: 24,
        color: '#f1f1f1',
        fontWeight: 800,
        marginTop: 40,
        marginLeft:-60
      }
      } className="flex justify-start text-start">{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader