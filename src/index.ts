import { Plugin } from 'rollup';

/**
 * rollup-plugin-xxx
 */
function rollupPluginMyPlugin(): Plugin {
  return {
    // should be rollup-plugin-[name]
    name: 'rollup-plugin-myplugin',
    /**
     * 处理 rollup 配置项
     * https://rollupjs.org/guide/en/#options
     * @param options 用户 rollup 配置项
     */
    options(options) {},
    /**
     * 获取完整的 rollup 配置项
     * https://rollupjs.org/guide/en/#buildstart
     * @param options 完整的 rollup 配置项
     */
    buildStart(options) {},
    /**
     * 修改 import 模块的路径，例如 resolve.alias 功能的实现
     * https://rollupjs.org/guide/en/#resolveid
     * @param source import 模块的路径
     * @param importer 完整的模块路径
     * @param options isEntry 表示当前解析的是否是用户定义的 rollup 入口文件
     * @return false： 当返回 false 的时候，当前模块会被当做 external 模块而不会被打包
     * @return null： 当返回 null 的时候，当前 hook 调用会被忽略
     */
    resolveId(source, importer, options) {},
    /**
     * 自定义文件加载的方式，可以控制 tree shaking
     * https://rollupjs.org/guide/en/#load
     * @param id 模块路径
     * @return 返回模块加载后的代码字符
     */
    load(id) {},
    /**
     * 自定义指定模块文件的解析，例如支持 css 等静态资源模块的解析
     * https://rollupjs.org/guide/en/#transform
     * @param code 
     * @param id 
     */
    transform(code, id) {},
    /**
     * 处理 rollup 输出配置
     * https://rollupjs.org/guide/en/#outputoptions
     * @param options 用户配置
     */
    outputOptions(options) {},
    /**
     * 在调用 bundle.generate() 或 bundle.write() 时调用，获取解析过的输出配置和输入配置
     * https://rollupjs.org/guide/en/#renderstart
     * @param outputOptions 输出配置
     * @param inputOptions 输入配置
     */
    renderStart(outputOptions, inputOptions) {},
    // rollup 打包过程中追加显示在控制台的一些信息
    // https://rollupjs.org/guide/en/#outputbanneroutputfooter
    banner: '',
    footer: '',
    intro: '',
    outro: '',
    /**
     * 转换 import() 语法
     * https://rollupjs.org/guide/en/#renderdynamicimport
     */
    renderDynamicImport() {},
    /**
     * 更新 chunk hash 值，返回的值会传入 hash.update
     * https://rollupjs.org/guide/en/#augmentchunkhash
     * @param chunk 
     */
    augmentChunkHash(chunk) {},
    /**
     * 自定义模块文件的路径解析方式
     * https://rollupjs.org/guide/en/#resolvefileurl
     */
    resolveFileUrl() {},
    /**
     * 自定义处理 import.meta.someProperty 语法，例如 vite 的 import.meta.glob
     * https://rollupjs.org/guide/en/#resolveimportmeta
     */
    resolveImportMeta() {},
    /**
     * 自定义转换指定的 chunk
     * https://rollupjs.org/guide/en/#renderchunk
     */
    renderChunk() {},
    /**
     * 在生成但是没有写入文件到文件系统前触发，可用于删除将在打包后生成的 chunk、assets 等文件，如果要修改应该使用 writeBundle
     * https://rollupjs.org/guide/en/#generatebundle
     * @param options 输出配置项
     * @param bundle 输出文件对象
     */
    generateBundle(options, bundle) {},
    /**
     * 在写入文件系统后调用，可用于修改或者删除部分已生成的 chunk
     * https://rollupjs.org/guide/en/#writebundle
     * @param options 输出配置项
     * @param bundle 
     */
    writeBundle(options, bundle) {},
    /**
     * rollup 打包完或出错的时候自动触发，或者使用 bundle.close 触发，可用于清理可能正在运行的任何外部服务
     * https://rollupjs.org/guide/en/#closebundle
     */
    closeBundle() {}
  };
}

export default rollupPluginMyPlugin;