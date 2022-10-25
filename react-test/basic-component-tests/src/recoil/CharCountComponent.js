import React from 'react'
import {useRecoilState} from 'recoil'
import {charAtom} from "./atom";
import {CharCountGETComponent} from "./CharCountGETComponent";

export const CharCountComponent = props => {
    const [textCount, setTextCount] = useRecoilState(charAtom)
    return <>
        <div>
            <input type="text" onChange={e => setTextCount(e.target.value.length)}/>
            {/*<span>Character Count: {textCount}</span>*/}
            <CharCountGETComponent/>
        </div>
    </>
}
