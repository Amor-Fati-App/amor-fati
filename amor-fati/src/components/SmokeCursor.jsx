import { Cursor, usePointerPosition } from "motion-plus/react";
import {
  motion,
  transform,
  useAnimate,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";

function usePointerReaction(axis, measurement) {
  const pointer = usePointerPosition();
  const [size, setSize] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    setSize(window[measurement]);

    const onMove = () => {
      setHasMoved(true);
      removeOnMove();
    };

    window.addEventListener("mousemove", onMove);

    const removeOnMove = () => {
      window.removeEventListener("mousemove", onMove);
    };

    return removeOnMove;
  }, []);

  const value = useTransform(() => {
    const pointerPosition = pointer[axis].get();

    if (!size || !hasMoved) return 0;

    return transform([0, size], [100, -100])(pointerPosition);
  });

  return useSpring(value, { damping: 80, stiffness: 200 });
}

 function SmokeCursor() {
  const [textRef, animate] = useAnimate();

  const x = usePointerReaction("x", "innerWidth");
  const y = usePointerReaction("y", "innerHeight");
  const originX = useTransform(x, [20, -20], [0, 1]);
  const originY = useTransform(y, [20, -20], [0, 1]);

  useEffect(() => {
    animate(
      textRef.current,
      { transform: ["rotate(0deg)", "rotate(360deg)"] },
      {
        duration: 8,
        ease: "linear",
        repeat: Infinity,
      },
    );
  }, []);

  return (
    <>
      <Cursor style={{ width: 5, height: 5 }} className="cursor" />
      <Cursor
        follow
        center={{ x: 0.5, y: 0.5 }}
        spring={{ stiffness: 1000, damping: 50 }}
        style={{ width: 40, height: 40 }}
        className="trail"
      />
      <Cursor
        follow
        center={{ x: 0.5, y: 0.5 }}
        spring={{ stiffness: 500, damping: 50 }}
        style={{ width: 80, height: 80 }}
        className="trail trail-2"
      />
      <Cursor
        follow
        center={{ x: 0.5, y: 0.5 }}
        spring={{ stiffness: 1500, damping: 20 }}
        style={{ width: 70, height: 70 }}
        className="trail trail-3"
      />
    </>
  );
}

export default SmokeCursor;