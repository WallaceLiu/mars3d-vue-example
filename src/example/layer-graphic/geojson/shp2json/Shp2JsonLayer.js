// import { toGeoJSON as shpToGeoJSON } from "shp-geojson"

/**
 * 通过转geojson方式 加载shp文件。
 * shpUtil 使用需要引入 ../lib/geojson/shp-geojson.js文件
 */
class Shp2JsonLayer extends mars3d.layer.GeoJsonLayer {
  /**
   * 加载新数据 或 刷新数据
   *
   * @param {Object} [newOptions] 新设定的参数，会与类的构造参数合并。
   * @param {String} [newOptions.url] geojson文件或服务url地址
   * @param {Object} [newOptions.data] geojson格式规范数据对象，与url二选一即可。
   * @param {Object} [newOptions.类参数] 包含当前类支持的所有参数
   * @param {BaseGraphicLayer.ConstructorOptions} [newOptions.通用参数] 包含父类支持的所有参数
   * @return {this} 当前对象本身，可以链式调用
   */
  load(newOptions) {
    if (newOptions) {
      if (Cesium.defaultValue(newOptions.clear, true)) {
        delete this.options.url
        delete this.options.data
      }
      this.clear()

      this.options = {
        ...this.options,
        ...newOptions
      }
    }

    // url是需要包括shp、dbf、prj等文件的zip压缩包
    if (this.options.url) {
      shpUtil
        .toGeoJSON(this.options.url)
        .then((data) => {
          if (this._state === mars3d.State.REMOVED) {
            return
          }
          this._load_data(data)
        })
        .catch(function (error) {
          console.error("服务出错", error)
        })
    } else {
      if (newOptions) {
        console.warn("Shp2JsonLayer：没有传入 url 参数,请确认是否有误。")
      }
    }
  }
}

mars3d.layer.Shp2JsonLayer = Shp2JsonLayer

// 注册下
mars3d.LayerUtil.register("kml2json", Shp2JsonLayer)
