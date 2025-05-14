<template>
  <nav class="header-nav">
    <div class="container">
      <div class="nav-content">
        <div class="nav-links">
          <a href="#" class="nav-link">首页</a>
          <a href="#" class="nav-link">产品</a>
        </div>
        <button class="login-button">
          登录
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No props or additional logic needed for now
</script>

<style>
.header-nav {
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.container {
  max-width: 72rem; /* equivalent to max-w-6xl */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem; /* equivalent to h-16 */
}

.nav-links {
  display: flex;
}

.nav-link {
  color: #4b5563; /* equivalent to text-gray-700 */
  text-decoration: none;
  margin-right: 2rem;
}

.nav-link:hover {
  color: #3b82f6; /* equivalent to hover:text-blue-500 */
}

.login-button {
  background-color: #3b82f6; /* equivalent to bg-blue-500 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
}

.login-button:hover {
  background-color: #2563eb; /* equivalent to hover:bg-blue-600 */
}
</style>
