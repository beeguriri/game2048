import { useToast } from '@chakra-ui/react';
import ToastBox from '@components/Box';
import JSConfetti from 'js-confetti';
import { useCallback, useEffect, useState } from 'react';

export default function useJsConfetti({ board }: { board: number[][] }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const toast = useToast();
  const id = 'confetti';

  const startConfetti = useCallback(() => {
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
      confettiColors: [
        '#ff0a54',
        '#ff477e',
        '#ff7096',
        '#ff85a1',
        '#fbb1bd',
        '#f9bec7',
      ],
      confettiRadius: 10,
      confettiNumber: 500,
    });
  }, []);

  // board에 2048이 생기면 confetti 효과 활성화
  useEffect(() => {
    if (board.flat().includes(2048)) setShowConfetti(true);
  }, [board]);

  // confetti 효과 시작
  useEffect(() => {
    if (showConfetti) startConfetti();

    //3초 후 비활성화
    const timeout = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showConfetti, startConfetti]);

  // confetti 효과 끝나면 토스트 메시지 표시
  useEffect(() => {
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
  }, [board, showConfetti, toast]);

  return <></>;
}
