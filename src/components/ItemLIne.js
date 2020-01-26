import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  width: 100%;
`

const ItemList = styled.div`
  width: 100%;
  height: 3em;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-auto-columns: 20%;
  grid-auto-flow: column;
  scroll-snap-type: x mandatory;
`

const Item = styled.div`
  scroll-snap-align: center;
  min-width: 4em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: ${({ itemPlacement }) =>
    itemPlacement === "bottom" ? "flex-end" : "flex-start"};
  cursor: ${({ isMiddleItem }) => (isMiddleItem ? "auto" : "pointer")};
  font-size: ${({ isMiddleItem }) => (isMiddleItem ? "2rem" : "1rem")};
`

export default ({
  itemList,
  currentItem,
  onItemChange,
  itemPlacement = "top",
  uniqueName,
}) => {
  const [middleItem, setMiddleItem] = useState(itemList[0])

  const handleItemChange = _item => {
    const middleItemNode = document.getElementById(
      `${uniqueName}-item-${middleItem.id}`
    )
    const middleItemLeftPos = middleItemNode.offsetLeft
    const itemListNode = document.getElementById(`${uniqueName}-item-list`)
    const itemNode = document.getElementById(`${uniqueName}-item-${_item.id}`)
    const leftPos = itemNode.offsetLeft
    itemListNode.scrollTo({
      left: itemListNode.scrollLeft + (leftPos - middleItemLeftPos),
      behavior: "smooth",
    })
    setMiddleItem(_item)
    if (onItemChange) {
      onItemChange(_item)
    }
  }

  useEffect(() => {
    if (middleItem && currentItem) {
      handleItemChange(currentItem)
    }
  }, [currentItem])

  return (
    <Container>
      <ItemList id={`${uniqueName}-item-list`}>
        <Item></Item>
        <Item></Item>
        {itemList.map((_item, idx) => (
          <Item
            itemPlacement={itemPlacement}
            id={`${uniqueName}-item-${_item.id}`}
            key={idx}
            isMiddleItem={middleItem.id === _item.id}
            onClick={() => {
              if (middleItem.id !== _item.id) {
                handleItemChange(_item)
              }
            }}
          >
            {_item.label}
          </Item>
        ))}
        <Item></Item>
        <Item></Item>
      </ItemList>
    </Container>
  )
}
