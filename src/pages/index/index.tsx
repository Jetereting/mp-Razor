import Taro, { Component, Config, InnerAudioContext } from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import './index.scss'
import imgOn from '../../assets/images/on.jpg'
import imgOff from '../../assets/images/off.jpg'
import imgIcon from '../../assets/images/icon.png'
import withShare from "../../utils/withShare";
import constant from "../../constant/constant";

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
    private sounds: string[]
    private index: number
    private intervalVibrate
    private intervals

    componentWillMount() {
        console.log("componentWillMount")
        // 更新系统参数
        constant.upParams()
        // 检查版本更新
        constant.upApp()

    }

    componentDidMount() {
        console.log("componentDidMount")
        //不与其他音频混播,静音模式仍可播放
        Taro.setInnerAudioOption({
            mixWithOther: false,
            obeyMuteSwitch: false
        })
        this.intervals=new Set()
        this.clickAudio = Taro.createInnerAudioContext()
        this.soundAudio = Taro.createInnerAudioContext()
        setTimeout(() => {
            this.clickAudio.src = constant.getParams().razor_click || 'http://gxjs.online/razor/mp3/click.mp3'
            this.soundAudio.src = constant.getParams().razor_sound01 || 'http://gxjs.online/razor/mp3/sound01.mp3'
            this.sounds = constant.getParams().razor_array ? JSON.parse(constant.getParams().razor_array) : ["http://gxjs.online/razor/mp3/sound1.mp3",
                "http://gxjs.online/razor/mp3/sound2.mp3",
                "http://gxjs.online/razor/mp3/sound3.mp3",
                "http://gxjs.online/razor/mp3/sound4.mp3",
                "http://gxjs.online/razor/mp3/sound5.mp3",
                "http://gxjs.online/razor/mp3/sound6.mp3",
                "http://gxjs.online/razor/mp3/sound7.mp3",
                "http://gxjs.online/razor/mp3/sound8.mp3",
                "http://gxjs.online/razor/mp3/sound9.mp3",
                "http://gxjs.online/razor/mp3/sound10.mp3",
                "http://gxjs.online/razor/mp3/sound11.mp3",
                "http://gxjs.online/razor/mp3/sound12.mp3"]
                this.clickAudio.obeyMuteSwitch = false
                this.soundAudio.obeyMuteSwitch = false
                this.soundAudio.loop = true
                this.sounds = this.shuffle(this.sounds)
                this.index = 0
        }, 200);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
        this.clearAllInterval()
        this.soundAudio.stop()
        this.soundAudio.offPlay()
    }
    componentDidHide() {
        console.log("componentDidHide")
        this.clearAllInterval()
        this.soundAudio.stop()
        this.soundAudio.offPlay()
    }

    constructor() {
        super(...arguments)
    }

    state = {
        isOn: false,
        imgBGClassName: '',
    }

    clearInterval0(id) {
        this.intervals.delete(id);
        return clearInterval(id);
    }
    clearAllInterval() {
        for (var id of this.intervals) {
            this.clearInterval0(id);
        }
    }

    handleSwitch = () => {
        console.log("handleSwitch")
        this.clickAudio.play()

        setTimeout(() => {
            if (this.state.isOn) {
                this.soundAudio.play()
                this.intervalVibrate = setInterval(() => Taro.vibrateLong(), 400)
                this.intervals.add(this.intervalVibrate )
                console.log("intervalVibrate:",this.intervalVibrate)
                this.setState({
                    imgBGClassName: 'animated infinite headShake faster',
                })
            } else {
                this.setState({
                    imgBGClassName: ''
                })
                this.clearAllInterval()
                this.soundAudio.stop()
                this.soundAudio.offPlay()
            }
        }, 100)
        this.soundAudio.onPlay(() => {
            console.log("播放开始")
            console.log("s:", this.soundAudio.src)
        })
        this.soundAudio.onError(() => {
            console.log("播放失败")
        })

        this.setState({
            isOn: !this.state.isOn
        })
    }
    // 数组乱序
    shuffle(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            let rIndex = Math.floor(Math.random() * (i + 1));
            let temp = arr[rIndex];
            arr[rIndex] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
    nextHandle(i) {
        var myIndex = this.index >= 0 ? this.index % this.sounds.length : this.sounds.length - Math.abs(this.index) % this.sounds.length
        this.soundAudio.src = this.sounds[myIndex]
        this.soundAudio.loop = true
        console.log(this.soundAudio.src)
        if (i === -1) {
            this.index--
        } else {
            this.index++
        }

        if (this.state.isOn) {
            this.handleSwitch()
            setTimeout(() => {
                this.handleSwitch()
            }, 200);
        } else {
            this.soundAudio.play()
            this.intervalVibrate = setInterval(() => Taro.vibrateLong(), 400)
            this.intervals.add(this.intervalVibrate )
            this.setState({
                imgBGClassName: 'animated infinite headShake faster',
                isOn: true
            })
        }

    }

    next(i) {
        let videoMyNextCount = parseInt(Taro.getStorageSync('videoMyNextCount')) || 0;
        if (videoMyNextCount != 0 && videoMyNextCount > 7 && videoMyNextCount % 4 == 0) {
            var text = (i === -1 ? '上' : '下')
            Taro.showModal({
                title: text + '一个音效',
                content: '观看一个完整ad进入' + text + '一个音效',
            })
                .then(
                    res => {
                        if (res.confirm) {
                            if (this.state.isOn) {
                                this.setState({
                                    imgBGClassName: '',
                                    isOn: false
                                })
                                this.clearAllInterval()
                                this.soundAudio.stop()
                                this.soundAudio.offPlay()
                            }
                            constant.createRewardedVideoAd((res) => {
                                if (res) {
                                    this.nextHandle(i)
                                    Taro.setStorageSync('videoMyNextCount', videoMyNextCount + 1)
                                } else {
                                    Taro.showToast({
                                        title: '观看完整视频后方可继续',
                                        icon: 'none',
                                        duration: 2000,
                                    })
                                }
                            })
                        }
                    }
                )
        } else {
            this.nextHandle(i)
            Taro.setStorageSync('videoMyNextCount', videoMyNextCount + 1)
        }
    }

    render() {
        return (
            <View className='index'>
                <Image className={this.state.imgBGClassName}
                    style={'height:' + Taro.getSystemInfoSync().windowHeight * 0.8 + 'PX;margin-top:7%;width:' + Taro.getSystemInfoSync().windowHeight * 0.8 * 0.345 + "PX"}
                    src={this.state.isOn ? imgOn : imgOff}
                    onClick={this.handleSwitch.bind(this)} />

                <View style='display: flex;flex-direction: row;flex-wrap:wrap;'>
                    <Button onClick={() => {
                        this.next(-1)
                    }} style='background-color:transparent;border-style:none;border:none;width:52PX;'>👈</Button>
                    <Button openType='share' style='background-color:transparent;border-style:none;border:none;width:52PX;'>👍</Button>
                    <Button onClick={() => {
                        this.next(1)
                    }} style='background-color:transparent;border-style:none;border:none;width:52PX;'>👉</Button>
                </View>
            </View>
        )
    }
}
