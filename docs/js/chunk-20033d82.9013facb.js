(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20033d82"],{"63d6":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user_out"},[a("a-drawer",{staticClass:"user_drawer",attrs:{title:"添加新学生",width:360,visible:e.visible,"body-style":{paddingBottom:"80px"}},on:{close:e.onClose}},[a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"学生姓名"},model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}}),a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"专业"},model:{value:e.newType,callback:function(t){e.newType=t},expression:"newType"}}),a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"班级"},model:{value:e.newClass,callback:function(t){e.newClass=t},expression:"newClass"}}),a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"年龄"},model:{value:e.newAge,callback:function(t){e.newAge=t},expression:"newAge"}}),a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"性别"},model:{value:e.newSex,callback:function(t){e.newSex=t},expression:"newSex"}}),a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"身份证号"},model:{value:e.newId,callback:function(t){e.newId=t},expression:"newId"}}),a("a-button",{attrs:{type:"primary"},on:{click:e.addStudentNew}},[e._v("添加")])],1),a("a-drawer",{staticClass:"user_drawer",attrs:{title:"筛选",width:360,visible:e.visibleF,"body-style":{paddingBottom:"80px"}},on:{close:e.onCloseF}},[a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"学生姓名"},model:{value:e.fName,callback:function(t){e.fName=t},expression:"fName"}}),a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"专业"},model:{value:e.fType,callback:function(t){e.fType=t},expression:"fType"}}),a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"班级"},model:{value:e.fClass,callback:function(t){e.fClass=t},expression:"fClass"}}),a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"年龄"},model:{value:e.fAge,callback:function(t){e.fAge=t},expression:"fAge"}}),a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"性别"},model:{value:e.fSex,callback:function(t){e.fSex=t},expression:"fSex"}}),a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"身份证号"},model:{value:e.fId,callback:function(t){e.fId=t},expression:"fId"}}),a("a-button",{attrs:{type:"primary"},on:{click:e.fliterStudent}},[e._v("筛选")])],1),a("a-drawer",{staticClass:"user_drawer",attrs:{title:"编辑",width:360,visible:e.visibleE,"body-style":{paddingBottom:"80px"}},on:{close:e.onCloseE}},[a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"学生姓名"},model:{value:e.eName,callback:function(t){e.eName=t},expression:"eName"}}),a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"专业"},model:{value:e.eType,callback:function(t){e.eType=t},expression:"eType"}}),a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"班级"},model:{value:e.eClass,callback:function(t){e.eClass=t},expression:"eClass"}}),a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"年龄"},model:{value:e.eAge,callback:function(t){e.eAge=t},expression:"eAge"}}),a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"性别"},model:{value:e.eSex,callback:function(t){e.eSex=t},expression:"eSex"}}),a("a-input",{staticStyle:{"margin-bottom":"1rem"},attrs:{placeholder:"身份证号"},model:{value:e.eId,callback:function(t){e.eId=t},expression:"eId"}}),a("a-button",{attrs:{type:"primary"},on:{click:e.editStudent}},[e._v("修改")])],1),a("div",{staticClass:"title_user"},[a("h1",{staticStyle:{display:"inline"}},[e._v("学生信息")]),a("div",{staticClass:"inner_button_out"},[a("a-button",{staticClass:"add_button",attrs:{type:"primary"},on:{click:e.exportExcel}},[e._v("导出")]),a("a-button",{staticClass:"add_button",attrs:{type:"primary"},on:{click:e.showDrawerF}},[a("a-icon",{attrs:{type:"search"}})],1),a("a-button",{staticClass:"add_button",attrs:{type:"primary"},on:{click:e.showDrawer}},[a("a-icon",{attrs:{type:"plus"}}),e._v(" New Student ")],1)],1)]),a("div",{staticClass:"table_out"},[a("a-table",{staticClass:"table1",attrs:{columns:e.columns,"data-source":e.data,pagination:e.pagination,loading:e.loading,bordered:"",id:"table_user"},scopedSlots:e._u([{key:"tags",fn:function(t){return a("p",{staticClass:"do_p"},[a("a-button",{on:{click:function(a){return e.edit(t)}}},[e._v("编辑")]),e._v(" "),a("a-button",{on:{click:function(a){return e.del(t)}}},[e._v("删除")])],1)}}])})],1)],1)},i=[],n=(a("b0c0"),a("21a6")),o=a.n(n),l=a("1146"),r=a.n(l),c=a("1bab");function d(){return Object(c["a"])({url:"/http/getStudents",method:"GET"})}function u(e){var t=e.name,a=e.type,s=e.age,i=e.sex,n=e.idNo,o=e.Sclass;return Object(c["a"])({url:"/http/addStudent",method:"POST",data:{name:t,type:a,age:s,sex:i,idNo:n,Sclass:o}})}function m(e){var t=e.id;return Object(c["a"])({url:"/http/delStudent",method:"POST",data:{id:t}})}function p(e){var t=e.name,a=e.type,s=e.age,i=e.sex,n=e.idNo,o=e.Sclass,l=e._id;return Object(c["a"])({url:"/http/editStudent",method:"POST",data:{name:t,type:a,age:s,sex:i,idNo:n,Sclass:o,_id:l}})}function h(e){var t=e.name,a=e.type,s=e.age,i=e.sex,n=e.idNo,o=e.Sclass;return Object(c["a"])({url:"/http/fliterStudent",method:"POST",data:{name:t,type:a,age:s,sex:i,idNo:n,Sclass:o}})}var f=[{title:"学生姓名",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"专业",dataIndex:"type"},{title:"班级",dataIndex:"Sclass"},{title:"年龄",dataIndex:"age"},{title:"性别",dataIndex:"sex"},{title:"身份证号",dataIndex:"idNo"},{title:"操作",scopedSlots:{customRender:"tags"},width:180}],b={data:function(){return{data:[],pagination:{pageSize:10},columns:f,loading:!0,visible:!1,visibleS:!1,visibleE:!1,visibleF:!1,newName:"",newType:"",newClass:"",newAge:"",newSex:"",newId:"",eName:"",eType:"",eClass:"",eAge:"",eSex:"",eId:"",e_id:"",fName:"",fType:"",fClass:"",fAge:"",fSex:"",fId:""}},activated:function(){var e=this;this.loading=!0,d().then((function(t){console.log(t.data),e.data=t.data,e.loading=!1}))},methods:{exportExcel:function(){var e=r.a.utils.table_to_book(document.querySelector("#table_user")),t=r.a.write(e,{bookType:"xlsx",bookSST:!0,type:"array"});try{o.a.saveAs(new Blob([t],{type:"application/octet-stream"}),"学生信息.xlsx")}catch(a){"undefined"!==typeof console&&console.log(a,t)}return t},updateStudents:function(){var e=this;this.loading=!0,d().then((function(t){e.data=t.data,e.loading=!1}))},showDrawer:function(){this.visible=!0},onClose:function(){this.visible=!1},showDrawerS:function(){this.visibleS=!0},onCloseS:function(){this.visibleS=!1},showDrawerE:function(){this.visibleE=!0},onCloseE:function(){this.visibleE=!1},showDrawerF:function(){this.visibleF=!0},onCloseF:function(){this.visibleF=!1},addStudentNew:function(){var e=this,t=this.$message.loading("正在添加...",0);u({name:this.newName,type:this.newType,Sclass:this.newClass,age:this.newAge,sex:this.newSex,idNo:this.newId}).then((function(a){console.log(a),0!=a.data.success?(setTimeout(t,0),e.$message.success("添加成功"),e.updateStudents()):(setTimeout(t,0),e.$message.error("添加失败，学生已存在"))})).catch((function(a){setTimeout(t,0),e.$message.error(a),e.$message.error("添加失败，网络连接异常")})),this.visible=!1,this.clear()},clear:function(){this.newName="",this.newType="",this.newClass="",this.newAge="",this.newSex="",this.newId=""},edit:function(e){this.eName=e.name,this.eType=e.type,this.eClass=e.Sclass,this.eAge=e.age,this.eSex=e.sex,this.eId=e.idNo,this.e_id=e._id,this.showDrawerE()},del:function(e){var t=this;this.$confirm({title:"确定要删除这个学生吗？",content:"该操作将不可恢复，请谨慎操作",onOk:function(){var a=t.$message.loading("正在删除...",0);m({id:e._id}).then((function(e){setTimeout(a,0),1==e.data.deleted?t.$message.success("删除成功"):t.$message.error("删除失败"),t.updateStudents()})).catch((function(e){setTimeout(a,0),t.$message.error(e),t.$message.error("连接异常"),t.updateStudents()}))},onCancel:function(){}})},editStudent:function(){var e=this,t=this.$message.loading("正在提交修改...",0);p({name:this.eName,type:this.eType,Sclass:this.eClass,age:this.eAge,sex:this.eSex,idNo:this.eId,_id:this.e_id}).then((function(a){console.log(a),0!=a.data.success?(setTimeout(t,0),e.$message.success("修改成功"),e.updateStudents()):(setTimeout(t,0),e.$message.error("修改失败"))})).catch((function(a){setTimeout(t,0),e.$message.error(a),e.$message.error("网络连接异常")})),this.visibleE=!1},fliterStudent:function(){var e=this;this.loading=!0,h({name:this.fName,type:this.fType,Sclass:this.fClass,age:this.fAge,sex:this.fSex,idNo:this.fId}).then((function(t){console.log(t),e.data=t.data.data,e.loading=!1})).catch((function(t){e.$message.error(t),e.$message.error("网络连接异常"),e.loading=!1})),this.visibleF=!1}}},g=b,S=(a("ad2f"),a("2877")),y=Object(S["a"])(g,s,i,!1,null,null,null);t["default"]=y.exports},8411:function(e,t,a){},ad2f:function(e,t,a){"use strict";a("8411")}}]);
//# sourceMappingURL=chunk-20033d82.9013facb.js.map