# Button 按钮

## 基本用法
基础的按钮用法。
<div>
    <div>
      <lii-button></lii-button>
      <lii-button type="primary">主要按钮</lii-button>
      <lii-button type="success">成功按钮</lii-button>
      <lii-button type="info">信息按钮</lii-button>
      <lii-button type="warning">警告按钮</lii-button>
      <lii-button type="danger">危险按钮</lii-button>
    </div>
    <div>
      <lii-button plain>朴素按钮</lii-button>
      <lii-button type="primary" plain>主要按钮</lii-button>
      <lii-button type="success" plain>成功按钮</lii-button>
      <lii-button type="info" plain>信息按钮</lii-button>
      <lii-button type="warning" plain>警告按钮</lii-button>
      <lii-button type="danger" plain>危险按钮</lii-button>
    </div>
    <div>
      <lii-button round>圆角按钮</lii-button>
      <lii-button type="primary" round>主要按钮</lii-button>
      <lii-button type="success" round>成功按钮</lii-button>
      <lii-button type="info" round>信息按钮</lii-button>
      <lii-button type="warning" round>警告按钮</lii-button>
      <lii-button type="danger" round>危险按钮</lii-button>
    </div>
    <div>
      <lii-button circle>圆形</lii-button>
      <lii-button type="primary" circle>主要</lii-button>
      <lii-button type="success" circle>成功</lii-button>
      <lii-button type="info" circle>信息</lii-button>
      <lii-button type="warning" circle>警告</lii-button>
      <lii-button type="danger" circle>危险</lii-button>
    </div>
</div>

```vue
<template>
   <div>
      <lii-button></lii-button>
      <lii-button type="primary">主要按钮</lii-button>
      <lii-button type="success">成功按钮</lii-button>
      <lii-button type="info">信息按钮</lii-button>
      <lii-button type="warning">警告按钮</lii-button>
      <lii-button type="danger">危险按钮</lii-button>
    </div>
    <div>
      <lii-button plain>朴素按钮</lii-button>
      <lii-button type="primary" plain>主要按钮</lii-button>
      <lii-button type="success" plain>成功按钮</lii-button>
      <lii-button type="info" plain>信息按钮</lii-button>
      <lii-button type="warning" plain>警告按钮</lii-button>
      <lii-button type="danger" plain>危险按钮</lii-button>
    </div>
    <div>
      <lii-button round>圆角按钮</lii-button>
      <lii-button type="primary" round>主要按钮</lii-button>
      <lii-button type="success" round>成功按钮</lii-button>
      <lii-button type="info" round>信息按钮</lii-button>
      <lii-button type="warning" round>警告按钮</lii-button>
      <lii-button type="danger" round>危险按钮</lii-button>
    </div>
    <div>
      <lii-button circle>圆形</lii-button>
      <lii-button type="primary" circle>主要</lii-button>
      <lii-button type="success" circle>成功</lii-button>
      <lii-button type="info" circle>信息</lii-button>
      <lii-button type="warning" circle>警告</lii-button>
      <lii-button type="danger" circle>危险</lii-button>
    </div>
</template>
```

## 禁用状态
按钮不可用状态。


<div>
    <div>
      <lii-button disabled></lii-button>
      <lii-button type="primary" disabled>主要按钮</lii-button>
      <lii-button type="success" disabled>成功按钮</lii-button>
      <lii-button type="info" disabled>信息按钮</lii-button>
      <lii-button type="warning" disabled>警告按钮</lii-button>
      <lii-button type="danger" disabled>危险按钮</lii-button>
    </div>
    <div>
      <lii-button plain disabled>朴素按钮</lii-button>
      <lii-button type="primary" plain disabled>主要按钮</lii-button>
      <lii-button type="success" plain disabled>成功按钮</lii-button>
      <lii-button type="info" plain disabled>信息按钮</lii-button>
      <lii-button type="warning" plain disabled>警告按钮</lii-button>
      <lii-button type="danger" plain disabled>危险按钮</lii-button>
    </div>
</div>

```vue
<template>
    <div>
      <lii-button disabled></lii-button>
      <lii-button type="primary" disabled>主要按钮</lii-button>
      <lii-button type="success" disabled>成功按钮</lii-button>
      <lii-button type="info" disabled>信息按钮</lii-button>
      <lii-button type="warning" disabled>警告按钮</lii-button>
      <lii-button type="danger" disabled>危险按钮</lii-button>
    </div>
    <div>
      <lii-button plain disabled>朴素按钮</lii-button>
      <lii-button type="primary" plain disabled>主要按钮</lii-button>
      <lii-button type="success" plain disabled>成功按钮</lii-button>
      <lii-button type="info" plain disabled>信息按钮</lii-button>
      <lii-button type="warning" plain disabled>警告按钮</lii-button>
      <lii-button type="danger" plain disabled>危险按钮</lii-button>
    </div>
</template>
```

## 大小选择
设置按钮大小

<div>
    <div>
      <lii-button size="big"></lii-button>
      <lii-button type="primary" size="big">主要按钮</lii-button>
      <lii-button type="success" size="big">成功按钮</lii-button>
    </div>
    <div>
      <lii-button>默认按钮</lii-button>
      <lii-button type="primary">主要按钮</lii-button>
      <lii-button type="success">成功按钮</lii-button>
    </div>
    <div>
      <lii-button size="small">默认按钮</lii-button>
      <lii-button type="primary" size="small">主要按钮</lii-button>
      <lii-button type="success" size="small">成功按钮</lii-button>
    </div>
    <div>
      <lii-button size="mini">默认按钮</lii-button>
      <lii-button type="primary" size="mini">主要按钮</lii-button>
      <lii-button type="success" size="mini">成功按钮</lii-button>
    </div>
</div>

```vue
<template>
    <div>
      <lii-button size="big"></lii-button>
      <lii-button type="primary" size="big">主要按钮</lii-button>
      <lii-button type="success" size="big">成功按钮</lii-button>
    </div>
    <div>
      <lii-button>默认按钮</lii-button>
      <lii-button type="primary">主要按钮</lii-button>
      <lii-button type="success">成功按钮</lii-button>
    </div>
    <div>
      <lii-button size="small">默认按钮</lii-button>
      <lii-button type="primary" size="small">主要按钮</lii-button>
      <lii-button type="success" size="small">成功按钮</lii-button>
    </div>
    <div>
      <lii-button size="mini">默认按钮</lii-button>
      <lii-button type="primary" size="mini">主要按钮</lii-button>
      <lii-button type="success" size="mini">成功按钮</lii-button>
    </div>
</template>
```

## Attributes
<table>
    <tr>
        <td>11</td>
        <td>22</td>
        <td>33</td>
        <td>44</td>
    </tr>
</table>