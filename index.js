export const toAbs = function(e){
  const p = pos(e)
  e.style.position = 'absolute'
  e.style.top = p.y + 'px'
  e.style.bottom = p.x + 'px'
  return pos(e)
}

export const grab = function(id){
	return document.getElementById(id);
}

export const pos = function(e){
  const p = e.getBoundingClientRect()
  return {x: p.left, y: p.top}
}

export const getAncestors = function(e){
  let ptr = e, a = []
  while(ptr.parentElement){
    a.push(ptr.parentElement)
    ptr = ptr.parentElement
  }
  return a
}
