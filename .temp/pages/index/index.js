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
      imgBGClassName: '',
      clickAudio: Taro.createInnerAudioContext(),
      soundAudio: Taro.createInnerAudioContext(),
      intervalVibrate: setInterval(() => console.log('开始'), 700)
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
                <Image className={'imgBG ' + this.state.imgBGClassName} src={this.state.isOn ? imgOn : imgOff} onClick={this.handleSwitch.bind(this)} />
            </View>;
  }
  config = {
    navigationBarTitleText: '剃头推子'
  };
  handleSwitch = () => {
    // debugger
    this.state.clickAudio.play();
    setTimeout(() => {
      if (this.state.isOn) {
        this.state.soundAudio.play();
        this.setState({
          imgBGClassName: 'animated infinite headShake faster',
          intervalVibrate: setInterval(() => Taro.vibrateLong(), 700)
        });
      } else {
        this.setState({
          imgBGClassName: ''
        });
        clearInterval(this.state.intervalVibrate);
        this.state.soundAudio.pause();
      }
      this.state.clickAudio.stop();
    }, 100);
    this.setState({
      isOn: !this.state.isOn
    });
  };
}