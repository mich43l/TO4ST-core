import{r as t,h as e,H as a}from"./p-a65b63bc.js";import"./p-6b2e8e6d.js";import{O as n,a as i}from"./p-7d85979a.js";var o=function(t,e,a,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,n);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(s=(o<3?i(s):o>3?i(e,a,s):i(e,a))||s);return o>3&&s&&Object.defineProperty(e,a,s),s};const s=class{constructor(a){t(this,a),this.playerstats=[],this.currentPage=1,this.currentPageCount=1,this.orderDesc=!0,this.currentOrderBy=n.sumKills,this.hasValidNames=!1,this.allNamesValid=!1,this.allImagesValid=!1,this.loadingData=!1,this.apiClient={},this.isAdmin=!1,this.columns=[{name:"",hiddenMobile:()=>!0,shouldBeVisible:()=>this.allNamesValid,tableContent:t=>{var a;return e("a",{target:"_blank",href:"http://steamcommunity.com/profiles/"+t.steamId64},e("img",{src:null===(a=t.steamUser)||void 0===a?void 0:a.avatarMediumUrl,width:"48",height:"48"}))}},{name:"SteamId64",hiddenMobile:()=>this.hasValidNames,shouldBeVisible:()=>!this.allNamesValid,tableContent:t=>e("p",null,e("a",{target:"_blank",href:"http://steamcommunity.com/profiles/"+t.steamId64},t.steamId64))},{name:"Rank",tableContent:t=>e("p",null,t.rank)},{name:"Name",tableContent:t=>{var a;return e("p",null,e("a",{target:"_blank",href:"http://steamcommunity.com/profiles/"+t.steamId64},null===(a=t.steamUser)||void 0===a?void 0:a.name))},shouldBeVisible:()=>this.hasValidNames},{name:"Kills",tableContent:t=>e("p",null,t.kills),sortable:!0},{name:"Deaths",tableContent:t=>e("p",null,t.deaths),sortable:!0},{name:"Suicides",tableContent:t=>e("p",null,t.suicides),hiddenMobile:()=>!0,sortable:!0},{name:"K/D",tableContent:t=>{var a;return e("p",null,null===(a=t.killDeathRatio)||void 0===a?void 0:a.toFixed(2))},sortable:!0},{name:"Score",tableContent:t=>e("p",null,t.totalScore),sortable:!0},{name:"Damage",tableContent:t=>e("p",null,Math.round(t.totalDamage)),sortable:!0},{name:"Avg Damage / Round",tableContent:t=>{var a;return e("p",null,null===(a=t.avgDamagePerRound)||void 0===a?void 0:a.toFixed(0))},sortable:!0},{name:"Avg Score / Round",tableContent:t=>{var a;return e("p",null,null===(a=t.avgScorePerRound)||void 0===a?void 0:a.toFixed(0))},sortable:!0},{name:"Games",tableContent:t=>e("p",null,t.numberGamesPlayed),hiddenMobile:()=>!0,sortable:!0},{name:"Rounds",tableContent:t=>e("p",null,t.numberRoundsPlayed),hiddenMobile:()=>!0,sortable:!0}]}async onAppConfigUpdated(){await this.updateContent()}async updateContent(){var t;if(this.isAdmin||(null===(t=this.appConfig)||void 0===t?void 0:t.publicStats)){this.loadingData=!0;try{const t=await this.apiClient.client.chain.query.playerStatistics({options:{pageSize:25,page:this.currentPage,orderDesc:this.orderDesc,orderBy:this.currentOrderBy}}).execute({pageCount:!0,content:{rank:!0,kills:!0,deaths:!0,killDeathRatio:!0,avgDamagePerRound:!0,avgScorePerRound:!0,suicides:!0,steamId64:!0,totalDamage:!0,totalScore:!0,numberGamesPlayed:!0,numberRoundsPlayed:!0,steamUser:{name:!0,avatarMediumUrl:!0}}});this.playerstats=t.content,this.currentPageCount=t.pageCount,this.allNamesValid=this.playerstats.every(t=>{var e;return null===(e=t.steamUser)||void 0===e?void 0:e.name}),this.allImagesValid=this.playerstats.every(t=>{var e;return null===(e=t.steamUser)||void 0===e?void 0:e.avatarMediumUrl}),this.hasValidNames=this.allNamesValid||this.playerstats.some(t=>{var e;return null===(e=t.steamUser)||void 0===e?void 0:e.name})}catch(t){console.error(t)}this.loadingData=!1}}async orderBy(t,e){this.currentOrderBy="Score"===t?n.sumScore:"Damage"===t?n.sumDamage:"Deaths"===t?n.sumDeaths:"Suicides"===t?n.sumSuicides:"Games"===t?n.gamesPlayed:"Rounds"===t?n.roundsPlayed:"K/D"===t?n.killDeath:"Avg Score / Round"===t?n.averageScorePerRound:"Avg Damage / Round"===t?n.averageDamagePerRound:n.sumKills,this.orderDesc=e,this.updateContent()}async gotoPage(t){this.currentPage=t,this.updateContent()}render(){return e(a,null,e("to4st-list",{name:"Player Statistics",columns:this.columns,content:this.playerstats,currentPage:this.currentPage,pagesCount:this.currentPageCount,hasSearch:!1,loadingInputBlock:this.loadingData,onPagination:t=>this.gotoPage(t.detail),onChangedOrder:t=>this.orderBy(t.detail.orderBy,t.detail.orderDesc),hasCreateUpdate:!1}))}};o([i.Context("appConfig")],s.prototype,"appConfig",void 0),o([i.Context("api")],s.prototype,"apiClient",void 0),o([i.Context("isAdmin")],s.prototype,"isAdmin",void 0),o([i.Observe("appConfig")],s.prototype,"onAppConfigUpdated",null),s.style=":host{display:block}";export{s as to4st_player_statistics_list}