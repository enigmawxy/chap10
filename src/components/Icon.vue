<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: 26,
  },
})
</script>

<template>
  <svg v-if="name === 'play'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <path d="M8 5v14l11-7z" fill="currentColor" />
  </svg>

  <svg v-else-if="name === 'stop'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="size" :height="size" :style="{display:'block'}">
    <path
      fill="currentColor"
      d="M8 16h8V8H8zm4 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
    />
  </svg>

  <svg v-else-if="name === 'horizontal'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <path d="M2,12 L22,12" stroke="currentColor" stroke-width="2" />
    <path d="M7,7 L2,12 L7,17" stroke="currentColor" stroke-width="2" fill="none" />
    <path d="M17,7 L22,12 L17,17" stroke="currentColor" stroke-width="2" fill="none" />
  </svg>

  <svg v-else-if="name === 'vertical'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <path d="M12,2 L12,22" stroke="currentColor" stroke-width="2" />
    <path d="M7,7 L12,2 L17,7" stroke="currentColor" stroke-width="2" fill="none" />
    <path d="M7,17 L12,22 L17,17" stroke="currentColor" stroke-width="2" fill="none" />
  </svg>

  <svg v-else-if="name === 'chevron-left'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
  </svg>

  <svg v-else-if="name === 'chevron-right'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor" />
  </svg>

  <svg v-else-if="name === 'user'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <circle cx="12" cy="8" r="4" fill="#8F8F8F"/>
    <path d="M4 20c0-4 16-4 16 0" fill="none" stroke="#8F8F8F" stroke-width="2"/>
  </svg>

  <svg v-else-if="name === 'star'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <polygon points="12,2 15,9 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,9" fill="#8F8F8F"/>
  </svg>

  <svg v-else-if="name === 'box'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <rect x="4" y="7" width="16" height="10" rx="2" fill="#8F8F8F"/>
    <path d="M4 7l8 5 8-5" fill="none" stroke="#fff" stroke-width="1.5"/>
  </svg>

  <svg v-else-if="name === 'car'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <rect x="3" y="11" width="18" height="5" rx="2" fill="#8F8F8F"/>
    <circle cx="7" cy="18" r="2" fill="#8F8F8F"/>
    <circle cx="17" cy="18" r="2" fill="#8F8F8F"/>
  </svg>

  <svg v-else-if="name === 'phone'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.2c1.1.4 2.3.6 3.6.6a1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.3.2 2.5.6 3.6a1 1 0 01-.2 1l-2.3 2.2z" fill="#8F8F8F"/>
  </svg>

  <svg v-else-if="name === 'map'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <circle cx="12" cy="10" r="3" fill="#8F8F8F"/>
    <path d="M12 2C7 2 4 7 4 10c0 5 8 12 8 12s8-7 8-12c0-3-3-8-8-8z" fill="none" stroke="#8F8F8F" stroke-width="2"/>
  </svg>

  <svg v-else-if="name === 'plane'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <path d="M2 16l20-5-20-5 7 5-7 5zM22 11v2l-20 5v-2l20-5z" fill="#8F8F8F"/>
  </svg>

  <svg v-else-if="name === 'bank'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <rect x="4" y="10" width="16" height="8" rx="2" fill="#8F8F8F"/>
    <rect x="8" y="14" width="2" height="4" fill="#fff"/>
    <rect x="14" y="14" width="2" height="4" fill="#fff"/>
    <rect x="11" y="14" width="2" height="4" fill="#fff"/>
    <polygon points="12,3 2,10 22,10" fill="#8F8F8F"/>
  </svg>

  <svg v-else-if="name === 'building'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <rect x="4" y="7" width="16" height="13" rx="2" fill="#8F8F8F"/>
    <rect x="8" y="11" width="2" height="2" fill="#fff"/>
    <rect x="14" y="11" width="2" height="2" fill="#fff"/>
    <rect x="8" y="15" width="2" height="2" fill="#fff"/>
    <rect x="14" y="15" width="2" height="2" fill="#fff"/>
  </svg>

  <svg v-else-if="name === 'ambulance'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <rect x="3" y="11" width="18" height="5" rx="2" fill="#8F8F8F"/>
    <rect x="7" y="8" width="10" height="3" fill="#fff"/>
    <circle cx="7" cy="18" r="2" fill="#8F8F8F"/>
    <circle cx="17" cy="18" r="2" fill="#8F8F8F"/>
  </svg>

  <svg v-else-if="name === 'truck'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <rect x="2" y="13" width="15" height="5" rx="2" fill="#8F8F8F"/>
    <rect x="17" y="15" width="5" height="3" fill="#8F8F8F"/>
    <circle cx="7" cy="20" r="2" fill="#fff"/>
    <circle cx="19" cy="20" r="2" fill="#fff"/>
  </svg>

  <svg v-else-if="name === 'anchor'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <circle cx="12" cy="7" r="2" fill="#8F8F8F"/>
    <path d="M12 9v7m0 0c-4 0-7-3-7-7m7 7c4 0 7-3 7-7" stroke="#8F8F8F" stroke-width="2" fill="none"/>
  </svg>

  <svg v-else-if="name === 'ship'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <path d="M3 18c3 2 15 2 18 0l-2-7H5l-2 7z" fill="#8F8F8F"/>
    <rect x="7" y="8" width="10" height="3" fill="#fff"/>
  </svg>

  <svg v-else-if="name === 'calendar'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <rect x="3" y="5" width="18" height="16" rx="2" fill="#8F8F8F"/>
    <rect x="7" y="9" width="2" height="2" fill="#fff"/>
    <rect x="11" y="9" width="2" height="2" fill="#fff"/>
    <rect x="15" y="9" width="2" height="2" fill="#fff"/>
  </svg>

  <svg v-else-if="name === 'cube'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <rect x="6" y="6" width="12" height="12" rx="2" fill="#8F8F8F"/>
    <path d="M6 6l6 6 6-6" fill="none" stroke="#fff" stroke-width="1.5"/>
  </svg>

  <svg v-else-if="name === 'home'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :style="{display:'block'}">
    <path d="M3 12l9-8 9 8v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4h-4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="#8F8F8F"/>
  </svg>
</template>
