const normal = {
  strokeStart  : 0,
  strokeEnd    : 100,
  radius       : 30,
  opacity      : 1,
  arrowOffset  : 30,
  arrowOpacity : 0
}

const initial = {
  strokeStart : 0,
  strokeEnd   : 0
}

const link = {
  radius  : 0,
  opacity : 0
}

const drag = {
  radius       : 15,
  arrowOpacity : 1,
  arrowOffset  : 5
}

const sticky = {
  radius: 50
}

const loading = {
  strokeStart: 100
}

export default {
  initial,
  normal,
  link,
  drag,
  sticky,
  loading
}
