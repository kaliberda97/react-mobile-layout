import './Actions.scss'
import { Block } from "../Block/Block";


export const Actions  = () => (
<div className='Actions'>
    <Block>
        <i className='ic-copy'/>
        <span>COPY CARD NUMBER</span>
    </Block>
    <Block>
        <i className='ic-show'/>
        <span>SHOW CVV</span>
    </Block>
</div>
)