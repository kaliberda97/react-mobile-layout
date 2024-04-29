import { useState } from "react";
import { Block } from "../Block/Block";
import './Menu.scss'
import { MenuItem } from "./MenuItem/MenuItem";
const menuItemsIcon = [
  'home',
  'balance',
  'stats',
  'message'
]

export const Menu = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const setActive = (idx) => () => setActiveIdx(idx)

  return (
    (
      <Block className="Menu" big>
        {menuItemsIcon.map((item, idx) => (
          <MenuItem
            isActive={idx === activeIdx}
            onClick={setActive(idx)}
            icon={item}
          />
        ))}
      </Block>
    )
  )
}

