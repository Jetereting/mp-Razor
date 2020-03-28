import Taro from "@tarojs/taro";

const baseUrl = 'https://weixin.gxjs.online/cet/v2'

const ad_wx_next_rewardID = 'adunit-32a0b1395ef6d804'
const ad_wx_interstitialID = 'adunit-796f852e734fa24d'
const ad_qq_next_rewardID = 'bb920de5b22811ec948ffafd07c6dfff'
const ad_qq_interstitialID = '454fdc7adfefe6f7c24fe9783fd831a2'

var videoCloseFlag = 0

export default {
    baseUrl,
    //更新app
    upApp() {
        // 检查版本更新
        const updateManager = Taro.getUpdateManager()
        updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            console.log(res.hasUpdate)
        })
        updateManager.onUpdateReady(function () {
            Taro.showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success: function (res) {
                    if (res.confirm) {
                        updateManager.applyUpdate()
                    }
                }
            })
        })
    },
    //获取系统参数
    getParams() {
        return Taro.getStorageSync('params')
    },

    //实时获取系统参数
    upParams() {
        Taro.request({
            method: 'POST',
            url: baseUrl + '/queryParams',
            data: {
            },
        }).then(res => {
            if (res.statusCode == 200) {
                Taro.setStorageSync('params', res.data)
            }
        })
    },


    getNextRewardID() {
        switch (Taro.getEnv()) {
            case 'WEAPP':
                return ad_wx_next_rewardID
            case 'QQ':
                return ad_qq_next_rewardID
        }
    },
    getNextInterstitialAd() {
        switch (Taro.getEnv()) {
            case 'WEAPP':
                return ad_wx_interstitialID
            case 'QQ':
                return ad_qq_interstitialID
        }
    },

    createRewardedVideoAd(callback) {
        var adId = this.getNextRewardID()
        let rewardedVideoAd = Taro.createRewardedVideoAd({ adUnitId: adId })
        rewardedVideoAd.show()
            .catch(err => {
                console.log("createRewardedVideoAd show");
                rewardedVideoAd.load()
                    .then(() => rewardedVideoAd.show())
            })
        rewardedVideoAd.onClose(res => {
            // 限制瞬间多次回调
            if ((new Date().getTime()) - videoCloseFlag < 5000) {
                return
            }
            videoCloseFlag = new Date().getTime()
            console.log("createRewardedVideoAd close");
            // 用户点击了【关闭广告】按钮
            if (res && res.isEnded || res === undefined) {
                callback(true);
                return
            }
            else {
                // 播放中途退出，不下发奖励
                callback(false);
                return
            }
        })
        rewardedVideoAd.onError(
            res => {
                console.log("RewardedVideoAd errCode :" + res.errCode);
                this.createInterstitialAd()
                callback(true);
            }
        )
    },
    createInterstitialAd() {
        // 在页面中定义插屏广告
        let interstitialAd = null
        interstitialAd = Taro.createInterstitialAd({
            adUnitId: this.getNextInterstitialAd()
        })
        interstitialAd.onLoad(() => { })
        interstitialAd.onError((err) => {
            console.error(err)
        })
        interstitialAd.onClose(() => { })

        // 在适合的场景显示插屏广告
        if (interstitialAd) {
            interstitialAd.show().catch((err) => {
                console.error(err)
            })
        }
    },
}