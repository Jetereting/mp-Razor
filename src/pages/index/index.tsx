import Taro, {Component, Config, InnerAudioContext} from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import './index.scss'
import imgOn from '../../assets/images/on.jpg'
import imgOff from '../../assets/images/off.jpg'
import imgIcon from '../../assets/images/icon.png'
import withShare from "../../utils/withShare";

// @ts-ignore
@withShare({
    title: '模拟剃头，启动后将手机轻轻放在恶搞对象的后颈，慢慢往上，肆意享受对方的惊恐与惊喜吧',
    imageUrl: imgIcon,
    path: '/pages/index/index'
})

export default class Index extends Component {

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        navigationBarTitleText: '剃头推子'
    }

    private clickAudio: InnerAudioContext
    private soundAudio: InnerAudioContext

    componentWillMount() {
        //不与其他音频混播,静音模式仍可播放
        Taro.setInnerAudioOption({
            mixWithOther: false,
            obeyMuteSwitch: false
        })
        this.clickAudio = Taro.createInnerAudioContext()
        this.soundAudio = Taro.createInnerAudioContext()
        this.clickAudio.src = 'http://gxjs.online/razor/mp3/click.mp3'
        this.soundAudio.src = 'http://gxjs.online/razor/mp3/sound01.mp3'
        this.clickAudio.obeyMuteSwitch = false
        this.soundAudio.obeyMuteSwitch = false
        this.soundAudio.loop = true
    }

    constructor() {
        super(...arguments)
    }

    state = {
        isOn: false,
        imgBGClassName: '',
        intervalVibrate: setInterval(() => {
        }, 111400),
    }

    handleSwitch = () => {
        this.clickAudio.play()

        setTimeout(() => {
            if (this.state.isOn) {
                this.soundAudio.play()
                this.setState({
                    imgBGClassName: 'animated infinite headShake faster',
                    intervalVibrate: setInterval(() => Taro.vibrateLong(), 400)
                })
            } else {
                this.setState({
                    imgBGClassName: ''
                })
                clearInterval(this.state.intervalVibrate)
                this.soundAudio.pause()
            }
        }, 100)

        this.setState({
            isOn: !this.state.isOn
        })

    }

    render() {
        return (
            <View className='index'>
                <Image className={this.state.imgBGClassName}
                       style={'height:' + Taro.getSystemInfoSync().windowHeight * 0.8 + 'PX;margin-top:7%;width:' + Taro.getSystemInfoSync().windowHeight * 0.8 * 0.345 + "PX"}
                       src={this.state.isOn ? imgOn : imgOff}
                       onClick={this.handleSwitch.bind(this)}/>
            </View>
        )
    }
}
