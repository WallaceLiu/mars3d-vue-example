import * as mars3d from "mars3d"

export let map // mars3d.Map三维地图对象
export let graphicLayer // 矢量图层对象

// 需要覆盖config.json中地图属性参数（当前示例框架中自动处理合并）
export const mapOptions = {
  scene: {
    center: { lat: 24.688611, lng: 119.260277, alt: 1673759, heading: 348, pitch: -69 },
    mapMode2D: Cesium.MapMode2D.ROTATE // 避免切换到二维时图标有黑影
  }
}

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance // 记录map

  // addGeojosnLayer()
  addBusinessLayer()
}

function addGeojosnLayer() {
  graphicLayer = new mars3d.layer.GeoJsonLayer({
    name: "体育设施点",
    popup: "all",
    clustering: {
      enabled: true,
      pixelRange: 20,
      clampToGround: false
    },
    center: { lat: 31.639275, lng: 117.388877, alt: 52574.8, heading: 339.3, pitch: -65 },
    flyTo: true
  })
  map.addLayer(graphicLayer)

  mars3d.Util.fetchJson({
    url: "//data.mars3d.cn/file/geojson/hfty-point.json"
  }).then((res) => {
    const points = []
    for (let i = 0; i < res.features.length; i++) {
      const item = res.features[i]

      const p = new mars3d.graphic.LabelEntity({
        position: item.geometry.coordinates,
        style: {
          show: true,
          text: "测试",
          font_size: 14,
          fill: true,
          color: "#fcfa36",
          font_family: "楷体",
          font_weight: "bold",
          outline: true,
          outlineColor: "rgba(0,0,0,0.8)",
          outlineWidth: 3,
          background: true,
          backgroundColor: "#009476",
          visibleDepth: false
        }
      })
      points.push(p)
    }
    graphicLayer.addGraphic(points)
  })
}

function addBusinessLayer() {
  // 创建矢量数据图层（业务数据图层）
  graphicLayer = new mars3d.layer.BusineDataLayer({
    url: "//data.mars3d.cn/file/apidemo/mudi.json",
    dataColumn: "data", // 数据接口中对应列表所在的取值字段名
    lngColumn: "lng",
    latColumn: "lat",
    altColumn: "z",
    // 自定义创建对象，可替代symbol、
    // onCreateGraphic: function (e) {
    //   const graphic = new mars3d.graphic.BillboardEntity({
    //     position: e.position,
    //     style: {
    //       image: "img/marker/lace-blue.png",
    //       horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
    //       verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    //     },
    //     attr: e.attr
    //   })
    //   graphicLayer.addGraphic(graphic)
    // },
    symbol: {
      type: "billboard", // 对应是 mars3d.graphic.BillboardEntity
      styleOptions: {
        image: "img/marker/mark-blue.png",
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        scaleByDistance: new Cesium.NearFarScalar(1000, 0.7, 5000000, 0.3),
        label: {
          text: "{text}",
          font_size: 19,
          color: Cesium.Color.AZURE,
          outline: true,
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 2,
          horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(10, 0), // 偏移量
          distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 80000)
        }
      }
    },
    // 点的聚合配置
    clustering: {
      enabled: true,
      pixelRange: 20,
      clampToGround: false
      // opacity: 1
      // getImage: function (count) {   //getImage是完全自定义方式
      //   let colorIn
      //   if (count < 10) {
      //     colorIn = 'rgba(110, 204, 57, 0.6)'
      //   } else if (count < 100) {
      //     colorIn = 'rgba(240, 194, 12,  0.6)'
      //   } else {
      //     colorIn = 'rgba(241, 128, 23,  0.6)'
      //   }
      //   return mars3d.Util.getCircleImage(count, {
      //     color: colorIn,
      //     radius: 30,
      //   })
      // },
    }
  })
  map.addLayer(graphicLayer)

  graphicLayer.on("clustering", function (event) {
    console.log("新增聚合对象", event)
  })

  graphicLayer.bindPopup(function (event) {
    if (event.graphic.cluster && event.graphic.getGraphics) {
      const graphics = event.graphic.getGraphics() // 对应的grpahic数组，可以自定义显示
      if (graphics) {
        const inthtml = `单击了聚合点(${graphics.length}个)`
        return inthtml
      }
    }

    const item = event.graphic?.attr
    if (!item) {
      return false
    }
    const inthtml = `<table style="width: auto;">
                  <tr>
                    <th scope="col" colspan="2" style="text-align:center;font-size:15px;">${item.text} </th>
                  </tr>
                  <tr>
                    <td>省：</td><td>${item.province}</td>
                  </tr>
                  <tr>
                    <td>市：</td> <td>${item.city}</td>
                  </tr>
                  <tr>
                    <td>县/区：</td> <td>${item.district}</td>
                  </tr>
                  <tr>
                    <td>地址：</td> <td>${item.address}</td>
                  </tr>
                  <tr>
                    <td>视频：</td> <td><video src='http://data.mars3d.cn/file/video/lukou.mp4' controls autoplay style="width: 300px;" ></video></td>
                  </tr>
                </table>`
    return inthtml
  })

  // 单击事件
  graphicLayer.on(mars3d.EventType.click, function (event) {
    console.log("你单击了", event)

    if (map.camera.positionCartographic.height > 90000) {
      const graphic = event.graphic
      // graphic.closePopup()
      if (graphic?.type) {
        // 单击了具体的点对象
        const position = graphic.positionShow
        map.flyToPoint(position, {
          radius: 5000, // 距离目标点的距离
          duration: 4,
          complete: function (e) {
            // 飞行完成回调方法
            // graphic.openPopup()
          }
        })
      } else {
        // 单击了聚合的点
        const arrEntity = event.pickedObject.id
        map.flyTo(arrEntity)
      }
    }
  })
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  graphicLayer.remove()
  graphicLayer = null

  map = null
}

// 计算贴地高度示例代码，可以将获取到的高度更新到数据库内，后续不用重复计算。
export function getDataSurfaceHeight() {
  if (graphicLayer.length === 0) {
    globalMsg("数据尚未加载成功！")
    return
  }
  showLoading()

  // 对图层内的数据做贴地运算,自动得到贴地高度
  graphicLayer.autoSurfaceHeight().then((graphics) => {
    hideLoading()

    const arr = []
    for (let i = 0, len = graphics.length; i < len; i++) {
      const graphic = graphics[i]
      const point = graphic.point
      arr.push({
        ...graphic.attr,
        lat: point.lat,
        lng: point.lng,
        z: point.alt
      })
    }
    mars3d.Util.downloadFile("point.json", JSON.stringify({ data: arr }))
  })
}

export function enabledAggressive(val) {
  graphicLayer.clustering = val
}
