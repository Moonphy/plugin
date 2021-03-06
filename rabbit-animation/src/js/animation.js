/**
 * Created by Administrator on 2016-7-13.
 */
'use strict';

/**
 * 帧动画库类
 * @constructor
 */
function Animation(){

}

/**
 * 添加一个同步任务，去预加载图片
 * @param imglist 图片数组
 */
Animation.prototype.loadImage = function (imglist) {

};

/**
 * 添加一个异步定时任务，通过定时改变图片背景位置，实现帧动画
 * @param ele DOM对象
 * @param position 背景位置数组
 * @param imageUrl 背景图片地址
 */
Animation.prototype.changePosition = function (ele, position, imageUrl) {

};

/**
 * 添加一个异步定时任务，通过定时改变images标签的src属性，实现帧动画
 * @param ele image标签
 * @param imglist 图片数组
 */
Animation.prototype.changeSrc = function (ele, imglist) {

};

/**
 * 高级用法，添加一个异步定时执行的任务，
 * 该任务自定义动画每帧执行的任务函数
 * @param taskFn 自定义每帧执行的任务函数
 */
Animation.prototype.enterFrame = function (taskFn) {

};

/**
 * 添加一个同步任务，可以在上一个任务完成后执行回调函数
 * @param callback 回调函数
 */
Animation.prototype.then = function (callback) {

};


/**
 * 开始执行任务
 * @param interval 异步定时任务执行的间隔
 */
Animation.prototype.start = function (interval) {
    
};

/**
 * 添加一个同步任务，该任务就是回退到上一个任务中，
 * 实现重复上一个任务的效果，可以定义重复的次数
 * @param times 重复次数
 */
Animation.prototype.repeat = function (times) {

};


/**
 * 添加一个同步任务，相当于repeat()更友好的接口（没有给repeat()传参），无限循环上一次任务
 */
Animation.prototype.repeatForever = function () {

};


/**
 * 设置当前任务执行结束后到下一个任务开始前的等待时间
 * @param time 等待时长
 */
Animation.prototype.wait = function (time) {

};

/**
 * 暂停当前异步定时任务
 */
Animation.prototype.pause = function () {

};

/**
 * 重新执行上一次暂停的异步任务
 */
Animation.prototype.restart = function () {

};

/**
 * 释放资源
 */
Animation.prototype.dispose = function () {

};