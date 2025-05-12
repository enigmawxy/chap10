const initialPos = { x: 0, y: 0 }
const type = 'process'
const data = { status: null }

export const initialNodes = [
  {
    id: '1',
    position: initialPos,
    type,
    data,
  },
  {
    id: '2',
    position: initialPos,
    type,
    data,
  },
  {
    id: '2a',
    position: initialPos,
    type,
    data,
  },
  {
    id: '2b',
    position: initialPos,
    type,
    data,
  },
  {
    id: '2c',
    position: initialPos,
    type,
    data,
  },
  {
    id: '2d',
    position: initialPos,
    type,
    data,
  },
  {
    id: '3',
    position: initialPos,
    type,
    data,
  },
  {
    id: '4',
    position: initialPos,
    type,
    data,
  },
  {
    id: '5',
    position: initialPos,
    type,
    data,
  },
  {
    id: '6',
    position: initialPos,
    type,
    data,
  },
  {
    id: '7',
    position: initialPos,
    type,
    data,
  },
]

export const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-2a', source: '2', target: '2a' },
  { id: 'e2-2b', source: '2', target: '2b' },
  { id: 'e2-2c', source: '2', target: '2c' },
  { id: 'e2c-2d', source: '2c', target: '2d' },
  { id: 'e3-7', source: '3', target: '4' },
  { id: 'e4-5', source: '4', target: '5' },
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e5-7', source: '5', target: '7' },
]

export const kgNodes = [
  { type: 'person', label: '个人', icon: 'user' },
  { type: 'people', label: '人物', icon: 'user' },
  { type: 'tag', label: '标识', icon: 'star' },
  { type: 'case', label: '病例', icon: 'box' },
  { type: 'taxi', label: '出租车', icon: 'car' },
  { type: 'phone', label: '电话', icon: 'phone' },
  { type: 'location', label: '地址', icon: 'map' },
  { type: 'vehicle', label: '动车', icon: 'car' },
  { type: 'flight', label: '航班', icon: 'plane' },
  { type: 'nurse', label: '护士', icon: 'user' },
  { type: 'prison', label: '监狱', icon: 'bank' },
  { type: 'car', label: '机动车', icon: 'car' },
  { type: 'hotel', label: '酒店', icon: 'building' },
  { type: 'ambulance', label: '救护车', icon: 'ambulance' },
  { type: 'truck', label: '卡口', icon: 'truck' },
  { type: 'port', label: '口岸', icon: 'anchor' },
  { type: 'ship', label: '轮船', icon: 'ship' },
  { type: 'event', label: '事件', icon: 'calendar' },
  { type: 'space', label: '时空', icon: 'cube' },
  { type: 'call', label: '通话记录', icon: 'phone' },
  { type: 'netbar', label: '网吧', icon: 'home' },
]
