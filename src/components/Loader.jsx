/* eslint-disable react/react-in-jsx-scope */
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 40,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {progress.toFixed(2)}
        </p>
      </span>
    </Html>
  );
};

export default Loader;
