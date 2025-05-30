/**
 * 图谱存储工具
 * 使用IndexedDB持久化存储图谱数据
 */

// 数据库配置
const DB_NAME = 'graph_db';
const STORE_NAME = 'graphs';
const DEFAULT_KEY = 'graph-data';

// 打开数据库连接
const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    
    request.onerror = (event) => {
      reject(`打开数据库失败: ${event.target.error}`);
    };
    
    request.onsuccess = (event) => {
      resolve(event.target.result);
    };
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
};

/**
 * 保存图谱数据到IndexedDB
 * @param {Object} graphData - 包含节点和边的图谱数据
 * @param {string} [key=DEFAULT_KEY] - 存储键名
 * @returns {Promise<boolean>} - 保存是否成功
 */
export const saveGraphData = async (graphData, key = DEFAULT_KEY) => {
  try {
    // 创建可序列化的副本
    const serializableData = {
      nodes: JSON.parse(JSON.stringify(graphData.nodes)),
      edges: JSON.parse(JSON.stringify(graphData.edges))
    };
    
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    
    store.put(serializableData, key);
    
    return new Promise((resolve) => {
      transaction.oncomplete = () => {
        console.log(`图谱数据已保存到 IndexedDB (${key})`);
        resolve(true);
      };
      
      transaction.onerror = (event) => {
        console.error('保存图谱数据失败:', event.target.error);
        resolve(false);
      };
    });
  } catch (error) {
    console.error('保存图谱数据失败:', error);
    return false;
  }
};

/**
 * 从IndexedDB加载图谱数据
 * @param {string} [key=DEFAULT_KEY] - 存储键名
 * @returns {Promise<Object>} - 图谱数据
 */
export const loadGraphData = async (key = DEFAULT_KEY) => {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(key);
    
    return new Promise((resolve) => {
      request.onsuccess = () => {
        const graphData = request.result;
        if (graphData) {
          console.log(`从 IndexedDB (${key}) 加载了图谱数据`);
          resolve(graphData);
        } else {
          console.log(`未找到图谱数据 (${key})，返回空图谱`);
          resolve({ nodes: [], edges: [] });
        }
      };
      
      request.onerror = (event) => {
        console.error('加载图谱数据失败:', event.target.error);
        resolve({ nodes: [], edges: [] });
      };
    });
  } catch (error) {
    console.error('加载图谱数据失败:', error);
    return { nodes: [], edges: [] };
  }
};

/**
 * 删除IndexedDB中的图谱数据
 * @param {string} [key=DEFAULT_KEY] - 存储键名
 * @returns {Promise<boolean>} - 删除是否成功
 */
export const deleteGraphData = async (key = DEFAULT_KEY) => {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    
    store.delete(key);
    
    return new Promise((resolve) => {
      transaction.oncomplete = () => {
        console.log(`已删除图谱数据 (${key})`);
        resolve(true);
      };
      
      transaction.onerror = (event) => {
        console.error('删除图谱数据失败:', event.target.error);
        resolve(false);
      };
    });
  } catch (error) {
    console.error('删除图谱数据失败:', error);
    return false;
  }
};

/**
 * 获取所有保存的图谱列表
 * @returns {Promise<Array>} - 图谱键名列表
 */
export const listGraphs = async () => {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAllKeys();
    
    return new Promise((resolve) => {
      request.onsuccess = () => {
        resolve(request.result);
      };
      
      request.onerror = (event) => {
        console.error('获取图谱列表失败:', event.target.error);
        resolve([]);
      };
    });
  } catch (error) {
    console.error('获取图谱列表失败:', error);
    return [];
  }
};

/**
 * 自动保存图谱数据
 * 可以设置为定时调用，实现自动保存功能
 * @param {Object} graphData - 图谱数据
 * @param {string} [key=DEFAULT_KEY] - 存储键名
 * @returns {Promise<boolean>} - 保存是否成功
 */
export const autoSaveGraphData = async (graphData, key = DEFAULT_KEY) => {
  return saveGraphData(graphData, key);
};

export default {
  saveGraphData,
  loadGraphData,
  deleteGraphData,
  listGraphs,
  autoSaveGraphData
};
