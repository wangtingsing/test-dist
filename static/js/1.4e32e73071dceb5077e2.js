webpackJsonp([1],{"9bBU":function(t,s,a){a("mClu");var i=a("FeBl").Object;t.exports=function(t,s,a){return i.defineProperty(t,s,a)}},C4MV:function(t,s,a){t.exports={default:a("9bBU"),__esModule:!0}},GP23:function(t,s,a){"use strict";var i=a("Dd8w"),n=a.n(i),e=a("NYxO"),o={name:"songlistItem",data:function(){return{}},props:{like:{type:Boolean,default:!1}},computed:n()({},Object(e.b)({sindex:"sindex",tracks:"tracks",ispause:"ispause"})),watch:{sindex:function(){console.log("-------====++++"),console.log(this.sindex),this.sindex>this.tracks.length&&(this.sindex=0),this.goplay(this.tracks[this.sindex].id,this.sindex)}},methods:{goplay:function(t,s){console.log(t),this.$store.commit("togglefooter",{songid:t,flag:!0}),this.$store.commit("updateIndex",s),this.ispause||this.$store.commit("togglePause")}}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"songlist-content clearfix"},[a("ul",t._l(t.tracks,function(s,i){return a("li",{key:i,on:{click:function(a){return t.goplay(s.id,i)}}},[a("div",{staticClass:"songindex"},[t._v(t._s(i+1))]),t._v(" "),a("div",{staticClass:"songname"},[s.name?a("div",{staticClass:"play-name"},[t._v(t._s(s.name))]):a("div",{staticClass:"play-name"},[a("span",[t._v(t._s(s.searchWord))]),t._v(" "),s.iconUrl?a("span",{staticClass:"song-icon"},[a("img",{attrs:{src:s.iconUrl,alt:""}})]):t._e()]),t._v(" "),s.ar?a("div",{staticClass:"songer"},[t._v(t._s(s.ar[0].name)+" - "+t._s(s.al.name))]):a("div",{staticClass:"songer"},[t._v(t._s(s.content))])]),t._v(" "),s.score?a("div",{staticClass:"more hotscore"},[t._v(t._s(s.score))]):a("div",{staticClass:"more"},[t._m(0,!0)])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",[s("i",{staticClass:"iconfont icon-diandiandian"})])}]};var l=a("VU/8")(o,c,!1,function(t){a("fw9w")},"data-v-b4946fc6",null);s.a=l.exports},bOdI:function(t,s,a){"use strict";s.__esModule=!0;var i,n=a("C4MV"),e=(i=n)&&i.__esModule?i:{default:i};s.default=function(t,s,a){return s in t?(0,e.default)(t,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[s]=a,t}},fw9w:function(t,s){},hWGa:function(t,s,a){"use strict";s.a=function(t,s){return Object(i.a)({method:"get",url:"/login/cellphone?phone="+t+"&password="+s})},s.b=function(t){return Object(i.a)({method:"get",url:"/likelist?uid="+t})};var i=a("0RrJ")},jw5W:function(t,s){},mClu:function(t,s,a){var i=a("kM2E");i(i.S+i.F*!a("+E39"),"Object",{defineProperty:a("evD5").f})},qbM5:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),e=a("bOdI"),o=a.n(e),c=a("Cz8s"),l=a("LlOk"),r=a("hWGa"),d=a("GP23"),u=a("NYxO"),v={name:"songlist",data:function(){var t;return t={songlistname:"",coverImgUrl:""},o()(t,"songlistname",""),o()(t,"avatarUrl",""),o()(t,"nickname",""),o()(t,"description",""),o()(t,"commentCount",""),o()(t,"shareCount",""),o()(t,"trackCount",""),o()(t,"subscribedCount",""),o()(t,"isshow",!1),o()(t,"iscover",!1),o()(t,"like",!1),t},computed:n()({},Object(u.b)({tracks:"tracks"})),components:{anttop:c.a,songlistItem:d.a},beforeCreate:function(){this.$route.params.uid&&(this.like=!0)},created:function(){var t=this;this.like?Object(r.b)(this.$route.params.uid).then(function(t){console.log(t.data)}):Object(l.d)(this.$route.params.id).then(function(s){console.log(s.data),t.songlistname=s.data.playlist.name,t.commentCount=s.data.playlist.commentCount,t.trackCount=s.data.playlist.trackCount,t.shareCount=s.data.playlist.shareCount,t.subscribedCount=s.data.playlist.subscribedCount,t.description=s.data.playlist.description,t.coverImgUrl=s.data.playlist.coverImgUrl,t.avatarUrl=s.data.playlist.creator.avatarUrl,t.nickname=s.data.playlist.creator.nickname;var a=s.data.playlist.tracks,i=a.concat(a);t.$store.commit("setTracks",i)})},watch:{sindex:function(){this.sindex>this.tracks.length&&(this.sindex=0,this.goplay(this.tracks[this.sindex].id,this.sindex))}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0),this.$route.params&&window.scrollTo(0,0)},methods:{handleScroll:function(){document.documentElement.scrollTop>232?(this.isshow=!0,this.iscover=!0):document.documentElement.scrollTop<232&&(console.log(document.documentElement.scrollTop),this.isshow=!1,this.iscover=!1)},goplay:function(t,s){console.log("================songlusy=========================="),console.log(t),this.$store.commit("togglefooter",t),this.$store.commit("updateIndex",s)}},beforeRouteLeave:function(t,s,a){console.log(t),a()},beforeDestroy:function(){console.log("ghjkl"),window.removeEventListener("scroll",this.handleScroll,!0)},destroyed:function(){console.log("xiaohi")}},m={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{ref:"slb",staticClass:"song-list-body"},[a("div",{staticClass:"nav-bac"}),t._v(" "),a("div",{staticClass:"nav",class:{cover:t.iscover}},[a("anttop",[a("div",{attrs:{slot:"center"},slot:"center"},[a("span",[t._v("歌单")]),t._v(" "),a("router-link",{attrs:{to:"/search"}},[a("span",{staticClass:"search"},[a("i",{staticClass:"iconfont icon-sousuo"})])])],1),t._v(" "),a("div",{attrs:{slot:"right"},slot:"right"},[a("span",{staticClass:"search"},[a("i",{staticClass:"iconfont icon-diandiandian"})])])])],1),t._v(" "),t.isshow?a("div",{staticClass:"singlist-body-copy"},[a("div",{staticClass:"songlist songlist-copy"},[a("div",{staticClass:"songlist-mess"},[t._m(0),t._v(" "),a("span",{staticClass:"playall"},[t._v("播放全部")]),a("span",{staticClass:"songcount"},[t._v("(共"+t._s(t.trackCount)+"首)")]),t._v(" "),a("span",{staticClass:"collect collect-copy"},[t._v("+ 收藏("+t._s(t.subscribedCount)+")")])])])]):t._e(),t._v(" "),a("div",{staticClass:"bac-bur",style:{backgroundImage:"url("+t.coverImgUrl+")"}}),t._v(" "),a("div",{staticClass:"top-message"},[a("div",{staticClass:"top-title"},[a("div",{staticClass:"cover-img"},[a("img",{attrs:{src:t.coverImgUrl,alt:""}})]),t._v(" "),a("div",{staticClass:"song-name"},[a("div",{staticClass:"songlist-name"},[t._v(t._s(t.songlistname))]),t._v(" "),a("div",{staticClass:"avatarUrldiv"},[a("img",{attrs:{src:t.avatarUrl,alt:""}}),t._v(" "),a("span",{staticClass:"creator-name"},[t._v(t._s(t.nickname)+">")])]),t._v(" "),a("div",{staticClass:"desc"},[t._v(t._s(t.description))])])]),t._v(" "),a("div",{staticClass:"footer-list"},[a("div",{staticClass:"itemicon"},[t._m(1),a("div",{staticClass:"itemdesc"},[t._v(t._s(t.commentCount))])]),t._v(" "),a("div",{staticClass:"itemicon"},[a("span",[a("i",{staticClass:"iconfont icon-fenxiangdaozhuanfafasongzhiyuanquanxianxing"}),a("div",{staticClass:"itemdesc"},[t._v(t._s(t.shareCount))])])]),t._v(" "),t._m(2),t._v(" "),t._m(3)])]),t._v(" "),a("div",{staticClass:"songlist-body"},[a("div",{staticClass:"songlist"},[a("div",{staticClass:"songlist-mess"},[t._m(4),t._v(" "),a("span",{staticClass:"playall"},[t._v("播放全部")]),a("span",{staticClass:"songcount"},[t._v("(共"+t._s(t.trackCount)+"首)")]),t._v(" "),a("span",{staticClass:"collect"},[t._v("+ 收藏("+t._s(t.subscribedCount)+")")])])]),t._v(" "),a("songlistItem",{attrs:{tracks:t.tracks,like:t.like}})],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",[s("i",{staticClass:"el-icon-video-play"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",[s("i",{staticClass:"iconfont icon-pinglunliebiao"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"itemicon"},[s("span",[s("i",{staticClass:"iconfont icon-xiazainor"})]),s("div",{staticClass:"itemdesc"},[this._v("下载")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"itemicon"},[s("span",[s("i",{staticClass:"iconfont icon-duoxuan"})]),s("div",{staticClass:"itemdesc"},[this._v("多选")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",[s("i",{staticClass:"el-icon-video-play"})])}]};var _=a("VU/8")(v,m,!1,function(t){a("jw5W")},"data-v-b848a664",null);s.default=_.exports}});
//# sourceMappingURL=1.4e32e73071dceb5077e2.js.map