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
  <svg v-if="name === 'reset'" width="16" height="16" viewBox="0 0 32 32">
    <path d="M18 28A12 12 0 1 0 6 16v6.2l-3.6-3.6L1 20l6 6l6-6l-1.4-1.4L8 22.2V16a10 10 0 1 1 10 10Z" />
  </svg>

  <svg v-if="name === 'update'" width="16" height="16" viewBox="0 0 24 24">
    <path
      d="M14 20v-2h2.6l-3.2-3.2l1.425-1.425L18 16.55V14h2v6Zm-8.6 0L4 18.6L16.6 6H14V4h6v6h-2V7.4Zm3.775-9.425L4 5.4L5.4 4l5.175 5.175Z"
    />
  </svg>

  <svg v-if="name === 'sun'" width="16" height="16" viewBox="0 0 24 24">
    <path
      d="M12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05L4.575 6q-.3-.275-.288-.7q.013-.425.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7q0 .4-.275.7q-.275.3-.687.287q-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712q0-.413.275-.688q.275-.3.688-.287q.412.012.712.287L19.425 18q.3.275.288.7q-.013.425-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688q.012-.412.287-.712L18 4.575q.275-.3.7-.288q.425.013.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275q-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275q.412 0 .687.275q.3.275.288.688q-.013.412-.288.712L6 19.425q-.275.3-.7.287q-.425-.012-.725-.287Z"
    />
  </svg>

  <svg v-if="name === 'moon'" width="16" height="16" viewBox="0 0 24 24">
    <path
      d="M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025q.337.025.662.075q-1.025.725-1.637 1.887Q11.1 6.15 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.375 0 2.525-.613q1.15-.612 1.875-1.637q.05.325.075.662Q21 11.65 21 12q0 3.75-2.625 6.375T12 21Z"
    />
  </svg>

  <svg v-if="name === 'log'" width="16" height="16" viewBox="0 0 24 24">
    <path
      d="M20 19V7H4v12h16m0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16m-7 14v-2h5v2h-5m-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59l3.99-4Z"
    />
  </svg>
</template>
