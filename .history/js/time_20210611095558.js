Time(a)=> {
    // 时间计算
    // 得到之前发布发毫秒数
    let pasttime = item.last_reply_at
    let d = dayjs(pasttime).valueOf()
    // 得到现在的毫秒数
    let nowday = new Date()
    let n = nowday.getTime()
    // 用当前时间减去之前的毫秒数
    let difference = n - d
    // 转化成秒，分，时，天，年
    let second = parseInt(difference / 1000)
    let branch = parseInt(second / 60)
    let time = parseInt(branch / 60)
    let day = parseInt(time / 24)
    let month = parseInt(day / 30)
    let final = ''
    if (month >= 1) {
        final = `${month}月前`
    } else if (day >= 1) {
        final = `${day}天前`
    } else if (time >= 1) {
        final = `${time}小时前`
    } else if (branch >= 1) {
        final = `${branch}分钟前`
    } else {
        final = '刚刚'
    }
}