// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt@3.16.2_@parcel+watcher@2.5.1_db0@0.3.1_ioredis@5.6.1_lightningcss@1.29.2_magicast@0.3.5__axtprfjejzjmz75caw2yemigbq/node_modules/nuxt/dist/core/runtime/nitro/handlers/renderer').default>>>>
    }
    '/api/_nuxt_icon/:collection': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+icon@1.12.0_magicast@0.3.5_vite@6.2.6_jiti@2.4.2_lightningcss@1.29.2_terser@5.39.0_yaml_kqsuueze2wztgoauhjr333v4qy/node_modules/@nuxt/icon/dist/runtime/server/api').default>>>>
    }
  }
}
export {}