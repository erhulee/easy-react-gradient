## 用途：方便的加上渐变属性

### 1. GradientText

| 属性 | 可选 | 解释 | 类型 | 实例 | 默认值 |
| :-----:| :----: | :----: | :----:| :----:| :----: |
| content | x | 文本内容 | string | "我是吴彦祖"| / 
| color |  | 渐变的颜色 | string[ ]|["rgba(123,23,1)","#FFF"]| ["#000","#000"]
|direction | |渐变的方向 | 'to right' \| 'to left' \| "to bottom "\| "to top" \| string | “80deg” | "to right"
|custom | |其他的CSS属性| object | {"font-size":"90px"}| /

``` jsx
function demo(){
    return <GradientText content="我是吴彦祖" colors={["rgba(123,23,1)","#FFF"]} />
}
```
> 这里的colors支持 rgb/ rgba /十六进制的模式

### 2. GradientBorder
> 这是一个hoc，不是一个正常的组件



| 属性 | 可选 | 解释 | 类型 | 实例 | 默认值 |
| :-----:| :----: | :----: | :----:| :----:| :----: |
| width | | 边框的宽度 | number / string| 2 / "2" | "2"
| colors| | 同上
| radiusWidth ||圆角| number/string|2  /"2" | 0|
|direction| | 同上

```jsx
function demo(){
    return <div>我是吴彦祖</div>
}

export default GradientBorder(demo,{width:2,colors:["rgba(123,23,1)","#FFF"]})
```