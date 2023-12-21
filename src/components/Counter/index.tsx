import { useCallback, useEffect, useMemo, useState } from 'react';
import { CounterP } from './style';

type Props = {
  number: number;
  duration: number; //카운팅 지속 시간
  minimumFractionDigits?: number; //소수점 이하 최소 자리수
  maximumFractionDigits?: number; //소수점 이하 최대 자리수
};

const Counter = ({
  number,
  duration,
  minimumFractionDigits = 0,
  maximumFractionDigits = 0,
}: Props) => {
  const [value, setValue] = useState(0);
  const [prevValue, setPrevValue] = useState(0);
  const [count, setCount] = useState(0);
  const frameMs = useMemo(() => 1000 / 60, []); //1프레임 실행 시간

  /**
   * 지속시간 동안 count 값이 변경 될 frame
   */
  const totalFrames = useMemo(
    () => Math.round(duration / frameMs),
    [duration, frameMs],
  );

  /**
   * 0 ~ 1 사이 움직임 진척도
   */
  const easeInOutCirc = useCallback((x: number) => {
    return x < 0.5
      ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
      : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
  }, []);

  useEffect(() => {
    // number prop으로 현재 value state 지정,
    // value state의 이전 값을 prevValue state로 지정
    setValue((prev) => {
      setPrevValue(() => prev);
      return number;
    });
  }, [number]);

  useEffect(() => {
    let currentNum = 0; // 시작 frame
    const maxProgress = 1;
    let rafId: number;
    const generateCount = () => {
      // 🔽 진척도 -> 시작 frame이 totalFrames와 동일해질 때까지 진척도를 계산
      const progress = easeInOutCirc(++currentNum / totalFrames); // 진척도

      if (prevValue > value) {
        // 🔽 이전 값이 새로운 값 보다 큰 경우
        setCount(prevValue - (prevValue - value) * progress);
      } else {
        //🔽 이전 값이 새로운 값 보다 작은 경우
        setCount(prevValue + (value - prevValue) * progress);
      }

      // 🔽 진척도가 1인 경우 rAF cancel
      if (progress === maxProgress) {
        cancelAnimationFrame(rafId);
        return;
      }

      // 🔽 진척도가 1이 아닌 경우 rAF 재귀 호출
      rafId = requestAnimationFrame(generateCount);
    };
    // 🔽 rAF 최초 호출
    rafId = requestAnimationFrame(generateCount);

    // 🔽 컴포넌트 unmount 시 rAF cancel
    return () => cancelAnimationFrame(rafId);
  }, [easeInOutCirc, prevValue, totalFrames, value]);

  return (
    <>
      <CounterP>
        {count.toLocaleString('ko-KR', {
          minimumFractionDigits: minimumFractionDigits,
          maximumFractionDigits: maximumFractionDigits,
        })}
      </CounterP>
    </>
  );
};

export default Counter;
