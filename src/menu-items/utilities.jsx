// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  BookOutlined,BarChartOutlined,ClockCircleOutlined,
  CloudOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,BookOutlined,BarChartOutlined,ClockCircleOutlined,CloudOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Notices',
      type: 'item',
      url: '/typography',
      icon: icons.BookOutlined
    },
    {
      id: 'util-color',
      title: 'Charts',
      type: 'item',
      url: '/color',
      icon: icons.BarChartOutlined
    },
    {
      id: 'util-shadow',
      title: 'Docs',
      type: 'item',
      url: '/shadow',
      icon: icons.CloudOutlined
    },{
      id: 'util-shadow',
      title: 'Logs',
      type: 'item',
      url: '/shadow',
      icon: icons.ClockCircleOutlined
    },{
      id: 'util-shadow',
      title: 'Deferal',
      type: 'item',
      url: '/shadow',
      icon: icons.BarcodeOutlined
    }
  ]
};

export default utilities;
