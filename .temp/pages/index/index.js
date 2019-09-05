import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';
import './index.scss';
import imgOn from '../../assets/images/on.jpg';
import imgOff from '../../assets/images/off.jpg';
export default class Index extends Component {
  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    this.state = {
      isOn: false,
      imgBGClassName: 'imgBG',
      clickAudio: Taro.createInnerAudioContext(),
      soundAudio: Taro.createInnerAudioContext()
    };
  }
  componentWillMount() {
    this.state.clickAudio.src = 'http://gxjs.online/ogg/click.ogg';
    this.state.soundAudio.src = 'http://gxjs.online/ogg/sound01.ogg';
    this.state.soundAudio.loop = true;
  }
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View className="index">
                <Image className={'imgBG ' + this.state.imgBGClassName} onAnimationEnd={this.handleAnimationEnd.bind(this)} src={this.state.isOn ? imgOn : imgOff} onClick={this.handleSwitch.bind(this)} />
            </View>;
  }
  config = {
    navigationBarTitleText: '首页'
  };
  handleSwitch = () => {
    // debugger
    this.state.clickAudio.play();
    setTimeout(() => {
      if (this.state.isOn) {
        this.state.soundAudio.play();
        this.setState({
          imgBGClassName: 'animated infinite headShake faster'
        });
        setInterval(() => Taro.vibrateLong(), 400);
      } else {
        this.setState({
          imgBGClassName: ''
        });
        this.state.soundAudio.pause();
      }
    }, 100);
    this.setState({
      isOn: !this.state.isOn
    });
  };
  handleAnimationEnd = () => {
    this.setState({
      selected: ''
    });
  };
}