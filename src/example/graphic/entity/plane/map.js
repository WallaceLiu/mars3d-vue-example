import * as mars3d from "mars3d"

export let map // mars3d.Map三维地图对象
export let graphicLayer // 矢量图层对象
export const eventTarget = new mars3d.BaseClass()

/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance // 记录map

  // 创建矢量数据图层
  graphicLayer = new mars3d.layer.GraphicLayer()
  map.addLayer(graphicLayer)

  // 在layer上绑定监听事件
  graphicLayer.on(mars3d.EventType.click, function (event) {
    console.log("监听layer，单击了矢量对象", event)
  })

  bindLayerPopup() // 在图层上绑定popup,对所有加到这个图层的矢量数据都生效
  bindLayerContextMenu() // 在图层绑定右键菜单,对所有加到这个图层的矢量数据都生效

  // 加一些演示数据
  addDemoGraphic1(graphicLayer)
  addDemoGraphic2(graphicLayer)
  addDemoGraphic3(graphicLayer)
  addDemoGraphic4(graphicLayer)
  addDemoGraphic5(graphicLayer)
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  map = null
}

function addDemoGraphic1(graphicLayer) {
  const graphic = new mars3d.graphic.PlaneEntity({
    position: [116.282587, 30.859197, 544.31],
    style: {
      plane: new Cesium.Plane(Cesium.Cartesian3.UNIT_Y, 0.0),
      dimensions_x: 2000.0,
      dimensions_y: 1000.0,
      color: "#00ff00",
      opacity: 0.4,

      // 高亮时的样式（默认为鼠标移入，也可以指定type:'click'单击高亮），构造后也可以openHighlight、closeHighlight方法来手动调用
      highlight: {
        opacity: 0.9
      }
    },
    attr: { remark: "示例1" }
  })
  graphicLayer.addGraphic(graphic) // 还可以另外一种写法: graphic.addTo(graphicLayer)

  // 演示个性化处理graphic
  initGraphicManager(graphic)
}

// 也可以在单个Graphic上做个性化管理及绑定操作
function initGraphicManager(graphic) {
  // 3.在graphic上绑定监听事件
  // graphic.on(mars3d.EventType.click, function (event) {
  //   console.log("监听graphic，单击了矢量对象", event)
  // })
  // 绑定Tooltip
  // graphic.bindTooltip('我是graphic上绑定的Tooltip') //.openTooltip()

  // 绑定Popup
  const inthtml = `<table style="width: auto;">
            <tr>
              <th scope="col" colspan="2" style="text-align:center;font-size:15px;">我是graphic上绑定的Popup </th>
            </tr>
            <tr>
              <td>提示：</td>
              <td>这只是测试信息，可以任意html</td>
            </tr>
          </table>`
  graphic.bindPopup(inthtml).openPopup()

  // 绑定右键菜单
  graphic.bindContextMenu([
    {
      text: "删除对象[graphic绑定的]",
      icon: "fa fa-trash-o",
      callback: (e) => {
        const graphic = e.graphic
        if (graphic) {
          graphic.remove()
        }
      }
    }
  ])

  // 测试 颜色闪烁
  if (graphic.startFlicker) {
    graphic.startFlicker({
      time: 20, // 闪烁时长（秒）
      maxAlpha: 0.5,
      color: Cesium.Color.YELLOW,
      onEnd: function () {
        // 结束后回调
      }
    })
  }
}

//
function addDemoGraphic2(graphicLayer) {
  const graphic = new mars3d.graphic.PlaneEntity({
    position: new mars3d.LngLatPoint(116.329199, 30.881595, 390.3),
    style: {
      plane: new Cesium.Plane(Cesium.Cartesian3.UNIT_Z, 0.0),
      dimensions: new Cesium.Cartesian2(1000.0, 1000.0),
      materialType: mars3d.MaterialType.Image,
      materialOptions: {
        image: "img/textures/poly-rivers.png",
        transparent: true
      }
    },
    attr: { remark: "示例2" }
  })
  graphicLayer.addGraphic(graphic) // 还可以另外一种写法: graphic.addTo(graphicLayer)

  // 绑定Tooltip
  graphic.bindTooltip("我是graphic上绑定的Tooltip")
}

//
function addDemoGraphic3(graphicLayer) {
  const graphic = new mars3d.graphic.PlaneEntity({
    position: new mars3d.LngLatPoint(116.392526, 30.903729, 933.55),
    style: {
      plane: new Cesium.Plane(Cesium.Cartesian3.UNIT_Z, 0.0),
      dimensions: new Cesium.Cartesian2(1000.0, 1000.0),
      color: "rgba(255,0,0,0.5)",
      outline: true,
      outlineColor: "#ffff00",
      heading: 45,
      roll: 45,
      pitch: 0
    },
    attr: { remark: "示例3" }
  })
  graphicLayer.addGraphic(graphic) // 还可以另外一种写法: graphic.addTo(graphicLayer)
}

//
function addDemoGraphic4(graphicLayer) {
  const graphic = new mars3d.graphic.PlaneEntity({
    position: [116.244399, 30.920459, 573.6],
    style: {
      plane: new Cesium.Plane(Cesium.Cartesian3.UNIT_X, 0.0),
      dimensions: new Cesium.Cartesian2(1000.0, 1000.0),
      color: "#00ffff",
      opacity: 0.6,
      outline: true,
      outlineColor: "#000000",
      label: {
        text: "我是原始的",
        font_size: 18,
        color: "#ffffff",
        pixelOffsetY: -10,
        distanceDisplayCondition: true,
        distanceDisplayCondition_far: 500000,
        distanceDisplayCondition_near: 0
      }
    },
    attr: { remark: "示例4" }
  })
  graphicLayer.addGraphic(graphic)

  // 转geojson
  const geojson = graphic.toGeoJSON()
  console.log(geojson)

  addGeoJson(geojson, graphicLayer)
}

// 添加单个geojson为graphic，多个直接用graphicLayer.loadGeoJSON
function addGeoJson(geojson, graphicLayer) {
  const graphicCopy = mars3d.Util.geoJsonToGraphics(geojson)[0]
  delete graphicCopy.attr
  // 新的坐标
  graphicCopy.position = [116.301991, 30.933872, 624.03]
  graphicCopy.style.label = graphicCopy.style.label || {}
  graphicCopy.style.label.text = "我是转换后生成的"
  graphicLayer.addGraphic(graphicCopy)
}

function addDemoGraphic5(graphicLayer) {
  // 圆形边界点
  const positions = mars3d.PolyUtil.getEllipseOuterPositions({
    position: Cesium.Cartesian3.fromDegrees(116.370171, 30.833143, 479.6),
    radius: 1200, // 半径
    count: 50 // 共返回(count*4)个点
  })

  let index = 0
  const graphic = new mars3d.graphic.PlaneEntity({
    position: new Cesium.CallbackProperty(function () {
      index++
      if (index >= positions.length - 1) {
        index = 0
      }
      return positions[index]
    }, false),
    style: {
      plane: new Cesium.Plane(Cesium.Cartesian3.UNIT_Y, 0.0),
      dimensions: new Cesium.Cartesian2(1000.0, 1000.0),
      image: "img/textures/poly-rivers.png"
    },
    attr: { remark: "示例5" }
  })
  graphicLayer.addGraphic(graphic)
}

// 生成演示数据(测试数据量)
export function addRandomGraphicByCount(count) {
  graphicLayer.clear()
  graphicLayer.enabledEvent = false // 关闭事件，大数据addGraphic时影响加载时间

  const bbox = [116.984788, 31.625909, 117.484068, 32.021504]
  const result = mars3d.PolyUtil.getGridPoints(bbox, count, 30)
  console.log("生成的测试网格坐标", result)

  for (let j = 0; j < result.points.length; ++j) {
    const position = result.points[j]
    const index = j + 1

    const graphic = new mars3d.graphic.PlaneEntity({
      position: position,
      style: {
        plane: new Cesium.Plane(Cesium.Cartesian3.UNIT_X, 0.0),
        dimensions: new Cesium.Cartesian2(result.radius, result.radius),
        heading: Math.random() * 100,
        color: Cesium.Color.fromRandom({ alpha: 0.6 })
      },
      attr: { index: index }
    })
    graphicLayer.addGraphic(graphic)
  }

  graphicLayer.enabledEvent = true // 恢复事件
  return result.points.length
}

// 开始绘制
export function startDrawGraphic() {
  graphicLayer.startDraw({
    type: "plane",
    style: {
      color: "#00ff00",
      opacity: 0.8,
      plane_normal: "x",
      dimensions_x: 1000.0,
      dimensions_y: 1000.0
    }
  })
}

// 在图层绑定Popup弹窗
export function bindLayerPopup() {
  graphicLayer.bindPopup(function (event) {
    const attr = event.graphic.attr || {}
    attr["类型"] = event.graphic.type
    attr["来源"] = "我是layer上绑定的Popup"
    attr["备注"] = "我支持鼠标交互"

    return mars3d.Util.getTemplateHtml({ title: "矢量图层", template: "all", attr: attr })
  })
}

// 绑定右键菜单
export function bindLayerContextMenu() {
  graphicLayer.bindContextMenu([
    {
      text: "开始编辑对象",
      icon: "fa fa-edit",
      show: function (e) {
        const graphic = e.graphic
        if (!graphic || !graphic.hasEdit) {
          return false
        }
        return !graphic.isEditing
      },
      callback: (e) => {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        if (graphic) {
          graphicLayer.startEditing(graphic)
        }
      }
    },
    {
      text: "停止编辑对象",
      icon: "fa fa-edit",
      show: function (e) {
        const graphic = e.graphic
        if (!graphic || !graphic.hasEdit) {
          return false
        }
        return graphic.isEditing
      },
      callback: (e) => {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        if (graphic) {
          graphic.stopEditing()
        }
      }
    },

    {
      text: "启用按轴平移",
      icon: "fa fa-pencil",
      show: (event) => {
        const graphic = event.graphic
        if (!graphic || !graphic.hasEdit || !graphic.isEditing) {
          return false
        }
        return !graphic.editing?.hasMoveMatrix
      },
      callback: (event) => {
        const graphic = event.graphic
        graphic.editing.startMoveMatrix(event.graphic, event)
      }
    },
    {
      text: "停止按轴平移",
      icon: "fa fa-pencil",
      show: (event) => {
        const graphic = event.graphic
        if (!graphic || !graphic.hasEdit || !graphic.isEditing) {
          return false
        }
        return graphic.editing?.hasMoveMatrix
      },
      callback: (event) => {
        const graphic = event.graphic
        graphic.editing.stopMoveMatrix()
      }
    },
    {
      text: "启用按轴旋转",
      icon: "fa fa-bullseye",
      show: (event) => {
        const graphic = event.graphic
        if (!graphic || !graphic.hasEdit || !graphic.isEditing) {
          return false
        }
        return !graphic.editing?.hasRotateMatrix
      },
      callback: (event) => {
        const graphic = event.graphic
        graphic.editing.startRotateMatrix(event.graphic, event)
      }
    },
    {
      text: "停止按轴旋转",
      icon: "fa fa-bullseye",
      show: (event) => {
        const graphic = event.graphic
        if (!graphic || !graphic.hasEdit || !graphic.isEditing) {
          return false
        }
        return graphic.editing?.hasRotateMatrix
      },
      callback: (event) => {
        const graphic = event.graphic
        graphic.editing.stopRotateMatrix()
      }
    },
    {
      text: "删除对象",
      icon: "fa fa-trash-o",
      show: (event) => {
        const graphic = event.graphic
        if (!graphic || graphic.isDestroy) {
          return false
        } else {
          return true
        }
      },
      callback: (e) => {
        const graphic = e.graphic
        if (!graphic) {
          return
        }
        const parent = graphic.parent // 右击是编辑点时
        graphicLayer.removeGraphic(graphic)
        if (parent) {
          graphicLayer.removeGraphic(parent)
        }
      }
    }
  ])
}
