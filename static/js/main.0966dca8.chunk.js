(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__2XGjH",contact__container:"ContactList_contact__container__1KLnI"}},23:function(t,e,n){t.exports={filter_input:"Filter_filter_input__17q8H",filter_label:"Filter_filter_label__22KHF"}},46:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),u=n(6),i=(n(46),n(4)),s=n(12),b=n(13),l=n(16),f=n(15),j=n(22),d=n.n(j),m=n(34),h=n(9),O=n.n(h),p=n(69),_=n(2),C=Object(_.b)("contacts/fetchContactsRequest"),v=Object(_.b)("contacts/fetchContactsSuccess"),x=Object(_.b)("contacts/fetchContactsError"),g=Object(_.b)("contacts/addContactRequest"),y=Object(_.b)("contacts/addContactSuccess"),I=Object(_.b)("contacts/addContactError"),N=Object(_.b)("contacts/deleteContactRequest"),w=Object(_.b)("contacts/deleteContactSuccess"),k=Object(_.b)("contacts/deleteContactError"),A=Object(_.b)("contacts/changeFilter");O.a.defaults.baseURL="http://localhost:3001";var F=n(11),S=function(t){return t.contacts.filter},L=function(t){return t.contacts.items},z=Object(F.a)([L,S],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),q=n(8),B=n.n(q),Z=n(1),D=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.nameInputId=Object(p.a)(),t.numberInputId=Object(p.a)(),t.handleChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(i.a)({},c,a))},t.createContact=function(){var e=t.state,n=e.name,c=e.number,a=t.props,r=a.onSubmit,o=a.items,u=o.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})),i=o.find((function(t){return t.number===c}));u||i?alert("".concat(n," or ").concat(c," is already in contacts")):r(n,c)},t.handleSubmit=function(e){e.preventDefault(),t.createContact(),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(Z.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(Z.jsxs)("label",{className:B.a.form_label,htmlFor:this.nameInputId,children:["Name",Object(Z.jsx)("input",{className:B.a.form_input,type:"text",name:"name",id:this.nameInputId,value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(Z.jsxs)("label",{htmlFor:this.numberInputId,className:B.a.form_label,children:["Number",Object(Z.jsx)("input",{className:B.a.form_input,type:"text",id:this.numberInputId,name:"number",value:this.state.number,onChange:this.handleChange,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12  \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(Z.jsx)("button",{type:"submit",className:B.a.addButton,children:"Add contact"})]})}}]),n}(c.Component),H=Object(u.b)((function(t){return{items:L(t)}}),(function(t){return{onSubmit:function(e,n){return t(function(t,e){return function(n){var c={id:Object(p.a)(),name:t,number:e};n(g()),O.a.post("/contacts",c).then((function(t){var e=t.data;return n(y(e))})).catch((function(t){return n(I(t))}))}}(e,n))}}}))(D),M=n(23),R=n.n(M),E=function(t){var e=t.value,n=t.onChange;return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)("label",{className:R.a.filter_label,children:["Filter",Object(Z.jsx)("input",{className:R.a.filter_input,value:e,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:n})]})})};E.defaultProps={value:""};var J,P,K=Object(u.b)((function(t){return{value:S(t)}}),(function(t){return{onChange:function(e){return t(A(e.target.value))}}}))(E),$=n(17),G=n.n($),T=function(t){Object(l.a)(n,t);var e=Object(f.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.onDeleteContact;return e.length>0&&Object(Z.jsx)("ul",{className:G.a.users,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(Z.jsxs)("li",{className:G.a.contact_list,children:[Object(Z.jsxs)("p",{children:[c," : ",a]}),Object(Z.jsx)("button",{className:G.a.removeContactButton,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})}}]),n}(c.Component),U=Object(u.b)((function(t){return{contacts:z(t)}}),(function(t){return{onDeleteContact:function(e){return t(function(t){return function(e){e(N()),O.a.delete("/contacts/".concat(t)).then((function(){return e(w(t))})).catch((function(t){return e(k(t))}))}}(e))},fetchContacts:function(){return t(function(){var t=Object(m.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(C()),O.a.get("/contacts").then((function(t){var n=t.data;return e(v(n))})).catch((function(t){return e(x(t))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}}))(T),X=(n(67),function(){return Object(Z.jsxs)("div",{className:"container",children:[Object(Z.jsx)("h1",{className:"phonebookHeader",children:"Phonebook"}),Object(Z.jsx)(H,{}),Object(Z.jsx)("h2",{className:"contactsHeader",children:"Contacts"}),Object(Z.jsx)(K,{}),Object(Z.jsx)(U,{})]})}),Q=n(14),V=n(35),W=n.n(V),Y=n(7),tt=n(3),et=Object(_.c)([],(J={},Object(i.a)(J,v,(function(t,e){return e.payload})),Object(i.a)(J,y,(function(t,e){var n=e.payload;return[].concat(Object(Q.a)(t),[n])})),Object(i.a)(J,w,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),J)),nt=Object(_.c)(!1,(P={},Object(i.a)(P,C,(function(){return!0})),Object(i.a)(P,v,(function(){return!1})),Object(i.a)(P,x,(function(){return!1})),Object(i.a)(P,g,(function(){return!0})),Object(i.a)(P,y,(function(){return!1})),Object(i.a)(P,I,(function(){return!1})),Object(i.a)(P,N,(function(){return!0})),Object(i.a)(P,w,(function(){return!1})),Object(i.a)(P,k,(function(){return!1})),P)),ct=Object(_.c)("",Object(i.a)({},A,(function(t,e){return e.payload}))),at=Object(_.c)(null,{}),rt=Object(tt.c)({items:et,filter:ct,loading:nt,error:at}),ot=[].concat(Object(Q.a)(Object(_.d)({serializableCheck:{ignoredActions:[Y.a,Y.f,Y.b,Y.c,Y.d,Y.e]}})),[W.a]),ut=Object(_.a)({reducer:{contacts:rt},middleware:ot});o.a.render(Object(Z.jsx)(a.a.StrictMode,{children:Object(Z.jsx)(u.a,{store:ut,children:Object(Z.jsx)(X,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form_input:"ContactForm_form_input__P-nIf",form_label:"ContactForm_form_label__1iLJM",addButton:"ContactForm_addButton__2nRwM"}}},[[68,1,2]]]);
//# sourceMappingURL=main.0966dca8.chunk.js.map