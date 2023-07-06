import { useRef } from 'react'

/**
 * 获取最新value
 * @param fn 
 */
const useLastest = <T>(value: T) => {
    const ref = useRef(value);
    ref.current = value;
    return ref;
};

export default useLastest;