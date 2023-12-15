import { useToast } from '@chakra-ui/toast';
import ToastBox from '@components/Box';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useSpring, animated } from 'react-spring';

export default function useConfetti({ board }: { board: number[][] }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const toast = useToast();
  const id = 'confetti';

  // react-spring을 사용하여 confetti 애니메이션 효과 적용
  const confettiStyle = {
    left: window.innerWidth / 2,
    top: window.innerHeight / 2,
    transform: 'translate(-50%, -50%)', // 중앙 정렬을 위해 필요한 스타일
    zIndex: 999, // 다른 요소 위에 표시
  };

  const confettiProps = useSpring({
    opacity: showConfetti ? 0.5 : 0,
    display: showConfetti ? 'block' : 'none',
  });

  // board에 2048이 생기면 confetti 효과 활성화
  // useEffect(() => {
    
  // }, [board]);

  // confetti 효과 끝나면 토스트 메시지 표시
  useEffect(() => {
    if (board.flat().includes(2048)) setShowConfetti(true);

    console.log('showConfetti: ', showConfetti)
    //3초 후 비활성화
    const timeout = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    if (!showConfetti && board.flat().includes(2048)) {
      if (!toast.isActive(id)) {
        toast({
          id,
          duration: null,
          position: 'top',
          render: () => (
            <>
              <ToastBox />
            </>
          ),
        });
      }
    }

    return () => clearTimeout(timeout);
  }, [showConfetti, board, toast]);

  return (
    <>
      <animated.div style={confettiProps}>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          style={confettiStyle}
        />
      </animated.div>
    </>
  );
}
