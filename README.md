# 车辆管理三维可视化看板

面向车队运营人员的纯前端 3D 可视化平台，覆盖车辆位置、路线回放、维修计划、报警处理和车辆档案。

## 启动方式

```bash
cd frontend
npm install
npm run dev
```

访问地址：http://localhost:18707

## 主要功能

- 3D 车辆总览：车辆模型、区域热力、报警提示。
- 路线回放：路线轨迹、速度曲线、时间轴联动。
- 维修日历：维保计划与历史记录。
- 报警中心：报警筛选与处理状态流转。
- 车辆档案：车辆资料、里程趋势、维修记录。

## 技术栈

| 分类 | 技术 |
| --- | --- |
| 前端 | React 18 + TypeScript + Vite |
| 3D | Three.js + @react-three/fiber + drei |
| 图表 | ECharts |
| 状态 | Zustand |
| 存储 | Dexie / IndexedDB |
| 样式 | Tailwind CSS + CSS Variables |

## 目录结构

```
frontend/src/
├── api/
├── stores/
├── types/
├── components/common/
├── components/scene/
├── hooks/
├── pages/
├── router/
├── utils/
├── constants/
└── styles/
```

## 枚举位置

- VehicleStatus：frontend/src/types/enums.ts；frontend/src/api/mockData.ts；frontend/src/pages/Overview.tsx；frontend/src/pages/VehicleProfile.tsx
- MaintenanceType：frontend/src/types/enums.ts；frontend/src/api/mockData.ts；frontend/src/pages/MaintenanceCalendar.tsx
- AlertType：frontend/src/types/enums.ts；frontend/src/api/mockData.ts；frontend/src/constants/alertColors.ts；frontend/src/pages/AlertCenter.tsx
- VehicleType：frontend/src/types/enums.ts；frontend/src/api/mockData.ts；frontend/src/constants/vehicleModels.ts

## License

MIT
