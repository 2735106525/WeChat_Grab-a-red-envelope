auto.waitFor();//判断和等待开启无障碍
//打开微信软件
sleep(2000)
launchApp('微信')
sleep(2000)
toastLog('2735106525')
// let see_count = rawInput('修改名字', '');
// className('android.widget.RelativeLayout').drawingOrder('4').click()
// id('tm').click()
// sleep(1000)
// var touxiang=text('头像').findOne()
// click(touxiang.bounds().centerX(), touxiang.bounds().centerY())
// sleep(1000)
// var tupian=descStartsWith('图片1').findOne()
// click(tupian.bounds().centerX(), tupian.bounds().centerY())
// sleep(1000)
// id('h9r').text('确定').findOne().click()
// sleep(1000)
// var touxiang=text('昵称').findOne()
// click(touxiang.bounds().centerX(), touxiang.bounds().centerY())
// id('fef').findOne().setText(see_count)
// id('ch').text('保存').findOne().click()
// sleep(500)
// id('dm').findOne().click()
// sleep(2000)
// className('android.widget.RelativeLayout').drawingOrder('1').click()
sleep(2000)
while (true) {
    if (id("ga3").exists()) {
        log('有')
        while (true) {
            var widget = id("ga3").findOne()
            click(widget.bounds().centerX(), widget.bounds().centerY())
            sleep(random(1000, 2000))
            searchNewRedpacket()
            sleep(random(1500, 2500))
            if (id("text1").exists()) {
                log('在界面')
            } else {
                sleep(random(1000, 2000))
                log('返回1')
                back();
            }
        }
    }
}
function searchNewRedpacket() {
    // var rp_msg_list = className("android.widget.FrameLayout").id('al7').find();
    var rp_msg_list = id("r8").text('恭喜发财，大吉大利').find();
    log("调试信息3" + rp_msg_list);
    if (rp_msg_list.length != 0) {
        log("检测到的红包个数: " + rp_msg_list.length);
        for (var i = 0; i < rp_msg_list.length; i++) {
            var rp_auk = rp_msg_list[i];
            var rp_auk_parent = rp_auk.parent();
            if (rp_auk_parent.childCount() == 1) {
                log("### 发现新红包");
                var rpB = rp_auk_parent.bounds();
                click(rpB.centerX(), rpB.centerY());
                log("成功打开红包消息");
                openNewRedPacket();
                sleep(random(4500, 5500));
                // back();
            } else if (i == (rp_msg_list.length - 1)) {
                log("当前页面已检测完");
                break;
            } else {
                log("无效红包, 跳过");
            }
        }
    } else if (rp_msg_list.empty()) {
        log("未检测到红包消息" + rp_msg_list.length);
    } else {
        return;
    }
}
//领取点开的红包
function openNewRedPacket() {
    var draw = desc("开").findOne(random(1000, 1500));
    log("调试信息2");
    if (draw != null) {
        log("#### 点开新红包");
        draw.click();
        log("#### Gain a LUCKY succesfully!!!");
        sleep(random(4500, 5500));
        //领完返回聊天主页
        log('返回2')
        back();
    } else {
        log("过期之类无效红包");
    }
    sleep(random(10000, 15000))
    while (true) {
        if (id("dm").exists()) {
            id('dm').findOne().click()
            log('1')
            sleep(2000)
        } else {
            log('返回3')
            back();
            sleep(2000)
        }
        log("返回成功");
        if (id("text1").exists()) {
            log('3')
            break;
        }
        log('4')
        sleep(2000)
    }
}