<block qq:if="{{isShow}}"><view class="lucky-box data-v-ea5b0b9c" style="{{'width:'+(boxWidth+'px')+';'+('height:'+(boxHeight+'px')+';')}}"><canvas style="{{'width:'+(boxWidth+'px')+';'+('height:'+(boxHeight+'px')+';')}}" id="lucky-wheel" canvas-id="lucky-wheel" class="data-v-ea5b0b9c"></canvas><cover-view data-event-opts="{{[['tap',[['toPlay',['$event']]]]]}}" class="lucky-wheel-btn data-v-ea5b0b9c" style="{{'width:'+(btnWidth+'px')+';'+('height:'+(btnHeight+'px')+';')}}" bindtap="__e"></cover-view><view class="lucky-imgs _div data-v-ea5b0b9c"><block qq:for="{{blocks}}" qq:for-item="block" qq:for-index="index" qq:key="index"><view class="_div data-v-ea5b0b9c"><block qq:if="{{block.imgs}}"><view class="_div data-v-ea5b0b9c"><block qq:for="{{block.imgs}}" qq:for-item="img" qq:for-index="i" qq:key="i"><image src="{{img.src}}" data-event-opts="{{[['load',[['e0',['$event']]]]]}}" data-event-params="{{({index,i})}}" bindload="__e" class="data-v-ea5b0b9c"></image></block></view></block></view></block></view><view class="lucky-imgs _div data-v-ea5b0b9c"><block qq:for="{{prizes}}" qq:for-item="prize" qq:for-index="index" qq:key="index"><view class="_div data-v-ea5b0b9c"><block qq:if="{{prize.imgs}}"><view class="_div data-v-ea5b0b9c"><block qq:for="{{prize.imgs}}" qq:for-item="img" qq:for-index="i" qq:key="i"><image src="{{img.src}}" data-event-opts="{{[['load',[['e1',['$event']]]]]}}" data-event-params="{{({index,i})}}" bindload="__e" class="data-v-ea5b0b9c"></image></block></view></block></view></block></view><view class="lucky-imgs _div data-v-ea5b0b9c"><block qq:for="{{buttons}}" qq:for-item="btn" qq:for-index="index" qq:key="index"><view class="_div data-v-ea5b0b9c"><block qq:if="{{btn.imgs}}"><view class="_div data-v-ea5b0b9c"><block qq:for="{{btn.imgs}}" qq:for-item="img" qq:for-index="i" qq:key="i"><image src="{{img.src}}" data-event-opts="{{[['load',[['e2',['$event']]]]]}}" data-event-params="{{({index,i})}}" bindload="__e" class="data-v-ea5b0b9c"></image></block></view></block></view></block></view></view></block>