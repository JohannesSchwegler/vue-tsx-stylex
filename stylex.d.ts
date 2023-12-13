declare module "@stylexjs/rollup-plugin" {
import { UserConfig } from 'vite'

type ArrayType<T> = T extends (infer H)[] ? H : T
    function stylexPlugin(dev?: boolean, unstable_moduleResolution?: { type: string, rootDir: string },
      fileName?: string, babelConfig?: { plugins: unknown[], presets: unknown[]}): ArrayType<UserConfig['plugins']> 
    export = stylexPlugin;
  }
  