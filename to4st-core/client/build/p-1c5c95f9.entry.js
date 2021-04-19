import{r as s,h as t,H as i}from"./p-d36259ec.js";import"./p-70b7bd16.js";import{a as e}from"./p-bc64f1f3.js";import"./p-0bc4f624.js";import{e as a,h as l}from"./p-6d473d66.js";import"./p-63cac319.js";import"./p-50238e6f.js";const n=class{constructor(i){s(this,i),this.keys=[],this.currentPage=1,this.currentPageCount=1,this.currentSearch="",this.orderDesc=!0,this.apiClient={},this.columns=[{name:"Key",hiddenMobile:()=>!0,tableContent:s=>t("p",null,s.authKey),input:(s,i)=>{var e;return t("input",{type:"text",placeholder:"Leave blank to auto-generate",value:null!==(e=null==s?void 0:s.authKey)&&void 0!==e?e:"",class:"input",onChange:s=>i.emit({key:"authKey",value:s.target.value.trim()})})}},{name:"Description",tableContent:s=>t("p",null,s.description),input:(s,i)=>{var e;return t("input",{type:"text",placeholder:"Description",value:null!==(e=null==s?void 0:s.description)&&void 0!==e?e:"",class:"input",onChange:s=>i.emit({key:"description",value:s.target.value.trim()})})}},{name:"Last Use",tableContent:s=>t("p",null,s.lastUse),sortable:!0}]}async componentWillLoad(){await this.updateContent()}async updateContent(){try{const s=await this.apiClient.client.chain.query.authKeys({options:{page:this.currentPage,pageSize:20,search:this.currentSearch,orderDesc:this.orderDesc}}).execute({pageCount:!0,content:{id:!0,authKey:!0,lastUse:!0,description:!0}});this.currentPageCount=s.pageCount,this.keys=s.content}catch(s){console.error(s)}}async searchAuthKey(s){this.currentSearch=s,await this.updateContent()}async saveAuthKey(s,t,i,e){try{this.apiClient.setTransactionId(e),await this.apiClient.client.chain.mutation.createUpdateAuthKey({authKey:{id:s.id,authKey:s.authKey,description:s.description}}).execute({id:!1}),i.emit(),await this.updateContent()}catch(s){i.emit(a(s)),console.error(s)}}async goToPage(s){this.currentPage=s,await this.updateContent()}async orderBy(s,t){this.orderDesc=t,this.updateContent()}async removeAuthKey(s){try{await this.apiClient.client.chain.mutation.deleteAuthKey({authKey:s.authKey}).execute(!1),await this.updateContent()}catch(s){console.error(s)}}render(){return t(i,null,t("to4st-list",{name:"API Keys",columns:this.columns,content:this.keys,currentPage:this.currentPage,pagesCount:this.currentPageCount,onChangedOrder:s=>this.orderBy(s.detail.orderBy,s.detail.orderDesc),onPagination:s=>this.goToPage(s.detail),onSaveItem:s=>this.saveAuthKey(s.detail.item,s.detail.isEdit,s.detail.afterSaveExecuted,s.detail.transactionId),onSearchItem:s=>this.searchAuthKey(s.detail),onRemoveItem:s=>this.removeAuthKey(s.detail)}))}};(function(s,t,i,e){var a,l=arguments.length,n=l<3?t:null===e?e=Object.getOwnPropertyDescriptor(t,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(s,t,i,e);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(n=(l<3?a(n):l>3?a(t,i,n):a(t,i))||n);l>3&&n&&Object.defineProperty(t,i,n)})([e.Context("api")],n.prototype,"apiClient",void 0),n.style=":host{display:block}";var o=function(s,t,i,e){var a,l=arguments.length,n=l<3?t:null===e?e=Object.getOwnPropertyDescriptor(t,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(s,t,i,e);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(n=(l<3?a(n):l>3?a(t,i,n):a(t,i))||n);return l>3&&n&&Object.defineProperty(t,i,n),n};const h=class{constructor(i){s(this,i),this.partners=[],this.apiClient={},this.columns=[{name:"URL",tableContent:s=>t("p",null,s.URL),input:(s,i)=>{var e;return t("input",{type:"text",placeholder:"URL",value:null!==(e=null==s?void 0:s.URL)&&void 0!==e?e:"",class:"input",onChange:s=>i.emit({key:"URL",value:s.target.value.trim()})})}}]}onAppConfigUpdated(){var s,t;this.partners=null===(t=null===(s=this.appConfig)||void 0===s?void 0:s.banlistPartners)||void 0===t?void 0:t.map(((s,t)=>({URL:s,id:t})))}async saveBanlistPartner(s,t,i){const e=[...this.partners];t?e[s.id].URL=s.URL:e.push(s);try{const s=await this.apiClient.client.chain.mutation.updateAppConfig({appConfig:{banlistPartners:e.map((s=>s.URL))}}).execute({instanceId:!0,publicStats:!0,publicBanQuery:!0,banlistPartners:!0,masterserverKey:!0,steamWebApiKey:!0,ownAddress:!0,appInfo:{uniquePlayers:!0,gamesPlayed:!0,roundsPlayed:!0,activeBans:!0}});i.emit(""),this.appConfig=s}catch(s){i.emit(a(s))}}async removeBanlistPartner(s){const t=this.partners.filter((t=>t.id!=s.id)).map((s=>s.URL));try{const s=await this.apiClient.client.chain.mutation.updateAppConfig({appConfig:{banlistPartners:t}}).execute({instanceId:!0,publicStats:!0,publicBanQuery:!0,banlistPartners:!0,masterserverKey:!0,steamWebApiKey:!0,ownAddress:!0,appInfo:{uniquePlayers:!0,gamesPlayed:!0,roundsPlayed:!0,activeBans:!0}});this.appConfig=s}catch(s){console.error(s)}}render(){return t(i,null,t("to4st-list",{name:"Banlist Partners",columns:this.columns,content:this.partners,hasSearch:!1,hasPagination:!1,onSaveItem:s=>this.saveBanlistPartner(s.detail.item,s.detail.isEdit,s.detail.afterSaveExecuted),onRemoveItem:s=>this.removeBanlistPartner(s.detail)}))}};o([e.Context("appConfig")],h.prototype,"appConfig",void 0),o([e.Context("api")],h.prototype,"apiClient",void 0),o([e.Observe("appConfig")],h.prototype,"onAppConfigUpdated",null),h.style=":host{display:block}";var d=function(s,t,i,e){var a,l=arguments.length,n=l<3?t:null===e?e=Object.getOwnPropertyDescriptor(t,i):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(s,t,i,e);else for(var o=s.length-1;o>=0;o--)(a=s[o])&&(n=(l<3?a(n):l>3?a(t,i,n):a(t,i))||n);return l>3&&n&&Object.defineProperty(t,i,n),n};const r=class{constructor(t){s(this,t),this.apiClient={},this.currentPassword="",this.currentRepeat="",this.to4stMasterKey="",this.steamWebApiKey="",this.addressOverride="",this.publicBanQuery=!1,this.publicStats=!1,this.minScoreStats=100,this.playerStatsCacheAge=5,this.currentError=""}onAppConfigUpdated(){var s,t,i,e,a,l,n;this.to4stMasterKey=null===(s=this.appConfig)||void 0===s?void 0:s.masterserverKey,this.publicBanQuery=null===(t=this.appConfig)||void 0===t?void 0:t.publicBanQuery,this.publicStats=null===(i=this.appConfig)||void 0===i?void 0:i.publicStats,this.steamWebApiKey=null===(e=this.appConfig)||void 0===e?void 0:e.steamWebApiKey,this.addressOverride=null===(a=this.appConfig)||void 0===a?void 0:a.ownAddress,this.minScoreStats=null===(l=this.appConfig)||void 0===l?void 0:l.minScoreStats,this.playerStatsCacheAge=null===(n=this.appConfig)||void 0===n?void 0:n.playerStatsCacheAge}hasPendingChanges(){var s,t,i,e,a,l,n;return!!this.appConfig&&((null===(s=this.currentPassword)||void 0===s?void 0:s.length)>0||this.publicBanQuery!==this.appConfig.publicBanQuery||this.publicStats!==this.appConfig.publicStats||this.minScoreStats!==this.appConfig.minScoreStats||this.playerStatsCacheAge!==this.appConfig.playerStatsCacheAge||(null===(t=this.to4stMasterKey)||void 0===t?void 0:t.trim())!==(null===(i=this.appConfig.masterserverKey)||void 0===i?void 0:i.trim())||(null===(e=this.addressOverride)||void 0===e?void 0:e.trim())!==(null===(a=this.appConfig.ownAddress)||void 0===a?void 0:a.trim())||(null===(l=this.steamWebApiKey)||void 0===l?void 0:l.trim())!==(null===(n=this.appConfig.steamWebApiKey)||void 0===n?void 0:n.trim()))}async commit(){const s={};if(this.currentError="",this.currentPassword.length>=9?this.currentPassword===this.currentRepeat?s.password=l(this.currentPassword):this.currentError="Passwords do not match.":this.currentPassword.length>0&&(this.currentError="Password must have at least 9 characters."),s.masterserverKey=this.to4stMasterKey,s.publicBanQuery=this.publicBanQuery,s.publicStats=this.publicStats,s.steamWebApiKey=this.steamWebApiKey,s.ownAddress=this.addressOverride||void 0,s.playerStatsCacheAge=this.playerStatsCacheAge,s.minScoreStats=this.minScoreStats,!this.currentError)try{const t=await this.apiClient.client.chain.mutation.updateAppConfig({appConfig:s}).execute({instanceId:!0,publicStats:!0,publicBanQuery:!0,banlistPartners:!0,masterserverKey:!0,steamWebApiKey:!0,ownAddress:!0,minScoreStats:!0,playerStatsCacheAge:!0,appInfo:{uniquePlayers:!0,gamesPlayed:!0,roundsPlayed:!0,activeBans:!0}});this.appConfig=t,this.currentPassword="",this.currentRepeat=""}catch(s){console.error(s),this.currentError=a(s)}}render(){var s,e,a;const l=this.hasPendingChanges(),n=this.currentRepeat===this.currentPassword;return t(i,null,t("article",{class:"message has-margin-top-30"},t("div",{class:"message-header"},t("p",null,"General Settings")),t("div",{class:"message-body"},t("div",{class:{"notification is-danger":!0,"is-hidden":0==this.currentError.length}},t("button",{class:"delete",onClick:()=>this.currentError=""}),this.currentError),t("form",null,t("div",{class:"field is-horizontal"},t("div",{class:"field-label is-normal"},t("label",{class:"label"},"Instance Id")),t("div",{class:"field-body has-text-botton"},t("p",null,null===(s=this.appConfig)||void 0===s?void 0:s.instanceId))),t("div",{class:"field is-horizontal"},t("div",{class:"field-label is-normal"},t("label",{class:"label"},"Public statistics")),t("div",{class:"field-body"},t("to4st-switch",{value:this.publicStats,onToggle:s=>this.publicStats=s.detail}))),t("div",{class:"field is-horizontal"},t("div",{class:"field-label is-normal"},t("label",{class:"label"},"Public bancheck")),t("div",{class:"field-body"},t("to4st-switch",{value:this.publicBanQuery,onToggle:s=>this.publicBanQuery=s.detail}))),t("div",{class:"field is-horizontal"},t("div",{class:"field-label is-normal"},t("label",{class:"label"},"Password")),t("div",{class:"field-body"},t("div",{class:"control"},t("input",{class:"input",type:"password",placeholder:"Password",value:this.currentPassword,onKeyUp:s=>this.currentPassword=s.target.value.trim(),onChange:s=>this.currentPassword=s.target.value.trim()})))),t("div",{class:"field is-horizontal"},t("div",{class:"field-label is-normal"},t("label",{class:"label"},"Repeat Password")),t("div",{class:"field-body"},t("div",{class:"control"},t("input",{class:{input:!0,"is-success":n&&""!==this.currentPassword,"is-danger":this.currentPassword.length>0&&this.currentRepeat.length>0&&!n,"is-warning":this.currentPassword.length>0&&0==this.currentRepeat.length},type:"password",placeholder:"Repeat Password",value:this.currentRepeat,onChange:s=>this.currentRepeat=s.target.value.trim(),onKeyUp:s=>this.currentRepeat=s.target.value.trim()})))),t("div",{class:"field is-horizontal"},t("div",{class:"field-label is-normal"},t("label",{class:"label"},"TO4ST-masterkey")),t("div",{class:"field-body"},t("div",{class:"control"},t("input",{class:"input",type:"text",placeholder:"Key",value:this.to4stMasterKey,onChange:s=>this.to4stMasterKey=s.target.value.trim(),onKeyUp:s=>this.to4stMasterKey=s.target.value.trim()})))),t("div",{class:"field is-horizontal"},t("div",{class:"field-label is-normal"},t("label",{class:"label"},"TO4ST-master Address override")),t("div",{class:"field-body"},t("div",{class:"control"},t("span",{class:"has-tooltip-arrow","data-tooltip":"Enter the tld-address the master \nshould use to contact your backend, e.g. 'https://abc.de'"},t("input",{class:"input",type:"text",placeholder:"",value:this.addressOverride,onChange:s=>this.addressOverride=s.target.value.trim(),onKeyUp:s=>this.addressOverride=s.target.value.trim()}))))),t("div",{class:"field is-horizontal"},t("div",{class:"field-label is-normal"},t("label",{class:"label"},"Min score for aggregated player statistics")),t("div",{class:"field-body"},t("div",{class:"control"},t("span",{class:"has-tooltip-arrow","data-tooltip":"Min score needed for players to be visible in aggregated player stats"},t("input",{type:"number",placeholder:"Min Score",min:"0",value:null!==(e=this.minScoreStats)&&void 0!==e?e:0,class:"input",onChange:s=>this.minScoreStats=parseInt(s.target.value.trim()),onKeyUp:s=>this.minScoreStats=parseInt(s.target.value.trim())}))))),t("div",{class:"field is-horizontal"},t("div",{class:"field-label is-normal"},t("label",{class:"label"},"Player statistics Cache MaxAge")),t("div",{class:"field-body"},t("div",{class:"control"},t("span",{class:"has-tooltip-arrow","data-tooltip":"In minutes, 0 to disable Cache"},t("input",{type:"number",placeholder:"minutes",min:"0",value:null!==(a=this.playerStatsCacheAge)&&void 0!==a?a:0,class:"input",onChange:s=>this.playerStatsCacheAge=parseInt(s.target.value.trim()),onKeyUp:s=>this.playerStatsCacheAge=parseInt(s.target.value.trim())}))))),t("div",{class:"field is-horizontal"},t("div",{class:"field-label is-normal"},t("label",{class:"label"},"Steam Web API Key")),t("div",{class:"field-body"},t("div",{class:"control"},t("input",{class:"input",type:"text",placeholder:"Key",value:this.steamWebApiKey,onChange:s=>this.steamWebApiKey=s.target.value.trim(),onKeyUp:s=>this.steamWebApiKey=s.target.value.trim()})))),t("div",{class:"field is-horizontal"},t("div",{class:"field-label is-normal"}),t("div",{class:"field-body"},t("p",null,t("a",{target:"_blank",href:"https://partner.steamgames.com/doc/webapi_overview/auth"},"Visit the Steamworks docs to get your own user key")))),t("div",{class:"control"},t("a",{class:{"button has-margin-top-30":!0,"is-primary":!l,"is-warning":l},onClick:()=>this.commit()},"Save"))))))}};d([e.Context("appConfig")],r.prototype,"appConfig",void 0),d([e.Context("api")],r.prototype,"apiClient",void 0),d([e.Observe("appConfig")],r.prototype,"onAppConfigUpdated",null),r.style=":host{display:block}.has-text-botton{position:relative}.has-text-botton p{position:absolute;bottom:0;width:max-content}";export{n as to4st_api_keys,h as to4st_banlist_partners,r as to4st_general_settings}