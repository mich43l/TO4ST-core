import{r as t,h as e,H as a}from"./p-a65b63bc.js";import"./p-6b2e8e6d.js";import{a as s}from"./p-7d85979a.js";import{e as n}from"./p-54bb4b03.js";import"./p-a71cea42.js";const i=class{constructor(a){t(this,a),this.servers=[],this.currentPage=1,this.currentPageCount=1,this.currentSearch="",this.orderDesc=!0,this.currentOrderBy="",this.apiClient={},this.columns=[{name:"Id",hiddenMobile:()=>!0,tableContent:t=>e("p",null,t.id)},{name:"Current Name",tableContent:t=>e("p",null,t.currentName),sortable:!0},{name:"Key",tableContent:t=>e("p",null,t.authKey),input:(t,a)=>{var s;return e("input",{type:"text",placeholder:"Leave blank to auto-generate",value:null!==(s=null==t?void 0:t.authKey)&&void 0!==s?s:"",class:"input",onChange:t=>a.emit({key:"authKey",value:t.target.value.trim()})})}},{name:"Description",tableContent:t=>e("p",null,t.description),input:(t,a)=>{var s;return e("input",{type:"text",placeholder:"Description",value:null!==(s=null==t?void 0:t.description)&&void 0!==s?s:"",class:"input",onChange:t=>a.emit({key:"description",value:t.target.value.trim()})})}},{name:"Last Contact",hiddenMobile:()=>!0,tableContent:t=>e("p",null,t.lastContact),sortable:!0}],this.filters=[]}async componentWillLoad(){await this.updateContent()}async updateContent(){try{const t=await this.apiClient.client.chain.query.gameservers({options:{pageSize:25,page:this.currentPage,search:this.currentSearch,orderDesc:this.orderDesc,orderByCurrentName:"Current Name"===this.currentOrderBy}}).execute({pageCount:!0,content:{id:!0,authKey:!0,currentName:!0,description:!0,lastContact:!0}});this.servers=t.content,this.currentPageCount=t.pageCount}catch(t){console.error(t)}}async searchGameserver(t){this.currentSearch=t,await this.updateContent()}async saveGameserver(t,e,a,s){try{this.apiClient.setTransactionId(s),await this.apiClient.client.chain.mutation.createUpdateGameserver({gameserver:{id:t.id,authKey:t.authKey,description:t.description,currentName:t.currentName}}).execute({id:!1}),a.emit(),await this.updateContent()}catch(t){a.emit(n(t)),console.log(t)}}async goToPage(t){this.currentPage=t,await this.updateContent()}async removeGameserver(t){try{await this.apiClient.client.chain.mutation.deleteGameserver({gameserverId:t.id}).execute(!1),await this.updateContent()}catch(t){console.log(t)}}async orderBy(t,e){this.orderDesc=e,this.currentOrderBy=t,this.updateContent()}render(){return e(a,null,e("to4st-list",{name:"Gameservers",columns:this.columns,content:this.servers,pagesCount:this.currentPageCount,currentPage:this.currentPage,onChangedOrder:t=>this.orderBy(t.detail.orderBy,t.detail.orderDesc),onPagination:t=>this.goToPage(t.detail),onSaveItem:t=>this.saveGameserver(t.detail.item,t.detail.isEdit,t.detail.afterSaveExecuted,t.detail.transactionId),onSearchItem:t=>this.searchGameserver(t.detail),onRemoveItem:t=>this.removeGameserver(t.detail)}))}};(function(t,e,a,s){var n,i=arguments.length,o=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,a,s);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(o=(i<3?n(o):i>3?n(e,a,o):n(e,a))||o);i>3&&o&&Object.defineProperty(e,a,o)})([s.Context("api")],i.prototype,"apiClient",void 0),i.style="";export{i as to4st_gameserver_list}