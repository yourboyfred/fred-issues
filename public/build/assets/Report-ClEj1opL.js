import{r as p,T as D,o as I,a as _,b as i,c as B,w as f,d as a,u as s,Z as F,e as n,f as C,g as y,v as g,h as u,i as v,F as b,j as N,n as R,t as h}from"./app-UuDk6DcT.js";import{_ as r,a as m}from"./InputLabel-BjdvJ34J.js";import{P as U}from"./PrimaryButton-BGnPP9qM.js";import{_ as w}from"./TextInput-D0Dje96D.js";import{_ as $}from"./AuthenticatedLayout-CW4_WrNu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ApplicationLogo-CDhRAOIs.js";const q={class:"bg-white m-10 rounded-lg p-10"},M=n("p",{class:"text-center pb-5 font-bold underline"},"Report an Issue experienced",-1),j={class:"mb-6"},P={class:"mb-6"},z={class:"mb-6"},E=n("option",{disabled:"",value:""},"Select a system",-1),L=["value"],T={class:"mb-6"},Z=n("option",{disabled:"",value:""},"Select an issue type",-1),A=["value"],G={class:"mb-6"},H={class:"flex items-center justify-end"},se={__name:"Report",setup(J){const d=p([]),c=p([]),e=D({name:"",description:"",system:"",issue_type:"",supporting_documents:null});I(()=>{k(),S()});const x=t=>{e.supporting_documents=t.target.files[0]},V=()=>{let t=new FormData;t.append("name",e.name),t.append("description",e.description),t.append("system",e.system),t.append("issue_type",e.issue_type),e.supporting_documents&&t.append("supporting_documents",e.supporting_documents),e.post(route("issues.store"),{data:t,onFinish:()=>e.reset()})},k=async()=>{const t=await _.get("/api/issue_types");d.value=t.data,console.log(t.data)},S=async()=>{const t=await _.get("/api/systems");c.value=t.data,console.log(t.data)};return(t,l)=>(i(),B($,null,{default:f(()=>[a(s(F),{title:"Report Issue"}),n("div",q,[M,n("form",{onSubmit:C(V,["prevent"]),class:"max-w-md mx-auto"},[n("div",j,[a(r,{for:"name",value:"Name of Issue"}),a(w,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":l[0]||(l[0]=o=>s(e).name=o),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),n("div",P,[a(r,{for:"description",value:"Description"}),a(w,{id:"description",type:"text",class:"mt-1 block w-full",modelValue:s(e).description,"onUpdate:modelValue":l[1]||(l[1]=o=>s(e).description=o),required:"",autocomplete:"description"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.description},null,8,["message"])]),n("div",z,[a(r,{for:"system",value:"Select System"}),y(n("select",{id:"system",name:"system",class:"form-select mt-1 block w-full","onUpdate:modelValue":l[2]||(l[2]=o=>s(e).system=o)},[E,(i(!0),u(b,null,v(c.value,o=>(i(),u("option",{value:o.id,key:o.id},h(o.name),9,L))),128))],512),[[g,s(e).system]]),a(m,{class:"mt-2",message:s(e).errors.system},null,8,["message"])]),n("div",T,[a(r,{for:"issue_type",value:"Type of Issue"}),y(n("select",{id:"issue_type",name:"issue_type",class:"form-select mt-1 block w-full","onUpdate:modelValue":l[3]||(l[3]=o=>s(e).issue_type=o)},[Z,(i(!0),u(b,null,v(d.value,o=>(i(),u("option",{value:o.id,key:o.id},h(o.name),9,A))),128))],512),[[g,s(e).issue_type]]),a(m,{class:"mt-2",message:s(e).errors.issue_type},null,8,["message"])]),n("div",G,[a(r,{for:"supporting_documents",value:"Issue Screenshot"}),n("input",{id:"supporting_documents",type:"file",class:"mt-1 block w-full",onChange:x,required:""},null,32),a(m,{class:"mt-2",message:s(e).errors.supporting_documents},null,8,["message"])]),n("div",H,[a(U,{class:R(["px-4 py-2",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:f(()=>[N(" Report ")]),_:1},8,["class","disabled"])])],32)])]),_:1}))}};export{se as default};
