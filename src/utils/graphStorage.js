/**
 * 图谱存储工具
 * 用于将图谱数据持久化存储到本地文件系统
 */

// 默认的存储文件名
const DEFAULT_FILENAME = 'graph-data.json'

/**
 * 保存图谱数据到本地存储
 * @param {Object} graphData - 包含节点和边的图谱数据
 * @param {Array} graphData.nodes - 节点数组
 * @param {Array} graphData.edges - 边数组
 * @param {string} [filename=DEFAULT_FILENAME] - 存储文件名
 * @returns {Promise<boolean>} - 保存是否成功
 */
export const saveGraphData = async (graphData, filename = DEFAULT_FILENAME) => {
  try {
    // 在浏览器环境中，使用localStorage存储
    localStorage.setItem(filename, JSON.stringify(graphData))
    console.log(`图谱数据已保存到 ${filename}`)
    return true
  } catch (error) {
    console.error('保存图谱数据失败:', error)
    return false
  }
}

/**
 * 从本地存储加载图谱数据
 * @param {string} [filename=DEFAULT_FILENAME] - 存储文件名
 * @returns {Promise<Object|null>} - 图谱数据或null（如果加载失败）
 */
export const loadGraphData = async (filename = DEFAULT_FILENAME) => {
  try {
    // 从localStorage加载数据
    const data = localStorage.getItem(filename)
    if (!data) {
      console.log(`未找到图谱数据文件 ${filename}，返回空图谱`)
      return { nodes: [], edges: [] }
    }
    
    const graphData = JSON.parse(data)
    console.log(`从 ${filename} 加载了图谱数据`)
    return graphData
  } catch (error) {
    console.error('加载图谱数据失败:', error)
    return { nodes: [], edges: [] }
  }
}

/**
 * 删除本地存储中的图谱数据
 * @param {string} [filename=DEFAULT_FILENAME] - 存储文件名
 * @returns {Promise<boolean>} - 删除是否成功
 */
export const deleteGraphData = async (filename = DEFAULT_FILENAME) => {
  try {
    localStorage.removeItem(filename)
    console.log(`已删除图谱数据 ${filename}`)
    return true
  } catch (error) {
    console.error('删除图谱数据失败:', error)
    return false
  }
}

/**
 * 获取所有保存的图谱列表
 * @returns {Promise<Array>} - 图谱文件名列表
 */
export const listGraphs = async () => {
  try {
    // 在浏览器环境中，遍历localStorage查找图谱数据
    const graphs = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key.endsWith('.json')) {
        graphs.push(key)
      }
    }
    return graphs
  } catch (error) {
    console.error('获取图谱列表失败:', error)
    return []
  }
}

/**
 * 自动保存图谱数据
 * 可以设置为定时调用，实现自动保存功能
 * @param {Object} graphData - 图谱数据
 * @param {string} [filename=DEFAULT_FILENAME] - 存储文件名
 * @returns {Promise<boolean>} - 保存是否成功
 */
export const autoSaveGraphData = async (graphData, filename = DEFAULT_FILENAME) => {
  return saveGraphData(graphData, filename)
}

export default {
  saveGraphData,
  loadGraphData,
  deleteGraphData,
  listGraphs,
  autoSaveGraphData
}
