<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
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

  <!-- GRAPHVIS图标 -->
  <svg v-if="name === 'graph'" width="16" height="16" viewBox="0 0 24 24">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
      fill="currentColor"
    />
  </svg>

  <svg v-if="name === 'network'" width="16" height="16" viewBox="0 0 24 24">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41c0 2.08-.8 3.97-2.1 5.39z"
      fill="currentColor"
    />
  </svg>

  <svg v-if="name === 'knowledge'" width="16" height="16" viewBox="0 0 24 24">
    <path
      d="M12 2L2 7l10 5l10-5l-10-5zM2 17l10 5l10-5M2 12l10 5l10-5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>

  <svg v-if="name === 'thinking'" width="16" height="16" viewBox="0 0 24 24">
    <path
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8a8.5 8.5 0 0 1-7.6 4.7a8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8a8.5 8.5 0 0 1 4.7-7.6a8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>

  <svg v-if="name === 'organization'" width="16" height="16" viewBox="0 0 24 24">
    <path
      d="M12 3L1 9l11 6l11-6l-11-6zM1 9v6l11 6l11-6V9M12 15v6"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>

  <!-- 基础元素图标 -->
  <svg v-if="name === 'circle'" width="16" height="16" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" />
  </svg>

  <svg v-if="name === 'square'" width="16" height="16" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" fill="currentColor" opacity="0.2" />
    <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" />
  </svg>

  <svg v-if="name === 'text'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M5 5h14v3h-2V7H7v10h3v2H5V5z" fill="currentColor" />
    <path d="M10 19v-4h2v-2h-2v-2h4v2h-2v2h2v4h-4z" fill="currentColor" />
  </svg>

  <!-- 图谱元素图标 -->
  <svg v-if="name === 'person'" width="16" height="16" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="4" fill="currentColor" />
    <path d="M20 19v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'people'" width="16" height="16" viewBox="0 0 24 24">
    <circle cx="9" cy="8" r="3.5" fill="currentColor" />
    <path d="M16 19v1H2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5z" fill="currentColor" />
    <circle cx="17" cy="8" r="3" fill="currentColor" opacity="0.4" />
    <path d="M22 19v1h-8v-1a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4z" fill="currentColor" opacity="0.4" />
  </svg>

  <svg v-if="name === 'bookmark'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'case'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0-2-.9-2-2V8c0-1.1-.9-2-2-2zm-6 0h-4V4h4v2z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'car'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'phone'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-3H7V5h10v12z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'location'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'bus'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'plane'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'doctor'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" />
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'building'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'truck'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'hotel'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'ambulance'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor" />
    <path d="M18 4h-5v4h5V4zm-2 3h-2V5h2v2z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'camera'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1zM21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66zm.26 1h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2zM8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2zm-6.08 3c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46zm11.27 0l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'harbor'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M20 16l-4-4V8c0-1.1-.9-2-2-2s-2 .9-2 2v2l-4-4L2 12l2 2 4-4v8h4v-6l4 4 4-4-2-2-4 4V8c0-.55.45-1 1-1s1 .45 1 1v4l4 4 2-2-2-2z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'ship'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'event'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'box'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'document'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'time'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor" />
    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'record'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z" fill="currentColor" />
  </svg>

  <svg v-if="name === 'bbs'" width="16" height="16" viewBox="0 0 24 24">
    <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" fill="currentColor" />
  </svg>
</template>
