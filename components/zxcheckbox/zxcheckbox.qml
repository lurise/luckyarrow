<view class="content"><view class="collshop-box"><view class="collshop-bot"><checkbox-group data-event-opts="{{[['change',[['allChoose',['$event']]]]]}}" bindchange="__e"><label><checkbox class="{{[(allChecked)?'checked':'']}}" value="all" checked="{{allChecked?true:false}}"></checkbox>全选</label></checkbox-group><view data-event-opts="{{[['tap',[['quxiao',['$event']]]]]}}" class="right" bindtap="__e">取消收藏</view></view><view class="collshop-cen"><checkbox-group data-event-opts="{{[['change',[['changeCheckbox',['$event']]]]]}}" class="block" bindchange="__e"><block qq:for="{{$root.l0}}" qq:for-item="item" qq:for-index="__i0__" qq:key="value"><block><view class="collshop-cen-item"><checkbox class="{{[(item.g0)?'checked':'']}}" value="{{item.m0}}" checked="{{item.g1}}"></checkbox><image class="left" src="{{item.$orig.img}}" mode></image><view class="right"><view class="title">{{item.$orig.name}}</view><image class="dengjiimg" src="../../static/dengji.png" mode></image></view></view></block></block></checkbox-group></view></view></view>