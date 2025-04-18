// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends {default: Plugin<infer T>} ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+nuxt@0.11.0_magicast@0.3.5_pinia@3.0.2_typescript@5.8.3_vue@3.5.13_typescript@5.8.3__/node_modules/@pinia/nuxt/dist/runtime/payload-plugin.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+colada-nuxt@0.1.1_@pinia+colada@0.14.2_pinia@3.0.2_typescript@5.8.3_vue@3.5.13_typescript@5.8.3____magicast@0.3.5/node_modules/@pinia/colada-nuxt/dist/runtime/payload-plugin.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.1_db0@0.3.1_ioredis@5.6.1_lightningcss@1.29.2_magicast@0.3.5__axtprfjejzjmz75caw2yemigbq/node_modules/nuxt/dist/app/plugins/revive-payload.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.1_db0@0.3.1_ioredis@5.6.1_lightningcss@1.29.2_magicast@0.3.5__axtprfjejzjmz75caw2yemigbq/node_modules/nuxt/dist/head/runtime/plugins/unhead.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.1_db0@0.3.1_ioredis@5.6.1_lightningcss@1.29.2_magicast@0.3.5__axtprfjejzjmz75caw2yemigbq/node_modules/nuxt/dist/pages/runtime/plugins/router.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.1_db0@0.3.1_ioredis@5.6.1_lightningcss@1.29.2_magicast@0.3.5__axtprfjejzjmz75caw2yemigbq/node_modules/nuxt/dist/app/plugins/payload.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.1_db0@0.3.1_ioredis@5.6.1_lightningcss@1.29.2_magicast@0.3.5__axtprfjejzjmz75caw2yemigbq/node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.1_db0@0.3.1_ioredis@5.6.1_lightningcss@1.29.2_magicast@0.3.5__axtprfjejzjmz75caw2yemigbq/node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.1_db0@0.3.1_ioredis@5.6.1_lightningcss@1.29.2_magicast@0.3.5__axtprfjejzjmz75caw2yemigbq/node_modules/nuxt/dist/app/plugins/revive-payload.server.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.1_db0@0.3.1_ioredis@5.6.1_lightningcss@1.29.2_magicast@0.3.5__axtprfjejzjmz75caw2yemigbq/node_modules/nuxt/dist/app/plugins/chunk-reload.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+nuxt@0.11.0_magicast@0.3.5_pinia@3.0.2_typescript@5.8.3_vue@3.5.13_typescript@5.8.3__/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.1_db0@0.3.1_ioredis@5.6.1_lightningcss@1.29.2_magicast@0.3.5__axtprfjejzjmz75caw2yemigbq/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+colada-nuxt@0.1.1_@pinia+colada@0.14.2_pinia@3.0.2_typescript@5.8.3_vue@3.5.13_typescript@5.8.3____magicast@0.3.5/node_modules/@pinia/colada-nuxt/dist/runtime/plugin.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+ui@3.0.2_@babel+parser@7.27.0_db0@0.3.1_embla-carousel@8.6.0_ioredis@5.6.1_magicast@0.3_eiavxvfntsids5hrxwa6ymgw74/node_modules/@nuxt/ui/dist/runtime/plugins/colors.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+icon@1.12.0_magicast@0.3.5_vite@6.2.6_jiti@2.4.2_lightningcss@1.29.2_terser@5.39.0_yaml_kqsuueze2wztgoauhjr333v4qy/node_modules/@nuxt/icon/dist/runtime/plugin.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.1_db0@0.3.1_ioredis@5.6.1_lightningcss@1.29.2_magicast@0.3.5__axtprfjejzjmz75caw2yemigbq/node_modules/nuxt/dist/pages/runtime/plugins/prerender.server.js")>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:payload' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'pinia' | 'nuxt:global-components' | 'nuxt:prefetch' | 'Pinia Colada' | '@nuxt/icon'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
