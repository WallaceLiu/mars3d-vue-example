<template>
  <mars-dialog :visible="true" right="10" top="10" width="300">
    <div class="f-mb">
      <a-space>
        <span class="mars-pannel-item-label">视椎体状态:</span>
        <mars-button @click="locate">定位至卫星</mars-button>
        <mars-button @click="selPoint(formState.enabledSee)">{{ formState.enabledSee ? "取消凝视" : "凝视" }}</mars-button>
      </a-space>
    </div>

    <div class="f-mb">
      <a-space>
        <span class="mars-pannel-item-label">类型:</span>
        <a-radio-group v-model:value="value" name="radioGroup" @change="chkSensorType">
          <a-radio value="1">圆锥体</a-radio>
          <a-radio value="2">四棱锥体</a-radio>
        </a-radio-group>
      </a-space>
    </div>

    <!-- <div class="f-mb">
      <a-space>
        <span class="mars-pannel-item-label">前后侧摆:</span>
        <mars-slider @change="pitchChange" v-model:value="pitchValue" :min="-180" :max="180" :step="1" />值{{ pitchValue }}
      </a-space>
    </div>

    <div class="f-mb">
      <a-space>
        <span class="mars-pannel-item-label">左右侧摆:</span>
        <mars-slider @change="rollChange" v-model:value="rollValue" :min="-180" :max="180" :step="1" />值{{ rollValue }}
      </a-space>
    </div> -->

    <div class="f-mb">
      <a-row :gutter="[0, 10]">
        <a-col :span="8">heading值:</a-col>
        <a-col :span="5">
          <mars-switch v-model:checked="formState.customHeading" @change="changeAutoHeading" />
        </a-col>
        <a-col :span="6" v-if="formState.customHeading">
          <mars-slider class="sliderlen" @change="updateHeading" v-model:value="formState.slideHeadingStep" :min="0" :max="360" :step="0.01" />
        </a-col>
        <a-col :span="8" v-if="!formState.customHeading"> 根据路线自动 </a-col>
      </a-row>
    </div>

    <div class="f-mb">
      <a-row :gutter="[0, 10]">
        <a-col :span="8">pitch值:</a-col>
        <a-col :span="5">
          <mars-switch v-model:checked="formState.customPitch" @change="changeAutoPitch" />
        </a-col>
        <a-col :span="6" v-if="formState.customPitch">
          <mars-slider class="sliderlen" @change="updatePitch" v-model:value="formState.slidePitchStep" :min="0" :max="360" :step="0.01" />
        </a-col>
        <a-col :span="8" v-if="!formState.customPitch"> 根据路线自动 </a-col>
      </a-row>
    </div>

    <div class="f-mb">
      <a-row :gutter="[0, 10]">
        <a-col :span="8">roll值:</a-col>
        <a-col :span="5">
          <mars-switch v-model:checked="formState.customRoll" @change="changeAutoRoll" />
        </a-col>
        <a-col :span="6" v-if="formState.customRoll">
          <mars-slider class="sliderlen" @change="updateRoll" v-model:value="formState.slideRollStep" :min="0" :max="360" :step="0.01" />
        </a-col>
        <a-col :span="8" v-if="!formState.customRoll"> 根据路线自动 </a-col>
      </a-row>
    </div>

    <div class="f-mb">
      <a-space>
        <span class="mars-pannel-item-label">夹角1:</span>
        <mars-slider @change="angle1" v-model:value="angleValue1" :min="1" :max="89" :step="0.01" />值{{ angleValue1 }}
      </a-space>
    </div>

    <div class="f-mb" v-if="value === '2'">
      <a-space>
        <span class="mars-pannel-item-label">夹角2:</span>
        <mars-slider @change="angle2" v-model:value="angleValue2" :min="1" :max="89" :step="0.01" />值{{ angleValue2 }}
      </a-space>
    </div>

    <div class="f-mb">
      <a-space>
        <span class="mars-pannel-item-label">参考系轴:</span>
        <a-checkbox v-model:checked="formState.enabledShowMatrix" @change="chkShowModelMatrix">显示/隐藏</a-checkbox>
      </a-space>
    </div>
  </mars-dialog>

  <mars-dialog :visible="true" right="10" bottom="60px">
    <table class="mars-table tb-border">
      <tr>
        <td class="nametd">名称</td>
        <td id="td_name">{{ formState.name }}</td>
      </tr>
      <tr>
        <td class="nametd">TLE1</td>
        <td id="td_tle1">{{ formState.tle1 }}</td>
      </tr>
      <tr>
        <td class="nametd">TLE2</td>
        <td id="td_tle2">{{ formState.tle2 }}</td>
      </tr>
      <tr>
        <td class="nametd">时间</td>
        <td id="td_time">{{ formState.time }}</td>
      </tr>

      <tr>
        <td class="nametd">经度</td>
        <td id="td_jd">{{ formState.td_jd }}</td>
      </tr>
      <tr>
        <td class="nametd">经度</td>
        <td id="td_wd">{{ formState.td_wd }}</td>
      </tr>
      <tr>
        <td class="nametd">高程</td>
        <td id="td_gd">{{ formState.td_gd }}</td>
      </tr>
    </table>
  </mars-dialog>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue"
import type { UnwrapRef } from "vue"
import * as mapWork from "./map.js"

interface FormState {
  enabledShowMatrix: boolean // 参考轴系
  enabledSee: boolean
  name: string
  tle1: string
  tle2: string
  time: string
  td_jd: number
  td_wd: number
  td_gd: string

  customHeading: boolean
  slideHeadingStep: number
  customPitch: boolean
  slidePitchStep: number
  customRoll: boolean
  slideRollStep: number
}

const value = ref<string>("2")
const angleValue1 = ref<number>(30)
const angleValue2 = ref<number>(20)

const formState: UnwrapRef<FormState> = reactive({
  enabledShowMatrix: false,
  enabledSee: false,
  name: "",
  tle1: "",
  tle2: "",
  time: "",
  td_jd: 0,
  td_wd: 0,
  td_gd: "0米",

  customHeading: false,
  slideHeadingStep: 0,
  customPitch: false,
  slidePitchStep: 0,
  customRoll: false,
  slideRollStep: 0
})

mapWork.eventTarget.on("satelliteChange", function (event: any) {
  const nowData = event.weixinData
  formState.name = nowData.name
  formState.tle1 = nowData.tle1
  formState.tle2 = nowData.tle2
  formState.time = nowData.time
  formState.td_jd = nowData.td_jd
  formState.td_wd = nowData.td_wd
  formState.td_gd = nowData.td_gd
})


const changeAutoHeading = () => {
  if (formState.customHeading) {
    mapWork.weixin.model.heading = formState.slideHeadingStep
  } else {
    mapWork.weixin.model.heading = undefined
  }
}
const updateHeading = () => {
  mapWork.weixin.model.heading = formState.slideHeadingStep
}

const changeAutoPitch = () => {
  if (formState.customPitch) {
    mapWork.weixin.model.pitch = formState.slidePitchStep
  } else {
    mapWork.weixin.model.pitch = undefined
  }
}
const updatePitch = () => {
  mapWork.weixin.model.pitch = formState.slidePitchStep
}

const changeAutoRoll = () => {
  if (formState.customPitch) {
    mapWork.weixin.model.roll = formState.slideRollStep
  } else {
    mapWork.weixin.model.roll = undefined
  }
}
const updateRoll = () => {
  mapWork.weixin.model.roll = formState.slideRollStep
}
// 夹角
const angle1 = () => {
  mapWork.angle1(angleValue1.value)
}

const angle2 = () => {
  mapWork.angle2(angleValue2.value)
}

// 定位至卫星
const locate = () => {
  mapWork.locate()
}

// 凝视目标
const selPoint = (texShow: boolean) => {
  formState.enabledSee = !texShow
  if (!texShow) {
    mapWork.selPoint()
  }
  mapWork.selPoint()
}

// 参考轴系显示与隐藏
const chkShowModelMatrix = () => {
  mapWork.chkShowModelMatrix(formState.enabledShowMatrix)
}

// 类型选择
const chkSensorType = () => {
  mapWork.chkSensorType(value.value)
}
</script>
<style scoped lang="less">
th.column-money,
td.column-money {
  text-align: right !important;
}
.ant-slider {
  width: 110px;
}
.mars-table {
  width: 270px;
  border-collapse: collapse;
  border-spacing: 0;
}

.mars-table tr td {
  padding: 5px 10px;
  text-align: left;
}

.mars-table tr td:first-child {
  border-left: none;
}

.mars-table .nametd {
  padding: 5px 20px 5px 10px;
}
.tb-border {
  border: 1px solid #4db3ff70;
}

.tb-border tr td {
  border: 1px solid #4db3ff70;
}
.ant-form-item .ant-select,
.sliderlen {
  width: 100px;
}
</style>
