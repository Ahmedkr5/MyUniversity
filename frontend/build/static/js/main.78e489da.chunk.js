(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{545:function(e,t){},547:function(e,t){},557:function(e,t){},559:function(e,t){},586:function(e,t){},588:function(e,t){},589:function(e,t){},594:function(e,t){},596:function(e,t){},602:function(e,t){},604:function(e,t){},623:function(e,t){},635:function(e,t){},638:function(e,t){},646:function(e,t,n){},648:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(11),c=n.n(a),s=(n(362),n(87)),o=n(15),l=n(16),d=n(35),j=n(36),u=n(22),h=n(714),m=n(315),p=n.n(m),b=n(3),x=function(){return Object(b.jsx)("div",{className:"row",style:{justifyContent:"center",alignItems:"center",height:600},children:Object(b.jsx)("div",{className:"col-2 ",children:Object(b.jsx)(p.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})})},O=n(700),g=n(709),v=n(710),f=n(713),y=n(712),w=n(711),L=n(708),N=n(93),T=n(21),C=n(323),I=n.n(C),E=n(703),S=n(707),k=n(705),U=n(706),M=n(704),R=n(45),F=n.n(R),P=n(316),D=n(322),B=n.n(D),_=Object(O.a)({root:{marginTop:15,marginLeft:15,width:450}});function A(e){var t=Object(T.g)(),n=r.a.useState(!1),i=Object(u.a)(n,2),a=i[0],c=i[1],s=function(){c(!1),F.a.delete("http://localhost:5000/universities/"+e.univ._id).then(alert("university".concat(e.univ.name," deleted successfully"))).then(window.location.reload())},o=_(),l="http://localhost:5000/uploads/"+e.univ.image;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(E.a,{open:a,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(b.jsx)(M.a,{id:"alert-dialog-title",children:"Confirm Deletion"}),Object(b.jsx)(k.a,{children:Object(b.jsxs)(U.a,{id:"alert-dialog-description",children:["Are you sure you want to delete ",e.univ.name," University ?"]})}),Object(b.jsxs)(S.a,{children:[Object(b.jsx)(L.a,{onClick:s,color:"primary",children:"Disagree"}),Object(b.jsx)(L.a,{onClick:s,color:"primary",autoFocus:!0,children:"Agree"})]})]}),Object(b.jsxs)(P.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:[Object(b.jsxs)(g.a,{className:o.root,children:[Object(b.jsxs)(v.a,{onClick:function(){t.push("/university/".concat(e.univ._id))},children:[Object(b.jsx)(w.a,{component:"img",alt:"University img",height:"260",image:l,title:"Contemplative Reptile"}),Object(b.jsxs)(y.a,{children:[Object(b.jsx)(N.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.univ.name}),Object(b.jsxs)(N.a,{variant:"body2",color:"textSecondary",component:"p",children:[Object(b.jsx)(B.a,{}),e.univ.Location]})]})]}),Object(b.jsxs)(f.a,{style:{width:"100%",justifyContent:"space-between"},children:[Object(b.jsx)(L.a,{size:"small",color:"primary",onClick:function(){t.push("/university/".concat(e.univ._id))},children:"Learn More"}),Object(b.jsx)(L.a,{size:"small",color:"primary",onClick:function(){c(!0)},children:Object(b.jsx)(I.a,{color:"secondary"})})]})]})," "]})]})}var q=n(715),H=n(737),W=n(327),z=n.n(W),V=n(13),G=n(31),Y=Object(O.a)((function(e){return{root:{marginTop:15,marginLeft:15,width:450},popover:{pointerEvents:"none"},paper:{padding:e.spacing(1)}}})),J={margin:0,top:"auto",right:30,bottom:20,left:"auto",position:"fixed",zIndex:"1"};function K(e){var t=e.univ,n=e.loading,a=e.err,c=e.postUniversity,s=e.resetAddUnivForm,o=function(e){return e&&e.length},l=function(e){return function(t){return!t||t.length<=e}},d=function(e){return function(t){return t&&t.length>=e}},j=Y(),m=Object(i.useState)(!1),p=Object(u.a)(m,2),O=p[0],g=p[1],v=r.a.useState(null),f=Object(u.a)(v,2),y=f[0],w=f[1],L=function(){w(null)},T=Boolean(y);return n?Object(b.jsx)(x,{}):a?Object(b.jsx)("h4",{children:a}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(h.a,{maxWidth:"xl",style:{justifyContent:"center"},children:[Object(b.jsxs)(V.d,{isOpen:O,toggle:function(){g(!O)},children:[Object(b.jsx)(V.f,{toggle:function(){g(!O)},children:" Add University"}),Object(b.jsx)(V.e,{children:Object(b.jsxs)(G.Form,{model:"AddUniv",onSubmit:function(e){c(e.name,e.program,e.location,e.length,e.price,e.description),g(!O),s(),window.location.reload()},children:[Object(b.jsxs)(V.g,{className:"form-group",children:[Object(b.jsx)(V.c,{htmlFor:"name",md:12,children:"University Name "}),Object(b.jsxs)(V.b,{md:12,children:[Object(b.jsx)(G.Control.text,{model:".name",id:"name",name:"name",placeholder:"University Name...",className:"form-control",validators:{required:o,minLength:d(4),maxLength:l(50)}}),Object(b.jsx)(G.Errors,{className:"text-danger",model:".name",show:"touched",messages:{required:"Required",minLength:" Must be greater than 3 characters",maxLength:"Must be 50 characters or less"}})]})]}),Object(b.jsxs)(V.g,{className:"form-group",children:[Object(b.jsx)(V.c,{htmlFor:"program",md:12,children:"Program "}),Object(b.jsxs)(V.b,{md:12,children:[Object(b.jsx)(G.Control.text,{model:".program",id:"program",name:"program",placeholder:"University Program...",className:"form-control",validators:{required:o,minLength:d(4),maxLength:l(50)}}),Object(b.jsx)(G.Errors,{className:"text-danger",model:".program",show:"touched",messages:{required:"Required",minLength:" Must be greater than 3 characters",maxLength:"Must be 50 characters or less"}})]})]}),Object(b.jsxs)(V.g,{className:"form-group",children:[Object(b.jsx)(V.c,{htmlFor:"location",md:12,children:"Location "}),Object(b.jsxs)(V.b,{md:12,children:[Object(b.jsx)(G.Control.text,{model:".location",id:"location",name:"location",placeholder:"location...",className:"form-control",validators:{required:o,minLength:d(4),maxLength:l(50)}}),Object(b.jsx)(G.Errors,{className:"text-danger",model:".location",show:"touched",messages:{required:"Required",minLength:" Must be greater than 3 characters",maxLength:"Must be 50 characters or less"}})]})]}),Object(b.jsxs)(V.g,{className:"form-group",children:[Object(b.jsx)(V.c,{htmlFor:"length",md:6,children:"Length(year)"}),Object(b.jsxs)(V.b,{md:6,children:[Object(b.jsxs)(G.Control.select,{model:".length",className:"form-control",name:"length",id:"length",validators:{required:o},children:[Object(b.jsx)("option",{children:"Please Select"}),Object(b.jsx)("option",{children:"1"}),Object(b.jsx)("option",{children:"2"}),Object(b.jsx)("option",{children:"3"}),Object(b.jsx)("option",{children:"4"}),Object(b.jsx)("option",{children:"5"}),Object(b.jsx)("option",{children:"6"}),Object(b.jsx)("option",{children:"7"}),Object(b.jsx)("option",{children:"8"}),Object(b.jsx)("option",{children:"9"}),Object(b.jsx)("option",{children:"10"})]}),Object(b.jsx)(G.Errors,{className:"text-danger",model:".length",show:"touched",messages:{required:"Required"}})]}),Object(b.jsx)(V.c,{htmlFor:"price",md:6,children:"Price($) "}),Object(b.jsxs)(V.b,{md:6,children:[Object(b.jsx)(G.Control.text,{model:".price",id:"price",name:"price",placeholder:"price...",className:"form-control",validators:{required:o,isNumber:function(e){return!isNaN(Number(e))}}}),Object(b.jsx)(G.Errors,{className:"text-danger",model:".price",show:"touched",messages:{required:"Required",isNumber:"Must be a number"}})]})]}),Object(b.jsxs)(V.g,{className:"form-group",children:[Object(b.jsx)(V.c,{htmlFor:"description",md:12,children:"Description"}),Object(b.jsxs)(V.b,{md:12,children:[Object(b.jsx)(G.Control.textarea,{model:".description",id:"description",name:"description",rows:"5",className:"form-control",validators:{required:o,minLength:d(15)}}),Object(b.jsx)(G.Errors,{className:"text-danger",model:".description",show:"touched",messages:{required:"Required",minLength:" Must be greater than 15 characters"}})]})]}),Object(b.jsx)(V.g,{className:"form-group",children:Object(b.jsx)(V.b,{children:Object(b.jsx)(V.a,{type:"submit",color:"primary",children:"Add"})})})]})})]}),Object(b.jsx)(H.a,{id:"mouse-over-popover",className:j.popover,classes:{paper:j.paper},open:T,anchorEl:y,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:L,disableRestoreFocus:!0,children:Object(b.jsx)(N.a,{children:"Click to add Universities."})}),Object(b.jsx)(q.a,{color:"primary",size:"large",style:J,"aria-label":"add","aria-owns":T?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(e){w(e.currentTarget)},onMouseLeave:L,onClick:function(){g(!O)},children:Object(b.jsx)(z.a,{})}),Object(b.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",flexWrap:"wrap"},children:t.map((function(e){return Object(b.jsx)(A,{univ:e},e._id)}))})]})})}var Q=n(64),$=n(43),X=n(720),Z=n(721),ee=n(722),te=n(723),ne=n(210),ie=n.n(ne),re=n(32),ae=n(5),ce=n(738),se=n(716),oe=n(652),le=n(717),de=n(718),je=n(328),ue=n.n(je),he=n(719),me=n(329),pe=n.n(me),be=Object(O.a)({list:{width:250},fullList:{width:"auto"}});function xe(){var e,t=be(),n=r.a.useState({right:!1}),i=Object(u.a)(n,2),a=i[0],c=i[1],s=Object(T.g)(),o=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&c(Object(re.a)(Object(re.a)({},a),{},Object(Q.a)({},e,t)))}};return Object(b.jsxs)(r.a.Fragment,{children:[Object(b.jsx)(he.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:o("right",!0),children:Object(b.jsx)(pe.a,{})}),Object(b.jsx)(ce.a,{anchor:"right",open:a.right,onClose:o("right",!1),children:(e="right",Object(b.jsx)("div",{className:Object(ae.a)(t.list,Object(Q.a)({},t.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:o(e,!1),onKeyDown:o(e,!1),children:Object(b.jsx)(se.a,{children:Object(b.jsxs)(oe.a,{button:!0,onClick:function(){s.push("/home")},children:[Object(b.jsxs)(le.a,{children:[" ",Object(b.jsx)(ue.a,{})," "]}),Object(b.jsx)(de.a,{primary:"Home"})]})})}))})]})}var Oe=n(27),ge=n(211),ve=n.n(ge),fe=n(343),ye=Object(O.a)((function(e){return{navlinks:{marginRight:e.spacing(5),display:"flex"},logo:{flexGrow:"1",cursor:"pointer",fontFamily:"Cursive",fontStyle:"italic"},link:{textDecoration:"none",color:"white",fontSize:"20px",marginLeft:e.spacing(5),"&:hover":{color:"white",fontWeight:"bold",borderBottom:"1px solid white"}},search:Object(Q.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Oe.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Oe.a)(e.palette.common.white,.25)},marginRight:15,marginLeft:15,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"35px",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(Q.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"30ch"}),search2:Object(Q.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Oe.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Oe.a)(e.palette.common.white,.25)},marginRight:5,marginLeft:5,width:"auto%",height:"fit-content",alignSelf:"center"},e.breakpoints.up("xs"),{marginLeft:e.spacing(3),width:"auto"})}}));function we(){var e=ye(),t=Object($.a)(),n=Object(X.a)(t.breakpoints.down("xs")),i=function(e){if(document.getElementById("result").innerHTML="",8==e.keyCode)var t=document.getElementById("search").value.substr(0,document.getElementById("search").value.length-1);else t=document.getElementById("search").value+e.key;document.getElementById("result").innerHTML="";var n=F.a.get("http://localhost:5000/universities/a/"+t,{}).then((function(e){return e.data})),i=-1;n.then((function(e){e.forEach((function(e){i++,document.getElementById("result").innerHTML=document.getElementById("result").innerHTML+"<a class='MuiTypography-root MuiLink-root MuiLink-underlineHover  MuiListItem-root MuiListItem-gutters MuiTypography-colorPrimary' tabindex='"+i+"' aria-disabled='false' href='http://localhost:3000/university/"+e._id+"'><div class='MuiListItemText-root'><span  class='MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock'>"+e.name+"</span></div><span class='MuiTouchRipple-root'></span></a><hr style='color:grey' class='MuiDivider-root'>"})),-1==i&&(document.getElementById("result").innerHTML=document.getElementById("result").innerHTML+"<a class='MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button' tabindex='0' aria-disabled='false' ><div class='MuiListItemText-root'><span class='MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock' style='color:black'>No University found</span></div><span class='MuiTouchRipple-root'></span></a><hr class='MuiDivider-root'>")}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(Z.a,{position:"static",children:[Object(b.jsx)(ee.a,{}),Object(b.jsx)(te.a,{children:n?Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(b.jsxs)(N.a,{style:{display:"flex",flexDirection:"row",alignItems:"center"},variant:"h6",className:e.logo,children:[Object(b.jsx)(ie.a,{onClick:function(){return window.location.replace("/home")},style:{color:"white",fontSize:20}}),"MyUniversity"]}),Object(b.jsxs)("div",{className:e.search2,children:[Object(b.jsx)("div",{className:e.searchIcon,children:Object(b.jsx)(ve.a,{})}),Object(b.jsx)(fe.a,{autoComplete:"off",onKeyDown:i,id:"search",placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}}),Object(b.jsx)("div",{id:"response",style:{zIndex:1,position:"absolute",marginTop:12,width:"100% ",minHeight:1},children:Object(b.jsx)(se.a,{component:"nav",id:"result",style:{backgroundColor:"#F9F9F9"}})})]})]}),Object(b.jsx)(xe,{})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ie.a,{onClick:function(){return window.location.replace("/home")},style:{color:"white",fontSize:40}}),Object(b.jsx)(N.a,{onClick:function(){return window.location.replace("/home")},variant:"h4",className:e.logo,children:"MyUniversity"}),Object(b.jsx)("div",{className:e.navlinks,children:Object(b.jsx)(s.b,{to:"/home",className:e.link,children:"Home"})}),Object(b.jsxs)("div",{className:e.search,children:[Object(b.jsx)("div",{className:e.searchIcon,children:Object(b.jsx)(ve.a,{})}),Object(b.jsx)(fe.a,{autoComplete:"off",onKeyDown:i,id:"search",placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}}),Object(b.jsx)("div",{id:"response",style:{zIndex:1,position:"absolute",marginTop:16,width:"100% "},children:Object(b.jsx)(se.a,{component:"nav",id:"result",style:{backgroundColor:"#F9F9F9"}})})]})]})})]}),Object(b.jsx)("br",{})]})}var Le=n(736),Ne=n(733),Te=n(730),Ce=n(731),Ie=n(732),Ee=n(338),Se=n.n(Ee),ke=n(725),Ue=n(724),Me=n(330),Re=n.n(Me),Fe=n(331),Pe=n.n(Fe),De=n(332),Be=n.n(De);function _e(e){var t=e.univ;return Object(b.jsx)(h.a,{style:{borderRadius:"10px",marginTop:5,backgroundColor:"white",minHeight:200},children:Object(b.jsxs)(V.g,{children:[Object(b.jsxs)("div",{className:"col-md-6 ",style:{height:"auto",wordWrap:"break-word",marginTop:15},children:[Object(b.jsx)(N.a,{variant:"h5",children:"About:"}),Object(b.jsx)("p",{children:t.description})]}),Object(b.jsx)(Ue.a,{orientation:"vertical"}),Object(b.jsxs)(V.b,{md:5,children:[Object(b.jsxs)("div",{className:"row justify-content-center",style:{marginTop:15},children:[Object(b.jsxs)("div",{className:"col-md-5 ",style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(b.jsx)(ke.a,{color:"primary",style:{marginRight:"10px"}}),Object(b.jsx)(N.a,{variant:"h6",children:"Adress"})]}),Object(b.jsx)("div",{className:"col-md-7 ",style:{display:"flex",flexDirection:"row",alignItems:"center"},children:Object(b.jsx)(N.a,{children:t.Location})})]}),Object(b.jsxs)("div",{className:"row justify-content-center",children:[Object(b.jsxs)("div",{className:"col-md-5 ",style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(b.jsx)(Re.a,{color:"primary",style:{marginRight:"10px"}}),Object(b.jsx)(N.a,{variant:"h6",children:"Program"})]}),Object(b.jsx)("div",{className:"col-md-7 ",style:{display:"flex",flexDirection:"row",alignItems:"center"},children:Object(b.jsx)(N.a,{children:t.Program})})]}),Object(b.jsxs)("div",{className:"row justify-content-center",children:[Object(b.jsxs)("div",{className:"col-md-5 ",style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(b.jsx)(Pe.a,{color:"primary",style:{marginRight:"10px"}}),Object(b.jsx)(N.a,{variant:"h6",children:"Price"})]}),Object(b.jsx)("div",{className:"col-md-7 ",style:{display:"flex",flexDirection:"row",alignItems:"center"},children:Object(b.jsx)(N.a,{children:t.price})})]}),Object(b.jsxs)("div",{className:"row justify-content-center",children:[Object(b.jsxs)("div",{className:"col-md-5 ",style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(b.jsx)(Be.a,{color:"primary",style:{marginRight:"10px"}}),Object(b.jsx)(N.a,{variant:"h6",children:"Length(year)"})]}),Object(b.jsx)("div",{className:"col-md-7 ",style:{display:"flex",flexDirection:"row",alignItems:"center"},children:Object(b.jsx)(N.a,{children:t.length})})]})]})]})})}var Ae=n(726),qe=n(735),He=n(734),We=n(729),ze=n(653),Ve=n(79),Ge=n(341);function Ye(e){var t=e.univ;return Object(b.jsx)(g.a,{style:{justifyContent:"center",marginTop:5},children:Object(b.jsx)(Ve.c,{initialValues:{name:t.name,Program:t.Program,Location:t.Location,price:t.price,length:t.length,description:t.description},validationSchema:Ge.a().shape({}),onSubmit:function(e){F.a.put("http://localhost:5000/universities/"+t._id,{name:e.name,Program:e.Program,Location:e.Location,price:parseInt(e.price,10),length:e.length,description:e.description}).then(alert("University updated Successfully")).then((function(){window.location.reload()}))},children:function(e){var t=e.values,n=e.errors,i=e.touched,r=e.handleChange,a=e.handleBlur,c=e.handleSubmit,s=e.isSubmitting,o=e.validateField;return Object(b.jsx)(Ve.b,{onSubmit:c,isSubmitting:s,validateField:o,errors:n,touched:i,children:Object(b.jsxs)(Ae.a,{container:!0,spacing:2,children:[Object(b.jsxs)(Ae.a,{item:!0,xs:12,md:3,children:[Object(b.jsx)(V.c,{}),Object(b.jsx)(N.a,{children:"University Name :"})]}),Object(b.jsx)(Ae.a,{item:!0,xs:12,md:9,children:Object(b.jsx)(Ve.a,{style:{width:"100%"},type:"text",name:"name",id:"name",onChange:r,initialValues:" ",onBlur:a,value:t.name,placeholder:" ",component:qe.a,error:!!n.name,helperText:n.name&&n.name})}),Object(b.jsx)(Ae.a,{item:!0,xs:12,md:12,children:Object(b.jsx)(Ue.a,{variant:"fullWidth"})}),Object(b.jsxs)(Ae.a,{item:!0,xs:12,md:3,children:[Object(b.jsx)(V.c,{}),Object(b.jsx)(N.a,{children:"Program :"})]}),Object(b.jsx)(Ae.a,{item:!0,xs:12,md:9,children:Object(b.jsx)(Ve.a,{style:{width:"100%"},type:"text",name:"Program",id:"Program",onChange:r,onBlur:a,value:t.Program,placeholder:" ",component:qe.a,error:!!n.Program,helperText:n.Program&&n.Program})}),Object(b.jsx)(Ae.a,{item:!0,xs:12,md:12,children:Object(b.jsx)(Ue.a,{variant:"fullWidth"})}),Object(b.jsxs)(Ae.a,{item:!0,xs:12,md:3,children:[Object(b.jsx)(V.c,{}),Object(b.jsx)(N.a,{children:"Location :"})]}),Object(b.jsx)(Ae.a,{item:!0,xs:12,md:9,children:Object(b.jsx)(Ve.a,{style:{width:"100%"},label:"Location",type:"text",name:"Location",id:"Location",onChange:r,onBlur:a,value:t.Location,placeholder:"Location",component:qe.a,error:!!n.Location,helperText:n.Location&&n.Location})}),Object(b.jsx)(Ae.a,{item:!0,xs:12,md:12,children:Object(b.jsx)(Ue.a,{variant:"fullWidth"})}),Object(b.jsxs)(Ae.a,{item:!0,xs:12,md:3,children:[Object(b.jsx)(V.c,{}),Object(b.jsx)(N.a,{children:"Price ($):"})]}),Object(b.jsx)(Ae.a,{item:!0,xs:12,md:9,children:Object(b.jsx)(Ve.a,{style:{width:"100%"},type:"text",name:"price",id:"price",onChange:r,onBlur:a,value:t.price,placeholder:" ",component:qe.a,error:!!n.Price,helperText:n.Price&&n.Price})}),Object(b.jsx)(Ae.a,{item:!0,xs:12,md:12,children:Object(b.jsx)(Ue.a,{variant:"fullWidth"})}),Object(b.jsxs)(Ae.a,{item:!0,xs:12,md:3,children:[Object(b.jsx)(V.c,{}),Object(b.jsx)(N.a,{children:"Length :"})]}),Object(b.jsx)(Ae.a,{item:!0,xs:12,md:9,children:Object(b.jsxs)(He.a,{label:"length",name:"length",id:"length",value:t.length,onChange:r,onBlur:a,children:[Object(b.jsx)(We.a,{value:"1",children:"1"}),Object(b.jsx)(We.a,{value:"2",children:"2"}),Object(b.jsx)(We.a,{value:"3",children:"3"}),Object(b.jsx)(We.a,{value:"4",children:"4"}),Object(b.jsx)(We.a,{value:"5",children:"5"}),Object(b.jsx)(We.a,{value:"6",children:"6"}),Object(b.jsx)(We.a,{value:"7",children:"7"}),Object(b.jsx)(We.a,{value:"8",children:"8"}),Object(b.jsx)(We.a,{value:"9",children:"9"}),Object(b.jsx)(We.a,{value:"10",children:"10"})]})}),Object(b.jsx)(Ae.a,{item:!0,xs:12,md:12,children:Object(b.jsx)(Ue.a,{variant:"fullWidth"})}),Object(b.jsx)(Ae.a,{item:!0,xs:12,md:12,children:Object(b.jsx)(Ue.a,{variant:"fullWidth"})}),Object(b.jsxs)(Ae.a,{item:!0,xs:12,md:3,children:[Object(b.jsx)(V.c,{}),Object(b.jsx)(N.a,{children:"Description :"})]}),Object(b.jsx)(Ae.a,{item:!0,xs:12,md:9,children:Object(b.jsx)(Ve.a,{style:{width:"100%"},label:"description",type:"textArea",name:"description",id:"description",onChange:r,onBlur:a,value:t.description,placeholder:"",component:ze.a,rows:"3",error:!!n.description,helperText:n.description&&n.description})}),Object(b.jsx)(Ae.a,{item:!0,xs:12,md:12,children:Object(b.jsx)(Ue.a,{variant:"fullWidth"})}),Object(b.jsx)(V.a,{type:"submit",variant:"contained",color:"primary",children:"Confirm"})]})})}})})}var Je=Object(O.a)({BottomNavigation:{borderRadius:4}});function Ke(e){var t=e.univ,n=e.putUniversity,a=Je(),c=r.a.useState(0),s=Object(u.a)(c,2),o=s[0],l=s[1],d=Object(i.useState)("1"),j=Object(u.a)(d,2),h=j[0],m=j[1],p=r.a.useState(!1),x=Object(u.a)(p,2),O=x[0];x[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(Te.a,{className:a.BottomNavigation,value:o,onChange:function(e,t){l(t)},showLabels:!0,children:[Object(b.jsx)(Ce.a,{onClick:function(){!1===O&&m("1")},label:"Overview",icon:Object(b.jsx)(Ie.a,{})}),Object(b.jsx)(Ce.a,{onClick:function(){!1===O&&m("2")},label:"Update",icon:Object(b.jsx)(Se.a,{})})]}),"1"==h?Object(b.jsx)(_e,{univ:t}):Object(b.jsx)(Ye,{univ:t,putUniversity:n})]})}var Qe=Object(O.a)((function(e){return{Paper:{minHeight:400,display:"flex"},Card:{minHeight:400,width:"30%"},Card2:{minHeight:600,width:"70%"},media:{height:250},rad:{borderRadius:20,width:e.spacing(15),height:e.spacing(15)}}}));function $e(e){var t=e.univ,r=e.putUniversity,a=Object(i.useState)(""),c=Object(u.a)(a,2),s=(c[0],c[1]),o=Object(i.useState)("none"),l=Object(u.a)(o,2),d=(l[0],l[1]),j=Object(i.useState)("a"),m=Object(u.a)(j,2),p=(m[0],m[1]),O=Object(i.useState)(null),v=Object(u.a)(O,2),f=(v[0],v[1]),C=Qe(),I=Object(T.g)();if(t){var E="http://localhost:5000/uploads/"+t.image;return Object(b.jsxs)(h.a,{maxWidth:"xl",style:{backgroundColor:"#f6f6f6"},children:[Object(b.jsxs)(Le.a,{separator:"\u203a","aria-label":"breadcrumb",children:[Object(b.jsx)(Ne.a,{color:"inherit",href:"/",onClick:function(e){e.preventDefault(),I.push("/home")},children:"Home"}),Object(b.jsx)(N.a,{color:"textPrimary",children:"Details"})]}),Object(b.jsxs)(g.a,{elevation:1,style:{borderTopRightRadius:"15px",borderTopLeftRadius:"15px",marginTop:"15px"},children:[Object(b.jsx)(w.a,{className:C.media,image:E,onClick:function(){return p(E),void d("")},style:{maxHeight:"100%",maxWidth:"100%",cursor:"pointer"}}),Object(b.jsx)("input",{accept:"image/*",style:{display:"none"},id:"raised-button-file",multiple:!0,type:"file",encType:"multipart/form-data",onChange:function(e){f(e.target.files[0]),s(e.target.files[0].name),console.log(e.target.files);var i=new FormData;i.append("file",e.target.files[0]);var r=n(538).generate();console.log(e.target.files[0]),F.a.post("http://localhost:5000/upload/"+r,i,{});var a=r+"-"+e.target.files[0].name;console.log(a),F.a.put("http://localhost:5000/universities/cover/"+t._id,{image:a}).then((function(e){return console.log(e.data),e.data})).then(window.location.reload())}}),Object(b.jsx)("label",{htmlFor:"raised-button-file",children:Object(b.jsx)(L.a,{style:{backgroundColor:"black",color:"white",opacity:.5},component:"span",children:"Update Picture"})}),Object(b.jsx)(y.a,{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:Object(b.jsx)(N.a,{variant:"h4",children:t.name})})]}),Object(b.jsx)(Ue.a,{variant:"middle"}),Object(b.jsx)(Ke,{univ:t,putUniversity:r})]})}return Object(b.jsx)(x,{})}var Xe=n(63),Ze=n(131),et=n.n(Ze),tt=n(213),nt="GET_UNIVERSITIES_REQUEST",it="GET_UNIVERSITIES_SUCCESS",rt="GET_UNIVERSITIES_FAIL",at="GET_UNIVERSITY_DETAILS_REQUEST",ct="GET_UNIVERSITY_DETAILS_SUCCESS",st="GET_UNIVERSITY_DETAILS_FAIL",ot="GET_UNIVERSITY_DETAILS_RESET",lt="ADD_UNIVERSITY",dt=function(e){return{type:lt,payload:e}},jt=n(156),ut=n(314),ht=(n(645),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.getUniversities()}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(we,{}),Object(b.jsx)(jt.a,{children:Object(b.jsx)(ut.a,{classNames:"page",timeout:300,children:Object(b.jsxs)(T.d,{location:this.props.location,children:[Object(b.jsx)(T.b,{path:"/home",component:function(){return Object(b.jsx)(K,{univ:e.props.universities.universities,loading:e.props.universities.loading,err:e.props.universities.error,postUniversity:e.props.postUniversity,resetAddUnivForm:e.props.resetAddUnivForm})}}),Object(b.jsx)(T.b,{path:"/university/:id",component:function(t){var n=t.match;return Object(b.jsx)($e,{univ:e.props.universities.universities.filter((function(e){return e._id===n.params.id}))[0],loading:e.props.universities.loading,err:e.props.universities.error,putUniversity:e.props.putUniversity})}}),Object(b.jsx)(T.a,{to:"/home"})]})},this.props.location.key)})]})}}]),n}(i.Component)),mt=Object(T.h)(Object(Xe.connect)((function(e){return{universities:e.universities}}),(function(e){return{resetAddUnivForm:function(){e(G.actions.reset("AddUniv"))},postUniversity:function(t,n,i,r,a,c){return e(function(e,t,n,i,r,a){return function(c){var s={name:e,Program:t,Location:n,length:i,price:r,description:a};return fetch("http://localhost:5000/universities/",{method:"POST",body:JSON.stringify(s),headers:{"Content-type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return c(dt(e))})).catch((function(e){console.log("Post university",e.message)}))}}(t,n,i,r,a,c))},getUniversities:function(){return e(function(){var e=Object(tt.a)(et.a.mark((function e(t){var n,i;return et.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:nt}),e.next=4,F.a.get("http://localhost:5000/universities/");case 4:n=e.sent,i=n.data,t({type:it,payload:i}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:rt,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())},putUniversity:function(t,n,i,r,a,c,s){return e(function(e,t,n,i,r,a,c){return function(s){var o={name:t,Program:n,Location:i,length:r,price:a,description:c};return fetch("http://localhost:5000/universities/".concat(e),{method:"PUT",body:JSON.stringify(o),headers:{"Content-type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return alert("University updated successfuly!"),e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return s(dt(e))})).catch((function(e){console.log("put university",e.message),alert("University could not be modified\nError"+e.message)}))}}(t,n,i,r,a,c,s))}}}))(ht)),pt=n(73),bt=n(340),xt=n(339),Ot=Object(pt.combineReducers)(Object(re.a)({universities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{universities:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case nt:return{loading:!0,universities:[]};case it:return{universities:t.payload,loading:!1};case rt:return{loading:!1,error:t.payload};default:return e}},universityDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{university:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case at:return{loading:!0};case ct:return{loading:!1,university:t.payload};case st:return{loading:!1,error:t.payload};case ot:return{university:{}};default:return e}}},Object(G.createForms)({AddUniv:{name:"",Program:"",location:"",length:"",price:"",description:""}}))),gt=[bt.a],vt=Object(pt.createStore)(Ot,{},Object(xt.composeWithDevTools)(pt.applyMiddleware.apply(void 0,gt)));n(646);var ft=function(){return Object(b.jsx)(Xe.Provider,{store:vt,children:Object(b.jsx)(s.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(mt,{})})})})};n(647);c.a.render(Object(b.jsx)(ft,{}),document.getElementById("root"))}},[[648,1,2]]]);
//# sourceMappingURL=main.78e489da.chunk.js.map