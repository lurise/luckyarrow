<view><view class="container"><view class="current_score">{{''+currentScore+''}}</view></view><view class="score_detail"><view class="score_detail_title"><text class="score_detail_title_text">积分收支明细</text></view><view class="score_detail_list_container"><block qq:for="{{scoreList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><uni-list class="score_detail_list_item" vue-id="{{'2fa9f294-1-'+index}}" bind:__l="__l" vue-slots="{{['default']}}"><uni-list-item vue-id="{{('2fa9f294-2-'+index)+','+('2fa9f294-1-'+index)}}" title="{{item.operate}}" note="{{item.date}}" rightText="{{item.title}}" bind:__l="__l"></uni-list-item></uni-list></block></view></view></view>