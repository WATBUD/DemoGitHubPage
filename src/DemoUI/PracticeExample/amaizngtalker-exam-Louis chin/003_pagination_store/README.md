# 002_pagination_store

# Question

我們提供了一個極簡的教師名單後台瀏覽工具，請在 Vue data 中設計 teachers pagination 的 data 資料結構。
有幾點是希望可以完成的：

1. 維持現在的畫面設計，改採用分頁載入的方式設計 (一頁 3 筆）並設法讓資料的存取`更有效率`。
1. 右側邊欄不能因為教師分頁切換而消失
1. 請模擬真實 API 呼叫的情境設計讀取和錯誤狀態存取和顯示

補充：

1. 不需要修改 fetch teacher API response 和 anchor 的結構 (utils 裡面的 function 都不用動)
1. css 與 html 的部分完全不在作業審核的範圍內
1. Component 拆分也不在作業審核的範圍，不需要特別把 component 拆分開來。
1. methods, computed 和 vue template 的部分都可以自由調整，只要確保整個 admin 仍然能正常運行

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
