import { addKeyObserver, removeKeyObserver } from "@utils/keyboard";
import { useEffect } from "react";

export default function useMoveTile() {

  function moveUp(){console.log('up')};
  function moveDown(){console.log('down')};
  function moveLeft(){console.log('left')};
  function moveRight(){console.log('right')};

  useEffect(() => {
    addKeyObserver('up', moveUp);
    addKeyObserver('down', moveDown);
    addKeyObserver('left', moveLeft);
    addKeyObserver('right', moveRight);

    return () => {
      removeKeyObserver('up', moveUp);
      removeKeyObserver('down', moveDown);
      removeKeyObserver('left', moveLeft);
      removeKeyObserver('right', moveRight);
    }
  });
}