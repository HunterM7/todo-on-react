(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={home:"Home_home__qRKAn",container:"Home_container__3z2zh",home__title:"Home_home__title__3MLdl",home__wrapper:"Home_home__wrapper__2jJ--",home__list:"Home_home__list__2xSuN",home__bg:"Home_home__bg__2yWwP",home__item:"Home_home__item__3XPC0",home__input:"Home_home__input__2vOwo"}},10:function(e,t,a){e.exports={btn:"RemoveItem_btn__3pqza"}},11:function(e,t,a){e.exports=a(34)},20:function(e,t,a){},22:function(e,t,a){},3:function(e,t,a){e.exports={card:"ToDoItem_card__qS6an",card__check:"ToDoItem_card__check__2LiYt",card__text:"ToDoItem_card__text__3TvcP"}},34:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),_=a.n(c),r=(a(20),a(22),a(2)),i=a(5),m=a(1),l=a.n(m),d=[{_id:1,text:"Finish the essay collaboration",isCompleted:!1},{_id:2,text:"\u0420\u0435\u0448\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441 \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0441\u0442\u0440\u043e\u043a\u0438",isCompleted:!1},{_id:3,text:"\u0423\u0431\u0440\u0430\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0443\u0441\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438",isCompleted:!1},{_id:4,text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0443, \u043a\u043e\u0433\u0434\u0430 \u043d\u0435\u0442 \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0434\u0435\u043b\u0430",isCompleted:!1},{_id:5,text:"\u0420\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0441 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0435\u0439",isCompleted:!1},{_id:6,text:"\u0410\u043d\u0438\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438",isCompleted:!1},{_id:7,text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0433\u0440\u0430\u0434\u0438\u0435\u043d\u0442 \u043d\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u0430\u0445 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0441 \u0434\u0435\u043b\u0430\u043c\u0438",isCompleted:!0}];window.state=d;var s=d,u=a(3),p=a.n(u),h=a(6),v=a.n(h),x=function(e){var t=e.isCompleted?"active":"";return o.a.createElement("div",{className:"\n\t\t\t".concat(v.a.checkbox,"\n\t\t\t").concat(v.a[t],"\n\t\t")},o.a.createElement("div",{className:v.a.mark}))},E=a(7),b=a.n(E),f=function(e){var t=e.isCompleted,a=e.text,n=t?"done":"active";return o.a.createElement("p",{className:"\n\t\t\t".concat(b.a.text,"\n\t\t\t").concat(b.a[n],"\n\t\t")},a)},C=a(10),N=a.n(C),k=function(e){var t=e.id,a=e.removeTodo;return o.a.createElement("button",{className:N.a.btn,onClick:function(e){return a(e,t)}})},T=function(e){var t=e.todo,a=e.changeTodo,n=e.removeTodo;return o.a.createElement("div",{className:p.a.card,onClick:function(e){return a(e,t._id)}},o.a.createElement("div",{className:p.a.card__check},o.a.createElement(x,{isCompleted:t.isCompleted})),o.a.createElement("div",{className:p.a.card__text},o.a.createElement(f,{text:t.text,isCompleted:t.isCompleted})),o.a.createElement("div",{className:p.a.card__remove},o.a.createElement(k,{id:t._id,removeTodo:n})))},g=a(4),w=a.n(g),j=function(e){var t=e.todo,a=e.setTodo,c=Object(n.useState)(""),_=Object(i.a)(c,2),m=_[0],l=_[1],d=function(e){a([{_id:"".concat(t.length+1),text:e,isCompleted:!1}].concat(Object(r.a)(t))),l("")};return o.a.createElement("div",{className:w.a.create},o.a.createElement("input",{type:"text",placeholder:"Add a task",className:w.a.create__input,value:m,onChange:function(e){return l(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&d(m)}}),o.a.createElement("button",{className:w.a.create__btn,onClick:function(){return d(m)}},o.a.createElement("div",{className:w.a.btn__bg})))},O=function(){var e=Object(n.useState)(s),t=Object(i.a)(e,2),a=t[0],c=t[1],_=function(e,t){var n=Object(r.a)(a),o=n.find(function(e){return e._id===t});o.isCompleted=!o.isCompleted,c(n)},m=function(e,t){e.stopPropagation(),c(Object(r.a)(a).filter(function(e){return e._id!==t}))},d=a.map(function(e){return o.a.createElement("li",{key:e._id,className:l.a.home__item},o.a.createElement(T,{todo:e,changeTodo:_,removeTodo:m}))});return o.a.createElement("div",{className:l.a.home},o.a.createElement("div",{className:"\n\t\t\t\tcontainer\n\t\t\t\t".concat(l.a.container,"\n\t\t\t")},o.a.createElement("h1",{className:l.a.home__title},"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"),o.a.createElement("div",{className:l.a.home__wrapper},o.a.createElement("ul",{className:l.a.home__list},d),o.a.createElement("div",{className:l.a.home__bg})),o.a.createElement("div",{className:l.a.home__input},o.a.createElement(j,{todo:a,setTodo:c}))))};var y=function(){return o.a.createElement("div",null,o.a.createElement(O,null))};_.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)))},4:function(e,t,a){e.exports={create:"CreateField_create__14uZR",create__input:"CreateField_create__input__2db6L",create__btn:"CreateField_create__btn__10JA4",btn__bg:"CreateField_btn__bg__1u4gN"}},6:function(e,t,a){e.exports={checkbox:"Check_checkbox__1y4E6",mark:"Check_mark__3aljP",active:"Check_active__AZdUS"}},7:function(e,t,a){e.exports={text:"ItemText_text__1hZzT",active:"ItemText_active__2OG0s",done:"ItemText_done__2hD2t"}}},[[11,2,1]]]);
//# sourceMappingURL=main.3bb8ac29.chunk.js.map