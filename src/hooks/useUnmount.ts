import { useEffect, useRef } from 'react'
import useLastest from './useLastest';

/**
 * 组件卸载时运行
 * @param fn 
 */
const useUnmount = (fn: () => void) => {
    const fnRef = useLastest(fn);
    useEffect(() => () => fnRef.current(), [])
};

export default useUnmount;